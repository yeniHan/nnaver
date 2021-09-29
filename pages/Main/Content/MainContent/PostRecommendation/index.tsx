import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';
import Title from './Title';
import Content from './Content';
import { useForm, FormProvider } from "react-hook-form";


const Wrapper = styled.div`
    margin-top: 35px;
`;

const PostRecommendation = () => {
  const methods = useForm();

  return (
    <Wrapper>
      <FormProvider {...methods}>
        <Title />
        <Content />
      </FormProvider>
    </Wrapper>
  );
};

export default PostRecommendation;