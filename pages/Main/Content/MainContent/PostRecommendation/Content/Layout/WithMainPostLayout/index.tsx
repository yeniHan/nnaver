import React from 'react';
import styled from 'styled-components';
import usePostsOfThisPage from '../../../@hooks/usePostsOfThisPage';
import MainPost from './MainPost';
import PostList from './PostList';
import {useCurrentPage} from "../../../Context/PostContext";
import colors from '@styles/Colors';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 22px 0 18px 0;
  ${({ isCurrentPage }) => !isCurrentPage && `border-bottom: 1px solid ${colors.grayBorder}`};
`;



const WithMainPostLayout = () => {
  const posts = usePostsOfThisPage(1);
  const mainPost = posts?.[0];
  const otherPosts = posts?.slice(1);
  const currentPage = useCurrentPage();
  const isCurrentPage = currentPage === 1;

  return (
    <Wrapper isCurrentPage={isCurrentPage}>
      <MainPost post={mainPost} />
      <PostList posts={otherPosts} />
    </Wrapper>
  );
};

export default WithMainPostLayout;