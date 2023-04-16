import React from 'react';
import Products from './AllProducts';

export default function Home() {
    return (
        <>
            <section className='h-96 bg-yellow-800 relative'>
                <div className='w-full h-full bg-cover bg-banner opacity-80'/>
                <div className='absolute w-full top-32 text-center text-white'>
                    <h2 className='text-6xl'>vegan, beauty, mood</h2>
                    <p className='text-2xl'>The coexistence of vegan and beauty</p>
                </div>
            </section>
            <Products/>
        </>
    );
}

