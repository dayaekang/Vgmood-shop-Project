# Vgmood shoppingmall
<img src="https://user-images.githubusercontent.com/93265694/232325823-35da406b-ee33-407b-ac8c-03aaf8585dc1.PNG" width="80"/>

<br>
## 👉🏻 간단 소개
이 프로젝트는 firebase, cloudinary를 활용하여 구글 로그인, 장바구니, 수량 조절 등 쇼핑몰의 다양한 서비스 개발 경험을 해보기위해 만들어졌습니다. admin 계정으로 로그인이 된다면 새 제품 등록이 가능합니다. 

<br>

### ⚙️ 사용 기술 스택
- **React**  
- **firebase** 
  - firebase는 백엔드 서버 기능, 데이터 동기화 기능을 제공하는 백엔드 서비스로, 서버 관리와 관련된 부담을 줄일 수    있다는 장점과 구글인증, 클라우드 스토리지등 다양한 기능을 제공하기 때문에 firebase를 사용했습니다. 
- **Cloudinary** 
  - Cloudinary를 사용하면, 이미지 파일을 클라우드에 업로드하고, 해당 이미지 파일에 대한 고유 URL을 반환합니다. 이 URL을 이용하여 언제 어디서든 이미지 파일에 접근할 수 있고 firebase도 사진 업로드 기능이 있지만 cloudinary는 커스터마이징기능도 제공하는 장점으로 사용해보게 됐습니다.
  
## 📌 주요 기능
#### 로그인 - <a href="https://github.com/chaehyuenwoo/SpringBoot-Project-MEGABOX/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C(Login)" >상세보기 - WIKI 이동</a>
- DB값 검증
- ID찾기, PW찾기
- 로그인 시 쿠키(Cookie) 및 세션(Session) 생성
#### 회원가입 - <a href="https://github.com/chaehyuenwoo/SpringBoot-Project-MEGABOX/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C(Member)" >상세보기 - WIKI 이동</a>
- 주소 API 연동
- ID 중복 체크
#### 마이 페이지 - <a href="https://github.com/chaehyuenwoo/SpringBoot-Project-MEGABOX/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C(Member)" >상세보기 - WIKI 이동</a>
- 주소 API 연동
- 회원정보 변경

#### 영화 예매 - <a href="https://github.com/chaehyuenwoo/SpringBoot-Project-MEGABOX/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C(%EC%98%81%ED%99%94-%EC%98%88%EB%A7%A4)" >상세보기 - WIKI 이동</a>
- 영화 선택(날짜 지정)
- 영화관 선택(대분류/소분류 선택) 및 시간 선택
- 좌석 선택
- 결제 페이지
- 예매 완료
#### 메인 페이지 - <a href="https://github.com/chaehyuenwoo/SpringBoot-Project-MEGABOX/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C(%EB%A9%94%EC%9D%B8-Page)" >상세보기 - WIKI 이동</a>
- YouTube API 연동
- 메인 포스터(영화) 이미지 슬라이드(CSS)
#### 1대1문의 및 공지사항 - <a href="" >상세보기 - WIKI 이동</a> 
- 글 작성, 읽기, 수정, 삭제(CRUD)

#### 관리자 페이지 
- 영화관 추가(대분류, 소분류)
- 영화 추가(상영시간 및 상영관 설정)
