import React from 'react';
import {commonIconCSS} from "../../@styles";
import colors from "../../../@styles/Colors";
import styled from 'styled-components';
import { dustStatusText } from './@constants';

const DustStatusIC = styled.div`
  ${commonIconCSS};
  display: inline-block;
  width: 18px;
  height: 18px;
  background-position: -327px -306px;
  margin-right: 6px;
  align-items: inherit;
`;

const Factor = styled.span`
  display: inherit;
  align-items: inherit;
`;

const Name = styled.span`
  font-size: 12px;
  margin-right: 7px;
`;

const Devider = styled.span`
  background-color: gray;
  width: 1px;
  height: 11px;
  margin: 0 6px 0 7px;
`;

const Status = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

const Location = styled.span`
  font-size: 12px;
  color: gray;
  margin-left: 7px;
  
  :hover {
    text-decoration: underline;
  }
`;

const DustInfo = ({ dust, location } :
                      { dust: { fine: number; ultraFine: number; }; location: string; }) => {
  const { fine, ultraFine } = dust;

  return (
    <>
      <Factor>
        <Name>미세</Name>
        <DustStatusIC status={fine}/>
        <Status>{dustStatusText[fine]}</Status>
      </Factor>
      <Devider />
      <Factor>
        <Name>초미세</Name>
        <DustStatusIC status={ultraFine}/>
        <Status>{dustStatusText[ultraFine]}</Status>
      </Factor>
      <Location>{location}</Location>
    </>
  );
};

export default DustInfo;
