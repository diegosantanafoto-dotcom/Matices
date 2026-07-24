import { useState } from 'react';
import { VIDEO_SECTIONS } from '../data/videoData';
import type { VideoItem } from '../data/videoData';
import { Play, X } from 'lucide-react';

interface VideoGridProps {
  onOpenBooking: (type?: string) => void;
}

export const VideoGrid: React.FC<VideoGridProps> = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // HELPER TO CONVERT YOUTUBE URL TO AUTOPLAY WITH FULLSCREEN & SHARE CONTROLS
  const getCleanAutoplayEmbedUrl = (url: string) => {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}autoplay=1&controls=1&rel=0&playsinline=1`;
  };

  return (
    <section id="videos" className="pt-56 pb-20 bg-white w-full border-0 cursor-default">
      
      {/* BACKGROUND LENS FLARE */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(165,148,249,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-12 lg:px-16 space-y-16 relative z-10">
        
        {/* 2 ROWS OF 3 VIDEOS WITH EXTRA SPACING */}
        <div className="space-y-24">
          {VIDEO_SECTIONS.map((section) => (
            <div key={section.id} className="space-y-10">
              
              {/* 3 CINEMATIC VIDEOS GRID IN THIS ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                {section.videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className="group cursor-default space-y-3 border-0"
                  >
                    
                    {/* SHARP 0PX CORNER FRAMELESS VIDEO THUMBNAIL WITH TOP-RIGHT CATEGORY GLASS BADGE */}
                    <div className="aspect-[16/9] w-full relative overflow-hidden bg-black rounded-none shadow-sm group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500 border-0">
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-none border-0 cursor-default"
                      />
                      
                      {/* PLAY BUTTON OVERLAY */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-none bg-white/90 group-hover:bg-[#A594F9] text-[#0F0F12] group-hover:text-white flex items-center justify-center transition-all group-hover:scale-110 shadow-xl border-0">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </div>
                      </div>

                      {/* CATEGORY GLASS BADGE IN TOP RIGHT CORNER INSIDE THUMBNAIL */}
                      <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-none text-[10px] font-sans text-white uppercase tracking-widest font-semibold border-0 select-none">
                        <span>{video.category}</span>
                      </div>
                    </div>

                    {/* CLEAN MINIMAL DESCRIPTION TEXT BELOW */}
                    <div className="space-y-1.5 pt-1 border-0">
                      <h3 className="text-xl font-bold text-[#0F0F12] group-hover:text-[#A594F9] transition-colors font-outfit leading-snug cursor-default">
                        {video.title}
                      </h3>

                      <p className="text-xs text-[#666670] font-light leading-relaxed">
                        {video.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* PURE VIDEO MODAL (NO TEXT/INFO BARS, PURE VIDEO CENTERED, AUTOPLAY, CLICK OUTSIDE CLOSES) */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-50 bg-white/86 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300 cursor-default"
        >
          {/* TOP RIGHT CLOSE BUTTON */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 z-50 p-2 text-[#111111] hover:text-[#A594F9] transition-colors cursor-default focus:outline-none"
            aria-label="Cerrar vídeo"
          >
            <X className="w-7 h-7 stroke-[1.5]" />
          </button>

          {/* PURE 16:9 VIDEO CONTAINER WITHOUT TEXT BARS */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-[16/9] bg-black rounded-none shadow-2xl overflow-hidden border-0 cursor-default"
          >
            <iframe
              src={getCleanAutoplayEmbedUrl(selectedVideo.videoUrl)}
              title={selectedVideo.title}
              className="w-full h-full border-0 outline-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      )}

    </section>
  );
};
