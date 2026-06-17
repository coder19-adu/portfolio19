export default function AboutWindow() {
  return (
    <div className="min-h-[320px] bg-[#ffffff] text-[12px] font-mono border border-gray-400 flex flex-col">

      {/* NOTEPAD HEADER (XP STYLE SIMULATION) */}
      <div className="bg-[#e6e6e6] border-b border-gray-400 px-3 py-1 text-gray-800 text-[11px]">
        
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-3 text-gray-900 leading-5">

        <div>
          👤 <b>Who I am</b><br />
          • Full stack developer with experience in using React, JavaScript, Tailwind CSS, UI<br />
          • Creative thinker who blends design and modern web development
        </div>

        <div>
          💻 <b>What I do</b><br />
          • Build responsive web apps using React.js,Tailwind CSS, Prompting<br />
          • Skilled in using AI tools and prompt engineering for coding assistance, debugging, and creative UI development
        </div>

        <div>
          🚀 <b>Current focus</b><br />
          • Linux, cloud computing fundamentals to improve full-stack and deployment skills<br />
          • Learning and Building AI based projects
        </div>

        <div>
          🎯 <b>Goal</b><br />
          • Internship in cloud / full-stack development<br />
          • Work on real-world scalable web applications
        </div>

        <div>
          ✨ <b>Extras</b><br />
          • Quick learner with a strong ability to adapt to new technologies and effectively use AI tools and prompting to improve development
        </div>

      </div>

    </div>
  );
}