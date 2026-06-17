import { useEffect, useState } from "react";
import WindowsLogo from "../assets/icons/windows-logo.png";

export default function Taskbar({
  windows = [],
  minimizedWindows = [],
  activeWindow,
  onRestore,
}) {
  const [time, setTime] = useState("");

  // Live clock (XP-style system tray clock)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-10 flex items-center px-2 gap-2 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border-t border-blue-300">
      
      {/* START BUTTON (XP STYLE) */}
      <button
        className="
          flex items-center gap-2
          bg-gradient-to-r from-green-600 to-green-500
          hover:from-green-500 hover:to-green-400
          active:scale-95
          transition
          text-white px-3 py-1 text-xs font-bold
          rounded-sm shadow-md
          border border-green-300
        "
      >
        <img
          src={WindowsLogo}
          alt="Windows"
          className="w-6 h-6 drop-shadow"
        />
        START
      </button>

      {/* OPEN WINDOWS (TASKBAR BUTTONS) */}
      <div className="flex gap-2 flex-1 overflow-x-auto">
        {windows.map((win) => {
          const isMinimized = minimizedWindows.includes(win);

          return (
            <button
              key={win}
              onClick={() => onRestore(win)}
              className={`
                px-3 py-1 text-white text-xs rounded-sm
                border border-blue-300/30
                transition
                ${
                  isMinimized
                    ? "bg-blue-700"
                    : "bg-blue-500"
                }
                ${
                  activeWindow === win
                    ? "border-white"
                    : ""
                }
              `}
            >
              {win.toUpperCase()}
            </button>
          );
        })}
      </div>

      <div className="flex items-center bg-blue-950/40 border border-blue-300/20 px-3 py-1 rounded-sm">
        <span className="text-white text-sm font-mono">
          {time}
        </span>
      </div>
    </div>
  );
}