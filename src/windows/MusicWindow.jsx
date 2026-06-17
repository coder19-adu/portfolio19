import { useEffect, useState } from "react";

export default function MusicWindow() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(18);

  const track = "ARE YOU BORED YET? - WALLOWS";

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 0;
        return p + 0.25;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div
      className="
        flex flex-col min-h-[340px]
        bg-[#1e1e1e]
        border border-gray-600
        shadow-xl
        text-xs
        text-white
        font-['Press_Start_2P']
      "
    >

      {/* HEADER */}
      <div className="flex justify-between px-2 py-2 bg-gradient-to-r from-gray-800 to-black border-b border-gray-700">
        <span className="text-gray-200">
          WINAMP
        </span>
        <span className="text-gray-400">
          2001
        </span>
      </div>

      {/* TRACK INFO */}
      <div className="px-2 py-3 bg-[#2a2a2a] border-b border-gray-700">
        <div className="text-white leading-5 break-words">
          {track}
        </div>
        <div className="text-gray-400 text-[9px] mt-1">
          44.1 kHz • Stereo • 128 kbps
        </div>
      </div>

      {/* DISPLAY AREA */}
      <div className="flex items-center justify-center h-24 bg-black border-b border-gray-800 text-gray-300">
        {isPlaying ? "▶ PLAYING" : "⏸ PAUSED"}
      </div>

      {/* PROGRESS BAR */}
      <div className="px-2 py-3">
        <div className="w-full h-2 bg-gray-700 border border-gray-500 overflow-hidden">
          <div
            className="h-2 bg-gray-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between mt-1 text-[9px] text-gray-400">
          <span>{Math.floor(progress)}%</span>
          <span>100%</span>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex gap-2 px-2 py-3 bg-[#2a2a2a] border-t border-gray-700">

        <button
          onClick={() => setIsPlaying(true)}
          className="px-2 py-1 bg-gray-700 border border-gray-500 active:scale-95"
        >
          PLAY
        </button>

        <button
          onClick={() => setIsPlaying(false)}
          className="px-2 py-1 bg-gray-700 border border-gray-500 active:scale-95"
        >
          PAUSE
        </button>

        <button
          onClick={() => {
            setProgress(0);
            setIsPlaying(false);
          }}
          className="px-2 py-1 bg-gray-700 border border-gray-500 active:scale-95"
        >
          STOP
        </button>
      </div>

      {/* PLAYLIST */}
      <div className="flex-1 px-2 py-3 bg-black border-t border-gray-700 text-gray-300 space-y-2">

        <div className="bg-gray-700 text-white px-1">
          ▶ 01 - ARE YOU BORED YET?
        </div>

        <div>02 - EDGE OF THE EARTH</div>
        <div>03 - PERFECT PLACES</div>
      </div>
    </div>
  );
}