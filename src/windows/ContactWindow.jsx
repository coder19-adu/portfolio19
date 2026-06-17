export default function ContactWindow() {
  return (
    <div className="min-h-[320px] bg-[#eaf3ff] text-[11px] font-sans border border-[#7aa7c7] flex flex-col">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#2b579a] to-[#5b9bd5] text-white px-3 py-2 flex items-center justify-between">

        <div className="flex items-center gap-2">
          {/* ONLINE STATUS DOT */}
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow"></div>
          <span className="font-semibold">Online</span>
        </div>

      </div>

      {/* PROFILE */}
      <div className="flex items-center gap-3 p-3 bg-white border-b border-[#c0d6e4]">

        <div className="w-12 h-12 bg-[#cfe8ff] border border-[#7aa7c7] flex items-center justify-center text-xs">
          HP
        </div>

        <div>
          <div className="font-bold text-black text-sm">
            Harshada Parakh
          </div>
          <div className="text-gray-600 text-[10px]">
            Available • Windows XP Mode
          </div>
        </div>

      </div>

      {/* STATUS TEXT */}
      <div className="px-3 py-2 text-gray-700 bg-[#f4f9ff] border-b border-[#c0d6e4]">
        “Coding in nostalgia mode ✨”
      </div>

      {/* CONTACT LINKS (DEPLOYMENT SAFE) */}
      <div className="flex flex-col gap-2 p-3 bg-[#eaf3ff]">

        <a
          href="https://github.com/coder19-adu"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#d6eaff] border border-[#7aa7c7] px-3 py-2 hover:bg-[#cfe8ff] active:scale-[0.98]"
        >
          🌐 GitHub
        </a>

        <a
          href="mailto:harshadaparakh1994@gmail.com"
          className="block bg-[#d6eaff] border border-[#7aa7c7] px-3 py-2 hover:bg-[#cfe8ff] active:scale-[0.98]"
        >
          ✉ Email
        </a>

      </div>

      {/* FOOTER */}
      <div className="mt-auto px-3 py-2 text-[10px] text-gray-600 border-t border-[#c0d6e4] bg-[#f7fbff]">
        Windows XP • MSN Messenger Simulation
      </div>

    </div>
  );
}