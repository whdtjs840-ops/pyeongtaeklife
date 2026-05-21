(function () {
  const nav = document.querySelector(".primary-nav");
  const toggle = document.querySelector(".menu-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const tabs = document.querySelectorAll("[data-tool]");
  const panels = document.querySelectorAll(".tool-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tool;
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      panels.forEach((panel) => panel.classList.toggle("active", panel.id === `${target}Tool`));
    });
  });

  const moveTool = document.querySelector("#moveTool");
  const subsidyTool = document.querySelector("#subsidyTool");
  const housingTool = document.querySelector("#housingTool");

  if (moveTool) {
    moveTool.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(moveTool);
      const stage = form.get("stage");
      const family = form.get("family");
      const stageText = {
        before: "입주 전에는 입주청소, 인터넷, 관리사무소, 전입 준비를 먼저 확인하세요.",
        week: "입주 첫 주에는 쓰레기 배출, 주차, 병원, 약국, 장보기 동선을 먼저 잡는 것이 좋습니다.",
        settled: "생활 적응 중이라면 어린이집, 학원, 단골 병원, 주말 체험 장소를 정리할 차례입니다.",
      };
      const familyText = {
        kids: "아이 있는 가정은 소아과, 약국, 놀이터, 키즈카페, 통학 동선을 우선순위로 두세요.",
        couple: "신혼·부부는 출퇴근, 장보기, 주차, 외식 동선을 먼저 맞추면 생활 만족도가 올라갑니다.",
        single: "1인·직장인은 교통, 편의점, 세탁, 헬스장, 야간 식사 가능 매장을 먼저 보면 좋습니다.",
      };
      document.querySelector("#moveResult").textContent = `${stageText[stage]} ${familyText[family]}`;
    });
  }

  if (subsidyTool) {
    subsidyTool.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(subsidyTool);
      const need = form.get("need");
      const target = form.get("target");
      const needText = {
        childcare: "육아·보육은 아이사랑, 평택시 보육 공지, 경기도 아동 지원사업을 같이 확인하세요.",
        housing: "전입·주거는 정부24, 평택시청 고시공고, 청약홈, LH 공고를 함께 확인하는 흐름이 좋습니다.",
        job: "청년·근로는 평택시 일자리, 경기도 청년 지원, 고용24 공고를 함께 보는 것이 안전합니다.",
        health: "건강·보건은 평택보건소, 예방접종도우미, 정부24 건강 관련 서비스를 확인하세요.",
      };
      const targetText = {
        parent: "부모·보호자는 자녀 나이와 등원 상황에 따라 받을 수 있는 정보가 갈립니다.",
        newlywed: "신혼부부는 주거, 출산, 전입 관련 조건을 같이 보는 것이 좋습니다.",
        youth: "청년은 소득, 재직 여부, 거주 요건을 먼저 확인해야 합니다.",
        senior: "부모님과 함께 거주한다면 복지, 보건소, 돌봄 서비스를 같이 확인하세요.",
      };
      document.querySelector("#subsidyResult").textContent = `${needText[need]} ${targetText[target]}`;
    });
  }

  if (housingTool) {
    housingTool.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(housingTool);
      const cash = Number(form.get("cash") || 0);
      const monthly = Number(form.get("monthly") || 0);
      const simpleLoan = monthly * 210;
      const budget = cash + simpleLoan;
      document.querySelector("#housingResult").textContent =
        `단순 계산 기준 약 ${Math.round(budget).toLocaleString()}만원 범위까지 검토할 수 있습니다. 실제 판단은 금리, DSR, 관리비, 취득세를 따로 확인해야 합니다.`;
    });
  }
})();
