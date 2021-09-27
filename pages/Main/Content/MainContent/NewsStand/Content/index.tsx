import React from 'react';
import styled from 'styled-components';
import { useWatch, useFormContext } from "react-hook-form";
import List from './List';
import Table from './Table/Table';
import { LAYOUT, LAYOUT_OPTIONS } from '../../../../../@constants/LAYOUT_SELECTOR';
import { MEDIA_SORTER} from "../../../../../@constants/MEDIA_SORTERS";
import { MEDIA } from "../../../@constants/FIELD_NAMES";
import useGetArticlesAndMedias from "./@hooks/useGetArticlesAndMedias";

const Wrapper = styled.div`
  width: 100%;
`;


const Content = () => {
  const selectedMedia = useWatch({
    name: MEDIA,
  });
  const selectedLayout = useWatch({
    name: LAYOUT,
  });
  const sorter = useWatch({
    name: MEDIA_SORTER,
  });

  useGetArticlesAndMedias([sorter]);

  return (
    <Wrapper>
      {selectedLayout === LAYOUT_OPTIONS.LIST ? <List  /> : <Table />}
    </Wrapper>
  );
};

export default Content;
