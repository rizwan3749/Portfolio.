import React from "react";

const ImageScrollOnHover = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-2xl font-bold mb-8">
          Image Scroll on Hover
        </h2>
        <div className="relative w-[300px] h-[350px] overflow-hidden border border-gray-400 rounded-sm mx-auto">
          <img
            src="https://i.imgur.com/aFFEZ9U.jpg"
            alt="Scrolling on hover"
            className="absolute bottom-[-1210px] w-full transition-all duration-[11000ms] hover:bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageScrollOnHover;
