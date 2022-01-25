import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useWatch, useFormContext } from "react-hook-form";
import List from './List';
import Table from './Table/Table';
import { LAYOUT, LAYOUT_OPTIONS } from '../../../../../@constants/LAYOUT_SELECTOR';
import { MEDIA_SORTER} from "../../../../../@constants/MEDIA_SORTERS";
import useIsTablet from '@hooks/useIsTablet';
import useSWR from "swr";
import APIS from "../../../../../@constants/APIS";
import getNewsStandsArticles from "../../../../../front-apis/apis/main/getNewsStandsArticles";

const Wrapper = styled.div`
  width: 100%;
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
  const { mutate } = useSWR([APIS.NEWS_STANDS_ARTICLES, sorter], getNewsStandsArticles);

  useEffect(() => {
    if (isTablet) setValue(LAYOUT, LAYOUT_OPTIONS.LIST);
  }, [isTablet]);

  useEffect(() => {
    mutate();
  }, [selectedLayout]);

  return (
    <Wrapper>
      {selectedLayout === LAYOUT_OPTIONS.LIST ? <List  /> : <Table />}
    </Wrapper>
  );
};

export default Content;
