export default function ProjectsWindow() {
  return (
    <div className="min-h-[340px] bg-white text-[12px] font-mono border border-gray-400 flex flex-col">

      {/* NOTEPAD TITLE BAR */}
      <div className="bg-[#e6e6e6] border-b border-gray-400 px-3 py-1 text-[11px] text-gray-800">
    
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-6 leading-5 text-gray-900 overflow-y-auto">

        {/* PROJECT 01 */}
        <div>
          <a
            href="https://github.com/coder19-adu/portfolio19"
            target="_blank"
            rel="noopener noreferrer"
            className="
  font-bold
  text-[#0000EE]
  underline
  hover:text-[#551A8B]
"
          >
            [01] Windows XP Portfolio
          </a>

          <br />

          <span className="text-gray-600">
            React.js • Tailwind CSS • Framer Motion • Vite
          </span>

          <br />

          • Built an interactive portfolio inspired by the Windows XP desktop experience.
          <br />
          • Implemented draggable windows, taskbar navigation, and desktop interactions.
          <br />
          • Developed reusable React components and custom animations.
        </div>

        {/* PROJECT 02 */}
        <div>
          <a
            href="https://github.com/coder19-adu/ayvris"
            target="_blank"
            rel="noopener noreferrer"
            className="
  font-bold
  text-[#0000EE]
  underline
  hover:text-[#551A8B]
"
          >
            [02] E-Commerce Website (Ongoing)
          </a>

          <br />

          <span className="text-gray-600">
            React.js • Tailwind CSS • Framer Motion • JavaScript
          </span>

          <br />

          • Developing a creative clothing store with scrapbook-inspired visuals.
          <br />
          • Building responsive product layouts and interactive user experiences.
          <br />
          • Focusing on scalable frontend architecture and modern UI design.
        </div>

        {/* PROJECT 03 */}
        <div>
          <a
            href="https://github.com/coder19-adu/pomodoro"
            target="_blank"
            rel="noopener noreferrer"
            className="
  font-bold
  text-[#0000EE]
  underline
  hover:text-[#551A8B]
"
          >
            [03] Pomodoro Timer
          </a>

          <br />

          <span className="text-gray-600">
            HTML • CSS • JavaScript
          </span>

          <br />

          • Developed a productivity timer with start, pause, and reset functionality.
          <br />
          • Implemented timer logic and state management using JavaScript.
        </div>

      </div>
    </div>
  );
}