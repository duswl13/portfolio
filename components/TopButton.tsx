import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import SvgIcon from "./SvgIcon";

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const styles = useSpring({
    opacity: isVisible ? 1 : 0, // visible 상태일 때 1, 아닐 때 0
    y: isVisible ? "0%" : "20%",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };

  return (
    <animated.div
      style={styles}
      onClick={scrollToTop}
      className="m-3 feature bg-primary bg-gradient-primary-to-secondary text-white rounded-5 me-3 top-button "
    >
      <SvgIcon
        className=" bi-arrow-up"
        width={24}
        height={24}
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
        />{" "}
      </SvgIcon>
    </animated.div>
  );
}
