(function () {
  const categories = {
    living: {
      eyebrow: "01 GODEOK LIVING",
      title: "고덕 살이",
      description: "입주 체크리스트, 전입신고, 관리비, 인터넷, 쓰레기 배출처럼 고덕에 처음 들어온 사람이 바로 찾는 생활 가이드입니다.",
      target: "신규 입주민",
      targetText: "입주 첫 주에 필요한 행정·생활·민원 정보",
      adHint: "이사업체, 인터넷 설치, 입주청소, 생활수리 광고와 연결하기 좋습니다.",
      subcategories: ["입주 체크리스트", "전입신고·관리비", "인터넷·입주청소", "쓰레기 배출·재활용", "동사무소·민원"],
      feature: {
        type: "checklist",
        eyebrow: "체크리스트 + D-day",
        title: "입주 D-day 생활 체크리스트",
        description: "이사 예정일 기준으로 전입신고, 관리비, 인터넷, 입주청소를 순서대로 확인하게 만듭니다.",
        items: [
          ["D-14", "인터넷 설치 예약", "통신사 설치 가능일과 단지 가능 회선을 먼저 확인"],
          ["D-7", "입주청소·가전 배송", "엘리베이터 예약과 관리사무소 공지를 함께 확인"],
          ["D+1", "전입신고·확정일자", "정부24 또는 주민센터 처리 후 임대차 신고 확인"],
          ["D+3", "쓰레기 배출 기준", "단지별 배출장소, 재활용, 대형폐기물 기준 확인"],
        ],
      },
      posts: [
        ["고덕 입주 체크리스트: 이사 전후 7일 순서", "전입, 관리비, 인터넷, 입주청소를 날짜별로 정리합니다."],
        ["고덕동 전입신고와 확정일자 처리 방법", "정부24와 주민센터 방문 기준을 나눠 설명합니다."],
        ["고덕 아파트 쓰레기 배출일과 재활용 기준", "단지별 공지 확인법과 헷갈리는 분리배출 사례를 묶습니다."],
        ["고덕에서 인터넷 설치 전 확인할 것", "통신사, 설치 가능일, 사은품보다 먼저 확인할 기준입니다."],
      ],
    },
    apartments: {
      eyebrow: "02 APARTMENT ANALYSIS",
      title: "아파트 분석",
      description: "자이센트로, 파라곤, 제일풍경채 등 단지명 검색 수요를 잡기 위한 고덕 아파트 분석 페이지입니다.",
      target: "이사 예정자",
      targetText: "단지별 장단점과 시세 흐름을 비교하는 사람",
      adHint: "부동산, 중개사무소, 인테리어, 입주가전 광고와 연결하기 좋습니다.",
      subcategories: ["자이센트로", "파라곤", "제일풍경채", "신규 분양·입주", "시세·전세 동향"],
      feature: {
        type: "table",
        eyebrow: "단지 비교표 + 필터",
        title: "고덕 주요 단지 한눈에 비교",
        description: "블로그 글로는 비교하기 어려운 단지, 입주, 평형, 교통, 학군 정보를 표로 정리합니다.",
        filters: ["전체", "입주완료", "신축", "학군중심", "지제역 접근"],
        headers: ["단지", "상태", "강점", "체크 포인트"],
        rows: [
          ["자이센트로", "신축", "생활권 인지도", "주차·상권 동선 확인"],
          ["파라곤", "입주완료", "단지 규모", "관리비·통학 동선 확인"],
          ["제일풍경채", "신축", "평형 선택지", "구조·전세 물량 확인"],
          ["고덕신도시권", "확장중", "입점 증가", "공사 소음·상권 성숙도 확인"],
        ],
      },
      posts: [
        ["고덕 자이센트로 생활권 장단점", "교통, 상권, 학교, 단지 동선을 기준으로 분석합니다."],
        ["고덕 파라곤 입주민이 많이 묻는 질문", "관리비, 주차, 주변 상권, 통학 동선을 정리합니다."],
        ["제일풍경채 평형별 구조 비교", "가족 구성별로 보기 쉬운 평형 선택 기준입니다."],
        ["고덕 아파트 전세·월세 흐름 월간 체크", "실거래 숫자보다 먼저 볼 변동 포인트를 정리합니다."],
      ],
    },
    local: {
      eyebrow: "03 LOCAL GUIDE",
      title: "동네 가이드",
      description: "맛집, 카페, 병원, 약국, 미용실, 마트처럼 매일 검색하는 생활 업종을 단지별·목적별로 정리합니다.",
      target: "고덕 거주자",
      targetText: "가까운 생활 편의시설을 빠르게 찾는 주민",
      adHint: "맛집, 병원, 약국, 미용실, 네일샵, 마트 광고와 직접 연결됩니다.",
      subcategories: ["맛집", "카페·디저트", "병원·약국", "미용실·네일샵", "마트·쇼핑"],
      feature: {
        type: "map",
        eyebrow: "지도 + 업종 필터",
        title: "지도 기반 동네 업체 찾기",
        description: "Google Maps API를 붙이면 단지 주변 맛집, 병원, 약국, 카페를 지도 핀으로 보여줄 수 있습니다.",
        filters: ["맛집", "카페", "소아과", "약국", "마트"],
        places: [
          ["고덕 중심상권", "맛집·카페 밀집", "도보 생활권"],
          ["에듀타운 인근", "학원·간식", "학부모 수요"],
          ["지제역 방향", "교통·쇼핑", "퇴근길 이용"],
        ],
      },
      posts: [
        ["고덕 맛집 목적별 추천: 가족외식·점심·회식", "가격대와 주차 여부까지 같이 보는 글입니다."],
        ["고덕 카페와 디저트 가게 단지별 정리", "공부, 아이 동반, 대화하기 좋은 곳을 나눕니다."],
        ["고덕 소아과·치과·정형외과 찾는 법", "진료과목별로 먼저 확인할 기준을 정리합니다."],
        ["고덕 마트·로컬푸드·생활용품 동선", "퇴근길과 주말 장보기 동선을 기준으로 묶습니다."],
      ],
    },
    education: {
      eyebrow: "04 EDUCATION",
      title: "교육·학원",
      description: "학교 배정, 학군, 에듀타운 학원, 유치원·어린이집 정보를 학부모 검색 흐름에 맞춰 정리합니다.",
      target: "학부모",
      targetText: "학교·학원·통학 동선을 함께 보는 가정",
      adHint: "학원, 공부방, 예체능, 유치원, 교육 상담 광고와 궁합이 좋습니다.",
      subcategories: ["학교 배정·학군", "에듀타운 학원", "영어·수학 학원", "예체능 학원", "유치원·어린이집"],
      feature: {
        type: "table",
        eyebrow: "학원 리스트표 + 과목 필터",
        title: "에듀타운 학원 비교표",
        description: "과목, 대상 학년, 위치, 상담 포인트를 표로 정리하면 카페 게시판보다 훨씬 찾기 쉽습니다.",
        filters: ["전체", "영어", "수학", "국어", "예체능"],
        headers: ["구분", "대상", "확인할 것", "광고 연결"],
        rows: [
          ["영어", "초·중", "레벨테스트·숙제량", "영어학원"],
          ["수학", "초·중·고", "진도·내신 대비", "수학학원"],
          ["국어", "초고·중", "독서·논술 연계", "논술학원"],
          ["예체능", "유아·초등", "차량·시간표", "미술·체육"],
        ],
      },
      posts: [
        ["고덕 학교 배정과 통학 동선 보는 법", "주소와 단지별 통학 포인트를 설명합니다."],
        ["고덕 에듀타운 학원 리스트 정리", "영어, 수학, 국어, 과학을 과목별로 분류합니다."],
        ["고덕 유치원·어린이집 선택 체크리스트", "거리, 차량, 운영시간, 대기 기준을 정리합니다."],
        ["고덕 예체능 학원 찾을 때 보는 기준", "미술, 피아노, 태권도, 체육 시설을 나눕니다."],
      ],
    },
    transport: {
      eyebrow: "05 TRANSPORT",
      title: "교통·인프라",
      description: "지제역, SRT, 버스 노선, 셔틀, 주차, 도서관, 공원, 체육시설을 생활 동선 기준으로 정리합니다.",
      target: "출퇴근 주민",
      targetText: "서울·삼성전자·평택 중심부 이동이 중요한 사람",
      adHint: "주차장, 차량정비, 렌트, 체육시설, 생활서비스 광고와 연결됩니다.",
      subcategories: ["지제역·SRT", "버스 노선·셔틀", "도로·주차", "도서관·공원", "체육시설"],
      feature: {
        type: "route",
        eyebrow: "동선 카드 + 지도 확장",
        title: "고덕 출퇴근·생활 동선 비교",
        description: "지제역, SRT, 버스, 자차 동선을 카드로 비교하고 나중에 지도 API로 경로를 붙입니다.",
        routes: [
          ["지제역 SRT", "빠른 광역 이동", "주차·환승 시간 확인"],
          ["버스 노선", "생활비 절감", "배차 간격 확인"],
          ["자차 이동", "삼성 통근 편의", "출퇴근 정체 확인"],
        ],
      },
      posts: [
        ["고덕에서 지제역 SRT 이용하는 법", "버스, 자차, 택시 동선과 소요 시간을 비교합니다."],
        ["고덕 버스 노선과 출퇴근 시간 체크", "주요 노선과 환승 포인트를 정리합니다."],
        ["고덕 주변 주차와 도로 흐름 정리", "혼잡 시간대와 우회 동선을 콘텐츠화합니다."],
        ["고덕 도서관·공원·체육시설 생활지도", "아이 동반, 산책, 운동 목적별로 분류합니다."],
      ],
    },
    news: {
      eyebrow: "06 GODEOK NEWS",
      title: "고덕 소식",
      description: "개발, 분양, 신규 입점, 지역 행사처럼 신선도가 중요한 정보를 짧고 자주 업데이트하는 페이지입니다.",
      target: "고덕 관심자",
      targetText: "동네 변화와 신규 정보를 빠르게 확인하는 사람",
      adHint: "신규 오픈 매장, 행사, 분양 홍보, 지역 업체 제휴와 연결됩니다.",
      subcategories: ["개발·분양 뉴스", "신규 오픈", "지역 행사", "생활 공지", "월간 업데이트"],
      feature: {
        type: "calendar",
        eyebrow: "일정 캘린더",
        title: "분양·입주·오픈 일정 캘린더",
        description: "입주, 분양, 신규 오픈, 행사 일정을 날짜형으로 관리하면 재방문 이유가 생깁니다.",
        events: [
          ["5월", "신규 오픈 매장 월간 정리"],
          ["6월", "분양·입주 일정 업데이트"],
          ["상시", "평택시 행사·공고 체크"],
        ],
      },
      posts: [
        ["이번 달 고덕 신규 오픈 매장 정리", "식당, 카페, 병원, 학원 입점 소식을 모읍니다."],
        ["고덕 개발·분양 뉴스 읽는 법", "공식 공고와 기사, 커뮤니티 소문을 구분합니다."],
        ["고덕 주말 행사와 아이와 갈 만한 일정", "가족 단위 방문 수요를 노립니다."],
        ["고덕 생활 공지 월간 모음", "정책, 교통, 시설 점검 정보를 한 번에 모읍니다."],
      ],
    },
    samsung: {
      eyebrow: "07 SAMSUNG PYEONGTAEK",
      title: "삼성전자 관련",
      description: "삼성전자 평택캠퍼스 통근, 협력사, 기숙사, 원룸·오피스텔 정보를 외지 유입 키워드에 맞춰 정리합니다.",
      target: "외지 근로자",
      targetText: "평택캠퍼스 출퇴근과 주거지를 찾는 사람",
      adHint: "원룸, 오피스텔, 부동산, 식당, 통근 차량, 생활서비스 광고와 연결됩니다.",
      subcategories: ["통근·셔틀", "기숙사 정보", "협력사 입주", "원룸·오피스텔", "퇴근 후 생활"],
      feature: {
        type: "calculator",
        eyebrow: "필터 + 계산기",
        title: "삼성 통근 주거 후보 필터",
        description: "통근 시간, 월세, 주차 여부를 기준으로 원룸·오피스텔 후보를 좁히는 도구로 확장합니다.",
        cards: [
          ["통근 우선", "캠퍼스 접근성과 셔틀 동선 중심"],
          ["월세 우선", "관리비 포함 실제 월 부담 중심"],
          ["생활 우선", "식당·마트·병원 접근성 중심"],
        ],
      },
      posts: [
        ["삼성전자 평택캠퍼스 출퇴근하기 좋은 고덕 동선", "자차, 버스, 셔틀, 지제역 기준으로 나눕니다."],
        ["고덕 원룸·오피스텔 찾을 때 보는 기준", "월세, 주차, 출퇴근, 생활 편의시설을 비교합니다."],
        ["삼성 협력사 근로자 생활 가이드", "단기 거주자가 자주 묻는 질문을 묶습니다."],
        ["평택캠퍼스 근처 식사·카페·편의시설", "퇴근 후 바로 쓰는 생활 정보를 정리합니다."],
      ],
    },
  };

  function renderFeature(feature) {
    document.querySelector("#featureEyebrow").textContent = feature.eyebrow;
    document.querySelector("#featureTitle").textContent = feature.title;
    document.querySelector("#featureDescription").textContent = feature.description;

    if (feature.type === "table") {
      return `
        <div class="feature-filters">${feature.filters.map((item, index) => `<button class="${index === 0 ? "active" : ""}" type="button">${item}</button>`).join("")}</div>
        <div class="data-table-wrap">
          <table class="data-table">
            <thead><tr>${feature.headers.map((item) => `<th>${item}</th>`).join("")}</tr></thead>
            <tbody>${feature.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      `;
    }

    if (feature.type === "map") {
      return `
        <div class="feature-filters">${feature.filters.map((item, index) => `<button class="${index === 0 ? "active" : ""}" type="button">${item}</button>`).join("")}</div>
        <div class="map-mock">
          <div class="map-grid"></div>
          ${feature.places.map((place, index) => `<span class="map-pin pin-${index + 1}"></span>`).join("")}
        </div>
        <div class="feature-card-grid">${feature.places.map((place) => `<article><strong>${place[0]}</strong><span>${place[1]}</span><p>${place[2]}</p></article>`).join("")}</div>
      `;
    }

    if (feature.type === "checklist") {
      return `<div class="timeline-list">${feature.items.map((item) => `<article><span>${item[0]}</span><strong>${item[1]}</strong><p>${item[2]}</p></article>`).join("")}</div>`;
    }

    if (feature.type === "route") {
      return `<div class="feature-card-grid route-grid">${feature.routes.map((item) => `<article><strong>${item[0]}</strong><span>${item[1]}</span><p>${item[2]}</p></article>`).join("")}</div>`;
    }

    if (feature.type === "calendar") {
      return `<div class="calendar-list">${feature.events.map((item) => `<article><span>${item[0]}</span><strong>${item[1]}</strong></article>`).join("")}</div>`;
    }

    return `<div class="feature-card-grid">${feature.cards.map((item) => `<article><strong>${item[0]}</strong><p>${item[1]}</p></article>`).join("")}</div>`;
  }

  const params = new URLSearchParams(window.location.search);
  const key = categories[params.get("section")] ? params.get("section") : "living";
  const data = categories[key];

  document.title = `${data.title} - 고덕라이프`;
  document.querySelector("#categoryEyebrow").textContent = data.eyebrow;
  document.querySelector("#categoryTitle").textContent = data.title;
  document.querySelector("#categoryDescription").textContent = data.description;
  document.querySelector("#categoryTarget").textContent = data.target;
  document.querySelector("#categoryTargetText").textContent = data.targetText;
  document.querySelector("#adHint").textContent = data.adHint;
  document.querySelector("#featureContent").innerHTML = renderFeature(data.feature);

  document.querySelectorAll("[data-section-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.sectionLink === key);
  });

  document.querySelector("#subcategoryList").innerHTML = data.subcategories
    .map((item) => `<li><a href="#">${item}</a></li>`)
    .join("");

  document.querySelector("#postBoard").innerHTML = data.posts
    .map(
      ([title, description], index) => `
        <article class="category-post-card">
          <a href="post.html?section=${key}&post=${index + 1}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${title}</strong>
            <p>${description}</p>
          </a>
        </article>
      `
    )
    .join("");
})();
