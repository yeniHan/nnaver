import React from 'react';
import styled from 'styled-components';
import Article from 'types/Article';
import MainArticle from './MainArticle';
import colors from '@styles/Colors';
import { ellipsisCss } from '@styles';
import { useWatch } from "react-hook-form";
import { MEDIA } from "../../../../../@constants/FIELD_NAMES";

const Wrapper = styled.div`
  padding: 17px 24px;
  border-top: 1px solid ${colors.grayBorder};
  border-bottom: 1px solid ${colors.grayBorder};
  width: calc(100% - 242px);
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedMedia = styled.div`
    margin-bottom: 9px;
`;

const ArticleList = styled.div`
  width: calc(100% - 242px);
`;

const Title = styled.a`
  display: block;
  ${ellipsisCss};
  line-height: 1.8;

  :hover {
    text-decoration: underline;
  }
`;



const Articles = ({ articles }: { articles: Article[]}) => {
  const selectedMedia = useWatch({
    name: MEDIA,
  });

  if (articles?.length <= 0) return null;

  return (
    <Wrapper>
      <SelectedMedia>{selectedMedia?.name}</SelectedMedia>
      <ContentWrapper>
        <MainArticle article={articles?.[0]}/>
        <ArticleList>
          {articles
            ?.map((v) => (<Title key={v?.url} href={v?.url} target="_blank">{v?.title}</Title>))}
        </ArticleList>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Articles;
