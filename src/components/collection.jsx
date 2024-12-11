import { FEATURES_DATA } from "../hooks/mockData";
import { motion } from "framer-motion";
import useGradientUpdater from "../hooks/useGradientUpdater";

const Collection = () => {
  const gradientRefs = useGradientUpdater();

  return (
    <section className="px-4 lg:py-[65px] py-10">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-center text-white font-montserrat lg:text-2xl md:text-lg text-base font-semibold">
          Professional Work
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-[65px] mt-10">
          {FEATURES_DATA?.map(({ id, title, image }, index) => {
            return (
              <motion.div
                key={id}
                className="bg-grad-theme-135 rounded-3xl p-[3px] md:min-h-[400px] min-h-auto"
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
                  scale: 1.05,
                }}
              >
                <div className="rounded-3xl bg-jet flex flex-col justify-between items-center h-full">
                  <h4 className="lg:mt-8 md:mt-6 mt-4 mb-4 lg:text-2xl md:text-xl text-lg text-white font-montserrat text-center font-semibold px-4">
                    {title}
                  </h4>
                  <img
                    className={`px-4 ${index === 1 && "mb-5"} ${
                      index === 2 && "mb-8"
                    }`}
                    src={image}
                    alt=""
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collection;
