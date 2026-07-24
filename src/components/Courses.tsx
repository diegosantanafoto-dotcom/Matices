import React from 'react';
import { COURSES_DATA } from '../data/coursesData';
import { GraduationCap, Clock, Monitor, Award, CheckCircle2, ArrowRight, UserCheck, Sparkles } from 'lucide-react';

interface CoursesProps {
  onOpenBooking: (courseTitle: string) => void;
  lang: 'ES' | 'EN';
}

export const Courses: React.FC<CoursesProps> = ({ onOpenBooking }) => {
  return (
    <section id="cursos" className="py-24 bg-[#0B0B0C] relative border-t border-[#26262B]">
      
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(228,192,128,0.04),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141416] border border-[#26262B] text-xs font-mono text-[#E4C080]">
            <GraduationCap className="w-4 h-4" />
            <span>Formación Técnica & Mentoring de Alto Nivel</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-[#F4F4F5]">
            Programas "One-to-One" & Masterclasses
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1AA] font-light">
            Elevamos tus competencias técnicas y visión comercial. Formatos reducidos de plazas limitadas para garantizar aprendizaje intensivo y retroalimentación personalizada.
          </p>
        </div>

        {/* COURSES TECHNICAL CATALOG GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="group relative bg-[#141416] rounded-2xl border border-[#26262B] hover:border-[#E4C080]/60 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70"
            >
              
              {/* TOP BADGE & PRICING */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  {course.badge && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#E4C080]/10 text-[#E4C080] border border-[#E4C080]/30">
                      {course.badge}
                    </span>
                  )}
                  <span className="text-2xl font-serif-title font-bold text-[#F4F4F5] ml-auto">
                    {course.price}
                  </span>
                </div>

                <h3 className="text-2xl font-serif-title font-bold text-[#F4F4F5] group-hover:text-[#E4C080] transition-colors mb-2">
                  {course.title}
                </h3>
                <p className="text-xs font-mono text-[#A1A1AA] mb-4">
                  {course.subtitle}
                </p>

                <p className="text-xs text-[#A1A1AA] font-light leading-relaxed mb-6 border-b border-[#26262B] pb-6">
                  {course.description}
                </p>

                {/* TECHNICAL SPECIFICATIONS LIST */}
                <div className="space-y-3 mb-6 font-mono text-xs text-[#A1A1AA]">
                  <div className="flex items-center space-x-2.5">
                    <Monitor className="w-4 h-4 text-[#E4C080] shrink-0" />
                    <span><strong className="text-[#F4F4F5]">Formato:</strong> {course.format}</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-4 h-4 text-[#E4C080] shrink-0" />
                    <span><strong className="text-[#F4F4F5]">Duración:</strong> {course.duration}</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <Award className="w-4 h-4 text-[#E4C080] shrink-0" />
                    <span><strong className="text-[#F4F4F5]">Nivel:</strong> {course.level}</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <UserCheck className="w-4 h-4 text-[#E4C080] shrink-0" />
                    <span><strong className="text-[#F4F4F5]">Próxima Fecha:</strong> {course.nextDate}</span>
                  </div>
                </div>

                {/* CURRICULUM HIGHLIGHTS */}
                <div className="space-y-2 mb-8 bg-[#0B0B0C] p-4 rounded-xl border border-[#26262B]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E4C080] block mb-2 font-bold">
                    Temario Destacado:
                  </span>
                  {course.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-[11px] text-[#A1A1AA]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E4C080] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div>
                <button
                  onClick={() => onOpenBooking(`Curso: ${course.title}`)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#F4F4F5] hover:bg-[#E4C080] text-black font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center space-x-2 cursor-pointer group/btn"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Solicitar Plaza ({course.seatsLeft} Disponibles)</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
