import React from 'react';
import realTimeWeather from '../../../api/dummyData/realTimeWeather';
import styled, { css } from 'styled-components';
import DustInfo from './DustInfo';
import WeatherInfo from './WeatherInfo';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper";

const Wrapper = styled.div`
  width: 260px !important;
  height: 100%;
`;

const InnerSlide = styled.div`
  width: 280px;
  height: 52px;
  display: flex !important;
  align-items: center;
`;


const RealTimeWeatherInfoSlider = () => {
  const { dust, weather, temperature, location} = realTimeWeather;
  return (
    <Wrapper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1000}}
        loop={true}>
        <SwiperSlide>
          <InnerSlide><DustInfo dust={dust} location={location}/></InnerSlide>
        </SwiperSlide>
        <SwiperSlide>
          <InnerSlide><WeatherInfo weather={weather} temperature={temperature} location={location} /></InnerSlide>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default RealTimeWeatherInfoSlider;