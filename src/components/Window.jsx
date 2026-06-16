import { motion, useDragControls } from "framer-motion";

export default function Window({
  title,
  children,
  onClose,
  onMinimize,
  isActive,
  onFocus,
}) {
  const dragControls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      onMouseDown={onFocus}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.15 }}
      style={{
        position: "absolute",
        top: "20%",
        left: "25%",
        zIndex: isActive ? 999 : 10,
      }}
      className="shadow-2xl w-[500px]"
    >
      {/* TITLE BAR */}
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="flex items-center justify-between px-3 py-1 bg-gradient-to-r from-blue-700 to-blue-500 text-white cursor-move"
      >
        <span className="text-sm">{title}</span>

        <div className="flex gap-1">
          <button
            onClick={onMinimize}
            className="px-2 bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            _
          </button>

          <button
            onClick={onClose}
            className="px-2 bg-red-500 hover:bg-red-600"
          >
            X
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div
        onMouseDown={onFocus}
        className="bg-white min-h-[300px]"
      >
        {children}
      </div>
    </motion.div>
  );
}