import React, {useCallback} from 'react';
import styled from 'styled-components';
import colors from '@styles/Colors';
import {useSelectedCategories} from "../Context/PreferedCategoryFormContext";
import {useTotalCategories} from "../Context/PostContext";


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 47px;
  background-color: #f7f9fa;
`;

const PreferedCategory = styled.div`
  flex: 1;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.grayBorder};
  border-right: unset;
  
  :last-child{
    border-right: 1px solid ${colors.grayBorder};
  }
`;

const PreferedCategories = () => {
  const selectedCategories = useSelectedCategories();
  const totalCategories = useTotalCategories();
  const getThisSelectedCategoryText = useCallback((name) => totalCategories?.find((v) => v?.name === name)?.text, [totalCategories]);

  return (
    <Wrapper>
      {new Array(8)?.fill(0)?.map((_, idx) => (
        <PreferedCategory key={selectedCategories?.[idx]}>
          <span>
            {getThisSelectedCategoryText(selectedCategories?.[idx])||''}
          </span>
        </PreferedCategory>
      ))}
    </Wrapper>
  );
};

export default PreferedCategories;
