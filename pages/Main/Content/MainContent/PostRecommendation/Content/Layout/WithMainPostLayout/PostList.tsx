import React from 'react';
import styled from 'styled-components';
import PostType from 'types/Post';
import ZoommingNextImg from 'Main/@components/ZoommingNextImage';
import { categegoryCss, titleCss, fromCss } from '../@styles/feildsCss';
import { ellipsisMultiCss } from '@styles';

const Wrapper = styled.div`
  flex: 1;
`;

const PostWrapper = styled.a`
  display: flex;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledZoommingNextImg = styled(ZoommingNextImg)`
  width: 98px;
  height: 98px;
  margin-right: 18px;
`;

const ContentWrapper = styled.div`
  padding: 4px 30px 0 0;
  width: calc(100% - 158px);
`;

const Category = styled.div`
  ${categegoryCss};
`;

const Title = styled.div`
  ${titleCss};
  margin-top: 6px;
  ${ellipsisMultiCss};
  -webkit-line-clamp: 2;
`;

const From = styled.div`
  ${fromCss};
  margin-top: 5px;
`;


const PostList = ({ posts }: { posts: PostType[] }) => {
  return (
    <Wrapper>
      {posts?.map((v) => (
        <PostWrapper key={v?.id} href={v?.link} target="_blank">
          <StyledZoommingNextImg src={v?.imgUrl} />
          <ContentWrapper>
            <Category category={v?.category}>{v?.subCategory}</Category>
            <Title>{v?.title}</Title>
            <From>{v?.from}</From>
          </ContentWrapper>
        </PostWrapper>
      ))}
    </Wrapper>
  );
};

export default PostList;
