import { link } from "framer-motion/client";
import { FRAMEWORK_DATA } from "../hooks/mockData";
import useGradientUpdater from "../hooks/useGradientUpdater";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";


const Projects = () => {
  const gradientRefs = useGradientUpdater();

  const frameworkGridSettings = [
    {
      cardGradientBefore:
        "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[300px] before:h-[300px] before:-top-[25%] before:-right-[5%] before:blur-[30px] before:rounded-full",
      cardGradientAfter:
        "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[270px] after:h-[270px] after:bottom-0 after:right-[35%] after:blur-[30px] after:rounded-full",
    },
    {
      cardGradientBefore:
        "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[300px] before:h-[300px] before:-bottom-[10%] before:-right-[5%] before:blur-[30px] before:rounded-full",
      cardGradientAfter:
        "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[270px] after:h-[270px] after:top-0 after:right-[35%] after:blur-[30px] after:rounded-full",
    },
    {
      cardGradientBefore:
        "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[300px] before:h-[300px] before:-top-[15%] before:-right-0 before:blur-[30px] before:rounded-full",
      cardGradientAfter:
        "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[270px] after:h-[270px] after:-bottom-[10%] after:left-[52%] after:blur-[30px] after:rounded-full",
    },
    {
      cardGradientBefore:
        "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[300px] before:h-[300px] before:-top-[5%] before:right-[20%] before:blur-[30px] before:rounded-full",
      cardGradientAfter:
        "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[270px] after:h-[270px] after:-bottom-[15%] after:-right-[5%] after:blur-[30px] after:rounded-full",
    },
    {
      cardGradientBefore:
        "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[300px] before:h-[300px] before:-top-[5%] before:right-[20%] before:blur-[30px] before:rounded-full",
      cardGradientAfter:
        "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[270px] after:h-[270px] after:-bottom-[15%] after:-right-[5%] after:blur-[30px] after:rounded-full",
    },
  ];

  return (
    <section className="lg:py-[65px] py-10 text-white px-4">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="lg:text-3xl md:text-2xl text-xl text-center font-semibold max-w-[767px] mx-auto">
          Transform work practices forever. <br /> Projects
        </h3>
        <div className="grid xxl:gap-y-[30px] xl:gap-y-6 gap-y-4 items-start lg:mt-[65px] mt-10">
          {FRAMEWORK_DATA?.map(
            (
              { id, title, image, description, link, make, make1, make2, make3, make4,
                make5,
                make6,
              },
              index
            ) => {
              return (
                <motion.div
                  key={id}
                  className="bg-grad-theme-135 rounded-3xl p-[3px]"
                  ref={(el) => (gradientRefs.current[index] = el)}
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                >
                  <div
                    className={`rounded-3xl bg-jet h-full grid items-center md:grid-cols-2 ${
                      FRAMEWORK_DATA?.length - 1 === index
                        ? "lg:ps-10 ps-6"
                        : "lg:py-7 lg:px-10 py-8 px-6"
                    } xxl:gap-20 xl:gap-16 lg:gap-12 gap-10 relative overflow-hidden ${
                      frameworkGridSettings[index].cardGradientBefore
                    } ${frameworkGridSettings[index].cardGradientAfter}`}
                  >
                    <div
                      className={`relative z-10 ${
                        FRAMEWORK_DATA?.length - 1 === index &&
                        "lg:py-10 pt-6 pe-6"
                      }`}
                    >
                      <a href={link}>
                        <p className="flex ml-1 border gap-1 -p-1 rounded-2xl -mt-3 w-16 mb-2">
                          <FaPlayCircle className="ml-1 mt-1" />
                          <span className="">LIVE</span>
                        </p>
                      </a>
                      <h3 className="lg:text-2xl md:text-xl text-lg font-semibold mb-3">
                        {title}
                      </h3>
                      <p className="lg:text-xl md:text-lg text-base font-source-sans font-normal">
                        {description}
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-2 w-full sm:w-[80%] md:mb-0 -mb-10 md:w-[70%]">
                        <p className="text-xs sm:text-sm md:text-s w-14 sm:w-16 border px-2  mt-2 rounded-full mb-4">
                          {make}
                        </p>
                        <p className="text-xs sm:text-sm md:text-s w-14 sm:w-14 border px-4 mt-2 rounded-full mb-4">
                          {make5}
                        </p>
                        <p className="text-xs sm:text-sm md:text-s w-14 sm:w-14 border px-2 -ml-2 mt-2 rounded-full mb-4">
                          {make2}
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-2 w-full sm:w-[80%] md:w-[70%] "></div>
                        <p className="text-xs sm:text-sm md:text-s w-16 sm:w-16 border px-2.5 mt-2 -ml-24 rounded-full mb-4">
                          {make3}
                        </p>
                        <p className="text-xs sm:text-sm md:text-s w-20 sm:w-20 border px-2.5 mt-2 -ml-0.5 rounded-full mb-4">
                          {make4}
                        </p>
                        <p className="text-xs sm:text-sm md:text-s w-24 sm:w-24 border px-4 ml-2.5 rounded-full mt-2  md:mb-4 mb-4">
                          {make1}
                        </p>
                        <p className="text-xs sm:text-sm md:text-s w-20 sm:w-18 border ml-9 px-2 rounded-full mt-2 md:mb-4 mb-4">
                          {make6}
                        </p>
                      </div>
                    </div>
                    <img className="relative z-10 rounded-xl" src={image} alt="" />
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
