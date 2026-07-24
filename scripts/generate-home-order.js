import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const text = fs.readFileSync(path.join(ROOT, 'src/data/portfolioData.ts'), 'utf8');

// Parse items from portfolioData.ts
const items = [];
const regex = /id:\s*['"]([^'"]+)['"][\s\S]*?category:\s*['"]([^'"]+)['"][\s\S]*?imageUrl:\s*['"]([^'"]+)['"]/g;
let m;
while ((m = regex.exec(text)) !== null) {
  items.push({ id: m[1], category: m[2], imageUrl: m[3] });
}

// 1. FILTER OUT logos, text cards, brand posters, and MASSAGE session photos
const homeCleanItems = items.filter(item => {
  const file = item.imageUrl.split('/').pop();
  const lowerFile = file.toLowerCase();
  const lowerId = item.id.toLowerCase();

  // Exclude massage / spa session photos as explicitly requested
  if (lowerId.includes('san07116') || lowerId.includes('san07328') || lowerId.includes('san07341')) return false;
  if (lowerFile.includes('masaje') || lowerFile.includes('spa')) return false;

  if (item.category === 'marcas') {
    if (file.startsWith('PIPO-')) return false;
    if (file.startsWith('venta instrumentos')) return false;
    if (file.startsWith('0-')) return false;
    if (lowerFile.includes('logo')) return false;
    if (lowerFile.includes('texto')) return false;
    if (file === 'RETOCADA.jpg') return false;
  }
  return true;
});

// 2. DEDUPLICATE PHOTO STEMS (Filter out duplicate URLs and near-identical burst/variant photos)
function getShotGroupKey(item) {
  const folder = item.imageUrl.split('/')[2];
  const filename = item.imageUrl.split('/').pop().split('?')[0];
  const name = path.parse(filename).name;

  let clean = name
    .replace(/[\s\-_]+copia.*$/i, '')
    .replace(/[\s\-_]+editar.*$/i, '')
    .replace(/[\s\-_]+editada.*$/i, '')
    .replace(/[\s\-_]+final.*$/i, '')
    .replace(/[\s\-_]+retocada.*$/i, '')
    .replace(/\s*\(\d+\)$/, '');

  clean = clean.replace(/\s+\d+$/, '');
  clean = clean.replace(/([a-z0-9]{2,})[\-_](\d)$/i, '$1');

  return `${folder}/${clean}`.toLowerCase();
}

const shotGroups = new Map();
homeCleanItems.forEach(item => {
  const key = getShotGroupKey(item);
  if (!shotGroups.has(key)) shotGroups.set(key, []);
  shotGroups.get(key).push(item);
});

// Pick the single best representative photo per shot group
const deduplicatedHomeItems = [];
for (const [, list] of shotGroups.entries()) {
  list.sort((a, b) => {
    const aBad = a.id.includes('copia') || a.imageUrl.includes('copia') || /[\s\-_]\d$/.test(a.id);
    const bBad = b.id.includes('copia') || b.imageUrl.includes('copia') || /[\s\-_]\d$/.test(b.id);
    if (aBad && !bBad) return 1;
    if (!aBad && bBad) return -1;
    return a.id.length - b.id.length;
  });
  deduplicatedHomeItems.push(list[0]);
}

console.log(`🧹 Deduplicated Home list: ${deduplicatedHomeItems.length} unique photos (massage session excluded).`);

// Helper to get session key for interleaving
function getSessionKey(item) {
  const file = item.imageUrl.split('/').pop();
  const base = file.split('.')[0].split(' ')[0].split('-')[0];
  return `${item.category}_${base}`;
}

