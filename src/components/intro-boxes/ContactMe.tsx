import { FaLink } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="flex flex-col w-full h-full  text-gray-300 relative">
      <div className="flex-col flex-grow">
        <h1 className="p-5 text-bold text-xl font-bold">Contact Me</h1>
        <p className="px-5 text-lg">
          I'm always looking for new and interesting opportunities!
        </p>
        <br></br>
        <h2 className="p-5 text-bold text-lg font-bold">Socials:</h2>
        <ul className="flex flex-col px-5 gap-1">
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>Discord</li>
        </ul>
      </div>
      <div className="p-5 flex flex-row align-middle">
        <div className="flex flex-row gap-2">
          <h2 className="py-5 text-bold text-xl font-bold ">Resume</h2>
          <FaLink className="align-middle self-center" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
