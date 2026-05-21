# pyeongtaeklife.kr GitHub + Cloudflare Pages 연결 순서

## 1. GitHub 저장소

권장 저장소 이름: `pyeongtaeklife`

저장소를 만든 뒤 이 로컬 폴더에서 실행합니다.

```powershell
git remote add origin https://github.com/깃허브아이디/pyeongtaeklife.git
git push -u origin main
```

GitHub 인증 창이 뜨면 로그인합니다.

## 2. Cloudflare Pages GitHub 연결

Cloudflare Dashboard에서:

1. `Workers & Pages`로 이동
2. `Create application`
3. `Pages`
4. `Connect to Git`
5. GitHub 저장소 `pyeongtaeklife` 선택

빌드 설정:

- Project name: `pyeongtaeklife`
- Production branch: `main`
- Framework preset: `None`
- Build command: 비워둠
- Build output directory: `dist`

## 3. pyeongtaeklife.kr 연결

Cloudflare Dashboard에서:

1. `Websites`에 `pyeongtaeklife.kr` 추가
2. Cloudflare가 보여주는 네임서버 2개를 복사
3. 가비아 도메인 관리에서 `pyeongtaeklife.kr`의 네임서버를 Cloudflare 네임서버로 변경
4. Cloudflare에서 도메인 활성화 확인
5. `Workers & Pages > pyeongtaeklife > Custom domains`
6. `pyeongtaeklife.kr` 추가

필요하면 `www.pyeongtaeklife.kr`도 Custom domains에 추가하고, Cloudflare DNS에서 `www` CNAME이 Pages 프로젝트를 가리키는지 확인합니다.

## 4. 권장 DNS 구조

Cloudflare가 Pages Custom Domain 추가 과정에서 자동 생성하는 레코드를 우선 사용합니다.

일반적으로는 아래 형태가 됩니다.

- `pyeongtaeklife.kr` -> Pages 프로젝트
- `www.pyeongtaeklife.kr` -> Pages 프로젝트 또는 루트 도메인으로 리디렉션

루트 도메인을 대표 주소로 쓰는 것을 권장합니다.
