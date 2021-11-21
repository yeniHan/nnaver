import { useState, useCallback, useEffect, useMemo } from "react";
import constate from "constate";
import useSWR from "swr";
import APIS from "../../../../../@constants/APIS";
import getRecommendedPosts from "../../../../../front-apis/apis/main/getRecommendedPosts";

const usePostInfo = () => {
  const { data } = useSWR(APIS.RECOMMENDED_POSTS);
  const totalPosts = data?.posts;
  const preferedCategories = useMemo(() => data?.categories?.filter((v) => v?.isPrefered), [data]);
  const totalCategories = data?.categories;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState();
  const [totalPage, setTotalPage] = useState(0);
  const categoryPosts = useMemo(() => totalPosts?.filter((v) => v?.category === currentCategory)
    , [totalPosts, currentCategory]);
  const showSeeMoreButton = useMemo(() => {
    return currentPage !== totalPage;
  }, [currentPage, totalPage]);

  const goNextPage = useCallback(() => {
    if (currentPage === totalPage) return;
    setCurrentPage((prev) => prev + 1);
  },[currentPage, totalPage, setCurrentPage,  showSeeMoreButton]);

  // init current category
  useEffect(() => {
    setCurrentCategory(preferedCategories?.[0]?.name);
  }, [preferedCategories]);

  // init post page info; currnetPage & totalPage
  useEffect(() => {
    const postNumPerPage = 4;
    const totalPostNum = categoryPosts?.length || 0;
    setTotalPage(Math.ceil(totalPostNum/postNumPerPage));
    setCurrentPage(1);
  }, [categoryPosts]);

  return {
    totalPosts,
    categoryPosts,
    preferedCategories,
    totalCategories,
    currentPage,
    currentCategory,
    totalPage,
    setTotalPage,
    setCurrentCategory,
    setCurrentPage,
    goNextPage,
    showSeeMoreButton,
  };
};

export const [PostProvider, useTotalPosts, useCategoryPosts,
  usePreferedCategories, useTotalCategories, useCurrentPage, useSetCurrentPage,
  useCurrentCategory, useSetCurrentCategory, useTotalPage,
  useSetTotalPage, useGoNextPage, useShowSeeMoreButton] = constate(
  usePostInfo,
  value => value?.totalPosts,
  value => value?.categoryPosts,
  value => value?.preferedCategories,
  value => value?.totalCategories,
  value => value?.currentPage,
  value => value?.setCurrentPage,
  value => value?.currentCategory,
  value => value?.setCurrentCategory,
  value => value?.totalPage,
  value => value?.setTotalPage,
  value => value?.goNextPage,
  value => value?.showSeeMoreButton,
);
