import {useEffect, useState} from "react";
import useIsMobile from "./useIsMobile";
import useIsTablet from "./useIsTablet";
import { MOBILE, TABLET, PC } from '@constants/DEVICES';

const useDevice= () => {
  const [device, setDevice] = useState(PC);
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isTablet && !isMobile) setDevice(TABLET);
    else if (isMobile) setDevice(MOBILE);
    else setDevice(PC);
  }, [isTablet, isMobile]);

  return device;
};

export default useDevice;
