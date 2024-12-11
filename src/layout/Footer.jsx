import { Link } from "react-router-dom";
import routesConstants from "../constants/routeConstants";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex items-center bg-grad-theme-135 relative border-t-[1px] md:h-[4.5rem] border-t-white border-solid p-1">
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-6">
        {/* Card Container */}
        <div className="flex flex-col gap-4 md:gap-6 w-full md:flex-row items-center justify-center">
          {/* Logo Card */}
          <div className="flex items-center justify-center w-full md:w-auto p-4 bg-white/20 rounded-full hover:scale-105 transition-all duration-300 ease-in-out shadow-md">
            <Link
              to={routesConstants.ROOT}
              className="flex items-center justify-center w-12 h-12 md:w-6 md:h-6 text-center text-white bg-gray-800 border rounded-full"
            >
              R
            </Link>
          </div>

          {/* Hire Me Card */}
          <div className="flex w-full md:h-[3rem] justify-center p-4 bg-white/20 backdrop-blur-lg rounded-full shadow-md">
            <button
              type="button"
              className="flex flex-col items-center text-gray-800 text-sm lg:text-base font-semibold hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() =>
                (window.location.href = "mailto:your-email@example.com")
              }
            >
              <span className="text-gray-700 text-base md:text-sm md:-mb-1 md:-mt-2.5">
                For Hire
              </span>
              <span className="text-white text-sm md:text-base">
                rizwan9911k@gmail.com
              </span>
            </button>
          </div>

          {/* Social Links Card */}
          <div className="flex flex-row w-full md:h-[3rem] md:w-auto p-4 bg-white/20 rounded-full shadow-md items-center justify-center gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center md:ml-1 text-gray-800 hover:text-risd-blue hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <BsGithub className="h-6 w-6 md:h-5 md:w-5  text-gray-800" />
              <span className="text-sm text-white ">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center md:mr-1 text-gray-800 hover:text-risd-blue hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <FaLinkedin className="h-6 w-6 md:h-5 md:w-5 text-blue-700" />
              <span className="text-sm text-white">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
