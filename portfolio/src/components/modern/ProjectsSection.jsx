
export default function ProjectsSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-[#C0EEF2] -mt-6 rounded-t-[2rem] p-6">
      <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
      <div className="w-full flex flex-wrap justify-center gap-8">
        <div className="w-[300px] bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-xl font-bold mb-2">Project Title</h3>
          <p className="text-gray-700 mb-4">Project description goes here.</p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
      </div>
    </section>
  );
}
