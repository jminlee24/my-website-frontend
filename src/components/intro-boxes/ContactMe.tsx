import { FaLink } from "react-icons/fa";
import resume from "../../assets/resume.pdf";

const ContactMe = () => {
  return (
    <div className="flex flex-col w-full h-full  text-gray-300 relative">
      <div className="px-5 flex-col flex-grow">
        <h1 className="pt-5 text-bold text-xl font-bold">Contact Me</h1>
        <p className="text-lg">
          I'm always looking for new and interesting opportunities!
        </p>
        <h2 className="text-bold text-lg font-bold py-4">Socials:</h2>
        <ul className="flex flex-col gap-2 ">
          <a
            className="hover:font-bold"
            href="https://github.com/jminlee24"
            target="_blank"
          >
            Github
          </a>
          <a
            className="hover:font-bold"
            href="https://www.linkedin.com/in/jmlee2004/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:font-bold"
            href="https://www.instagram.com/josh.m.lee/"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="hover:font-bold"
            href="https://discordapp.com/users/368149745387962378"
            target="_blank"
          >
            Discord
          </a>
        </ul>
      </div>
      <div className="p-5 flex flex-row align-middle">
        <a href={resume} target="_blank" className="flex flex-row gap-2">
          <h2 className="text-bold text-xl font-bold ">Resume</h2>
          <FaLink className="align-middle self-center" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
