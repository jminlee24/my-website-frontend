const AboutMe = () => {
  return (
    <div className="flex w-full h-full lg:h-72 text-gray-300 relative">
      <div className="flex flex-col w-full p-5">
        <h1 className="text-xl font-bold">About me!</h1>
        <p className="pt-1">
          Hi! I'm Josh and I'm a junior at the University of Maryland.
        </p>
        <br />
        <p>
          I love coding and mathematics, and hopefully I'll get to do this as a
          career in the near future. I always like learning new things and try
          to keep up to date with what projects are fresh!{" "}
        </p>
        <br />
        <p>Right now I mainly use these languages/technologies</p>
        <ul className="list-disc list-inside">
          <li>Typescript</li>
          <li>React</li>
          <li>Vite</li>
          <li>Node.js</li>
          <li>Rust</li>
        </ul>

        <p className="pt-2">
          Besides programming, I love piano, basketball, and video games. I'm
          also really into keyboards, and have been building them for a long
          time.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
