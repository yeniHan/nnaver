import React from 'react';
import styled from 'styled-components';
import { commonIconCSS } from '../../../../@styles';
import { useFormContext, useWatch } from "react-hook-form";
import { LAYOUT, LAYOUT_OPTIONS } from '@constants/LAYOUT_SELECTOR';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';


const Wrapper = styled.div`
  display: flex;
  align-items: end;
  
  input {
    visibility: hidden;
  }

  @media (max-width: ${TABLET_WIDTH}) {
    display: none;
  }
`;

const ListIcBtn = styled.label`
  ${commonIconCSS};
  width: 14px;
  height: 13px;
  background-position: ${({ selected }) => selected ? `-138px -337px`: `-154px -337px`};
  cursor: pointer;
`;

const TableIcBtn = styled.label`
  ${commonIconCSS};
  width: 13px;
  height: 13px;
  background-position: ${({ selected }) => selected ? `-185px -337px`: `-170px -337px`};
  cursor: pointer;
`;

const SettingBtn = styled.a`
  ${commonIconCSS};
  width: 15px;
  height: 15px;
  background-position: -47px -396px;
`;

const LayoutSelector = () => {
  const { register } = useFormContext();
  const selectedLayout = useWatch({
    name: LAYOUT,
  });

  return (
    <Wrapper>
      <ListIcBtn htmlFor={LAYOUT_OPTIONS.LIST} selected={selectedLayout === LAYOUT_OPTIONS.LIST}/>
      <input
        {...register(LAYOUT)}
        type="radio"
        id={LAYOUT_OPTIONS.LIST}
        value={LAYOUT_OPTIONS.LIST}
      />
      <TableIcBtn htmlFor={LAYOUT_OPTIONS.TABLE} selected={selectedLayout === LAYOUT_OPTIONS.TABLE} />
      <input
        {...register(LAYOUT)}
        type="radio"
        id={LAYOUT_OPTIONS.TABLE}
        value={LAYOUT_OPTIONS.TABLE}
      />
      <SettingBtn href="https://newsstand.naver.com/config.html" target="_blank" />
    </Wrapper>
  );
};

export default LayoutSelector;
