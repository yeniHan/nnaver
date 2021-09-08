import React from 'react';
import { weatherIconCSS } from "../../@styles";
import colors from "../../../@styles/Colors";
import styled from 'styled-components';
import { weatherText } from './@constants';


const WeatherIc = styled.div`
  ${weatherIconCSS};
  width: 29px;
  height: 29px;
  background-position: -93px 0;
  display: inline-block;
`;

const Average = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 5px;
`;

const Min = styled.span`
  font-size: 12px;
  color: red;
`;

const Slash = styled.span`
  color: gray;
  margin: 0 2px;
`;

const Max = styled.span`
  font-size: 12px;
  color: blue;
`;

const Location = styled.span`
  font-size: 12px;
  color: gray;
  margin-left: 7px;

  :hover {
    text-decoration: underline;
  }
`;

const WeatherInfo = ({ weather, temperature, location } :
                         { weather: number; temperature: { average: string; min: string; max: string;}; location: string; }) => {
  const { average, min, max } = temperature;
  return (
    <>
      <WeatherIc weather={weather} />
      <Average>{average}&#8451; {weatherText[weather]}</Average>
      <Min>{min}{' '}&#8451;</Min>
      <Slash>/</Slash>
      <Max>{max}{' '}&#8451;</Max>
      <Location>{location}</Location>
    </>
  );
};

export default WeatherInfo;
