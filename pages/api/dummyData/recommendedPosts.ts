const travelPosts = [
  {
    category: "여행+ 읽을거리",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210927/cropImg_728x360_74655871948149302.jpeg",
    title: "관광객 사라진 방콕 현지인 시크릿 스폿 풍경",
    content: "코로나가 끝나면 당장 달려갈 방콕의 현지인 명소를 추천받았다. 2020년 2월부터 태국관광청 서울사무소 소장으로 부임한 지라니 푼나욤Jiranee Poonnayom이 고심해서 고른 방콕 현지인 시크릿 명소 8곳이다.",
    writer: "여행+",
    date: "2021-09-27"
  },
  {
    category: "여행+ 핫클릭",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210916/cropImg_196x196_73720033556813048.jpeg",
    title: "부자들이 한꺼번에 여러 비행기 티켓을 예약하는 이유 ",
    content: "2년째가 훌쩍 넘어가고 있는 코로나19 팬데믹(세계대유행)에 앞으로 여행은 어떻게 변할까. 뉴욕 타임즈는 올 가을 여행업계 시장의 전망과 분석을 다룬 기사를 지난 8일(현지시간) 게재했다.",
    writer: "여행+",
    date: "2021-09-26"
  },
  {
    category: "여행+ 핫클릭",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210916/cropImg_196x196_73720039897105976.jpeg",
    title: "'오직 가을에만 볼 수 있어' 여행객 몰린다는 전국 여행 스팟",
    content: "2년째가 훌쩍 넘어가고 있는 코로나19 팬데믹(세계대유행)에 앞으로 여행은 어떻게 변할까. 뉴욕 타임즈는 올 가을 여행업계 시장의 전망과 분석을 다룬 기사를 지난 8일(현지시간) 게재했다.",
    writer: "트래블노트",
    date: "2021-09-26"
  },
  {
    category: "여행+",
    title: "'마음이 평온' 경치가 환상적인 제주 사찰 여행 ",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210916/cropImg_196x196_73720048334292821.jpeg",
    content: "날씨가 제법 쌀쌀해진 걸 보니 가을이 성큼 다가온 듯합니다. 한층 선선해진 날씨 덕분에 여행 계획을 세우는 분들이 많으실 듯한데요. 오늘은 오직 가을에만 볼 수 있는 대표적인 여행지를 소개하려고 합니다. 가을의 색으로 물든 여행지의 풍경은 어떨지 함께 살펴보도록 하죠.",
    writer: "여플 프렌즈",
    date: "2021-09-25"
  },
  {
    category: "여행+",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210928_1095%2Fupload_1632786284315BPTF8.jpg%22&type=nf340_228",
    title: "이런 곳에? 코로나 이후 회장님도 가려고 목매는 호텔",
    content:"[뜻밖의 발견] 코로나 이후 CEO도 가고 싶어 목매는 호텔.. 이유는 여행은 휴식만을 위한 것은 아니다. 낯선 곳으로 가는 여정은 많은 사람들에게 영감을 불어넣어 준다. 여행을 통해 에너지를 얻고 업무에 복귀하면 생산성이 더 높아지기도 한다. 세계 각국에서 백신 공급을 시작하면서 사람들은 다시금 코로나19 대유행 이전의 자유로운 삶이 되돌아오리라는 희망을",
    writer: "여행플러스",
    date: "2021-09-28"
  },
  {
    category: "여행+",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210927_1095%2Fupload_1632708866852FFp1L.jpg%22&type=nf340_228",
    title: "여기가 한국이야? 외국인도 놀라는 펜캉스 4",
    content:"안녕하세요 데일리호텔입니다 :) 여러분은 펜션을 선택할 때 어떤 점을 가장 중요하게 생각하시나요? 오션뷰, 마운틴뷰, 복층, 바베큐장…. 다 좋지만 이국적인 뷰가 있다면 국내에서도 외국에 온 듯한 기분을 낼 수 있어 좋은 것 같아요! ​ 그래서 오늘은 국내지만 마치 해외에 온 듯한 이국적인 뷰를 자랑하는 펜션 몇 군데를 소개해 드리려고 ",
    writer: "데일리호텔",
    date: "2021-09-28"
  },
  {
    category: "여행+",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210927_1095%2Fupload_1632722271436pqB2c.jpg%22&type=nf340_228",
    title: "'갯마을 차차차' 홍반장도 다녀간 포항 핫플레이스 5",
    content:"'갯마을 차차차' 촬영지 포항 가볼 만한 곳 5 혜진과 두식의 흔적이 가득한 촬영지와 함께 포항의 가볼 만한 맛집과 핫플 카페, 관광지를 소개한다.▼클릭▼ '갯마을 차차차' 촬영지 포항 가볼 만한 곳 5 | 에스콰이어 코리아 (Esquire Korea) 혜진과 두식의 흔적이 가득한 촬영지와 함께 포항의 가볼 만한 맛집과 핫플 카페, 관",
    writer: "에스콰이어 코리아",
    date: "2021-09-26"
  },
];

