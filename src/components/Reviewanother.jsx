import { FaArrowCircleRight } from "react-icons/fa";

const Reviewanother = () => {
  return (
    <section className="pt-[57px] pb-[90px] md:pt-[90px] md:pb-[90px] top-20 lg:min-h-[570px] min-h-auto px-8 md:px-2 text-white relative after:content-[''] after:bg-grad-theme-135 after:absolute xl:after:w-[612px] xl:after:h-[612px] md:after:w-[360px] md:after:h-[360px] after:w-[240px] after:h-[240px] after:bottom-0 after:right-0 after:blur-[80px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute xl:before:w-[612px] xl:before:h-[612px] md:before:w-[360px] md:before:h-[360px] before:w-[240px] before:h-[240px] before:-top-[5%] before:-left-[5%] before:blur-[80px] before:rounded-full flex items-center">
      <div className="flex flex-col items-center justify-center max-w-[900px] mx-auto text-center relative z-10">
        <h2 className="font-semibold -mt-40 border p-5 rounded-full font-montserrat lg:text-[60px] md:text-4xl sm:text-3xl text-2xl leading-tight">
          Want to Start
        </h2>
        <h2 className="font-semibold border p-5 rounded-full mt-4 font-montserrat lg:text-[40px] md:text-4xl sm:text-3xl text-2xl leading-tight">
           a Project?
        </h2>
      
        <form className="w-full">
          <div className="flex mt-16 flex-col md:flex-row items-center gap-[14px] md:max-w-[610px] mx-auto justify-center">
            <button
              type="button"
              className="bg-white/15 border w-auto h-auto rounded-full lg:min-h-[50px] min-h-[50px] lg:min-w-[190px] min-w-[150px] text-nowrap lg:text-3xl text-sm px-6 py-3 font-semibold hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center"
              onClick={() =>
                (window.location.href = "mailto:your-email@example.com")
              }
            >
              <span className="mb-1 ml-5">Let's talk</span>
              <FaArrowCircleRight className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reviewanother;
