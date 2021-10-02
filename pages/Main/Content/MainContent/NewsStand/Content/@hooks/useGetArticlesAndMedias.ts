import {useFormContext, useWatch} from "react-hook-form";
import {MEDIA_SORTER} from "../../../../../../@constants/MEDIA_SORTERS";
import {ARTICLES, MEDIA, MEDIAS} from "../../../../@constants/FIELD_NAMES";
import getNewsStandsArticles from "../../../../../../front-apis/apis/main/getNewsStandsArticles";
import {useEffect} from "react";
import useSWR from "swr";
import APIS from '@constants/APIS';

const useGetArticlesAndMedias = (recallDeps = []) => {
  const { setValue } = useFormContext();

  const sorter = useWatch({
    name: MEDIA_SORTER,
  });

  const selectedMedia = useWatch({
    name: MEDIA,
  });

  const { data, mutate } = useSWR([APIS.NEWS_STANDS_ARTICLES, sorter], getNewsStandsArticles);

  useEffect(() => {
    mutate();
  }, [recallDeps]);

  useEffect(() => {
    console.log(data)
    if (!!data?.medias) {
      setValue(MEDIAS, data?.medias);
      const firstMedia = data?.medias?.[0];
      if (firstMedia) setValue(MEDIA, firstMedia);
    }
  }, [data]);

  useEffect(() => {
    if (selectedMedia) {
      const selectedaArticles = data?.articles?.filter((v) => v?.media === selectedMedia?.id);
      setValue(ARTICLES, selectedaArticles);
    }
  }, [selectedMedia]);

};

export default useGetArticlesAndMedias;
