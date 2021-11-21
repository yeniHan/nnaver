import React, { useState } from 'react';
import styled from 'styled-components';
import Media from "types/Media";
import colors from '@styles/Colors';
import deleteNewsStandsMedia from 'front-apis/apis/main/deleteNewsStandsMedia';
import postNewsStandsMedia from 'front-apis/apis/main/postNewsStandsMedia';
import useInitArticlesAndMedias from '../@hooks/useInitArticlesAndMedias';

const Wrapper = styled.td`
  border: 1px solid ${colors?.grayBorder};
  flex: 1;
  height: 65px;
  display: inherit;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ isMouseOvered }) => isMouseOvered && colors?.grayBackground}
`;

const MediaImg = styled.img`
  height: 20px;
`;


const Button = styled.button`
  font-size: 14px;
  padding: 10px;
  border: 1px solid ${colors?.grayBorder};
  background-color: white;
  
  :nth-of-type(2) {
    border-left-color: transparent;
  }

  &:hover {
    border-color: ${colors?.darkGrayBorder};
  }
`;


const Td = ({ media }: { media: Media }) => {
  const [isMouseOvered, setIsMouseOvered] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const isSubscribed = media?.isSubscribed;

  useInitArticlesAndMedias([trigger]);

  const toggleSubscription = async () => {
    if (isSubscribed) await deleteNewsStandsMedia({ media: media?.id }).then(() => setTrigger((prev) => !prev));
    else await postNewsStandsMedia({ media: media?.id }).then(() => setTrigger((prev) => !prev));
  };

  if (!media) {
    return (
      <Wrapper />
    );
  }

  return (
    <Wrapper
      onMouseOver={() => setIsMouseOvered(true)}
      onMouseLeave={() => setIsMouseOvered(false)}
      isMouseOvered={isMouseOvered}
    >
      {!isMouseOvered ?
        (
          <MediaImg src={media?.imgUrl} />
        )
        :
        (
          <div>
            <Button onClick={toggleSubscription}>{isSubscribed? '해지' : '구독'}</Button>
            <Button>
              <a href={media?.newsStandUrl}>
              기사보기
              </a>
            </Button>
          </div>
        )
      }
    </Wrapper>
  );
};

export default Td;
