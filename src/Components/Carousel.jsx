import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "../CSS/Crousal.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Iphone 13",
      description:
        "The iPhone 13 is the next iteration of Apple's popular smartphone lineup, succeeding the iPhone 12 series. Although specific details about the iPhone 13 were not available at the time of my knowledge cutoff, I can provide you with a general overview of what to expect based on historical patterns and rumors circulating at that time.",
      icon: require("./Media/download (1).jpg"),
    },
    {
      title: "Walking",
      description:
        "  Apple typically introduces design changes with each new iPhone generation. The iPhone 14 may feature a fresh design, possibly with refinements to the overall form factor, materials, and aesthetics. However, the exact details are not known. ",
      icon: require("./Media/download (2).jpg"),
    },
    {
      title: "Weights",
      description:
        "  Coffee mugs come in various designs, including plain solid colors, patterned designs, printed graphics, or personalized/customized options. Some mugs may have unique shapes or features like handles, lids, or double-walled insulation.",
      icon: require("./Media/download (3).jpg"),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item , index) => {
            return <CarouselItem item={item} width={"100%"} key = {index}/>;
          })}
        </div>

        <div className="carousel-buttons">
          <button
            className="button-arrow"
            onClick={() => {
              let ind =
                (activeIndex - 1) % items.length >= 0
                  ? (activeIndex - 1) % items.length
                  : items.length - 1;
              updateIndex(ind);
            }}
          >
            <span className="material-symbols-outlined">
              <ArrowBackIcon />
            </span>{" "}
          </button>
          <div className="indicators">
            {items.map((item, index) => {
              return (
                <button
                  className="indicator-buttons"
                  onClick={() => {
                    updateIndex(index);
                  }}
                  key = {index}
                ></button>
              );
            })}
          </div>
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex((activeIndex + 1) % items.length);
            }}
          >
            <span className="material-symbols-outlined">
              <ArrowForwardIcon />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
