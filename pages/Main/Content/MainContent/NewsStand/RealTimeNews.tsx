import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import getRealTimeNews from '../../../../front-apis/apis/main/getRealTimeNews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import { commonIconCSS } from '../../../@styles';

const Wrapper = styled.div`
  width: 100%;
  background-color: #f7f9fa;
  border: 1px solid #dae1e6;
`;

const InnerHeight = styled.div`
  height: 26px;
  display: flex;
  margin: 11px 15px;
  
  // swiper css customizing
  .swiper {
    margin-left: 7px;
    margin-top: 2px
  }
`;

const Media = styled.span`
  font-weight: bold;
  font-size: 13px;
  margin-top: 3px;
  margin-right: 8px;
  word-break: keep-all;
`;

const ArrowIc = styled.span`
  ${commonIconCSS};
  display: inline-block;
  width: 6px;
  height: 10px;
  background-position: -64px -396px;
  margin-top: 5px;
`;

const Title = styled.a`
  display: block;
  width: 310px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const RealTimeNews = () => {
  const [curMediaIdx, setCurMediIdx] = useState(0);
  const [realTimeNews, setRealTimeNews] = useState([]);

  useEffect(() => {
    getRealTimeNews().then((data) => {
      setRealTimeNews(data);
    });
  }, []);

  return (
    <Wrapper>
      <InnerHeight>
        <Media>{realTimeNews?.[curMediaIdx]?.media}</Media>
        <ArrowIc />
        {realTimeNews &&
        <Swiper
          modules={[Autoplay]}
          direction={'vertical'}
          autoplay={{ delay: 1000}}
          onAutoplay={(v) => {
            setCurMediIdx(v?.realIndex);
          }}
          loop={true}>
          {realTimeNews?.map((v) => (
            <SwiperSlide key={v?.url}>
              <Title href={v?.url}>{v?.title}</Title>
            </SwiperSlide>
          ))}
        </Swiper>
        }
      </InnerHeight>
    </Wrapper>
  );
};

export default RealTimeNews;
