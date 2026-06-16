export default function ProjectsWindow() {
  const projects = [
    "Y2K Portfolio",
    "Clothing Brand Website",
    "Cloud File Uploader",
  ];

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">
        Projects
      </h2>

      <div className="space-y-2">
        {projects.map((project) => (
          <div
            key={project}
            className="
              cursor-pointer
              rounded
              p-2
              hover:bg-blue-100
            "
          >
            📁 {project}
          </div>
        ))}
      </div>
    </div>
  );
}