import React, {useEffect} from 'react';
import styled from 'styled-components';
import RealTimeNews from './RealTimeNews';
import Header from './Header';
import { useForm, FormProvider } from "react-hook-form";
import Content from './Content';
import {LAYOUT, LAYOUT_OPTIONS} from "../../../../@constants/LAYOUT_SELECTOR";
import {MEDIA_SORTER, MEDIA_SORTERS} from "../../../../@constants/MEDIA_SORTERS";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 12px;
`;

const NewsStand = () => {
  const methods = useForm({
    defaultValues: {
      [LAYOUT]: LAYOUT_OPTIONS.LIST,
      [MEDIA_SORTER]: MEDIA_SORTERS.SUBSCRIBED,
    }
  });

  return (
    <Wrapper>
      <FormProvider {...methods}>
        <RealTimeNews />
        <Header />
        <Content />
      </FormProvider>
    </Wrapper>
  );
};

export default NewsStand;
