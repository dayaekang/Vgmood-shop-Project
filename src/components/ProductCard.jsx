import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function ProductCard({
    product, 
    product:{id, image, title, category, price}})
    {
    //받아오는 인자를 두개나 써준 이유는 
    //product -> product:{id, image, title, category, price}}만 써주면 
    //navigate로 product를 state로 보내줄 때 product을 찾을 수 없다는 에러가 떴다. 해결을위해.
    //product:{id, image, title, category, price} -> return에서 product를 하나하나 써주기 싫어서 
    //받아올 때 부터 낱개로 써주기.
    const navigate = useNavigate();

    return (
        <li className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'
            onClick={()=>navigate(`/products/${id}`, {state: {product}})}>
            <img className='w-full' src={image} alt={title}/>
            <div className='mt-2 px-2 text-lg flex justify-between items-center'>
                <h3 className='truncate'>{title}</h3>
                <p>{`${price}원`}</p>
            </div>
            <p className='mb-2 px-2 text-gray-600'>{category}</p>
        </li>
    );
}

