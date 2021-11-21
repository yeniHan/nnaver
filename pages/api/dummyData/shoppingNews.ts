// 7 artcles per page

const shoppingNews = [
  {
    id: 1,
    shoppingMall: '동춘상회',
    title: '블랙프라이데이 최대 50% 할인!',
    link: 'https://www.dongchoonmarket.com/product/list.html?cate_no=222&utm_source=naverSB&utm_medium=SB&utm_campaign=1115_SB&utm_content=text&NaPm=ct%3Dkw637vi8%7Cci%3D1c4d3542f5636d6daaa78074d122427c8ff31b8a%7Ctr%3Dsbtpb%7Csn%3D2718218%7Chk%3Dc44296244572ce3115ebf3a6a905be19b7958fa0',
  },
  {
    id: 2,
    shoppingMall: 'ONIRICO',
    title: '디퓨저 구매시 차량용방향제도!',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=UAsKgdxU5ytC5gbQCBB0sf%2F%2F%2Fw%3D%3Ds0IInPFtY55qNBG8NlrcAJvTnKaiflg3r%2F29qhE6gn2OnqKjg9VER9dNuXLIlGQswrHOHKtNhMzIHibml6QlTTcfwfeBZ%2FTR%2BWeh3xWWtRLVxDkrUTedYW%2BQvo%2BobMSeKNkC1DPCHR%2By7bRVCmmK5TTTNc6dabJWk9VfN%2BfJwCZrItMMzsVlwiw9msAxk8j6pBjCs%2B0PiGD9BC4eoNsrOnFKwI5jK5WxtPme98%2FvKtBb0dzqh38Av34%2FiTpBQ2ToAAGzlDQZF43s6%2BNPvuEjt8btN7WT3YMDZAkC6DkXxJpgA1%2BFh5wBNmXlpWdKmfBGGmi1eQa4vjO1iuZVhpnDrJIEj%2F3mD1m%2F9q8jLnJbJ7LkOGms4gQ495b387517rXY2lYnZOaMRmHjpZMQb7BK0FA%3D%3D&y=E3RUJ9DGORjPedwSE4%2BnTv%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XQJh4tnnRUbq6iydVw%2B%2BotKHPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UafRmgWT6jINWLA1cn%2BPAzIPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2Fwyyt%2FpczEB2SYaY0RnFUgC0I483y0qBwKSF%2FIV6fYOdIelyR%2FuSE1pWykJlYC8Aawg4IW3hL4xsk5xmpiY5YjgM9wYSOSIb%2BVY27rFUidCUybZBctoAd9R%2BuIb41Z6uJE2W8LM7ztz%2F5lm9EoeYjSf%2BgYrdeP55ZT4Qov6J2SM3M%2B2%2B3bp5QfHRdudPih0kqRqEqCaYz88RWEPxJLGlS58t%2F4ENz8QVvayK8KHvL3AjsDoK%2F7wx2Y1PLdi80u%2Fs9NOpZSOLA4Z%2BmujXM0mhDlIY8pqkj7j%2BU1pkOXGCSyEUYMKo%2BFOWbwcx9Ba6wjrlZgZGp9ZXQty2aQSFNQGUO055U3MFWFDp6wbKGvB812LCu2np%2FpmETZlXdQGSs7smmDG9wurtZ2i8LNhXrBmcGeURpZ',
  },
  {
    id: 3,
    shoppingMall: '트와이닝스',
    title: '쌀쌀한 지금 딱 홍차 SALE',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=Qk%2FEWkFHFaPbnW0C%2B49K9f%2F%2F%2Fw%3D%3DsDour%2FA6jXSyz%2B2T8y0v8HwfT0xOhfFjBfbCDppuULjI1y05aTdjU%2BRxZ%2F3dO4xOdrHOHKtNhMzIHibml6QlTTSvFwAoD019E58Pp2Lp1myD7Gk7qT19StgY5X6o7IC6cvkxkoYILIuYxWT7%2FVXU%2F2jTNc6dabJWk9VfN%2BfJwCZrItMMzsVlwiw9msAxk8j6p0OA1zgvu5%2Bk3HyPoKI3x9tBvxHw0KW2vzIMMTt39lj%2FxRnnhf0Ku8OqAHMcwSOwHUXKNTp3ZpVxMju5xGXl2LR3fIBMPZc5fkShT%2BAFLZ7TfBttisC1jFZfIF%2FM9c%2B1Z5G0UnzbFWigmDjhj9GuyL7MOaM%2FTpsRi7%2B5VeKKGi5bFpq7gwFYDc8P2ktG%2FIsqLoimvQurWLPtGaID8%2BzRX7g%3D%3D&y=5n3D3esx3RRXVQ%2BnPq54Lv%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XQJh4tnnRUbq6iydVw%2B%2BotKHPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UbdEctAoyKcxh7x6tL9EbhHPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2Fwyyt6HybWA4eHKaNfWcklghBUunYyUbYbGl2rWfvudjHzXXCPCYzoy7TNQgZ4EBgvz1gkf7khNaVspCZWAvAGsIOClilDg4W3yI%2FaiwfZCaD%2FFUfl7HxPsAhl0KPhIy8P%2FbUo623cgVbBdnN0ARKmZpGOuvFSGJwRITbi9RRnR7G2Hgf92kVT%2F%2B9pvG9UUA%2BFjiHt26eUHx0XbnT4odJKkahKeqavKdQdol%2FXetw%2BDA4HZR6N82tY6TAc735vTF5hVdiv%2B8MdmNTy3YvNLv7PTTqWUjiwOGfpro1zNJoQ5SGPKapI%2B4%2FlNaZDlxgkshFGDCqPhTlm8HMfQWusI65WYGRqfWV0LctmkEhTUBlDtOeVNzBVhQ6esGyhrwfNdiwrtp6f6ZhE2ZV3UBkrO7JpgxvcLq7WdovCzYV6wZnBnlEaWQ%3D%3D',
  },
  {
    id: 4,
    shoppingMall: '제이드몽',
    title: '데일리 원피스 1만원대착한가격',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=7UGZjGeMcX66J%2Brk5R2rrf%2F%2F%2Fw%3D%3DsUByU3GuQGFrktN12V%2FXT282zems%2FbEYnaiCxJi8tztYfqEucJa%2ByQtwCDg5EzeEkrHOHKtNhMzIHibml6QlTTaWZF14uaptT1uBRSLqAez4kxyGi1GtyMRRK5%2F580iOi5JxKIM%2BTVaoSY7NDzEzh0NXKom%2BZoILaf27epw8WKSTN2ps%2BV%2BQWu4mDKrNJK6gOWoAxOAKoof2m1Kw0G8DqmTrL0YLs34gXwDpIi9HRttJnLit0bUOlpU%2F3J1RH%2FyPkVC6Zpn6dtAK28vWCuKOfUOy%2FFCiTsBjS7wghmBG7z6POU%2B7Aw2fRBxMfFUF6zxE2Ocr2c9hienYPBINZlw4J9HyVsdhrcPr%2BhsJ9r5jDozxM%2FCi3Hej%2Fi47rFjrdwQY6SMjPPYWtE7iFyzfG1tiB0Tg8e6oWKCS7XUaZyRizXsOPhNviqTTNk0Gv13qwsOseQlVXlzv1166ULGXeLOICe1t%2FgFccQ0jkfUfMrrcKCyjWivv1iSyKCQTnJ%2B4R7ox0XeLjKMtIQwkL0QzJFrlxX%2FsPnV0xiHMQdPIUHGSy01E%3D&y=GE%2Fmd7oif9WKpWCVRj8agv%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XQJh4tnnRUbq6iydVw%2B%2BotKHPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UZsc39NDeNwZ6xagIEuEfpjPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2FwyysGZT5zi21mMnYE3%2FBACexGvyEdOUsq7M5BgYg9YH%2B8gNKp5GBRCuB8000BXE0A3zIxhiYxRY0R5RiOmFvAdUmuHAHlANAsMIyezG1MuOnu12Z6gD5PlFi2FuVc7GOAp2y%2B1POHd%2F%2FaE8A5AetNteRIf9ADnGBas9lh52Ef5XDdSwjVC6XwOJD5gxrI8F9P%2FDQCKdeTr9rTLEfoswX6hT3F44TOfpRrM4Rv72W123Dtktg8vvIsBVb7oJb74khMBiwwi16UYnfPXW3WBweaVqfUJgBeHZvFQ92WDjv78Ixm3Tj3oLJCjho0AnldbxUol8JSjJ5FJkMq6K0j%2BaGn9rnAuW0Gw1xqYaLxhKm1RaH3YfnAHwgjMl%2FmpAme2IQFVQbN8YB3aSJLLwzigx%2B5JKE%2BJGWpBCpsWX9ABIzQ4b8LrQ%3D%3D'
  },
  {
    id: 5,
    shoppingMall: '토씨',
    title: 'New 차량용방향제 14%할인↓',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=ikDScGgSLfPMFdQmKkWCBf%2F%2F%2Fw%3D%3Ds%2FQUNVXeoggp99ZI8z58Q4dmhwo5gp9WzbrK4DtlgdeAsiUh7D68jkkOV%2FC4M1K76rHOHKtNhMzIHibml6QlTTYQPIBZDQImsBSIT89LFixgQLXMJRjc1cUCigSV%2F9dAuq%2B3vquhzp3ArYFsK%2FEvMPTTNc6dabJWk9VfN%2BfJwCZrItMMzsVlwiw9msAxk8j6pz4%2Bv91XvKO5SuWEzLe7xKq5KSWJ8x%2FXqqN%2Fcbs%2FrfnOEvFIa7SjkYZrVDm%2FxIDIy713n3p1ynJib9n36qp58BFLQyUT1mGnRl17GUsatHr9Es%2BecqpBfX47cqKs6o9DMwaqsLzc5oM%2FpCdo0nUF9TB23sslhFZS%2FVnEC%2FAw89ywzSyepQIrY6DCpuaIUzWnrFk5GnR2MQRR6bEacV9NGBw%3D%3D&y=lNiTb31jr6AIe0hk8nrnRv%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XQJh4tnnRUbq6iydVw%2B%2BotKHPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UbRxZHcAQ2djPdwOp0SgRnyPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2Fwyyt%2FpczEB2SYaY0RnFUgC0I4jlB3G0O6Jq3pTzHDwCX0THWSyPUQC8VYtbOU%2B8AwMNQAoJfP3Am98DwqHnYHhc84k3Gcz3G4dl3x49kuDgYb%2BAvxWmLmz1di1g8BzqWbnsEqjq0QojbYFqTYIIOKDCwgx9KKE%2B6fgHhE%2BatB00FiqpKqXg9dJ1oKDRvIGMHgsh5PV3lMLQvLRhOG38%2BzF33i9XVHWMfpwFB5sWZjS7FtJSIUxbi9I5efB84CghMW2UXz70zeojhCNcdw93fm06NGO%2F6YP2%2BnSsk4jyl2DkwVUouRMstDofA9kjrE80OXDa%2FX3ID2R9DBi63T38pYUMHoiQEaffRHJUyxwBb6%2FcvG71YMNsSpbE09Ns0yYdt5QcsCV11aljvfL%2BHEZQR4CA1c'
  },
  {
    id: 6,
    shoppingMall: '다채몰',
    title: '힘내라 대구 소상공인 힘내라',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=L4n6mz0xUk6%2BakHqOqv%2Fn%2F%2F%2F%2Fw%3D%3Ds%2BSD43FaY2ZNsGX53HrV4IpPrtWpZ64zocXqttQ4vjeJ91ZTkfAwtBMgG5pK2lgVFrHOHKtNhMzIHibml6QlTTXJC7hHrxCaMYwa5IZ8jPlYiYdQcZWVU%2FgvtzMTM%2ByRkx6qRZ0D3rlKqedU4C7HKE5dxiGV6SJ4LdqmVME1Uv%2FJ1Vb1XzKmjD6Idarsaoct0UlsWxpm60iJZtcXyqFRsSzKOAtn4ItuJyQ2j0W%2BIo%2Bm6IZcd7qFKvyS%2BuzzsJQYEqV5yjR6VmDAnICkm03wxeXVVvVfMqaMPoh1quxqhy3QdwkU3ntWV42Fs0nGpB6KA0mSYLnUVWeLAJ1VLJACmimg%2BH52kT4oEm985GFUCt3lv2M4X5%2FCzMeDa%2F%2F06jyJ%2Fm1ZLWw%2BF5x8WH%2BAAavQWpg%3D%3D&y=NWQa9D6G9Ge34DU1Fxst5%2F%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XQJh4tnnRUbq6iydVw%2B%2BotKHPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UYzYgGEX2qdh%2F5e2sNQnkLZPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2Fwyysrm65RQBrGIdrycKtHhRWAoNv3WgRVYbgOgLknvr0p%2BmBijRJnb7BEAd6nm5h7caLBmYT%2BvWM8Dhz38WoMtcS1XYXJcwRIzBqwcyhSb5PRIJr8YtrEq%2Bf78P7KOwkejm0lqYUYA1ht4%2B2GUsN%2BBAfPu0Z2LQ37M9NrgWqjWAmBw2mitJRDcwdS3l9dvSks7FF3a%2Bo2Ah1F4ooBJKADQpqX9aTB5K8HL0fqGHKBfw3pELQR460rxoKJEcTE8R9mnZRAmBFNkps9RItPYsyfltWmXUlmY%2BGh6XK1FxdAVXJtMEZbsI972iG620gUGIxCyjJeckaFRu7Wb1Zq2TgIAZOd'
  },
  {
    id: 7,
    shoppingMall: '구월의아침',
    title: '따듯하게 타먹자! 율무가루 27%↓',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=IHofC10mB%2F1PozRoPCFonf%2F%2F%2Fw%3D%3Ds8uYBmxRlkIz18Tp13ZRlc%2Bvng2bA8a1Jt4gJCXkKO94Jo9VMcKIs1eksalzWX%2FecFy7BVyvoUEza1ptQuI2boZM5KpG6BPtzWtw52EFoFIrWjIR%2BP7AnDTFSIEScwvTOyXnUHbTUYAHRh1N5BCj4HdZsL3698TJmhzIM23IFCDth%2F6m8Nl5YmGcv0SSvENFwCNuqOOwKPM%2F1o8OCAESdEzR1WGoixH55IPeNnZ3OZkBc4gbVzw5IH%2BeRrQlzaKO0BnMEc%2BLc1EoaaSYi2sCfc5XkAIxq5iPV8V8rNkhlAJLd3YlrVveGUxyHaAld4RRYeDHIZVONFZbFpMvLBoi7f6tlB5rrVjJmRPBaeh4SvUDeq12Rq%2FbCVkX5XEw4OH7qi%2ByQVU6EeWfda3UdJog3rw%3D%3D&y=tM9dDNJfN3Jrse5bIX1pXv%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XQJh4tnnRUbq6iydVw%2B%2BotKHPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UbCrg0xy%2Bv0JPhsCnMDQeiCPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2Fwyyt%2FpczEB2SYaY0RnFUgC0I4Amun4iHCVpnvTN8br8Rg83EWDFbzu6thy6%2BaAKPKwudbD80soEKJVyUjMVL2WQrM1F8DxmHxZ4rSfkifmEDnCxeCHGArr8P0gD5Bku7xR64NCGnkekBbFV1lUiS%2FWUcLqIg7J8zHBMpr372qxnUGjZKqXg9dJ1oKDRvIGMHgsh7sZd1Cn4ISUuT9%2BZzacyml41pRugMyQU1PhNOFMhpjeiIUxbi9I5efB84CghMW2UXz70zeojhCNcdw93fm06NGO%2F6YP2%2BnSsk4jyl2DkwVUouRMstDofA9kjrE80OXDa%2FX3ID2R9DBi63T38pYUMHoiQEaffRHJUyxwBb6%2FcvG71YMNsSpbE09Ns0yYdt5QcsCV11aljvfL%2BHEZQR4CA1c',
  },
  // page 1
  {
    id: 8,
    shoppingMall: '제이드몽',
    title: '데일리 원피스 1만원대착한가격',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=VtEN4HJboAhTOZcjmjszDP%2F%2F%2Fw%3D%3DsJiD47yottTfzWY6q%2FU6R77U4HLUxrr1YcJIjfN5a%2BHX1jBgEqmcB55xgsOkttmxaNCT2w0T4yFDCCzqtG7%2Bb9V6ED5R12gAmsye1efIfCocRx4yd8ougfnG4HcUG85K4eiDkX7gffkq160utNHMvuK%2BNjHOU4f%2BX1gB4QlOlkByk7wzYJMQB5EIx56CgTDeTOcQzAsH5Zh%2FyCjm2yHFvdXsELx1qVHKKueRM92kAfUlFnXnNfBRf6tU0pTlnqs%2FUADA00Vt8Lq08YxFiWfzw0oeaFTKJ9KemVCMFf3XHP%2Bx9ijBfMr9CnbpkaqQ9FTWJeCyNkpPmU6HbIRdrMv7bDhDffiWhH9H%2ByasjNW%2FsxjnPrIRX0q5x2Ksa1WD9zqQvAXdP4PWvKJYgi7%2BcW4g70YLIaHrl4IE1YXfYsjwXrI7VXESHGM3X7eOCIaVDna%2BJeTRZ1ibuRDPe62Cq0RtQW%2FtyLOGvoxImxwBMdbAFNGtUayBpMSf5F7naNRZjAl0ALQ3gEjAXPVrAFfGdQA%2BhVTCBEpmwMP4gNnXVKnu8zXk%3D&y=WZyhZEZvJRhyY45%2FxSndx%2F%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XSoQzAbZ5qC%2FrC2h1iCxKY0HPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UZaRtIGehgknhm2YOyrkooBPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2FwyysGZT5zi21mMnYE3%2FBACexGvyEdOUsq7M5BgYg9YH%2B8gNKp5GBRCuB8000BXE0A3zIxhiYxRY0R5RiOmFvAdUmuHAHlANAsMIyezG1MuOnu12Z6gD5PlFi2FuVc7GOAp2y%2B1POHd%2F%2FaE8A5AetNteRIf9ADnGBas9lh52Ef5XDdSwjVC6XwOJD5gxrI8F9P%2FDQCKdeTr9rTLEfoswX6hT3FQrRuS4ylg0FfxNiqL2njtdg8vvIsBVb7oJb74khMBiwwi16UYnfPXW3WBweaVqfUJgBeHZvFQ92WDjv78Ixm3Tj3oLJCjho0AnldbxUol8JSjJ5FJkMq6K0j%2BaGn9rnALa5zj1VIlPi8er9InqgEMcqLGNS5vtssmY0WWFdS%2BAleckaFRu7Wb1Zq2TgIAZOd',
  },
  {
    id: 9,
    shoppingMall: 'ONIRICO',
    title: '디퓨저 구매시 차량용방향제도!',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=fNYgVdtsn5JR69quv6xKOv%2F%2F%2Fw%3D%3Dsg9kXfmSLFtRS2X%2F6DhfnpfTnKaiflg3r%2F29qhE6gn2O4y5FKWINehS%2FJr1H8jvmcFy7BVyvoUEza1ptQuI2boTqoRBO9X5Cj4K%2FcwMeCfevLXoHSe7ogKfF9L9ybgQNGdRkHdPuYSSFiawcMdqrZw5Mk2gCXQ5rLTyZzu9WB559h%2F6m8Nl5YmGcv0SSvENFwAw1eYyRvxdWLqtfIJrGRjeHeNhrNPkehidkADLpQ8w27kaBY50SjR49p3xt%2FxLi4AGzlDQZF43s6%2BNPvuEjt8btN7WT3YMDZAkC6DkXxJpgA1%2BFh5wBNmXlpWdKmfBGGmi1eQa4vjO1iuZVhpnDrJJK03oInpO%2BDhe3Hu4pJPBJu7sSuNtZqRz68GjlqDnMbwZujLeVkOz0jd1DP9xnulPsPnV0xiHMQdPIUHGSy01E%3D&y=VtZyOzqjDDq99JfV%2FEHMqv%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XSoQzAbZ5qC%2FrC2h1iCxKY0HPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UafRmgWT6jINWLA1cn%2BPAzIPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2Fwyyt%2FpczEB2SYaY0RnFUgC0I483y0qBwKSF%2FIV6fYOdIelyR%2FuSE1pWykJlYC8Aawg4IW3hL4xsk5xmpiY5YjgM9wYSOSIb%2BVY27rFUidCUybZBctoAd9R%2BuIb41Z6uJE2W8LM7ztz%2F5lm9EoeYjSf%2BgYrdeP55ZT4Qov6J2SM3M%2B2%2B3bp5QfHRdudPih0kqRqEqCaYz88RWEPxJLGlS58t%2F4ENz8QVvayK8KHvL3AjsDoK%2F7wx2Y1PLdi80u%2Fs9NOpZSOLA4Z%2BmujXM0mhDlIY8pqkj7j%2BU1pkOXGCSyEUYMKo%2BFOWbwcx9Ba6wjrlZgZGp9ZXQty2aQSFNQGUO055U36KW9mlR1Zyb2OdtOqBSDyPiCObg3mU%2BAX6WstjjQuTA8cpNlp6TvHtVrnGNbge%2B7',
  },
  {
    id: 10,
    shoppingMall: '트와이닝스',
    title: '쌀쌀한 지금 딱 홍차 SALE',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=2MWOAW0Q5eJb4td%2FbozQQv%2F%2F%2Fw%3D%3DsEsaYRb%2BBTcohuPbJc4HSuMSJfVTl7C%2FM%2BqWvlRBJm4khRiptTdOyYk89Wggp4mmo2nYTGLe817PRR32caB2s8oOmErtUINqXH378b2AHD43fgFo6deHyY0XBpo50CtFWrKIvYJJ1cBPG6rD85LcpqHE3Wn5uTtrq2BUq9s7oRhAVwiwXSKTiRWXeitR8OJqNHCn3I5XcE4%2FjfuTfFxvF8jvse8TjwkW17peOgre3osgkEvdQYwp3jMrL%2BxUkcRIfAXdP4PWvKJYgi7%2BcW4g70YLIaHrl4IE1YXfYsjwXrI7VXESHGM3X7eOCIaVDna%2BJeTRZ1ibuRDPe62Cq0RtQW7FhMtsLkIvAAyfBWoI%2FKz%2Bxj%2F2pIrLufU2ZXzUH3nz0Bk0JKRm6HKmCxzvV2vE8otUyei%2BAC%2FGNoeL3X8uurH8%3D&y=zrhtHtXMpmPh5tkWOWMgVf%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XSoQzAbZ5qC%2FrC2h1iCxKY0HPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UbdEctAoyKcxh7x6tL9EbhHPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2Fwyyt6HybWA4eHKaNfWcklghBUunYyUbYbGl2rWfvudjHzXXCPCYzoy7TNQgZ4EBgvz1gkf7khNaVspCZWAvAGsIOClilDg4W3yI%2FaiwfZCaD%2FFUfl7HxPsAhl0KPhIy8P%2FbUo623cgVbBdnN0ARKmZpGOuvFSGJwRITbi9RRnR7G2Hgf92kVT%2F%2B9pvG9UUA%2BFjiHt26eUHx0XbnT4odJKkahKSYiPpq1PrOAPDPe6athNXB6N82tY6TAc735vTF5hVdiv%2B8MdmNTy3YvNLv7PTTqWUjiwOGfpro1zNJoQ5SGPKapI%2B4%2FlNaZDlxgkshFGDCqPhTlm8HMfQWusI65WYGRqfWV0LctmkEhTUBlDtOeVN%2BilvZpUdWcm9jnbTqgUg8j4gjm4N5lPgF%2BlrLY40LkwPHKTZaek7x7Va5xjW4Hvuw%3D%3D',
  },
  {
    id: 11,
    shoppingMall: '다채몰',
    title: '힘내라 대구 소상공인 힘내라',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=%2FJ%2FWfGmCESaUFHijhxwM0%2F%2F%2F%2Fw%3D%3DssgTWBz7SnGt0CeZLrbSLdJPrtWpZ64zocXqttQ4vjeJBehSYKxD7khvbxJ6Vu87lgHis4qX8FnbD8TDpfaXQuJlRWQb5%2FrGAo7K8BnySRv4l0KWO3%2BmhtLsWVco9G%2FSnetgh7ILx0gXUCoL5jfZljSzoiceFPnktmQathXnqJxtS0MlE9Zhp0ZdexlLGrR6%2FAnqi34hbau2jJuB%2FRyz%2BetIPvw3geq0UJ1L87BWHvMRXH8HGM8UqTQvExYyudNo53ohjw51ANoydTjWLRLegkCChlIqW5c2ST6rHRqcVxiPsVTgEswiCNnxpyCKTEdrLfkKa0FFj1LqxvmBp4R3mFdZqgw7Gr8pIkpUydImogZhs59uslPNJU5KKzl98z3rNtvptumKveHHvHEQDt2ljTg%3D%3D&y=yYJdMtjJJtOXOL30wgegnf%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XSoQzAbZ5qC%2FrC2h1iCxKY0HPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UZsc39NDeNwZ6xagIEuEfpjPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2Fwyysrm65RQBrGIdrycKtHhRWAoNv3WgRVYbgOgLknvr0p%2BmBijRJnb7BEAd6nm5h7caLBmYT%2BvWM8Dhz38WoMtcS1XYXJcwRIzBqwcyhSb5PRIJr8YtrEq%2Bf78P7KOwkejm0mCnXHtHAKXI2JDPH5tEZAu0Z2LQ37M9NrgWqjWAmBw2mitJRDcwdS3l9dvSks7FF3a%2Bo2Ah1F4ooBJKADQpqX9aTB5K8HL0fqGHKBfw3pELQR460rxoKJEcTE8R9mnZRAmBFNkps9RItPYsyfltWmbFG4hSRU84aXzU%2FYicrAviCmjtbf4iMKV6IjpayJIpdkafkwJpuAOL6L5CzrQeuU',
  },
  {
    id: 12,
    shoppingMall: '아르고스테크',
    title: '방화문잠금장치 현재 할인특가!',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=nALm5X462tFFEHafnHesVf%2F%2F%2Fw%3D%3DsVQQZA%2FRkInnsOU%2B%2B2kD62w%2F0lb%2F6OndnsHO%2FuTSh316lY0Ecs6iPq04V2uHbXQBENCT2w0T4yFDCCzqtG7%2Bb9QCX2zlRauru9%2Bg1mQgFuvDF7yjp0AVC0pFB2euJHD%2FKJYJz8zwSSnovGKLlrYeyGmF2YZ%2FVK2UIciwaug3tSxEYr16PJ77Dgo7be5vof%2F%2BwtfoEG1xIswSJMnRqhCzoY%2FDB7UROwJC1rp2mzd8N9hMq82a6c%2FJsxjMqBT16Lg5%2FqV5yjR6VmDAnICkm03wxeXVVvVfMqaMPoh1quxqhy3QdwkU3ntWV42Fs0nGpB6KA0mSYLnUVWeLAJ1VLJACmilgOXe%2FWtzRLh2L%2BdbFeuPsFBdnxu%2FJhQPgVUz4PWky8iVQoz3uJqW1QZ1d5YVWYIpA%2FcgpjB8kLPCw4JpkVcfw%3D&y=TT9LZafsOza4DNW3JF4h%2FP%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XSoQzAbZ5qC%2FrC2h1iCxKY0HPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UbRxZHcAQ2djPdwOp0SgRnyPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2Fwyyt%2FpczEB2SYaY0RnFUgC0I4ogjC4LS9x861835%2BaasQQI5xPE2XSrbPHYB%2FvIW8ro5VIWFL0hVOFymkc%2Bz8vrzMcLf%2FDMAwERyeMlpP9GULj1qIFhkZGJLRh9Xetx4WJEQBGvOZOp%2FKWzM05bVm0qNSk%2BltbUa1%2BzV96BnHVDJv6u3bp5QfHRdudPih0kqRqEqvCeikXeqEmZKCz2adHfF7ilc8XPza52sgbeE53Lwmyq%2F7wx2Y1PLdi80u%2Fs9NOpZSOLA4Z%2BmujXM0mhDlIY8pqkj7j%2BU1pkOXGCSyEUYMKo%2BFOWbwcx9Ba6wjrlZgZGp9ZXQty2aQSFNQGUO055U36KW9mlR1Zyb2OdtOqBSDyPiCObg3mU%2BAX6WstjjQuTA8cpNlp6TvHtVrnGNbge%2B7',
  },
  {
    id: 13,
    shoppingMall: '케이클럽',
    title: '최대 80%초특가 놀라운 할인율!',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=pcpAENsFJEG36kksrG9Tk%2F%2F%2F%2Fw%3D%3DsxyTFP71SjYlsbuEatH%2FGkDsgBMP9Oyr%2FxPMFfDnZudUp3jTj7LMksBs72cp4k5lINCT2w0T4yFDCCzqtG7%2Bb9enAzYMNkE1TKUSuvp2FNGSsn7bor6NHb55qEedIimBVMgSm2hWG1lHpZ%2FlwZphTbfDpbTQ6t%2BGvwpBNOTNC7OmVv9KSMZWNpUWWFwvfJ5bgWdE%2BGQVk1fjwEwdEkugEQLrZAPPDpNqnskC9AdNc47j9vY4TSGqsFbvdxU2kC0BIZNmAIslyBvYjFeJzknSR%2Fm2MKwjiLXiKZxsPV42Fh3Wqmo3E4vHsAII2xDsHqmyGDnZzRg89PntgNcSBROcJYP5mV64EJHkRGwblyvpPSuXsWZSs9gfd%2Bz7NuRCFwYNtA7EpiBO3%2BeURCn%2BomuUS4A%3D%3D&y=7W6Tj7zXk0Ei%2BsWqnaDpev%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XSoQzAbZ5qC%2FrC2h1iCxKY0HPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UYzYgGEX2qdh%2F5e2sNQnkLZPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2FwyysGZT5zi21mMnYE3%2FBACexGt%2BIXoh2HLo%2Fs2B5juYoVY59k2uyjKxbx85Bk9QAqjvIgtsWaZvUWZIUgzHXGwgiLcm32O59W%2BitVugNMe5dPgYcIaOUv0SQR1d9zCrItjiyEOdluwsTyf41%2FQXvk1CsvxP5D6cBA%2FQMF21%2F8nr69SXkrMSa56Kv6ZW7i6XEWdmH%2B%2BRCA%2B5jzrQ0JA7Svr6zCtJ6QoiMJmZy%2FjqUp8XggsmcIajfaj9HvlJiC6WGJFl4X3GiasZX7qRGbbRnYo%2FdcjUO4A08CC5Rny6tUXFPirFRFg7JqqoqbjSGjSfIDsZKL30E%2Fj5djOK%2Fwzk2PSk84e9Qksv4VTnWzjedZSESt1v0a3m%2FLDhsGJr2IqLx8ZB401xG6EVvUk2wYQEiZ6Sm1YK6jDcrYVP9qvI9ff7Bmew%3D%3D',
  },
  {
    id: 14,
    shoppingMall: '서울샵',
    title: '중소기업 우수 추천상품 모음전',
    link: 'https://adcr.shopping.naver.com/adcr.nhn?x=dtN9GAUd5p1BnhLVg3joGv%2F%2F%2Fw%3D%3DsEGaFntyKx16o1sKecqU3z5WwGjGrwRaDOXKt3D0xYzWR3CKuJCW2eAd9pWIOqlN72nYTGLe817PRR32caB2s8jjohe7uCfRzNqWCzPdi%2FgRFaLR0RGuYvFrBZfuG5puUKUfYBZADA85OBFqkiW%2BzCHE3Wn5uTtrq2BUq9s7oRhAd3yATD2XOX5EoU%2FgBS2e0XIJBdGB%2BsOGpLoaIDV4eenn5eRQHYSAejGBbt8jnNCf9vY4TSGqsFbvdxU2kC0BIZNmAIslyBvYjFeJzknSR%2Fm2MKwjiLXiKZxsPV42Fh3Wqmo3E4vHsAII2xDsHqmyGDnZzRg89PntgNcSBROcJYEIM6ImDSs5Qia1PkggYwdq5Y%2F9t9eaFy4OOceMs1R2%2B&y=T9B6kJxOIdck%2FQx619vVD%2F%2F%2F%2Fw%3D%3Dsfu%2FtfZ7ZTA1V4a0bati0cBDrbsFPbz%2Bl0EVcCBUp7XSoQzAbZ5qC%2FrC2h1iCxKY0HPfvp8xcAKpkjTuSyl6nNpZHPLJmWUVMdd34BR%2Bx7UbCrg0xy%2Bv0JPhsCnMDQeiCPr1hIBuOA64WqvbKfs6WV84cZsQOe%2FqIbpt7MPVyWcoqXe%2BtgdzsKPxiMGZFHX%2FSh6dTNQB%2B55mOQJHLZRwBAN0jmvtVMfBKrdPHWV%2Fwyysrm65RQBrGIdrycKtHhRWAoNv3WgRVYbgOgLknvr0p%2BmBijRJnb7BEAd6nm5h7caLBmYT%2BvWM8Dhz38WoMtcS1XYXJcwRIzBqwcyhSb5PRIJr8YtrEq%2Bf78P7KOwkejm3z3T82ik%2BTzJVqggk%2BUlSk%2BK6y1nWdh7cAej6rrM%2Bq02mitJRDcwdS3l9dvSks7FF3a%2Bo2Ah1F4ooBJKADQpqX9aTB5K8HL0fqGHKBfw3pELQR460rxoKJEcTE8R9mnZRAmBFNkps9RItPYsyfltWmbFG4hSRU84aXzU%2FYicrAviCmjtbf4iMKV6IjpayJIpdkafkwJpuAOL6L5CzrQeuU',
  },
  // page 2
];

export default shoppingNews;