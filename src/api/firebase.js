import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import {v4 as uuid} from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login(){
    provider.setCustomParameters({
        prompt: 'select_account',
    });
    return signInWithPopup(auth, provider)
    .catch(console.error);
}

export function logout(){
   signOut(auth)
   .catch(console.error);
}

export function onUserstateChange(callback){
    onAuthStateChanged(auth, async (user)=>{
        const updateUser = user ? await adminUser(user) : null;
        callback(updateUser);
    })
}

async function adminUser(user){
    return get(ref(database, 'admins'))
        .then((snapshot)=>{
            if(snapshot.exists()){
                const admins = snapshot.val();
                const isAdmin = admins.includes(user.uid);
                return {...user, isAdmin};
            }
        return user;
        })
}

//상품마다 고유 아이디를 넣어 추가해주기
export async function addNewproduct(product, imageUrl) {
    const id = uuid();
    return set(ref(database, `products/${id}`), {
        ...product,
        id,
        price: parseInt(product.price),
        image: imageUrl,
        option: product.options.split(',')
    });
}

export async function getProducts() {
    return get(ref(database, 'products'))
    .then(snapshot => {
        if(snapshot.exists()){
            //values를 사용해주지 않으면 온 snapshot들이 object형태이기 때문에
            //id다음 제품,value들 형태로 온다. 하지만 우리가 원하는것은 value들만 가져오기.
            return Object.values(snapshot.val());
        }
        return [];
    })
}

//사용자의 상품들이 담겨있는 카트 가져오기
export async function getCart(userId) {
    return get(ref(database, `carts/${userId}`))
    .then((snapshot) => {
        const items = snapshot.val() || {};
        return Object.values(items);
    })
}

 //carts 라는 부모 노드 아래에 userId 라는 자식 노드가 있을 때, 해당 userId 자식 노드 아래
 //product.id 라는 자식 노드를 추가하고 그 노드의 값을 product 객체로 설정
export async function addOrUpdateCart(userId, product){
    return set(ref(database, `carts/${userId}/${product.id}`),product);
}

//카트에서 상품 삭제
export async function removeCart(userId, productId){
    return remove(ref(database,`carts/${userId}/${productId}`))
}
