import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Content from './Content';
import CategoryNavigator from './CategoryNavigator';
import useSWR from "swr";
import APIS from "../../../../@constants/APIS";
import getRecommendedPosts from "../../../../front-apis/apis/main/getRecommendedPosts";
import { PostProvider } from './Context/PostContext';


const Wrapper = styled.div`
    margin-top: 35px;
`;

const PostRecommendation = () => {
  useSWR(APIS.RECOMMENDED_POSTS, getRecommendedPosts);

  return (
    <Wrapper>
      <PostProvider>
        <Title />
        <CategoryNavigator />
        <Content />
      </PostProvider>
    </Wrapper>
  );
};

export default PostRecommendation;