// 3. SELECT TOP HERO PHOTOS (First rows: most visually impactful shots)
// Combination of:
// - Chicas hermosas / retratos y moda femenina deslumbrantes
// - Generales donde se vea majestuosidad (paisajes, arquitectura, bodas)
// - Detalle de objeto solo (jugo de uva, repostería, producto)
const heroCandidatesList = [
  'moda-07', 'marcas-SAN07743', 'bodas-01', 'retratos-SAN01109', 'marcas-SAN08125',
  'lifestyle-1-10', 'retratos-01-19', 'marcas-SAN07748', 'moda-05', 'marcas-SAN07890',
  'moda-06', 'bodas-020', 'marcas-SAN08077', 'retratos-01-21', 'marcas-SAN08167',
  'lifestyle-1-7', 'moda-030', 'marcas-SAN07757', 'moda-1-100', 'marcas-SAN08214',
  'retratos-01-26', 'bodas-SAN04496', 'marcas-SAN08324', 'moda-1-101', 'marcas-SAN07788',
  'lifestyle-1-27', 'retratos-SAN04522', 'marcas-SAN08085', 'moda-041', 'bodas-SAN04512',
  'retratos-P1032579', 'marcas-SAN08024', 'moda-025', 'lifestyle-SAN01065', 'marcas-SAN08073',
  'bodas-MG-5609', 'moda-038', 'marcas-3', 'retratos-GENETO', 'lifestyle-1-22'
];

const heroCleanSet = new Set();
const heroCleanList = [];

heroCandidatesList.forEach(candidateId => {
  const found = deduplicatedHomeItems.find(item => item.id === candidateId || item.id.endsWith(candidateId));
  if (found && !heroCleanSet.has(found.id)) {
    heroCleanSet.add(found.id);
    heroCleanList.push(found);
  }
});

// Fill up heroCleanList to 40 items with other unique items if needed
if (heroCleanList.length < 40) {
  for (const item of deduplicatedHomeItems) {
    if (!heroCleanSet.has(item.id)) {
      heroCleanSet.add(item.id);
      heroCleanList.push(item);
      if (heroCleanList.length >= 40) break;
    }
  }
}

// 4. INTERLEAVE REMAINING ITEMS
// Prevent adjacent photos of the same category or session
const remainingItems = deduplicatedHomeItems.filter(item => !heroCleanSet.has(item.id));

const sessionMap = new Map();
remainingItems.forEach(item => {
  const key = getSessionKey(item);
  if (!sessionMap.has(key)) sessionMap.set(key, []);
  sessionMap.get(key).push(item);
});

const interleavedRemaining = [];
let keys = Array.from(sessionMap.keys());

while (sessionMap.size > 0) {
  let addedInRound = false;
  keys = keys.sort(() => Math.random() - 0.5);

  for (const key of keys) {
    const list = sessionMap.get(key);
    if (list && list.length > 0) {
      const last = interleavedRemaining[interleavedRemaining.length - 1];
      const item = list[0];

      if (!last || (last.category !== item.category && getSessionKey(last) !== getSessionKey(item))) {
        interleavedRemaining.push(list.shift());
        addedInRound = true;
      }

      if (list.length === 0) {
        sessionMap.delete(key);
      }
    }
  }

  if (!addedInRound && sessionMap.size > 0) {
    const firstKey = sessionMap.keys().next().value;
    const list = sessionMap.get(firstKey);
    interleavedRemaining.push(list.shift());
    if (list.length === 0) sessionMap.delete(firstKey);
  }

  keys = Array.from(sessionMap.keys());
}

const finalHomeList = [...heroCleanList, ...interleavedRemaining];

console.log(`✅ Generated Home List with ${finalHomeList.length} items (Hero top: ${heroCleanList.length}, Remaining: ${interleavedRemaining.length})`);

// Export home list IDs to homeGalleryData.ts
const fileContent = `// AUTO-GENERATED by scripts/generate-home-order.js — DO NOT EDIT MANUALLY
export const HOME_GALLERY_IDS: string[] = ${JSON.stringify(finalHomeList.map(i => i.id), null, 2)};
`;

fs.writeFileSync(path.join(ROOT, 'src/data/homeGalleryData.ts'), fileContent, 'utf8');
console.log('✅ Wrote src/data/homeGalleryData.ts');
