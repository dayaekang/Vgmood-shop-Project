# Vgmood shoppingmall

<img src="https://user-images.githubusercontent.com/93265694/232325823-35da406b-ee33-407b-ac8c-03aaf8585dc1.PNG"/>

<br><br>

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

### 🔓로그인 ,admin 
- admin, user 관계없이 google oauth를 이용하도록 팝업창 발생합니다
- admin 계정으로 로그인했을 때는 nav바에 제품 등록 버튼이 추가 됩니다.
<img src="https://user-images.githubusercontent.com/93265694/232329220-17a97ee1-ed7a-4aa1-ba40-d9cdbaf4da07.gif"/>

<br>

### 🧴 제품 등록 
- Cloudinary를 사용하여 FormData 객체에 넣어 파일을 전송해 upload한 후 , 해당 이미지 파일에 대한 고유 URL을 반환하는 func을 만들어
  URL을 받아올 수 있습니다. 받아온 URL을 다시 firebase를 사용해 제품을 추가해주었습니다.
- 업로드 중, 업로드 완료 피드백 ui를 간단하게 구현해보았습니다.
<img src="https://user-images.githubusercontent.com/93265694/232329228-dd5942ac-fcf7-44a9-ae3a-30deecbdc42f.gif"/>

<br>

### 🛒장바구니
- 상품을 추가하면 nav바 아이콘에 추가되어 총 몇개가 담겨있는지 확인 가능합니다.
- Firebase에서 사용자마다 저장된 카트를 가져오기 위해 사용자의 고유 ID를 이용해서 해당 사용자의 카트 데이터를 가져왔습니다.
- 카트에서 상품을 삭제할 수 있으며 수량 조절 또한 가능하도록 구현했습니다.
- 하단에는 제품들의 합, 배송비가 총합된 총 액을 볼 수 있습니다.
<img src="https://user-images.githubusercontent.com/93265694/232329232-cbfe359b-d912-4fd1-8d1b-ed4d7c6c43a7.gif"/>

<br>
<hr /> <br /> <br />

### 📝 후기 및 배운 점
처음에는 무작정 로그인, 로그아웃 용도인 firebase 구현을 context api, navbar등에 직접 import 해왔는데 여러개의 컴포넌트가 firebase import에 너무 의존적이지 않도록 firebase.js에서 func을 만들고 다른 컴포넌트에서 import하게 해주었다. 컴포넌트들의 효율성, 의존도도 항상 생각하면서 코딩을 해야겠다고 다짐을 다시 할 수 있었고, 등록한 이미지를 firebase에 데이터로 저장할 때 Realtime Database와 Firestore어떤것을 사용하는게 나을지 고민했었다. 구글링 결과 사실 별로 큰 차이는 없는 것 같았지만 데이터 저장 방식과 쿼리 방법, 사용법 등에 조금씩 차이가 있어  데이터의 구성이 복잡하지 않을 경우에는 사용하기 쉬운 Realtime Database를 선택했다. 또한 cart를 구현 할 때 redux대신 firebase로사용도 가능해서 유용한 기능이 많은 것을 느꼈고 다음 프로젝트를 할 때도 firebase를 사용해서 더 익숙해져보고 싶다는 생각을 했다. 
