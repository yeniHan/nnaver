import React from 'react';
import styled from 'styled-components';
import Article from 'types/Article';

const Wrapper = styled.a`
  width: 196px;
`;

const Img = styled.img`
  width: 100%;
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
