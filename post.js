(function () {
  const labels = {
    living: ["고덕 살이", "입주·생활·민원"],
    apartments: ["아파트 분석", "단지·시세·입주"],
    local: ["동네 가이드", "맛집·병원·생활업종"],
    education: ["교육·학원", "학교·학원·보육"],
    transport: ["교통·인프라", "지제역·버스·주차"],
    news: ["고덕 소식", "개발·입점·행사"],
    samsung: ["삼성전자", "통근·주거·협력사"],
  };

  const titles = {
    living: ["고덕 입주 체크리스트: 이사 전후 7일 순서", "고덕동 전입신고와 확정일자 처리 방법", "고덕 아파트 쓰레기 배출일과 재활용 기준", "고덕에서 인터넷 설치 전 확인할 것"],
    apartments: ["고덕 자이센트로 생활권 장단점", "고덕 파라곤 입주민이 많이 묻는 질문", "제일풍경채 평형별 구조 비교", "고덕 아파트 전세·월세 흐름 월간 체크"],
    local: ["고덕 맛집 목적별 추천: 가족외식·점심·회식", "고덕 카페와 디저트 가게 단지별 정리", "고덕 소아과·치과·정형외과 찾는 법", "고덕 마트·로컬푸드·생활용품 동선"],
    education: ["고덕 학교 배정과 통학 동선 보는 법", "고덕 에듀타운 학원 리스트 정리", "고덕 유치원·어린이집 선택 체크리스트", "고덕 예체능 학원 찾을 때 보는 기준"],
    transport: ["고덕에서 지제역 SRT 이용하는 법", "고덕 버스 노선과 출퇴근 시간 체크", "고덕 주변 주차와 도로 흐름 정리", "고덕 도서관·공원·체육시설 생활지도"],
    news: ["이번 달 고덕 신규 오픈 매장 정리", "고덕 개발·분양 뉴스 읽는 법", "고덕 주말 행사와 아이와 갈 만한 일정", "고덕 생활 공지 월간 모음"],
    samsung: ["삼성전자 평택캠퍼스 출퇴근하기 좋은 고덕 동선", "고덕 원룸·오피스텔 찾을 때 보는 기준", "삼성 협력사 근로자 생활 가이드", "평택캠퍼스 근처 식사·카페·편의시설"],
  };

  const params = new URLSearchParams(window.location.search);
  const section = labels[params.get("section")] ? params.get("section") : "living";
  const postIndex = Math.max(0, Math.min(3, Number(params.get("post") || 1) - 1));
  const [categoryName, categorySub] = labels[section];
  const title = titles[section][postIndex];

  document.title = `${title} - 고덕라이프`;
  document.querySelector("#postCategory").textContent = `${categoryName} · ${categorySub}`;
  document.querySelector("#postTitle").textContent = title;
  document.querySelector("#postLead").textContent = `${categoryName} 카테고리의 대표 글 예시입니다. 실제 운영 시에는 이 구조에 본문, 사진, 출처, 업데이트 기준일을 넣어 검색 유입형 글로 확장합니다.`;
  document.querySelector("#postBodyA").textContent = `이 글은 ${categoryName} 검색 수요를 잡기 위한 상세 페이지입니다. 독자가 궁금해하는 상황을 먼저 정리하고, 실제 확인 순서와 주의사항을 이어서 보여주는 방식으로 작성합니다.`;
  document.querySelector("#backToCategory").href = `category.html?section=${section}`;
})();
