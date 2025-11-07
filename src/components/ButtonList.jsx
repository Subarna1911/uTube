import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; 
import Button from "../components/Button";


const buttons = ["All", "Subscription", "Coffee", "devevlopment", "good music", "good money", "alo fruit", "open minded", "life lessons", "people", "management", "content managemebnt", "ideas", "confident", "Subscription", "Coffee", "devevlopment",]

const ButtonList = ({name}) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -200, 
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Left arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ArrowLeft />
      </button>

      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-hidden scroll-smooth py-3 px-12 no-scrollbar"
      >
        {buttons.map((button, index) => (
          <div key={index} className="shrink-0">
            <Button name={button} />
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default ButtonList;
