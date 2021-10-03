import React from 'react';
import styled from 'styled-components';
import MediaList from './MediaList';
import Articles from './Articles';
import useMediaButtons from './@hooks/useMediaButtons';
import { MOBILE_WIDTH } from '@constants/MEDIA_WITHES';
import {commonIconCSS} from "../../../../../@styles";


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  @media (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;

const PrevBtn = styled.button`
  ${commonIconCSS};
  width: 44px;
  height: 44px;
  background-position: 0 -306px;
  position: absolute;
  top: 100px;
  left: -25px;

  @media (max-width: ${MOBILE_WIDTH}) {
    display: none;
  }
`;

const NextBtn = styled.button`
  ${commonIconCSS};
  width: 44px;
  height: 44px;
  background-position: -224px -158px;
  position: absolute;
  top: 100px;
  right: -25px;
  
  @media (max-width: ${MOBILE_WIDTH}) {
    display: none;
  }
`;


const List = () => {
  const { goPrevMedia, goNextMedia } = useMediaButtons();

  return (
    <Wrapper>
      <PrevBtn onClick={goPrevMedia} />
      <MediaList />
      <Articles />
      <NextBtn onClick={goNextMedia} />
    </Wrapper>
  );
};

export default List;