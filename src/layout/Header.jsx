import routesConstants from "../constants/routeConstants";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="text-white flex flex-col relative after:content-[''] after:bg-grad-theme-135 after:absolute xl:after:w-[520px] xl:after:h-[520px] md:after:w-[300px] md:after:h-[300px] after:w-[200px] after:h-[200px] after:top-[90%] after:left-0 after:blur-[70px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute xl:before:w-[520px] xl:before:h-[520px] md:before:w-[300px] md:before:h-[300px] before:w-[200px] before:h-[200px] before:top-[60%] before:right-0 before:blur-[70px] before:rounded-full">
      <div className="max-w-[1320px] px-4 flex items-center justify-between py-[30px] mx-auto w-full relative">
        <div className="flex items-center gap-x-9">
          <Link
            to={routesConstants.ROOT}
            className="max-w-[120px] lg:max-w-[160px] md:max-w-[140px] text-center border rounded-[50%] w-6 h-6"
          >
            R
          </Link>
          <nav
            className={`no-scrollbar lg:relative lg:right-auto lg:top-auto lg:bg-transparent lg:p-0 fixed right-0 top-0 bg-errie-black h-full z-50 p-5 sm:w-[300px] w-full translate-alls ease-in-out duration-300 shadow-navbar lg:shadow-none lg:translate-x-0 ${
              isNavbarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end mb-10 lg:hidden hover:opacity-80 transition-all duration-300 ease-in-out">
              <button type="button" onClick={toggleNavbar}>
                <IoMdClose size={32} />
              </button>
            </div>
            <ul className="flex lg:flex-row lg:items-center xl:gap-x-12 lg:gap-x-10 gap-x-8 flex-col gap-y-5 text-center"></ul>
            <div className="flex flex-col gap-y-5 items-center lg:hidden mt-6">
              <Link
                to=""
                className="text-white text-base font-source-sans hover:opacity-90 transition-all ease-in-out duration-300 font-normal whitespace-nowrap"
              >
                About
              </Link>
              <Link
                to=""
                className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135 whitespace-nowrap w-full"
              >
                Projects
              </Link>
            </div>
          </nav>
        </div>
        <div className="lg:flex items-center xl:gap-x-7 lg:gap-x-6 gap-x-5 hidden">
          <Link
            to=""
            className="text-base font-semibold text-white hover:text-risd-blue transition-all duration-300 ease-in-out whitespace-nowrap"
          >
            Contact.
          </Link>
          <Link
            to=""
            className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135 whitespace-nowrap w-full"
          >
            Projects
          </Link>
        </div>
        <button
          type="button"
          className="lg:hidden hover:opacity-80 duration-300 ease-in-out translate-all"
          onClick={toggleNavbar}
        >
          <MdMenu size={32} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center max-w-[1020px] mx-auto text-center font-montserrat flex-1 relative z-10 mt-[100px] px-4">
        <h1 className="text-white hover:scale-105 transition-all duration-300 ease-in-out font-bold xl:text-[64px] lg:text-6xl md:text-4xl text-3xl leading-[1.25]">
          Hey, I'm Rizwan{" "}
        </h1>
        <span className="gradi-theme-text font-bold mt-5 hover:scale-105 transition-all duration-300 ease-in-out text-2xl md:text-5xl">
          Web Developer
        </span>
        <p className="lg:text-xl md:text-lg text-base my-[46px]">
          Fullstack enthusiast excelling in crafting user-friendly digital
          landscapes. Relishes solving complex challenges with efficiency and
          flair.
        </p>
        <form className="w-full">
          <div className="flex flex-row md:flex-row items-stretch md:gap-[40px] gap-[7px] border rounded-2xl p-6 md:max-w-[610px] mx-auto">
            <h1 className="md:text-3xl text-sm md:hover:scale-105 transition-all duration-300 ease-in-out">
              FRONTEND{" "}
            </h1>
            <h1 className="md:text-3xl text-sm md:hover:scale-105 transition-all duration-300 ease-in-out">
              BACKEND
            </h1>
            <h1 className="md:text-3xl text-sm md:hover:scale-105 transition-all duration-300 ease-in-out">
              UI/UX
            </h1>
            <h1 className="md:text-3xl text-sm ml- md:-ml-2 md:hover:scale-105 transition-all duration-300 ease-in-out">
              AI{" "}
            </h1>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
