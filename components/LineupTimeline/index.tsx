import React from 'react';


interface LineupData {
  date: string;
  artists: ArtistInfo[];
}

interface ArtistInfo {  
  name: string;
  time: string;
}

const LineupTimeline: React.FC<{ data: LineupData[] }> = ({ data }) => {
  return (
    <div className="w-full px-4 md:px-8">
      {/* Desktop: Side by side */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((day, dayIdx) => (
          <div key={dayIdx} className="relative min-h-[500px]">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"></div>
            
            {/* Date badge */}
            <div className="relative z-10 bg-primary text-white font-bold text-2xl py-3 px-6 mx-auto w-fit mb-8 border-4 border-white shadow-lg">
              {day.date}
            </div>

            {/* Artists */}
            <div className="space-y-8">
              {day.artists.map((artist, idx) => (
                <div key={idx} className="relative flex items-center min-h-[60px]">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 z-10 border-2 border-white shadow-md"></div>
                  
                  {/* Artist info */}
                  <div className="w-1/2 pr-6 text-right">
                    <div className="text-black dark:text-white font-bold text-base md:text-lg uppercase tracking-tight leading-tight">
                      {artist.name}
                    </div>
                  </div>
                  
                  {/* Time */}
                  <div className="w-1/2 pl-6 text-left">
                    <div className="text-black dark:text-white font-semibold text-sm md:text-base">
                      {artist.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet: Continuous timeline */}
      <div className="lg:hidden max-w-2xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600"></div>
        
        {data.map((day, dayIdx) => (
          <div key={dayIdx} className="relative mb-12 pb-8">
            {/* Date badge */}
            <div className="relative z-10 bg-primary text-white font-bold text-2xl py-3 px-6 mx-auto w-fit mb-8 border-4 border-white shadow-lg">
              {day.date}
            </div>

            {/* Artists */}
            <div className="space-y-8">
              {day.artists.map((artist, idx) => (
                <div key={idx} className="relative min-h-[60px]">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 z-10 border-2 border-white shadow-md"></div>
                  
                  {/* Artist info - alternating sides on mobile */}
                  {idx % 2 === 0 ? (
                    <>
                      <div className="pr-10 text-right w-1/2">
                        <div className="text-black dark:text-white font-extrabold text-base md:text-lg uppercase tracking-tight leading-tight">
                          {artist.name}
                        </div>
                      </div>
                      <div className="absolute right-0 top-0 pl-10 text-left w-1/2">
                        <div className="text-black dark:text-white font-semibold text-sm md:text-base">
                          {artist.time}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="pl-10 text-left w-1/2 ml-auto">
                        <div className="text-black dark:text-white font-extrabold text-base md:text-lg uppercase tracking-tight leading-tight">
                          {artist.name}
                        </div>
                      </div>
                      <div className="absolute left-0 top-0 pr-10 text-right w-1/2">
                        <div className="text-black dark:text-white font-semibold text-sm md:text-base">
                          {artist.time}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineupTimeline;