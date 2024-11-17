import { motion } from "motion/react";

import { useState } from "react";
import AboutMe from "./intro-boxes/AboutMe";
import ColorTheme from "./intro-boxes/ColorTheme";
import ContactMe from "./intro-boxes/ContactMe";
import FunFact from "./intro-boxes/FunFact";
import MainIntro from "./intro-boxes/MainIntro";
import Projects from "./intro-boxes/Projects";

const MainContainer = () => {
  const [color, setColor] = useState<string>("white");

  const handleColorChange = (color: string) => {
    setColor(color);
    console.log(color);
  };

  return (
    <motion.main
      className={`
        lg:w-11/12 w-full h-full align-middle p-12 pb-10 m-auto
        max-w-7xl
        relative
        lg:overflow-y-hidden
        overflow-y-auto 
        overflow-x-hidden
        grid lg:grid-cols-4 lg:grid-rows-6 gap-4
        md:grid-cols-3
        sm:grid-cols-1 
        ${color}

        `}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          opacity: 1,
          transition: { when: "beforeChildren", staggerChildren: 0.1 },
        },
        hidden: { opacity: 0 },
      }}
      animate={{ x: 0 }}
    >
      <motion.div
        variants={{ visible: { x: 0 }, hidden: { x: -1000 } }}
        className="border rounded-xl hover:border-outline border-gray-600 md:col-span-3 lg:row-span-2 bg-gray-800"
      >
        <MainIntro />
      </motion.div>
      <motion.div
        variants={{ visible: { x: 0 }, hidden: { x: 1000 } }}
        className="border rounded-xl hover:border-outline border-gray-600 md:col-span-1 md:row-span-4 bg-gray-800"
      >
        <AboutMe />
      </motion.div>
      <motion.div
        variants={{ visible: { x: 0 }, hidden: { x: -1000 } }}
        className="border rounded-xl hover:border-outline border-gray-600 md:col-span-2 lg:row-span-2 bg-gray-800"
      >
        <Projects />
      </motion.div>
      <motion.div
        variants={{ visible: { y: 0 }, hidden: { y: 1000 } }}
        className="border rounded-xl hover:border-outline border-gray-600 md:col-span-1 lg:row-span-3 bg-gray-800"
      >
        <ContactMe />
      </motion.div>
      <motion.div
        variants={{ visible: { x: 0 }, hidden: { x: -1000 } }}
        className="border rounded-xl hover:border-outline border-gray-600 md:col-span-1 lg:row-span-2 bg-gray-800"
      >
        <FunFact />
      </motion.div>
      <motion.div
        variants={{ visible: { y: 0 }, hidden: { y: 1000 } }}
        className="border rounded-xl hover:border-outline border-gray-600 md:col-span-1 lg:row-span-2 bg-gray-800"
      >
        OTHER COOL THING
      </motion.div>
      <motion.div
        variants={{ visible: { x: 0 }, hidden: { x: 1000 } }}
        className="border rounded-xl hover:border-outline border-gray-600 md:col-span-1 lg:row-span-1 bg-gray-800"
      >
        <ColorTheme color={color} handleColorChange={handleColorChange} />
      </motion.div>
    </motion.main>
  );
};

export default MainContainer;
