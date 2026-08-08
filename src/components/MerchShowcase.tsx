import React, { useState } from 'react';
import { ShoppingBag, X, ShieldCheck, Upload, CreditCard, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: 'prendas' | 'accesorios' | 'optica' | 'packaging';
  price: number; // in CHF
  unit: string;
  imageUrl: string;
  techniques: string[];
  description: string;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  minQuantity: number;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'p-1',
    name: 'Camiseta Heavyweight Cotton 240g',
    category: 'prendas',
    price: 35,
    unit: 'ud',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop',
    techniques: ['Estampado DTF HD', 'Vinilo de Corte Textil'],
    description: 'Algodón peinado 100% de alto gramaje (240g/m²). Corte boxy fit editorial, suavidad superior y resistencia a lavados.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro Carbón', hex: '#111111' },
      { name: 'Blanco Nieve', hex: '#FFFFFF' },
      { name: 'Crema Editorial', hex: '#F3EFE0' },
      { name: 'Gris Lavado', hex: '#4A4A4A' }
    ],
    minQuantity: 1
  },
  {
    id: 'p-2',
    name: 'Sudadera Oversized Hoodie 380g',
    category: 'prendas',
    price: 65,
    unit: 'ud',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop',
    techniques: ['DTF Full Color HD', 'Vinilo Flocado Terciopelo'],
    description: 'Felpa perchada de algodón orgánico de 380g/m². Capucha doble tejido con cordón plano y bolsillo canguro.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Negro Carbón', hex: '#111111' },
      { name: 'Crema Editorial', hex: '#F3EFE0' },
      { name: 'Verde Botánico', hex: '#2A3B2C' }
    ],
    minQuantity: 1
  },
  {
    id: 'p-3',
    name: 'Tote Bag Eco Cotton 300g "Laura"',
    category: 'accesorios',
    price: 18,
    unit: 'ud',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
    techniques: ['DTF HD Eco-Friendly', 'Vinilo de Corte Textil'],
    description: 'Lona de algodón 100% peinado de 300g/m². Asas reforzadas de 70cm, formato amplio y máxima durabilidad.',
    sizes: ['Única (38x42cm)'],
    colors: [
      { name: 'Crudo Natural', hex: '#EAE6DF' },
      { name: 'Negro Carbón', hex: '#111111' }
    ],
    minQuantity: 5
  },
  {
    id: 'p-4',
    name: 'Botella Inox & Termo Térmico 750ml',
    category: 'accesorios',
    price: 28,
    unit: 'ud',
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1000&auto=format&fit=crop',
    techniques: ['Grabado Láser', 'Vinilo Adherencia Térmica'],
    description: 'Acero inoxidable 18/8 de doble pared con aislamiento al vacío. Mantiene bebidas frías 24h y calientes 12h.',
    sizes: ['750ml'],
    colors: [
      { name: 'Negro Mate', hex: '#1C1C1C' },
      { name: 'Acero Cepillado', hex: '#C0C0C0' },
      { name: 'Blanco Nieve', hex: '#FFFFFF' }
    ],
    minQuantity: 1
  },
  {
    id: 'p-5',
    name: 'Gafas de Sol & Monturas de Autor',
    category: 'optica',
    price: 85,
    unit: 'ud',
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop',
    techniques: ['Grabado en Patilla', 'Diseño & Adaptación de Lente'],
    description: 'Acetato italiano de celulosa montado a mano. Lentes con filtro UV400 Categoría 3 y grabado personalizado.',
    sizes: ['Estándar Unisex'],
    colors: [
      { name: 'Carey Clásico', hex: '#4A2E16' },
      { name: 'Negro Azabache', hex: '#111111' },
      { name: 'Transparente Ámbar', hex: '#D4A359' }
    ],
    minQuantity: 1
  },
  {
    id: 'p-6',
    name: 'Caja Packaging & Presentación Premium',
    category: 'packaging',
    price: 22,
    unit: 'ud',
    imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1000&auto=format&fit=crop',
    techniques: ['Estampación en Oro/Plata', 'Impresión Offset HD'],
    description: 'Cartón rígido microcanal kraft con cierre magnético y maquetación personalizada para regalo o presentación.',
    sizes: ['Caja Mediana (30x20x10cm)', 'Caja Grande (40x30x12cm)'],
    colors: [
      { name: 'Negro Mate Premium', hex: '#111111' },
      { name: 'Kraft Natural', hex: '#D2B48C' }
    ],
    minQuantity: 10
  }
];

