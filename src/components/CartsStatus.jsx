import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { getCart } from '../api/firebase';
import {useQuery, } from '@tanstack/react-query'
import {useUserContext} from "../context/UserContext";
import useCart from '../hooks/useCart';

export default function CartsStatus() {
    const {
        cartQuery: { data: products },
      } = useCart();

    return (
        <div className='relative'>
            <AiOutlineShoppingCart className='text-4xl'/>
            {products && <p className='w-6 h-6 text-center text-white bg-brand font-bold rounded-full absolute -top-1 -right-2'>{products.length}</p>}
        </div>
    );
}

// import React from 'react';
// import {AiOutlineShoppingCart} from 'react-icons/ai'
// import { getCart } from '../api/firebase';
// import {useQuery, } from '@tanstack/react-query'
// import {useUserContext} from "../context/UserContext";

// export default function CartsStatus() {
//     const {uid} = useUserContext();
//     //carts쿼리가 변경될 때 마다 재로드하는 쿼리를 만들어 준다.
//     const {data: products} = useQuery(['carts'], () => getCart(uid));
//     return (
//         <div className='relative'>
//             <AiOutlineShoppingCart className='text-4xl'/>
//             {products && <p className='w-6 h-6 text-center text-white bg-brand font-bold rounded-full absolute -top-1 -right-2'>{products.length}</p>}
//         </div>
//     );
// }
