# Vgmood shoppingmall
<img src="https://user-images.githubusercontent.com/93265694/232325823-35da406b-ee33-407b-ac8c-03aaf8585dc1.PNG"/>

<br>

### 👉🏻 간단 소개
이 프로젝트는 firebase, cloudinary를 활용하여 구글 로그인, 장바구니, 수량 조절 등 쇼핑몰의 다양한 서비스 개발 경험을 해보기위해 만들어졌습니다. admin 계정으로 로그인이 된다면 새 제품 등록이 가능합니다. 

<br>

### ⚙️ 사용 기술 스택
- **React**  
- **firebase** 
  - firebase는 백엔드 서버 기능, 데이터 동기화 기능을 제공하는 백엔드 서비스로, 서버 관리와 관련된 부담을 줄일 수    있다는 장점과 구글인증, 클라우드 스토리지등 다양한 기능을 제공하기 때문에 firebase를 사용했습니다. 
- **Cloudinary** 
  - Cloudinary를 사용하면, 이미지 파일을 클라우드에 업로드하고, 해당 이미지 파일에 대한 고유 URL을 반환합니다. 이 URL을 이용하여 언제 어디서든 이미지 파일에 접근할 수 있고 firebase도 사진 업로드 기능이 있지만 cloudinary는 커스터마이징기능도 제공하는 장점으로 사용해보게 됐습니다.
  
  
## 📌 주요 기능

### 로그인 ,admin 
- admin, user 관계없이 google oauth를 이용하도록 팝업창 발생합니다
- admin 계정으로 로그인했을 때는 nav바에 제품 등록 버튼이 추가 됩니다.
<img src="https://user-images.githubusercontent.com/93265694/232329220-17a97ee1-ed7a-4aa1-ba40-d9cdbaf4da07.gif"/>

<br>

###  제품 등록 
- Cloudinary를 사용하여 FormData 객체에 넣어 파일을 전송해 upload한 후 , 해당 이미지 파일에 대한 고유 URL을 반환하는 func을 만들어
  URL을 받아올 수 있습니다. 받아온 URL을 다시 firebase를 사용해 제품을 추가해주었습니다.
- 업로드 중, 업로드 완료 피드백 ui를 간단하게 구현해보았습니다.
<img src="https://user-images.githubusercontent.com/93265694/232329228-dd5942ac-fcf7-44a9-ae3a-30deecbdc42f.gif"/>

<br>

### 쇼핑카트
- 상품을 추가하면 nav바 아이콘에 추가되어 총 몇개가 담겨있는지 확인 가능합니다.
- Firebase에서 사용자마다 저장된 카트를 가져오기 위해 사용자의 고유 ID를 이용해서 해당 사용자의 카트 데이터를 가져왔습니다.
- 카트에서 상품을 삭제할 수 있으며 수량 조절 또한 가능하도록 구현했습니다.
- 하단에는 제품들의 합, 배송비가 총합된 총 액을 볼 수 있습니다.
<img src="https://user-images.githubusercontent.com/93265694/232329232-cbfe359b-d912-4fd1-8d1b-ed4d7c6c43a7.gif"/>
