import React from 'react';
import styled from 'styled-components';
import {commonIconCSS} from "Main/@styles";
import { useShowSeeMoreButton, useGoNextPage } from '../Context/PostContext';
import colors from '@styles/Colors';

const Wrapper = styled.div`
  padding-top: 18px;
  margin-bottom: 42px;
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid ${colors.grayBorder};
`;
const Button = styled.button`
  ${commonIconCSS};
  width: 42px;
  height: 42px;
  background-position: 0 -352px;
  position: absolute;
  top: 0;
  z-index: 2;
  cursor: pointer;
`;

const SeeMoreButtonWrapper = () => {
  const showButton = useShowSeeMoreButton();
  const goNextPage = useGoNextPage();

  if (!showButton) return null;

  return (
    <Wrapper>
      <Button onClick={goNextPage} />
    </Wrapper>
  );
};

export default SeeMoreButtonWrapper;
