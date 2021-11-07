const travelPosts = [
  {
    id: "tr-1",
    link: 'https://blog.naverpp.com/the_trip/222518142730',
    category: "travel",
    subCategory: "여행+ 읽을거리",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210927/cropImg_728x360_74655871948149302.jpeg",
    title: "관광객 사라진 방콕 현지인 시크릿 스폿 풍경",
    content: "코로나가 끝나면 당장 달려갈 방콕의 현지인 명소를 추천받았다. 2020년 2월부터 태국관광청 서울사무소 소장으로 부임한 지라니 푼나욤Jiranee Poonnayom이 고심해서 고른 방콕 현지인 시크릿 명소 8곳이다.",
    from: "여행+",
    date: "2021-09-27"
  },
  {
    id: "tr-2",
    link: "https://post.naver.com/viewer/postView.naver?volumeNo=32357529&memberNo=30482008",
    category: "travel",
    subCategory: "여행+ 핫클릭",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210916/cropImg_196x196_73720033556813048.jpeg",
    title: "부자들이 한꺼번에 여러 비행기 티켓을 예약하는 이유 ",
    content: "2년째가 훌쩍 넘어가고 있는 코로나19 팬데믹(세계대유행)에 앞으로 여행은 어떻게 변할까. 뉴욕 타임즈는 올 가을 여행업계 시장의 전망과 분석을 다룬 기사를 지난 8일(현지시간) 게재했다.",
    from: "여행+",
    date: "2021-09-26"
  },
  {
    id: "tr-3",
    link: "https://m.post.naver.com/viewer/postView.naver?volumeNo=32282040&memberNo=47308766",
    category: "travel",
    subCategory: "여행+ 핫클릭",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210916/cropImg_196x196_73720039897105976.jpeg",
    title: "'오직 가을에만 볼 수 있어' 여행객 몰린다는 전국 여행 스팟",
    content: "2년째가 훌쩍 넘어가고 있는 코로나19 팬데믹(세계대유행)에 앞으로 여행은 어떻게 변할까. 뉴욕 타임즈는 올 가을 여행업계 시장의 전망과 분석을 다룬 기사를 지난 8일(현지시간) 게재했다.",
    from: "트래블노트",
    date: "2021-09-26"
  },
  {
    id: "tr-4",
    link: 'https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=korea_brand&logNo=10132305704',
    category: "travel",
    subCategory: "여행+",
    title: "'마음이 평온' 경치가 환상적인 제주 사찰 여행 ",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210916/cropImg_196x196_73720048334292821.jpeg",
    content: "날씨가 제법 쌀쌀해진 걸 보니 가을이 성큼 다가온 듯합니다. 한층 선선해진 날씨 덕분에 여행 계획을 세우는 분들이 많으실 듯한데요. 오늘은 오직 가을에만 볼 수 있는 대표적인 여행지를 소개하려고 합니다. 가을의 색으로 물든 여행지의 풍경은 어떨지 함께 살펴보도록 하죠.",
    from: "여플 프렌즈",
    date: "2021-09-25"
  },
  {
    id: "tr-5",
    link: 'https://blog.naver.com/PostView.naver?blogId=the_trip&logNo=222513225780&parentCategoryNo=&categoryNo=145&viewDate=&isShowPopularPosts=true&from=search',
    category: "travel",
    subCategory: "여행+",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210928_1095%2Fupload_1632786284315BPTF8.jpg%22&type=nf340_228",
    title: "이런 곳에? 코로나 이후 회장님도 가려고 목매는 호텔",
    content:"[뜻밖의 발견] 코로나 이후 CEO도 가고 싶어 목매는 호텔.. 이유는 여행은 휴식만을 위한 것은 아니다. 낯선 곳으로 가는 여정은 많은 사람들에게 영감을 불어넣어 준다. 여행을 통해 에너지를 얻고 업무에 복귀하면 생산성이 더 높아지기도 한다. 세계 각국에서 백신 공급을 시작하면서 사람들은 다시금 코로나19 대유행 이전의 자유로운 삶이 되돌아오리라는 희망을",
    from: "여행플러스",
    date: "2021-09-28"
  },
  {
    id: "tr-6",
    link: 'https://m.post.naver.com/viewer/postView.naver?volumeNo=32413549&memberNo=397230',
    category: "travel",
    subCategory: "여행+",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210927_1095%2Fupload_1632708866852FFp1L.jpg%22&type=nf340_228",
    title: "여기가 한국이야? 외국인도 놀라는 펜캉스 4",
    content:"안녕하세요 데일리호텔입니다 :) 여러분은 펜션을 선택할 때 어떤 점을 가장 중요하게 생각하시나요? 오션뷰, 마운틴뷰, 복층, 바베큐장…. 다 좋지만 이국적인 뷰가 있다면 국내에서도 외국에 온 듯한 기분을 낼 수 있어 좋은 것 같아요! ​ 그래서 오늘은 국내지만 마치 해외에 온 듯한 이국적인 뷰를 자랑하는 펜션 몇 군데를 소개해 드리려고 ",
    from: "데일리호텔",
    date: "2021-09-28"
  },
  {
    id: "tr-7",
    link: 'https://m.blog.naver.com/cingu77/222525384148',
    category: "travel",
    subCategory: "여행+",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210927_1095%2Fupload_1632722271436pqB2c.jpg%22&type=nf340_228",
    title: "'갯마을 차차차' 홍반장도 다녀간 포항 핫플레이스 5",
    content:"'갯마을 차차차' 촬영지 포항 가볼 만한 곳 5 혜진과 두식의 흔적이 가득한 촬영지와 함께 포항의 가볼 만한 맛집과 핫플 카페, 관광지를 소개한다.▼클릭▼ '갯마을 차차차' 촬영지 포항 가볼 만한 곳 5 | 에스콰이어 코리아 (Esquire Korea) 혜진과 두식의 흔적이 가득한 촬영지와 함께 포항의 가볼 만한 맛집과 핫플 카페, 관",
    from: "에스콰이어 코리아",
    date: "2021-09-26"
  },
  {
    id: "tr-8",
    link: 'https://blog.naver.com/the_trip/222543877588',
    category: "travel",
    subCategory: "여행+ 핫플레이스",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20211027/cropImg_728x360_77253191141557377.jpeg",
    title: "힐링이 필요할 때 멍때리기 좋은 곳 21",
    content:"멍하니 불을 바라보면 불멍 멍하니 물을 바라보면 물멍 멍하니 숲을 바라보면 숲멍 . . 우리 게코님들도 그냥 멍하니 바라 보기만 해도 잡념이 사라지는 나만의 힐링 장소가 있으신가요?업무와 일상생활에 지쳐 재충전을 하고 싶어도 시간이 없으시다고요?그럼 125 모두 모여주세요~♥오늘은 언제 어디서든 오롯이 나만의 시간을 가질 수 있는 패스트힐링 시",
    from: "게티이미지코리아",
    date: "2021-09-30"
  },
  {
    id: "tr-8",
    link: 'https://blog.naver.com/joeun___/222532736851',
    category: "travel",
    subCategory: "여행+",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20211105_1095%2Fupload_1636071136275INVkA.jpg%22&type=nf340_228",
    title: "SNS서 핫하다고?! 안동의 숨은 여행지라는 이곳",
    content:"신비롭고 평화로운 분위기의 안동 낙강물길공원은 산책하기에도 좋고 인생사진을 찍기에도 좋은 공원입니다. '비밀의 숲'이라 불리기도 하는 데, 지금은 비밀의 숲이라는 말이 무색하게 아는 사람들이 늘고 붐비지만 그럼에도 자연의 정취를 만끽하기에 충분한 곳입니다. 개인적으로 2박3일 안동 여행에서 손에 꼽힐만큼 좋았던 곳이에요. 안동 낙강물길공원 주차 네비...",
    from: "조은하루",
    date: "2021-10-03"
  },
];

