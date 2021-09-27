import {useFormContext, useWatch} from "react-hook-form";
import {MEDIA_SORTER} from "../../../../../../@constants/MEDIA_SORTERS";
import {ARTICLES, MEDIA, MEDIAS} from "../../../../@constants/FIELD_NAMES";
import useAsync from "@utils/useAsync";
import getNewsStandsArticles from "../../../../../../front-apis/apis/main/getNewsStandsArticles";
import {useEffect} from "react";

const useGetArticlesAndMedias = (recallDeps = []) => {
  const { setValue } = useFormContext();

  const sorter = useWatch({
    name: MEDIA_SORTER,
  });

  const selectedMedia = useWatch({
    name: MEDIA,
  });

  const [res] = useAsync(getNewsStandsArticles, [{ sorter }], recallDeps);

  useEffect(() => {
    if (!!res?.data?.medias) {
      setValue(MEDIAS, res?.data?.medias);
      const firstMedia = res?.data?.medias?.[0];
      if (firstMedia) setValue(MEDIA, firstMedia);
    }
  }, [res]);

  useEffect(() => {
    if (selectedMedia) {
      const selectedaArticles = res?.data?.articles?.filter((v) => v?.media === selectedMedia?.id);
      setValue(ARTICLES, selectedaArticles);
    }
  }, [selectedMedia]);

};

export default useGetArticlesAndMedias;
