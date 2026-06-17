export default function BootScreen() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center text-white">

      <h1 className="text-3xl font-bold mb-8">
        Microsoft Windows XP
      </h1>

      <div className="w-64 h-5 border border-gray-400 overflow-hidden">
        <div className="h-full w-full bg-blue-500 animate-pulse" />
      </div>

      <p className="mt-6 text-sm">
        Loading Portfolio...
      </p>

    </div>
  );
}