const bookPosts = [
  {
    id: "bo-1",
    link: 'https://post.naver.com/viewer/postView.naver?volumeNo=32376940&memberNo=21480482&searchKeyword=%25EB%25AF%25B8%25EC%25A0%2581%25EB%25B6%2584%25EC%259D%2598%2520%25ED%259E%2598%2520-%2520%25EB%25B3%25B5%25EC%259E%25A1%25ED%2595%259C%2520%25EC%2584%25B8%25EC%2583%2581%25EC%259D%2584%2520%25ED%2591%25B8%25EB%258A%2594%2520%25EB%258B%25A8%25EC%2588%259C%25ED%2595%2598%25EA%25B3%25A0%2520%25EA%25B0%2595%25EB%25A0%25A5%25ED%2595%259C%2520%25EB%258F%2584%25EA%25B5%25AC&searchRank=1',
    category: "book",
    subCategory: "책방",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210917_1095%2Fupload_1631850705491npbW9.jpg%22&type=nf340_228",
    title: "복잡한 세상을 푸는 단순하고 강력한 도구, 수학",
    content: "복잡한 세상을 푸는 단순하고 강력한 도구원서명 : Infinite Powers: How Calculus Reveals the Secrets of the Universe 저자 : 스티븐 스트로가츠 역자 : 이충호 분야 : 과학 > 교양과학 과학 > 수학☆ 미국 아마존 수학 분야 1위 ☆ ☆ 영국 아마존 수학 분야 1위 ☆ ☆ 뉴욕 타임스 베스트셀러",
    from: "해나무출판사",
    date: "2021-09-27"
  },
  {
    id: "bo-2",
    link: 'https://blog.naver.com/PostView.naver?blogId=sidae_in&logNo=222296237581&parentCategoryNo=&categoryNo=10&viewDate=&isShowPopularPosts=true&from=search',
    category: "book",
    subCategory: "책방",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210924_1095%2Fupload_1632464199917D2tTQ.jpg%22&type=nf340_228",
    title: "떼었다 붙였다 하면서 즐기는 종이놀이 도안집",
    content: "\"소워니놀이터의 띠부띠부 가게놀이\" 드디어 소워니놀이터의 첫 책이 출간되었어요😊💓 소워니, 시워니와 많은 분들의 사랑 덕분에 책을 내게 되었어요^^ 항상 응원해주셔서 정말 감사합니다🙏🏻❤ 역할놀이 좋아하는 아이들에게 딱!인 가게놀이의 도안집책이에요♡ 돈,캐릭터,컬러링 등등 정말 열심히 준비했어요:) 친환경 99프로 항균잉크로 인쇄 돼서 더 자...",
    from: "소워니 놀이터",
    date: "2021-09-28"
  },
  {
    id: "bo-3",
    link: 'https://post.naver.com/viewer/postView.naver?volumeNo=32280392&memberNo=29506376&searchKeyword=%EC%8B%9D%EC%9E%AC%20%EB%94%94%EC%9E%90%EC%9D%B8',
    category: "book",
    subCategory: "책방",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20210917_1095%2Fupload_1631850759271BhEqN.jpg%22&type=nf340_228",
    title: "꿈의 식물, 어떻게 심을 것인가",
    content: "요즘 도심의 크고 작은 화단이나 ‘아름답다’고 칭송받는 정원의 모습이 과거와 많이 달라졌다. 하나의 종으로 넓은 땅을 도배해 버린다거나, ‘깔별’로 꽃색을 맞추어 구획별로 줄지어 심었다가 꽃이 지면 싹 없애 버리는 일도 많이 사라졌다. 이제 사람들은 가을이 되어 말라붙은 식물의 모습도, 크고 화려하지 않지만 다양한",
    from: "목수책방",
    date: "2021-09-27"
  },
];

