import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Content from './Content';
import CategoryNavigator from './CategoryNavigator';
import PreferedCategoryCheckboxForm from './PreferedCategoryCheckboxForm';
import useSWR from "swr";
import APIS from "../../../../@constants/APIS";
import getRecommendedPosts from "../../../../front-apis/apis/main/getRecommendedPosts";
import { PostProvider } from './Context/PostContext';


const Wrapper = styled.div`
    margin-top: 35px;
`;

const PostRecommendation = () => {
  useSWR(APIS.RECOMMENDED_POSTS, getRecommendedPosts);
  const [showPreferedCategoryCheckboxForm, setShowPreferedCategoryCheckboxForm] = useState(false);

  return (
    <Wrapper>
      <PostProvider>
        <Title
          showPreferedCategoryCheckboxForm={showPreferedCategoryCheckboxForm}
          setShowPreferedCategoryCheckboxForm={setShowPreferedCategoryCheckboxForm} />
        {showPreferedCategoryCheckboxForm && <PreferedCategoryCheckboxForm setShowPreferedCategoryCheckboxForm={setShowPreferedCategoryCheckboxForm} />}
        <CategoryNavigator />
        <Content />
      </PostProvider>
    </Wrapper>
  );
};

export default PostRecommendation;