interface MerchShowcaseProps {
  onOpenBooking: (type?: string) => void;
  onOpenLegal?: (tab?: 'IMPRESSUM' | 'PRIVACY' | 'COOKIES') => void;
}

export const MerchShowcase: React.FC<MerchShowcaseProps> = ({ onOpenBooking, onOpenLegal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // CONFIGURATOR STATE IN MODAL
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedTechnique, setSelectedTechnique] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [customText, setCustomText] = useState<string>('');
  const [placement, setPlacement] = useState<string>('Pecho Izquierdo / Centrado');
  const [uploadedFileName, setUploadedFileName] = useState<string>('');

  // CHECKOUT MODAL STATE
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [paymentStep, setPaymentStep] = useState<'details' | 'success'>('details');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'St. Gallen',
    notes: ''
  });

  const filteredProducts = activeCategory === 'todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleOpenConfigurator = (product: ProductItem) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes ? product.sizes[0] : '');
    setSelectedColor(product.colors ? product.colors[0].name : '');
    setSelectedTechnique(product.techniques[0]);
    setQuantity(product.minQuantity);
    setCustomText('');
    setUploadedFileName('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const getTieredUnitPrice = (basePrice: number, qty: number) => {
    if (qty >= 100) return basePrice * 0.65; // 35% discount
    if (qty >= 50) return basePrice * 0.75; // 25% discount
    if (qty >= 20) return basePrice * 0.85; // 15% discount
    if (qty >= 10) return basePrice * 0.90; // 10% discount
    return basePrice;
  };

  const currentUnitPrice = selectedProduct ? getTieredUnitPrice(selectedProduct.price, quantity) : 0;
  const totalPrice = currentUnitPrice * quantity;

  const handleProceedToPayment = () => {
    setIsCheckoutOpen(true);
    setPaymentStep('details');
  };

  const handlePayOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep('success');
  };

  return (
    <section id="merch" className="pt-56 pb-24 bg-[#FAFAFC] w-full border-0 cursor-default">
      
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(165,148,249,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-12 lg:px-16 space-y-16 relative z-10">
        
        {/* HEADER & SHOP CATALOG TITLE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-bold">
              <ShoppingBag className="w-4 h-4" />
              <span>Catálogo Editorial de Personalización & Tienda</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F0F12] font-outfit tracking-tight leading-tight">
              Tienda de Merch & <br />
              <span className="font-editorial-italic font-normal text-3xl sm:text-5xl text-[#A594F9]">
                Personalizado a Medida
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-[#666670] font-light leading-relaxed">
              Selecciona tu prenda u objeto, personaliza la técnica de estampado (DTF HD, Vinilo, Grabado), configura tus tallas e inicia tu pedido o pago directo de muestras.
            </p>
          </div>

          {/* BULK DISCOUNTS BADGE */}
          <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-none space-y-1 text-left shrink-0">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-[#0F0F12]">
              <Sparkles className="w-4 h-4 text-[#A594F9]" />
              <span>Descuentos por Volumen</span>
            </div>
            <p className="text-[11px] font-sans text-gray-500 font-light">
              Hasta -35% de dto. en tiradas a partir de 10 unidades.
            </p>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center space-x-1 shrink-0 pr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Categorías:</span>
          </span>

          {[
            { id: 'todos', label: 'Todos los Artículos' },
            { id: 'prendas', label: 'Prendas Textil' },
            { id: 'accesorios', label: 'Accesorios & Termos' },
            { id: 'optica', label: 'Óptica de Autor' },
            { id: 'packaging', label: 'Packaging & Cajas' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer rounded-none border ${
                activeCategory === cat.id
                  ? 'bg-[#0F0F12] text-white border-[#0F0F12] shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-[#0F0F12]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SHOPPING CATALOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200/80 rounded-none overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* PRODUCT IMAGE CONTAINER */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-none"
                  />
                  
                  {/* CATEGORY & PRICE BADGE */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-sans font-bold text-white uppercase tracking-widest">
                    {product.category}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-[#0F0F12] font-outfit shadow-md">
                    CHF {product.price.toFixed(2)} <span className="text-[10px] font-normal text-gray-500">/{product.unit}</span>
                  </div>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-[#0F0F12] font-outfit group-hover:text-[#A594F9] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#666670] font-light leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* TECHNIQUES TAGS */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.techniques.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-gray-100 text-[#0F0F12] text-[10px] font-sans font-semibold uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenConfigurator(product)}
                  className="w-full py-3.5 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none flex items-center justify-center space-x-2 font-outfit shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Personalizar & Comprar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CUSTOM ORDER BUILDER BANNER FOR LARGE ORDERS */}
        <div className="p-8 sm:p-12 bg-white border border-gray-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-[#A594F9] uppercase tracking-widest block font-sans">
              ¿Necesitas tiradas corporativas grandes (+200 uds)?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0F12] font-outfit">
              Asesoría Técnica & Muestras de Producción
            </h3>
            <p className="text-xs text-gray-500 font-light max-w-xl">
              Diseñamos maquetas 3D sin compromiso y enviamos muestras físicas a tu estudio o empresa antes de iniciar la producción completa.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('Cotización Especial Merch (+200 uds)')}
            className="px-8 py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none shrink-0 flex items-center space-x-2 font-outfit shadow-md whitespace-nowrap"
          >
            <span>Pedir Presupuesto Corporativo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* INTERACTIVE PRODUCT CONFIGURATOR MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto cursor-default"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-gray-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 animate-in fade-in duration-200"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#0F0F12] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: PRODUCT IMAGE & SPECS */}
              <div className="lg:col-span-5 space-y-4">
                <div className="aspect-square w-full bg-gray-100 overflow-hidden relative">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {selectedProduct.category}
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-100 space-y-2">
                  <h4 className="text-xs font-bold text-[#0F0F12] font-outfit">Especificaciones de Producto</h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: CONFIGURATOR FORM */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="border-b border-gray-100 pb-4">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#A594F9] block">
                    Configurador de Personalización
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#0F0F12] font-outfit">
                    {selectedProduct.name}
                  </h2>
                </div>

                {/* TECHNIQUE SELECTOR */}
                <div className="space-y-2">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-600 block">
                    1. Técnica de Estampado / Grabado *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProduct.techniques.map((tech, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedTechnique(tech)}
                        className={`p-3 text-left border text-xs font-sans transition-all cursor-pointer ${
                          selectedTechnique === tech
                            ? 'border-[#A594F9] bg-[#A594F9]/10 font-bold text-[#0F0F12]'
                            : 'border-gray-200 text-gray-600 hover:border-gray-400'
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SIZES (IF APPLICABLE) */}
                {selectedProduct.sizes && (
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-600 block">
                      2. Talla / Dimensiones *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setSelectedSize(sz)}
                          className={`px-4 py-2 border text-xs font-sans font-bold transition-all cursor-pointer ${
                            selectedSize === sz
                              ? 'bg-[#0F0F12] text-white border-[#0F0F12]'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* COLORS (IF APPLICABLE) */}
                {selectedProduct.colors && (
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-600 block">
                      3. Color Base de la Prenda / Objeto *
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {selectedProduct.colors.map((col) => (
                        <button
                          key={col.name}
                          type="button"
                          onClick={() => setSelectedColor(col.name)}
                          className={`flex items-center space-x-2 px-3 py-1.5 border text-xs font-sans transition-all cursor-pointer ${
                            selectedColor === col.name
                              ? 'border-[#A594F9] bg-[#A594F9]/10 font-bold text-[#0F0F12]'
                              : 'border-gray-200 text-gray-600 hover:border-gray-400'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-gray-300 shadow-inner"
                            style={{ backgroundColor: col.hex }}
                          ></span>
                          <span>{col.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* CUSTOM TEXT / LOGO DETAILS & FILE UPLOAD */}
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-600 block">
                    4. Detalles de tu Logotipo o Diseño *
                  </label>

                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Texto de marca / Instrucciones de tu logo..."
                    className="w-full bg-white border border-gray-200 px-4 py-2.5 text-xs font-sans text-[#0F0F12] placeholder-gray-400 outline-none focus:border-[#A594F9]"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Ubicación del Estampado</span>
                      <select
                        value={placement}
                        onChange={(e) => setPlacement(e.target.value)}
                        className="w-full bg-white border border-gray-200 px-3 py-2 text-xs font-sans outline-none focus:border-[#A594F9]"
                      >
                        <option value="Pecho Izquierdo / Centrado">Pecho Izquierdo / Centrado</option>
                        <option value="Espalda Grande">Espalda Grande</option>
                        <option value="Pecho + Espalda (Doble)">Pecho + Espalda (Doble)</option>
                        <option value="Patilla / Lente">Patilla / Lente (Óptica)</option>
                      </select>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Subir Archivo de Logo (PNG/SVG/PDF)</span>
                      <label className="flex items-center justify-center space-x-2 border border-dashed border-gray-300 px-3 py-2 text-xs text-gray-600 hover:border-[#A594F9] cursor-pointer bg-gray-50">
                        <Upload className="w-3.5 h-3.5 text-[#A594F9]" />
                        <span className="truncate">{uploadedFileName || 'Adjuntar Logo Vectorial'}</span>
                        <input type="file" accept="image/*,.pdf,.svg,.ai" onChange={handleFileUpload} className="hidden" />
                      </label>
                    </div>
                  </div>
                </div>

                {/* QUANTITY & PRICING SUMMARY */}
                <div className="p-4 bg-gray-50 border border-gray-200 space-y-3 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Cantidad (Unidades):</span>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(selectedProduct.minQuantity, quantity - 1))}
                        className="w-8 h-8 bg-white border border-gray-300 text-sm font-bold flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min={selectedProduct.minQuantity}
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(selectedProduct.minQuantity, parseInt(e.target.value) || 1))}
                        className="w-14 text-center bg-white border border-gray-300 py-1 text-xs font-bold outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 bg-white border border-gray-300 text-sm font-bold flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs border-t border-gray-200 pt-2">
                    <span className="text-gray-500 font-light">Precio Unitario (con dto.):</span>
                    <span className="font-bold text-[#0F0F12]">CHF {currentUnitPrice.toFixed(2)} / ud</span>
                  </div>

                  <div className="flex items-center justify-between text-base font-bold font-outfit border-t border-gray-200 pt-2 text-[#0F0F12]">
                    <span>Total Estimado:</span>
                    <span className="text-[#A594F9] text-xl">CHF {totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                {/* PROCEED TO CHECKOUT BUTTON */}
                <button
                  type="button"
                  onClick={handleProceedToPayment}
                  className="w-full py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none flex items-center justify-center space-x-2 font-outfit shadow-xl"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Pagar / Iniciar Pedido de Personalizado</span>
                </button>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* CHECKOUT / DIRECT PAYMENT MODAL */}
      {isCheckoutOpen && selectedProduct && (
        <div
          onClick={() => setIsCheckoutOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto cursor-default"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-gray-200 max-w-xl w-full p-6 sm:p-10 shadow-2xl relative animate-in fade-in duration-200 space-y-6"
          >
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#0F0F12] cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {paymentStep === 'details' ? (
              <form onSubmit={handlePayOrder} className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#A594F9] uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pasarela Segura de Pago & Pedido</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0F0F12] font-outfit">
                    Resumen del Personalizado
                  </h3>
                </div>

                {/* SUMMARY OF CUSTOMIZATION */}
                <div className="p-4 bg-gray-50 border border-gray-200 space-y-1.5 text-xs font-sans text-gray-700">
                  <div className="flex justify-between font-bold text-[#0F0F12]">
                    <span>{selectedProduct.name} (x{quantity})</span>
                    <span>CHF {totalPrice.toFixed(2)}</span>
                  </div>
                  {selectedSize && <div>• Talla: <strong>{selectedSize}</strong></div>}
                  {selectedColor && <div>• Color Base: <strong>{selectedColor}</strong></div>}
                  <div>• Técnica: <strong>{selectedTechnique}</strong></div>
                  {customText && <div>• Texto/Marca: <strong>{customText}</strong></div>}
                  {uploadedFileName && <div>• Logo Adjunto: <strong>{uploadedFileName}</strong></div>}
                </div>

                {/* CUSTOMER INFORMATION FIELDS */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F0F12]">Datos de Envío & Facturación</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Nombre Completo / Empresa *"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full bg-white border border-gray-200 px-3 py-2.5 text-xs outline-none focus:border-[#A594F9]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email de Contacto *"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full bg-white border border-gray-200 px-3 py-2.5 text-xs outline-none focus:border-[#A594F9]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Teléfono / WhatsApp *"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full bg-white border border-gray-200 px-3 py-2.5 text-xs outline-none focus:border-[#A594F9]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Ciudad (Ej. St. Gallen) *"
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                      className="w-full bg-white border border-gray-200 px-3 py-2.5 text-xs outline-none focus:border-[#A594F9]"
                    />
                  </div>
                </div>

                {/* EXPRESS PAYMENT METHODS SIMULATION */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-bold text-gray-500 uppercase block tracking-widest">
                    Selecciona Método de Pago Directo:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 border border-gray-300 text-center font-bold text-xs cursor-pointer hover:border-[#A594F9] bg-gray-50">
                      TWINT (Suiza)
                    </div>
                    <div className="p-3 border border-gray-300 text-center font-bold text-xs cursor-pointer hover:border-[#A594F9] bg-gray-50">
                      Tarjeta de Crédito
                    </div>
                    <div className="p-3 border border-gray-300 text-center font-bold text-xs cursor-pointer hover:border-[#A594F9] bg-gray-50">
                      Apple Pay
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-xl"
                >
                  Confirmar Pago & Generar Maqueta (CHF {totalPrice.toFixed(2)})
                </button>

                <p className="text-[10px] text-gray-400 text-center font-sans">
                  Al confirmar el pago aceptas las{' '}
                  <button
                    type="button"
                    onClick={() => onOpenLegal && onOpenLegal('PRIVACY')}
                    className="underline hover:text-[#0F0F12] cursor-pointer"
                  >
                    condiciones de venta y aviso legal
                  </button>
                  .
                </p>
              </form>
            ) : (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-extrabold font-outfit text-[#0F0F12]">
                  ¡Pedido & Personalizado Registrado!
                </h3>

                <p className="text-xs text-gray-600 font-light leading-relaxed max-w-md mx-auto">
                  Hemos recibido tu pedido de <strong>{selectedProduct.name}</strong>. Te hemos enviado un email de confirmación a <strong>{customerInfo.email || 'tu correo'}</strong> y en menos de 12h recibirás la maqueta digital 3D de validación antes de entrar a producción.
                </p>

                <div className="p-3 bg-gray-50 border border-gray-200 text-xs font-mono text-gray-700">
                  Nº de Orden: #MAT-MERCH-2025-{Math.floor(1000 + Math.random() * 9000)}
                </div>

                <button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setSelectedProduct(null);
                  }}
                  className="px-8 py-3 bg-[#0F0F12] text-white font-bold text-xs uppercase tracking-widest cursor-pointer"
                >
                  Volver a la Tienda
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
