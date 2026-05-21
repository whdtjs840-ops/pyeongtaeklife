# 평택라이프

평택 고덕·지제·삼성 생활권을 중심으로 시작하는 지역 생활정보 사이트 초안입니다.

## 파일 열기

브라우저에서 `index.html`을 열면 바로 확인할 수 있습니다.

## 로컬 서버로 보기

Node.js가 설치되어 있다면 아래 명령으로 간단히 확인할 수 있습니다.

```powershell
node -e "const http=require('http'),fs=require('fs'),path=require('path');const root=process.cwd();const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};http.createServer((req,res)=>{const u=req.url==='/'?'/index.html':req.url;const file=path.join(root,decodeURIComponent(u.split('?')[0]));fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found');}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(data);});}).listen(4175,'127.0.0.1',()=>console.log('http://127.0.0.1:4175'))"
```

## 1차 구성

- 고덕·지제·삼성 중심 메인 화면
- 검색 유입용 생활가이드 섹션
- 동네두바퀴 벤치마킹 기반 지도·업체 구조
- 오늘 핫딜, 쿠폰북, 리드형 광고 상품 안내
- 평택 이사 동네 추천기
- 사장님 무료등록 문의 섹션
