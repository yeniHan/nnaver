import {useWatch} from "react-hook-form";
import {MEDIA_SORTER} from "../../../../../../@constants/MEDIA_SORTERS";
import {MEDIA} from "../../../../@constants/FIELD_NAMES";
import useSWR from "swr";
import APIS from "../../../../../../@constants/APIS";
import getNewsStandsArticles from "../../../../../../front-apis/apis/main/getNewsStandsArticles";

const useArticlesAndMedias = () => {
  const sorter = useWatch({
    name: MEDIA_SORTER,
  });

  const selectedMedia = useWatch({
    name: MEDIA,
  });

  const { data } = useSWR([APIS.NEWS_STANDS_ARTICLES, sorter], getNewsStandsArticles);

  const articles = data?.articles?.filter((v) => v?.media === selectedMedia?.id);
  const medias = data?.medias;

  return {
    articles,
    medias,
    selectedMedia,
  };
};

export default useArticlesAndMedias;