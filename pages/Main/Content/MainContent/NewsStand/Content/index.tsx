import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useWatch,  } from "react-hook-form";
import List from './List';
import Table from './Table';
import { LAYOUT, LAYOUT_OPTIONS } from '../../../../../@constants/LAYOUT_SELECTOR';

const Wrapper = styled.div`
  width: 100%;
`;


const Content = () => {
  const selectedLayout = useWatch({
    name: LAYOUT,
  });

  return (
    <Wrapper>
      {selectedLayout === LAYOUT_OPTIONS.LIST ? <List /> : <Table />}
    </Wrapper>
  );
};

export default Content;
