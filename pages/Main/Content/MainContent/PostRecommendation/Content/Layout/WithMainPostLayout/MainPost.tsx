import React from 'react';
import styled from 'styled-components';
import PostType from 'types/Post';
import ZoommingNextImg from 'Main/@components/ZoommingNextImage';
import { categegoryCss, titleCss, constentCss, fromCss } from '../@styles/feildsCss';
import { ellipsisMultiCss } from '@styles';
import ZoommingNextImage from "Main/@components/ZoommingNextImage";

const Wrapper = styled.a`
  flex: 1;
  margin-right: 22px;
`;

const StyledZoommingNextImage = styled(ZoommingNextImage)`
  width: 100%;
  height: 50%;
`;

const ContentWrapper = styled.div`
  padding: 16px 18px 0 0;
`;

const Category = styled.div`
  ${categegoryCss};
`;

const Title = styled.div`
  ${titleCss};
  margin-top: 6px;
`;

const Content = styled.div`
  ${constentCss};
  margin-top: 5px;
  height: 41px;
  ${ellipsisMultiCss};
  -webkit-line-clamp: 2;
`;

const From = styled.div`
  ${fromCss};
  margin-top: 4px;
`;



const MainPost = ({ post }:{ post: PostType }) => {
  const link = post?.link;
  const imgUrl = post?.imgUrl;
  const subCategory = post?.subCategory;
  const category = post?.category;
  const title = post?.title;
  const content = post?.content;
  const from = post?.from;

  return (
    <Wrapper href={link} target="_blank">
      <StyledZoommingNextImage src={imgUrl} />
      <ContentWrapper>
        <Category category={category}>{subCategory}</Category>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <From>{from}</From>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MainPost;