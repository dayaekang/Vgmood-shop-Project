import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { addOrUpdateCart } from '../api/firebase';

export default function ProductDetail() {
    const {uid} = useUserContext();
    const {
     state: {
         product: {id, image, title, category, price, description, option},
        },
    } = useLocation();

    const [selected, setSelected] = useState(option && option[0])

    const handleSelect = (e) => setSelected(e.target.value);

    const handClick = (e) => {
        //장바구에 추가하기
        const product = {id, image, title, price, option:selected, quantity:1};
        addOrUpdateCart(uid, product);
    }

    return (
        <>
            <p className='mx-12 mt-4 text-gray-700'>{category}</p>
            <section className='flex flex-col md:flex-row p-4'>

                <img className='w-40 px-4 basis-7/12' src={image} alt={title}/>

                <div className='w-full basis-5/12 flex flex-col p-4'>
                    <h2 className='text-3xl font-bold py-2'>{title}</h2>
                    <p className='text-2xl font-bold py-2 border-b border-gray-400'>{price}원</p>
                    <p className='py-4 text-lg'>{description}</p>
                    <div className='flex items-center'>
                        <label className='text-brand font-bold' htmlFor='select'>option</label>
                        <select id='select'
                        className='p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none' 
                        onChange={handleSelect} value={selected}>
                            {option &&
                              option.map((options, index) => (
                                 <option key={index}>{options}</option>
                                ))}
                        </select>
                    </div>
                    <button
                     className='bg-brand text-white py-2 px-3 rounded-sm hover:brightness-110'
                     onClick={handClick}>
                       추가하기
                    </button>
                </div>

            </section>
        </>
    )
}