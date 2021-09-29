import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useWatch, useFormContext } from "react-hook-form";
import List from './List';
import Table from './Table/Table';
import { LAYOUT, LAYOUT_OPTIONS } from '../../../../../@constants/LAYOUT_SELECTOR';
import { MEDIA_SORTER} from "../../../../../@constants/MEDIA_SORTERS";
import useGetArticlesAndMedias from "./@hooks/useGetArticlesAndMedias";
import useIsTablet from '@hooks/useIsTablet';
import { commonIconCSS } from 'Main/@styles';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const PrevBtn = styled.button`
  ${commonIconCSS};
  width: 44px;
  height: 44px;
  background-position: 0 -306px;
  position: absolute;
  top: 96px;
  left: -25px;
`;

const NextBtn = styled.button`
  ${commonIconCSS};
  width: 44px;
  height: 44px;
  background-position: -224px -158px;
  position: absolute;
  top: 96px;
  right: -25px;
`;


const Content = () => {
  const { setValue } = useFormContext();
  const isTablet = useIsTablet();

  const selectedLayout = useWatch({
    name: LAYOUT,
  });
  const sorter = useWatch({
    name: MEDIA_SORTER,
  });

  useGetArticlesAndMedias([sorter]);

  useEffect(() => {
    if (isTablet) setValue(LAYOUT, LAYOUT_OPTIONS.LIST);
  }, [isTablet]);

  return (
    <Wrapper>
      <PrevBtn/>
      {selectedLayout === LAYOUT_OPTIONS.LIST ? <List  /> : <Table />}
      <NextBtn/>
    </Wrapper>
  );
};

export default Content;
