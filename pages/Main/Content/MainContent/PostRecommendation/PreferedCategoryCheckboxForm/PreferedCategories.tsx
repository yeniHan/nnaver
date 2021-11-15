import React from 'react';
import styled from 'styled-components';
 import {usePreferedCategories} from "../Context/PostContext";
import colors from '@styles/Colors';


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
  const preferedCategories = usePreferedCategories();

  return (
    <Wrapper>
      {new Array(8)?.fill(0)?.map((_, idx) => (
        <PreferedCategory key={preferedCategories?.[idx]?.name}>
          <span>
            {preferedCategories?.[idx]?.text||''}
          </span>
        </PreferedCategory>
      ))}
    </Wrapper>
  );
};

export default PreferedCategories;
