import React, {useEffect} from 'react';
import styled, { css } from 'styled-components';
import { useCurrentCategory, useSetCurrentCategory } from '../Context/PostContext';
import colors from '@styles/Colors';
import { categoryColors } from '../@styles/categoryColors';

const Wrapper = styled.label(({ selected, category }) => css`
  background-color: ${selected ? categoryColors[category]: 'unset'};
  color: ${ selected ? "white": "unset"};
  border: 1px solid ${colors.grayBorder};
  border-right: transparent;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 41px;
  cursor: pointer;
  
  &:last-child {
    border-right: 1px solid ${colors.grayBorder};
  }
  
  input {
    display: none;
  }
`);

const CategoryItem = ({ category }) => {
  const setCurrentCategory = useSetCurrentCategory();
  const currentCategory = useCurrentCategory();
  const isSelected = category?.name === currentCategory;

  return (
    <Wrapper
      selected={isSelected}
      category={category?.name}
      onClick={() => {
        // @ts-ignore
        setCurrentCategory(category?.name);
      }}
    >
      {!!category && <span>{category?.text}</span>}
    </Wrapper>
  );
};

export default CategoryItem;
