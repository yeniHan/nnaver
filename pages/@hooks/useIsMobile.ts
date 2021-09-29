import {useEffect, useState} from "react";
import {MOBILE_WIDTH_RAW} from "../@constants/MEDIA_WITHES";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize () {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH_RAW);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

export default useIsMobile;
