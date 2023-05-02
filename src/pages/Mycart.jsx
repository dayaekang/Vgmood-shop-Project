import React from 'react';
import { getCart } from '../api/firebase';
import {useQuery} from '@tanstack/react-query'
import CartItem from '../components/CartItem';
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {FaEquals} from 'react-icons/fa'
import PriceCard from '../components/PriceCard';
import Button from '../components/Button';
import {useUserContext} from "../context/UserContext";
import useCart from '../hooks/useCart';


const SHIPPING = 3000;

export default function Mycart() {
  
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();


  if (isLoading) return <p>Loading..</p>

  const hasProducts = products && products.length > 0;

  const totalPrice =
   products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity,0)

  return (
    <section className='p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold border-b border-gray-300 pb-4 mb-6'>내 장바구니</p>
        {!hasProducts && <p className='text-center'>아직 장바구니에 상품이 담겨있지 않습니다</p>}
        {hasProducts && 
        <>
          <ul className='border-b border-gray-300 mb-8'>
            {products && products.map((product)=> <CartItem key={product.id} product={product}/>
            )}
          </ul>
          <div className='flex justify-between items-center mb-4'>
            <PriceCard text="상품 총액" price={totalPrice}/>
            <BsFillPlusCircleFill className='shrink-0'/>
            <PriceCard text="배송비" price={SHIPPING}/>
            <FaEquals/>
            <PriceCard text="총 가격" price={totalPrice + SHIPPING}/>
          </div>
          <Button text="주문하기"/>
        </>}

    </section>
  ) 
}