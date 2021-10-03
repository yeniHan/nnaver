import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Content from './Content';
import CategoryNavigator from './CategoryNavigator';
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
        <CategoryNavigator />
        <Content />
      </FormProvider>
    </Wrapper>
  );
};

export default PostRecommendation;