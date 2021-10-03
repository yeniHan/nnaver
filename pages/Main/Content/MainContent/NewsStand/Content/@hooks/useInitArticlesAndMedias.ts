import {useFormContext, useWatch} from "react-hook-form";
import {MEDIA_SORTER} from "../../../../../../@constants/MEDIA_SORTERS";
import {MEDIA} from "../../../../@constants/FIELD_NAMES";
import getNewsStandsArticles from "../../../../../../front-apis/apis/main/getNewsStandsArticles";
import {useEffect} from "react";
import useSWR from "swr";
import APIS from '@constants/APIS';

const useInitArticlesAndMedias = (recallDeps = []) => {
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
    if (!selectedMedia) {
      const firstMedia = data?.medias?.[0];
      setValue(MEDIA, firstMedia);
    }
  }, [data]);

};

export default useInitArticlesAndMedias;
