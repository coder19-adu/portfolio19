export default function SkillsWindow() {
  return (
    <div className="min-h-[320px] bg-white text-[12px] font-mono border border-gray-400 flex flex-col">

      {/* NOTEPAD TITLE BAR */}
      <div className="bg-[#e6e6e6] border-b border-gray-400 px-3 py-1 text-[11px] text-gray-800">
        
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-4 leading-5 text-gray-900">

        <div>
          <b>Languages</b><br />
          C, C++, Java, Python (Basics)
        </div>

        <div>
          <b>Web Technologies</b><br />
          HTML, CSS, JavaScript, React.js, Tailwind CSS
        </div>

        <div>
          <b>Tools</b><br />
          Git, GitHub, VS Code, Canva
        </div>

        <div>
          <b>Operating Systems</b><br />
          Windows, Linux (WSL Basics)
        </div>

        <div>
          <b>Core Concepts</b><br />
          Data Structures, OOPs, Operating Systems, Computer Networks, DBMS (Basics), SQL Queries
        </div>

        <div>
          <b>Creative & Digital Skills</b><br />
          Prompt Engineering, Trend Research, Content Ideation
        </div>

      </div>
    </div>
  );
}