const bookPosts = [
  {
    category: "책방",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210917_1095%2Fupload_1631850705491npbW9.jpg%22&type=nf340_228",
    title: "복잡한 세상을 푸는 단순하고 강력한 도구, 수학",
    content: "복잡한 세상을 푸는 단순하고 강력한 도구원서명 : Infinite Powers: How Calculus Reveals the Secrets of the Universe 저자 : 스티븐 스트로가츠 역자 : 이충호 분야 : 과학 > 교양과학 과학 > 수학☆ 미국 아마존 수학 분야 1위 ☆ ☆ 영국 아마존 수학 분야 1위 ☆ ☆ 뉴욕 타임스 베스트셀러",
    publisher: "해나무출판사",
    date: "2021-09-27"
  },
  {
    category: "책방",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210924_1095%2Fupload_1632464199917D2tTQ.jpg%22&type=nf340_228",
    title: "떼었다 붙였다 하면서 즐기는 종이놀이 도안집",
    content: "\"소워니놀이터의 띠부띠부 가게놀이\" 드디어 소워니놀이터의 첫 책이 출간되었어요😊💓 소워니, 시워니와 많은 분들의 사랑 덕분에 책을 내게 되었어요^^ 항상 응원해주셔서 정말 감사합니다🙏🏻❤ 역할놀이 좋아하는 아이들에게 딱!인 가게놀이의 도안집책이에요♡ 돈,캐릭터,컬러링 등등 정말 열심히 준비했어요:) 친환경 99프로 항균잉크로 인쇄 돼서 더 자...",
    publisher: "소워니 놀이터",
    date: "2021-09-28"
  },
  {
    category: "책방",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210917_1095%2Fupload_1631850759271BhEqN.jpg%22&type=nf340_228",
    title: "꿈의 식물, 어떻게 심을 것인가",
    content: "요즘 도심의 크고 작은 화단이나 ‘아름답다’고 칭송받는 정원의 모습이 과거와 많이 달라졌다. 하나의 종으로 넓은 땅을 도배해 버린다거나, ‘깔별’로 꽃색을 맞추어 구획별로 줄지어 심었다가 꽃이 지면 싹 없애 버리는 일도 많이 사라졌다. 이제 사람들은 가을이 되어 말라붙은 식물의 모습도, 크고 화려하지 않지만 다양한",
    publisher: "목수책방",
    date: "2021-09-27"
  },
];

const moviePosts = [
  {
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210927/cropImg_728x360_74666977459330412.jpeg",
    category: "영화人",
    media: "씨네플레이",
    title: "1위는 1170억 원? 2021년 할리우드 배우 출연료",
    content: "얼마 전, 미국 매체 ‘버라이어티’에서 2021년 출연료를 가장 많이 받은 할리우드 배우 17명을 공개했다. 보도에 따르면 할리우드 톱스타의 출연료는 1996년 '케이블 가이' 짐 캐리 이래로 2천만 달러가 업계 표준이 되었다. 극장  개봉 영화 출연료의 경우 지금도 이 수준을 유지하는데. 넷플릭스, 아마존과 같은 글로벌 스트리밍 서비스 기업이 배급과 제작",
    date: "2021-09-27"
  },
  {
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210927/cropImg_196x196_74667056901483822.jpeg",
    category: "feature",
    media: "씨네플레이",
    title: "이스트우드, PTA, 스코세이지, 핀처 등 명감독들의 신작",
    content: "",
    date: "2021-09-24"
  },
  {
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210927/cropImg_196x196_74667200483452940.jpeg",
    category: "히어로 월드",
    title: "'당신의 취미가 뭐죠? 부활!' 생과 사를 반복하는 불멸의 히어로 ",
    content: "",
    media: "씨네플레이",
    date: "2021-09-28"
  },
  {
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210927/cropImg_196x196_74667222576795102.jpeg",
    category: "영화뉴스",
    media: "스포츠서울",
    title: "'마블 입성' 마동석, '이터널스' 홍보 열일…디즈니와 인터뷰",
    content: "",
    date: "2021-09-27"
  },
  {
    imgUrl: "",
    category: "",
    media: "",
    title: "",
    content: "",
  },
];

export default {
  travelPosts,
  bookPosts,
  moviePosts,
};
