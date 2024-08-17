import HeaderIcon from "./HeaderIcon";
import HomeIcon from "./HomeIcon";
import AboutIcon from "./AboutIcon";
import ResumeIcon from "./ResumeIcon";
import ProjectsIcon from "./ProjectsIcon";

import "./HeaderBar.css";

function HeaderBar(props) {
  return (
    <div className="navbar">
      <HeaderIcon classname="navbar-left" />
      <div classname="navbar-right">
        <HomeIcon />
        <AboutIcon />
        <ResumeIcon />
        <ProjectsIcon />
      </div>
    </div>
  );
}

export default HeaderBar;
