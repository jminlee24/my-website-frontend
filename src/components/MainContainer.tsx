import AboutMe from "./intro-boxes/AboutMe";
import MainIntro from "./intro-boxes/MainIntro";

type Props = {};

const MainContainer = (props: Props) => {
  return (
    <main
      className={`
        lg:w-11/12 w-full h-full align-middle p-12 pb-10 m-auto
          outline overflow-hidden relative
        grid lg:grid-cols-4 lg:grid-rows-6 lg:gap-4
        md:grid-cols-3 md:gap-2
        sm:grid-cols-1 sm:gap-1

        `}
    >
      <div className="border rounded-lg border-white md:col-span-3 lg:row-span-2 bg-gray-800">
        <MainIntro />
      </div>
      <div className="border rounded-lg border-white md:col-span-1 md:row-span-4 bg-gray-800">
        <AboutMe />
      </div>
      <div className="border rounded-lg border-white md:col-span-2 lg:row-span-2">
        Highlighted Project
      </div>
      <div className="border rounded-lg border-white md:col-span-1 lg:row-span-3">
        Contact me
      </div>
      <div className="border rounded-lg border-white md:col-span-1 lg:row-span-2">
        Fun fact
      </div>
      <div className="border rounded-lg border-white md:col-span-1 lg:row-span-2">
        OTHER COOL THING
      </div>
      <div className="border rounded-lg border-white md:col-span-1 lg:row-span-1">
        RESUME
      </div>
      <div className="border rounded-lg border-white md:col-span-2 lg:row-span-1">
        COOL THING
      </div>
    </main>
  );
};

export default MainContainer;
