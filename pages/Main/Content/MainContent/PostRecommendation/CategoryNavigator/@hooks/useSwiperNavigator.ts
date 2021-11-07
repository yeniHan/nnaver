import {useCallback, useState} from "react";


const useSwiperNavigator = (swiper) => {

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const onSlideChangeHandler = useCallback((sw) => {
    if (isEnd !== sw.isEnd) setIsEnd(sw?.isEnd);
    if (isBeginning !== sw.isBeginning) setIsBeginning(sw.isBeginning);
  }, [isEnd, isBeginning]);

  const onClickPrevBtn = useCallback(() => swiper?.slidePrev(), [swiper]);
  const onClickNextBtn = useCallback(() => swiper?.slideNext(), [swiper]);

  if (!swiper) return {};

  return {
    onSlideChangeHandler,
    onClickPrevBtn,
    onClickNextBtn,
    isBeginning,
    isEnd,
  };
};

export default useSwiperNavigator;