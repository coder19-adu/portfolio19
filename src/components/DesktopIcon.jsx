export default function DesktopIcon({
  icon,
  label,
  onClick,
  onDoubleClick,
  isSelected,
}) {
  return (
    <button
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={`
        flex flex-col items-center justify-center
        gap-2 p-3 rounded select-none
        w-28
        text-center
        transition
        ${
          isSelected
            ? "bg-blue-600/40 outline outline-1 outline-blue-300"
            : "hover:bg-white/10"
        }
      `}
    >
      <img
        src={icon}
        className="w-16 h-16 object-contain drop-shadow-md"
      />

      <span className="text-white text-sm drop-shadow-[1px_1px_0px_black]">
        {label}
      </span>
    </button>
  );
}