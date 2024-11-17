const Projects = () => {
  return (
    <div className="flex flex-row w-full h-full lg:h-72 text-gray-300 relative">
      <div className="flex-3 flex-col p-5 ">
        <h1 className="text-xl font-bold pb-2">Highlighted Projects</h1>
        <h2 className="text-lg font-semibold">
          <a
            href="https://github.com/jminlee24/minecraft_webgpu"
            target="_blank"
          >
            WebGPU Minecraft Clone (WIP)
          </a>
        </h2>
        <p className="py-1">
          Currently, I'm creating a voxel game from scratch similar to minecraft
          using WebGPU and Typescript. Hoping to learn WebGPU and graphics
          programming fundamentals.
        </p>
        <h2 className="text-lg font-semibold pt-1">
          <a
            href="https://github.com/jminlee24/contrastMaximization"
            target="_blank"
          >
            Contrast Maximization Algorithm
          </a>
        </h2>
        <p className="py-1">
          Recently, I implemented a contrast maximization algorithm to analyze
          star data from event cameras using Python.
        </p>
      </div>
    </div>
  );
};

export default Projects;
