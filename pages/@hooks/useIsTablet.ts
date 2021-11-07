import {useEffect, useState} from "react";
import {MOBILE_WIDTH_RAW, TABLET_WIDTH_RAW} from "../@constants/MEDIA_WITHES";

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    function handleResize () {
      setIsTablet(window.innerWidth <= TABLET_WIDTH_RAW);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isTablet;
};

export default useIsTablet;
