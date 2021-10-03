import { useCallback } from "react";
import {useWatch, useFormContext} from "react-hook-form";
import {MEDIA} from "../../../../../@constants/FIELD_NAMES";
import useArticlesAndMedias from "../../@hooks/useArticlesAndMedias";



const useMediaButtons = () => {
  const { setValue } = useFormContext();
  const { medias } = useArticlesAndMedias();

  const selectedMedia = useWatch({
    name: MEDIA,
  });

  const currMediaIdx = medias?.findIndex((v) => v?.id === selectedMedia?.id);
  const isLast = medias?.length - 1 === currMediaIdx;
  const isFirst = currMediaIdx === 0;

  const goPrevMedia = useCallback(() => {
    let next;
    if (isFirst) next = medias?.[medias?.length - 1];
    else next = medias?.[currMediaIdx - 1];
    setValue(MEDIA, next);
  }, [isFirst, medias, currMediaIdx, setValue]);

  const goNextMedia = useCallback(() => {
    let next;
    if (isLast) next = medias?.[0];
    else next = medias?.[currMediaIdx + 1];
    setValue(MEDIA, next);
  }, [isLast, medias, setValue, currMediaIdx]);

  return {
    goPrevMedia,
    goNextMedia,
  };
};

export default useMediaButtons;