const moviePosts = [
  {
    id: "mo-1",
    link: 'https://m.post.naver.com/viewer/postView.naver?volumeNo=32425040&memberNo=31724756',
    category: "movie",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210927/cropImg_728x360_74666977459330412.jpeg",
    subCategory: "영화人",
    from: "씨네플레이",
    title: "1위는 1170억 원? 2021년 할리우드 배우 출연료",
    content: "얼마 전, 미국 매체 ‘버라이어티’에서 2021년 출연료를 가장 많이 받은 할리우드 배우 17명을 공개했다. 보도에 따르면 할리우드 톱스타의 출연료는 1996년 '케이블 가이' 짐 캐리 이래로 2천만 달러가 업계 표준이 되었다. 극장  개봉 영화 출연료의 경우 지금도 이 수준을 유지하는데. 넷플릭스, 아마존과 같은 글로벌 스트리밍 서비스 기업이 배급과 제작",
    date: "2021-09-27"
  },
  {
    id: "mo-2",
    link: 'https://blog.naverpp.com/cine_play/222505041170',
    category: "movie",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210927/cropImg_196x196_74667056901483822.jpeg",
    subCategory: "feature",
    from: "씨네플레이",
    title: "이스트우드, PTA, 스코세이지, 핀처 등 명감독들의 신작",
    content: "",
    date: "2021-09-24"
  },
  {
    id: "mo-3",
    link: 'https://blog.naver.com/PostView.naver?blogId=nitko&logNo=222515961271&parentCategoryNo=&categoryNo=121&viewDate=&isShowPopularPosts=true&from=search',
    category: "movie",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210927/cropImg_196x196_74667200483452940.jpeg",
    subCategory: "히어로 월드",
    title: "'당신의 취미가 뭐죠? 부활!' 생과 사를 반복하는 불멸의 히어로 ",
    content: "",
    from: "씨네플레이",
    date: "2021-09-28"
  },
  {
    id: "mo-4",
    link: 'https://m.post.naver.com/viewer/postView.naver?volumeNo=19306413&memberNo=41590412&searchKeyword=%EB%A7%88%EB%8F%99%EC%84%9D&searchRank=366',
    category: "movie",
    imgUrl: "https://s.pstatic.net/static/www/mobile/edit/20210927/cropImg_196x196_74667222576795102.jpeg",
    subCategory: "영화뉴스",
    from: "스포츠서울",
    title: "'마블 입성' 마동석, '이터널스' 홍보 열일…디즈니와 인터뷰",
    content: "자타 공인 국내 최고의 액션스타로 자리매김한 '팔뚝요정' 마동석(48·사진)이 드디어 할리우드에 진출한다. <부산행>(2016년 개봉) 출연 이후 할리우드 관계자들로부터 끊임없는 러브콜을 받던 마동석은 밀려드는 국내작 스케줄로 해외 진출을 잠시 미뤘으나 최근 '마블 스튜디오' 측에서 캐스팅 제안을 해오면서 본격적으로 출연문제를 논의 중인 것으로 알려졌다.",
    date: "2021-09-27"
  },
  {
    id: "mo-5",
    link: 'https://post.naver.com/viewer/postView.naver?volumeNo=32673903&memberNo=46705016',
    category: "movie",
    imgUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20211106_1095%2Fupload_1636176707808csWbU.jpg%22&type=nf340_228",
    subCategory: "영화",
    from: "버터팝콘",
    title: "‘15년 만의 리메이크’ 네티즌들이 뽑은 ‘궁 2022’ 가상 캐스팅",
    content: "주관 100% 사심은 200% \<궁\> 가상 캐스팅2006년, 엄청난 센세이션을 불러일으킨 드라마 \<궁\>을 기억하시나요? 당시 신인이었던 윤은혜, 주지훈, 송지효를 단숨에 스타로 만든 작품이기도 했는데요. 그런 \<궁\>이 15년 만에 리메이크가 된다고 합니다. 내년 촬영 시작을 목표로 아직 캐스팅 전 단계라 네티즌들도 가상 캐스",
    date: "2021-09-29"
  }
];

export default [
  ...travelPosts,
  ...bookPosts,
  ...moviePosts,
];
