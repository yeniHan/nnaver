import React, {useCallback, useEffect} from 'react';
import styled, { css } from 'styled-components';
import { commonIconCSS } from "Main/@styles";
import PostCategoryType from 'api/dummyTypes/PostCategory.type';
import colors from '@styles/Colors';
import { useOnChangeCategoryCheckbox, useSelectedCategories } from "../../Context/PreferedCategoryFormContext";

const Wrapper = styled.div`
  padding: 14px 13px;
  border: 1px solid ${colors.grayBorder};
  margin: 6px 0 0 6px;
  width: 16.6%;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  > div {
    width: 100%;
  }
`;

const CheckIc = styled.span(({ isSelected }) => css`
  ${commonIconCSS};
  width: 16px;
  height: 16px;
  background-position: ${isSelected ? '-401px -352px': '-29px -396px'};
  margin-right: 10px;
`);



// eslint-disable-next-line no-unused-vars
const Checkbox = ({ category }: { category: PostCategoryType }) => {
  const onChangeCategoryCheckbox = useOnChangeCategoryCheckbox();
  const selectedCategories = useSelectedCategories();
  const isSelected = !!selectedCategories?.find((v) => v === category?.name);

  const onChangeHandler = useCallback(() => {
    onChangeCategoryCheckbox(category?.name, !isSelected);
  }, [onChangeCategoryCheckbox, category, isSelected]);

  return (
    <Wrapper>
      <div onClick={onChangeHandler}>
        <CheckIc isSelected={isSelected} /><span>{category?.text}</span>
      </div>
    </Wrapper>
  );
};

export default Checkbox;