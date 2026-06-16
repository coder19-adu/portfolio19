import { useState } from "react";

import Wallpaper from "../assets/wallpapers/xp-wallpaper.jpg";

import FolderIcon from "../assets/icons/folder.png";
import MusicIcon from "../assets/icons/music.png";
import RecycleIcon from "../assets/icons/recycle-bin.png";

import DesktopIcon from "./DesktopIcon";
import Taskbar from "./Taskbar";
import Window from "./Window";

import AboutWindow from "../windows/AboutWindow";
import ProjectsWindow from "../windows/ProjectsWindow";
import SkillsWindow from "../windows/SkillsWindow";
import ContactWindow from "../windows/ContactWindow";
import MusicWindow from "../windows/MusicWindow";

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const openWindow = (name) => {
    setOpenWindows((prev) =>
      prev.includes(name) ? prev : [...prev, name]
    );

    setMinimizedWindows((prev) =>
      prev.filter((w) => w !== name)
    );

    setActiveWindow(name);
  };

  const closeWindow = (name) => {
    setOpenWindows((prev) =>
      prev.filter((w) => w !== name)
    );

    setMinimizedWindows((prev) =>
      prev.filter((w) => w !== name)
    );

    setActiveWindow((prev) =>
      prev === name ? null : prev
    );
  };

  const minimizeWindow = (name) => {
    setMinimizedWindows((prev) =>
      prev.includes(name) ? prev : [...prev, name]
    );

    setActiveWindow((prev) =>
      prev === name ? null : prev
    );
  };

  const focusWindow = (name) => {
    setActiveWindow(name);

    setMinimizedWindows((prev) =>
      prev.filter((w) => w !== name)
    );
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Wallpaper */}
      <img
        src={Wallpaper}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Desktop Icons */}
      <div className="absolute top-5 left-4 z-10 grid gap-8">
        <DesktopIcon
          icon={FolderIcon}
          label="About Me"
          isSelected={selectedIcon === "about"}
          onClick={() => setSelectedIcon("about")}
          onDoubleClick={() => openWindow("about")}
        />

        <DesktopIcon
          icon={FolderIcon}
          label="Projects"
          isSelected={selectedIcon === "projects"}
          onClick={() => setSelectedIcon("projects")}
          onDoubleClick={() => openWindow("projects")}
        />

        <DesktopIcon
          icon={FolderIcon}
          label="Skills"
          isSelected={selectedIcon === "skills"}
          onClick={() => setSelectedIcon("skills")}
          onDoubleClick={() => openWindow("skills")}
        />

        <DesktopIcon
          icon={FolderIcon}
          label="Contact"
          isSelected={selectedIcon === "contact"}
          onClick={() => setSelectedIcon("contact")}
          onDoubleClick={() => openWindow("contact")}
        />

        <DesktopIcon
          icon={MusicIcon}
          label="Music"
          isSelected={selectedIcon === "music"}
          onClick={() => setSelectedIcon("music")}
          onDoubleClick={() => openWindow("music")}
        />

        <DesktopIcon
          icon={RecycleIcon}
          label="Recycle Bin"
        />
      </div>

      {/* WINDOWS */}
      {openWindows.includes("about") &&
        !minimizedWindows.includes("about") && (
          <Window
            title="About Me"
            isActive={activeWindow === "about"}
            onFocus={() => focusWindow("about")}
            onClose={() => closeWindow("about")}
            onMinimize={() => minimizeWindow("about")}
          >
            <AboutWindow />
          </Window>
        )}

      {openWindows.includes("projects") &&
        !minimizedWindows.includes("projects") && (
          <Window
            title="Projects"
            isActive={activeWindow === "projects"}
            onFocus={() => focusWindow("projects")}
            onClose={() => closeWindow("projects")}
            onMinimize={() => minimizeWindow("projects")}
          >
            <ProjectsWindow />
          </Window>
        )}

      {openWindows.includes("skills") &&
        !minimizedWindows.includes("skills") && (
          <Window
            title="Skills"
            isActive={activeWindow === "skills"}
            onFocus={() => focusWindow("skills")}
            onClose={() => closeWindow("skills")}
            onMinimize={() => minimizeWindow("skills")}
          >
            <SkillsWindow />
          </Window>
        )}

      {openWindows.includes("contact") &&
        !minimizedWindows.includes("contact") && (
          <Window
            title="Contact"
            isActive={activeWindow === "contact"}
            onFocus={() => focusWindow("contact")}
            onClose={() => closeWindow("contact")}
            onMinimize={() => minimizeWindow("contact")}
          >
            <ContactWindow />
          </Window>
        )}

      {openWindows.includes("music") &&
        !minimizedWindows.includes("music") && (
          <Window
            title="Winamp"
            isActive={activeWindow === "music"}
            onFocus={() => focusWindow("music")}
            onClose={() => closeWindow("music")}
            onMinimize={() => minimizeWindow("music")}
          >
            <MusicWindow />
          </Window>
        )}

      {/* TASKBAR */}
      <Taskbar
        windows={openWindows}
        minimizedWindows={minimizedWindows}
        activeWindow={activeWindow}
        onRestore={(name) => {
          setMinimizedWindows((prev) =>
            prev.filter((w) => w !== name)
          );
          setActiveWindow(name);
        }}
      />
    </div>
  );
}