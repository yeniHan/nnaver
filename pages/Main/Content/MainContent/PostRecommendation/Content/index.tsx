import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';
import { useFormContext } from "react-hook-form";
import getRecommendedPosts from 'front-apis/apis/main/getRecommendedPosts';
import { POSTS } from './@constants/FIELD_NAMES';


const Wrapper = styled.div`
    margin-top: 35px;
`;

const Content = () => {

  useEffect(() => {
    const posts = getRecommendedPosts();
  }, []);

  return (
    <Wrapper>

    </Wrapper>
  );
};

export default Content;