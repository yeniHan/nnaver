import React, {useEffect} from 'react';
import styled from 'styled-components';
import getRecommendedPosts from 'front-apis/apis/main/getRecommendedPosts';
import useSWR from 'swr';
import APIS from '@constants/APIS';


const Wrapper = styled.div`
    margin-top: 35px;
`;

const Content = () => {
  const { data } = useSWR(APIS.RECOMMENDED_POSTS, getRecommendedPosts);
  const posts = data?.posts;

  useEffect(() => {
    console.log('posts:', data);
  }, [posts])
  return (
    <Wrapper>

    </Wrapper>
  );
};

export default Content;