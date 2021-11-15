import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategorySlide from './CategorySlide';
import {commonIconCSS} from "../../../../@styles";
import useSwiperNavigator from './@hooks/useSwiperNavigator';
import useCategoryNavigatorInfo from "../@hooks/useCategoryNavigatorInfo";

const Wrapper = styled.div`
  position: relative;
  margin-top: 16px;
`;

const btnCSS = css`
  width: 44px;
  height: 44px;
  z-index: 3;
  display: ${({ isHidden }) => isHidden?  'none': 'unset'};
  background-color: #ffffff2e;
  border-radius: 110px;
  position: absolute;
  cursor: pointer;
`;

const PrevBtn = styled.button`
  ${commonIconCSS};
  ${btnCSS};
  background-position: 0 -306px;
  left: -25px;
  top: 0;
`;

const NextBtn = styled.button`
  ${commonIconCSS};
  ${btnCSS};
  background-position: -224px -158px;
  right: -25px;
  top: 0;
`;

const CategoryNavigator = () => {
  const [swiper, setSwiper] = useState(null);
  const { slideNum } = useCategoryNavigatorInfo();

  const {
    onSlideChangeHandler,
    onClickPrevBtn,
    onClickNextBtn,
    isBeginning,
    isEnd
  } = useSwiperNavigator(swiper);

  return (
    <Wrapper>
      <PrevBtn isHidden={isBeginning} onClick={onClickPrevBtn}/>
      <Swiper
        onSlideChange={onSlideChangeHandler}
        onInit={(sw) => setSwiper(sw)}
      >
        {new Array(slideNum).fill(0).map((_, idx) => (
          <SwiperSlide key={idx}>
            <CategorySlide idx={idx} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NextBtn isHidden={isEnd} onClick={onClickNextBtn} />
    </Wrapper>
  );
};

export default CategoryNavigator;