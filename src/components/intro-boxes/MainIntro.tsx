import img from "../../assets/bitmoji_cropped.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
          <br />
          <div className="flex flex-row gap-4">
            <a href="https://github.com/jminlee24" target="_blank">
              <FaGithub
                className={`
                border-gray-600 border-2 rounded-xl p-2 
                transition transform hover:-translate-y-2 
                hover:border-outline hover:border-4 hover:cursor-pointer
                motion-reduce:transition-none motion-reduce:hover:transform-none
                `}
                size={"3em"}
              />
            </a>
            <a href="https://www.linkedin.com/in/jmlee2004/" target="_blank">
              <FaLinkedin
                className={`
                border-gray-600 border-2 rounded-xl p-2 
                transition transform hover:-translate-y-2
                hover:border-outline hover:border-4 hover:cursor-pointer
                motion-reduce:transition-none motion-reduce:hover:transform-none
                `}
                size={"3em"}
              />
            </a>
            <a href="https://www.instagram.com/josh.m.lee/" target="_blank">
              <FaInstagram
                className={`
                border-gray-600 border-2 rounded-xl p-2 
                transition transform hover:-translate-y-2 
                hover:border-outline hover:border-4 hover:cursor-pointer
                motion-reduce:transition-none motion-reduce:hover:transform-none
                `}
                size={"3em"}
              />
            </a>

            <div />
          </div>
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
