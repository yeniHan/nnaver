import { useTotalPosts } from "../Context/PostContext";
import {categoryNumPerSlideByDevice} from "../@constants/CATEGORY_SLIDE_INFO";
import useDevice from "../../../../../@hooks/useDevice";

const useCategoryNavigatorInfo = () => {
  const device = useDevice();
  const postsNum = useTotalPosts()?.length || 0;
  const categoryNumPerSlide = categoryNumPerSlideByDevice[device];
  const slideNum = Math.ceil(postsNum/categoryNumPerSlide);

  return {
    slideNum,
    categoryNumPerSlide
  };
};

export default useCategoryNavigatorInfo;