import useSWR from "swr";
import APIS from "../../../../../@constants/APIS";
import getRecommendedPosts from "../../../../../front-apis/apis/main/getRecommendedPosts";

const useCategoriesAndPosts = () => {
    const { data } = useSWR(APIS.RECOMMENDED_POSTS, getRecommendedPosts);
    const posts = data?.posts;
    const preferedCategories = data?.preferedCategories;


    return {
        posts,
        preferedCategories,
    }
}