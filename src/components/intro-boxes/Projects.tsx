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
      </div>
    </div>
  );
};

export default Projects;
