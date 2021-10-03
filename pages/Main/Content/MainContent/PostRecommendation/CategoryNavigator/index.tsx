import React, {useState} from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper";

const CategoryNavigator = () => {
  const [curIdx, setCurIdx] = useState(0);

  return (
    <Swiper
      modules={[Autoplay]}
    >
      {
        <SwiperSlide>
          {/*<CategoryOfThisIdx idx={idx} />*/}
        </SwiperSlide>
      }
    </Swiper>
  );
};

export default CategoryNavigator;