import { useMemo } from "react";
import { useCategoryPosts } from "./../Context/PostContext";


const usePostsOfThisPage = (page) => {
  const postNumPerPage = 4;
  const categoryPosts = useCategoryPosts();

  return useMemo(() => {
    const endIdx = page * postNumPerPage;
    let startIdx = endIdx - postNumPerPage;
    if (startIdx <= 0) startIdx = 0;

    const postsOfThisPage = categoryPosts?.slice(startIdx, endIdx);
    return postsOfThisPage;
  }, [categoryPosts]);
};

export default usePostsOfThisPage;
