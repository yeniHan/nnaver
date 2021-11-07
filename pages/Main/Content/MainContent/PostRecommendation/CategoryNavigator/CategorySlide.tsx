import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { usePreferedCategories } from "../Context/PostContext";
import useCategoryNavigatorInfo from "../@hooks/useCategoryNavigatorInfo";


const Wrapper = styled.div`
  display: flex;
`;

const CategorySlide = ({ idx }: { idx: number }) => {
  const { categoryNumPerSlide: categoryNum } = useCategoryNavigatorInfo();
  const startIdx = (idx + 1) * categoryNum - (categoryNum - 1) - 1;
  const endIdx = (idx + 1) * categoryNum - 1;
  const categories = usePreferedCategories()?.slice(startIdx < 0? 0 : startIdx, endIdx);

  return (
    <Wrapper>
      {new Array(categoryNum).fill(0).map((_, idx) => (
        <CategoryItem key={idx} category={categories?.[idx]} />
      ))}
    </Wrapper>
  );
};

export default CategorySlide;