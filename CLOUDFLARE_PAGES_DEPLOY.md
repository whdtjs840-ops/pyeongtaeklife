# Cloudflare Pages 배포

배포 대상 폴더는 `dist`입니다. 루트 폴더에는 워드프레스 테마 zip이 포함되어 있으므로 그대로 올리지 마세요.

권장 프로젝트명은 도메인과 맞춘 `pyeongtaeklife`입니다.
원격 저장소는 `https://github.com/whdtjs840-ops/pyeongtaeklife`입니다.

## API 토큰으로 배포

Cloudflare API 토큰을 만든 뒤 같은 PowerShell 창에서 아래처럼 실행합니다.

```powershell
$env:CLOUDFLARE_API_TOKEN="여기에_토큰"
npx.cmd wrangler pages deploy .\dist --project-name pyeongtaeklife
```

## GitHub 연동 배포 설정

Cloudflare Pages에서 GitHub 저장소를 연결할 때 아래처럼 설정합니다.

- Framework preset: `None`
- Build command: 비워둠
- Build output directory: `dist`
- Production branch: `main`

## 대시보드 직접 업로드

Cloudflare Dashboard에서 `Workers & Pages > Create > Pages > Upload assets`로 들어가 `dist` 폴더 안의 파일만 업로드합니다.

## 커스텀 도메인

Cloudflare Pages 프로젝트의 `Custom domains`에서 `pyeongtaeklife.kr`을 추가합니다.

가비아에서 도메인을 샀다면 Cloudflare에 사이트를 추가한 뒤, Cloudflare가 배정한 네임서버 2개를 가비아 도메인 관리 화면의 네임서버로 변경합니다. 네임서버 변경이 반영된 뒤 Cloudflare DNS에서 Pages가 요구하는 레코드를 확인합니다.

배포할 파일:

- `index.html`
- `category.html`
- `post.html`
- `styles.css`
- `app.js`
- `category.js`
- `post.js`
- `_headers`
