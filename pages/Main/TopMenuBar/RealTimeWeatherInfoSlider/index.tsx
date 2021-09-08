import React from 'react';
import Slider from 'infinite-react-carousel';
import realTimeWeatherInfo from '../../../api/dummyData/realTimeWeatherInfo';
import styled, { css } from 'styled-components';
import colors from '../../../@styles/Colors';
import DustInfo from './DustInfo';
import WeatherInfo from './WeatherInfo';


const StyledSlider = styled(Slider)`
  width: 260px !important;
  height: 100%;
`;

const Slide = styled.div`
  width: 240px;
  height: 52px;
  display: flex !important;
  align-items: center;
`;


const RealTimeWeatherInfoSlider = () => {
  const { dust, weather, temperature, location} = realTimeWeatherInfo;
  return (
    <StyledSlider
      autoplay={true}
      arrows={false}
    >
      <Slide>
        <DustInfo dust={dust} location={location}/>
      </Slide>
      <Slide>
        <WeatherInfo weather={weather} temperature={temperature} location={location} />
      </Slide>
    </StyledSlider>
  );
};

export default RealTimeWeatherInfoSlider;