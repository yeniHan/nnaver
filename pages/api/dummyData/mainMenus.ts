const mainMenus = {
  topBar: {
    primary: [
      {
        id: '1',
        text: '메일',
        hasIcon: true,
        url: 'https://m.mail.naver.com/mobile/folder/0/all',
      },
      {
        id: '2',
        text: '까페',
        hasIcon: false,
        url: 'https://section.cafe.naver.com/ca-fe/',
      },
      {
        id: '3',
        text: '블로그',
        hasIcon: false,
        url: 'https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0'
      },
      {
        id: '4',
        text: '지식iN',
        hasIcon: false,
        url: 'https://kin.naver.com/',
      },
      {
        id: '5',
        text: '쇼핑',
        hasIcon: false,
        url: 'https://shopping.naver.com/home/m/index.naver'
      },
      {
        id: '6',
        hasIcon: true,
        tabletText: 'Live쇼핑',
        url: 'https://shoppinglive.naver.com/home'
      },
      {
        id: '7',
        text: 'Pay',
        hasIcon: false,
        url: 'https://order.pay.naver.com/home'
      },
      {
        id: '7',
        text: 'TV',
        hasIcon: true,
        url: 'https://tv.naver.com/'
      },
    ],
    nonPrimary : [
      {
        id: '1',
        text: '사전',
        url: '',
      },
      {
        id: '2',
        text: '뉴스',
        url: '',
      },
      {
        id: '3',
        text: '증권',
        url: 'https://finance.naver.com/',
      },
      {
        id: '4',
        text: '부동산',
        url: 'https://land.naver.com/',
      },
      {
        id: '5',
        text: '지도',
        url: 'https://map.naver.com/v5/',
      },
      {
        id: '6',
        text: 'VIBE',
        url: 'https://vibe.naver.com/today',
      },
      {
        id: '7',
        text: '책',
        url: 'https://book.naver.com/',
      },
      {
        id: '8',
        text: '웹툰',
        url: 'https://comic.naver.com/index',
      },
    ]
  },
  topBarFolding: {
    ['ㄱ-ㄷ']: [
      {
        text: '날씨',
        url: 'https://weather.naver.com/',
      },
      {
        text: '네*버 My Car',
        url: 'https://new-m.pay.naver.com/mycar/apply',
      },
      {
        text: '네*버 게임',
        url: 'https://game.naver.com/',
      },
      {
        text: '네*버 예약',
        url: 'https://booking.naver.com/my/bookings',
      },
      {
        text: '뉴스',
        url: 'https://news.naver.com/',
      },
      {
        text: '데이터랩',
        url: 'https://datalab.naver.com/',
      }
    ],
    ['ㅂ-ㅅ']: [
      {
        text: '밴드',
        url: 'https://band.us/home',
      },
      {
        text: '부동산',
        url: 'https://land.naver.com/',
      },
      {
        text: '시리즈',
        url: 'https://series.naver.com/novel/home.series?isWebtoonAgreePopUp=true',
      }
    ],
    ['ㅇ']: [
      {
        text: '엑스퍼트',
        url: 'https://m.expert.naver.com/',
      },
      {
        text: '영화',
        url: 'https://movie.naver.com/',
      },
      {
        text: '오디오클립',
        url: 'https://audioclip.naver.com/',
      },
      {
        text: '오피스',
        url: 'https://office.naver.com/',
      },
      {
        text: '웨일',
        url: 'https://whale.naver.com/',
      },
      {
        text: '웹툰',
        url: 'https://comic.naver.com/index',
      }

    ],
    ['ㅈ-ㅊ']: [
      {
        text: '자동차',
        url: 'https://auto.naver.com/',
      },
      {
        text: '주소',
        url: 'https://contact.naver.com/',
      },
      {
        text: '증권',
        url: 'https://finance.naver.com/',
      },
      {
        text: '지도',
        url: 'https://map.naver.com/v5/',
      },
      {
        text: '지식백과',
        url: 'https://terms.naver.com/',
      }
    ],
    ['ㅋ-ㅎ']: [
      {
        text: '캘린더',
        url: 'https://calendar.naver.com/main',
      },
      {
        text: '클로바더빙',
        url: 'https://clovadubbing.naver.com/',
      },
      {
        text: '파파고',
        url: 'https://papago.naver.com/',
      },
      {
        text: '학술정보',
        url: 'https://academic.naver.com/',
      },
      {
        text: '항공권',
        url: 'https://beta-flight.naver.com/',
      }
    ],
    ['A-Z']: [
      {
        text: 'KEEP',
        url: 'https://keep.naver.com/',
      },
      {
        text: 'Modoo',
        url: 'https://www.modoo.at/home',
      },
      {
        text: 'MyBox',
        url: 'https://mybox.naver.com/#/my',
      },
      {
        text: 'TV 연예',
        url: 'https://entertain.naver.com/home',
      },
    ],
    ['사전']: [
      {
        text: '사전',
        url: 'https://dict.naver.com/',
      },
      {
        text: '국어사전',
        url: 'https://ko.dict.naver.com/#/main',
      },
      {
        text: '영어/영영사전',
        url: 'https://en.dict.naver.com/#/main',
      },
      {
        text: '일본어사전',
        url: 'https://ja.dict.naver.com/#/main',
      },
      {
        text: '중국어사전',
        url: 'https://zh.dict.naver.com/#/main',
      },
    ]
  },
};

export default mainMenus;