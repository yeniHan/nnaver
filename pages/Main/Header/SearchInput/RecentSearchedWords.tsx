import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import colors from '../../../@styles/Colors';
import deleteRecentSearchedWords from '../../../front-apis/apis/deleteRecentSearchedWords';
import { commonIconCSS2 } from '../../@styles/index';
import getRecentSearchedWordsApi from "../../../front-apis/apis/getRecentSearchedWords";

const Wrapper = styled.div`
  border: 1px solid ${colors.gray1};
  border-top: 0;
  border-radius: 0 0 6px 6px;
  
  > div {
    padding: 7px 8px;
  }
  
  > li {
    padding: 5px 8px;
  }
`;

const Title = styled.div`
  font-size: 14px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
`;

const SearchIcWrapper = styled.div`
  background-color: ${colors.gray1};
  width: 18px;
  height: 18px;
  border: 1px solid rgba(0,0,0,.04);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIc = styled.span`
  ${commonIconCSS2};
  width: 12px;
  height: 12px;
  background-position: -76px -260px;
`;

const TextWrapper = styled.div`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const SearchedWords = styled.span`
  font-size: 14px;
  margin-left: 8px;
`;

const Date = styled.span`
  font-size: 13px;
`;

const DeleteIc = styled.button`
  ${commonIconCSS2};
  width: 11px;
  height: 11px;
  background-position: -90px -260px;
  margin: 4px 0 4px 11px;
`;

const BottomLine = styled.div`
  border-top: 1px solid #f1f4f6;
  border-radius: 0 0 6px 6px;
  font-size: 13px;
  background-color: ${colors.gray2};
  display: flex;
  justify-content: space-between;
`;



const RecentSearchedWords = ({ folded }: { folded: boolean }) => {
  const [recentSearchedWords, setRecentSearchedWords ] = useState([]);

  const getRecentSearchedWords = () => {
    getRecentSearchedWordsApi().then((data) => {
      setRecentSearchedWords(data);
    });
  };

  const deleteItem = (id?: string, all = false) => {
    deleteRecentSearchedWords({
      all,
      id,
    }).then(() => getRecentSearchedWords());
  };

  useEffect(() => {
    if (!folded) {
      getRecentSearchedWords();
    }
  }, [folded]);

  if (folded) return null;

  return (
    <Wrapper>
      <Title>
        <span>최근 검색어</span><span>전체 삭제</span>
      </Title>
      {recentSearchedWords?.map(({ id, words, date }) => (
        <Item key={id}>
          <SearchIcWrapper>
            <SearchIc />
          </SearchIcWrapper>
          <TextWrapper>
            <SearchedWords>{words}</SearchedWords>
            <span>
              <Date>{date}</Date>
              <DeleteIc onClick={() => deleteItem(id)}/>
            </span>
          </TextWrapper>
        </Item>
      ))}
      <BottomLine>
        <button>도움말</button>
        <button>자동저장 끄기</button>
      </BottomLine>
    </Wrapper>
  );

};

export default RecentSearchedWords;
