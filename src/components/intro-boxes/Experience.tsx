const Experience = () => {
  return (
    <div className="flex flex-col p-5 w-full h-full  text-gray-300 relative">
      <h1 className="text-xl font-bold pb-2">Experience</h1>
      <div className="flex flex-col">
        <h2 className="flex text-lg font-semibold">Web Developer </h2>
        <div className="flex flex-row justify-between py-3">
          <h3 className="text-base font-medium ">UMD</h3>
          <h3 className="text-base font-medium ">01/2024 - present</h3>
        </div>
        <p>
          Created a backend for a teaching website for UMD's genetics course to
          track student progress.
        </p>
      </div>
      <br></br>
      <div className="w-full h-[1px] bg-white"></div>
      <br></br>
      <div className="flex flex-col">
        <h2 className="flex text-lg font-semibold">
          Software Engineering Intern
        </h2>
        <div className="flex flex-row justify-between py-3">
          <h3 className="text-base font-medium ">BU Spark!</h3>
          <h3 className="text-base font-medium ">01/2023 - 05/2023</h3>
        </div>
        <p>
          Worked with a team of developers to created an interactive dashboard
          for the Boston District 7 City Council
        </p>
      </div>
    </div>
  );
};

export default Experience;
