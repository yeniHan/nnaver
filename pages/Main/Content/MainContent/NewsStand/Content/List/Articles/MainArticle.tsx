import React from 'react';
import styled from 'styled-components';
import Article from 'types/Article';
import { MOBILE_WIDTH } from '@constants/MEDIA_WITHES';

const Wrapper = styled.a`
  width: 196px;

  @media (max-width: ${MOBILE_WIDTH}) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 130px;
  object-fit: contain;
  background-color: black;
`;

const Title = styled.div`
  font-weight: bold;
  margin-top: 12px;

  :hover {
    text-decoration: underline;
  }
`;


const MainArticle = ({ article }: { article: Article}) => {
  return (
    <Wrapper href={article?.url} target="_blank">
      <Img src={article?.imgUrl}/>
      <Title>{article?.title}</Title>
    </Wrapper>
  );
};

export default MainArticle;
