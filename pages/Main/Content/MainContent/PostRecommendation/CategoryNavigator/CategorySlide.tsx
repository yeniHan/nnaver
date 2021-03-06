import React, {useMemo} from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { useTotalCategories} from "../Context/PostContext";
import useCategoryNavigatorInfo from "../@hooks/useCategoryNavigatorInfo";

const Wrapper = styled.div`
  display: flex;
`;

const CategorySlide = ({ idx }: { idx: number }) => {
  const { categoryNumPerSlide: categoryNum } = useCategoryNavigatorInfo();
  const startIdx = (idx + 1) * categoryNum - (categoryNum - 1) - 1;
  const endIdx = (idx + 1) * categoryNum - 1;
  const totalCategories = useTotalCategories();
  const preferedCategories = totalCategories?.filter((v) => v?.isPrefered);

  const categories = useMemo(() => {
    const hasPreferedCategories = preferedCategories?.length > 0;
    return (hasPreferedCategories? preferedCategories : totalCategories)?.slice(startIdx < 0? 0 : startIdx, endIdx);
  }, [totalCategories, idx]);

  return (
    <Wrapper>
      {new Array(categoryNum).fill(0).map((_, idx) => (
        <CategoryItem key={idx} category={categories?.[idx]} />
      ))}
    </Wrapper>
  );
};

export default CategorySlide;