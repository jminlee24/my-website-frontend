import img from "../../assets/bitmoji_cropped.png";

const MainIntro = () => {
  return (
    <div className="flex w-full h-full lg:h-72 text-gray-300 relative">
      <div className="flex pb-5">
        <div className="flex flex-col justify-between px-5 min-w-0 lg:w-3/4">
          <h1 className="pt-5 text-5xl min-w-0">Hi there!</h1>
          <p className="pt-5 text-lg min-w-0">
            I'm <span className="font-bold">Josh Lee</span>, and I'm a
            university student studying Math and Computer Science!
          </p>
          <div> MORE STUFF</div>
        </div>
        <img
          src={img}
          alt="SELFIE"
          className="absolute select-none z-1 opacity-50 lg:opacity-100 lg:h-72 right-0 bottom-0 m:h-56 h-48"
        />
      </div>
    </div>
  );
};

export default MainIntro;
