import React, { useState } from 'react';
import { uploadImage } from '../api/uploader';
import { addNewproduct } from '../api/firebase';

export default function NewProduct() {
    const [product, setProduct] = useState({});
    const [file, setFile] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [success, setSuccess] = useState(); 
    
    const handleChange = (e) => {
        const {name, value, files} = e.target;

        if(name ==='file'){
            //파일이 선택되지않으면 files가 null일 수 있어서 
            // setProduct가 되지않게 반환해준다.
            setFile(files && files[0]);
            return;
        }
        //이미지 파일경우는 파일을 value로 설정하는게 아니라 img url을 할당해줘야함
        setProduct((product)=>({...product, [name]:value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);
        uploadImage(file)
        .then(url => {
            addNewproduct(product, url)
             .then(()=>{
                setSuccess('성공적으로 추가 되었습니다.');
                setTimeout(() => {
                    setSuccess(null);
                },4000 );
             })
        })
        .finally(()=> setIsUploading(false));
        setProduct({});
    };

    return (
        <section className='w-full text-center'>
            <h1 className='text-center font-bold text-xl mb-3'>새로운 제품 등록</h1>
            {success && <p className='my-2 font-semibold'>✅{success}</p>}
            
            {file &&
             <img
             src={URL.createObjectURL(file)}
             className='w-96 mx-auto'
             alt='img file'/>}

            <form  className='flex flex-col p-4' onSubmit={handleSubmit}>

                <input
                 className='border-2 p-2 outline-none mb-1' 
                 type="file"  
                 accept='image/*' 
                 name='file' 
                 id="fileupload" 
                 onChange={handleChange} 
                 required/>

                <input
                 className='border-2 p-2 outline-none mb-1'
                 type='text'
                 name='title'
                 value={product.title ?? ''}
                 placeholder='제품명'
                 onChange={handleChange} 
                 required/>

                <input 
                type='number' 
                className='border-2 p-2 outline-none mb-1'
                name='price'
                value={product.price ?? ''}
                placeholder='가격'
                onChange={handleChange} 
                required/>

                <input 
                type='text' 
                className='border-2 p-2 outline-none mb-1' 
                name='category'
                value={product.category ?? ''}
                placeholder='카테고리'
                onChange={handleChange} 
                required/>

                <input 
                type='text'
                className='border-2 p-2 outline-none mb-1' 
                name='description'
                value={product.description ?? ''}
                placeholder='제품 설명'
                onChange={handleChange} 
                required/>

                <input 
                type='text' 
                className='border-2 p-2 outline-none mb-1' 
                name='options'
                value={product.options ?? ''}
                placeholder='옵션들(콤마(,)로 구분)'
                onChange={handleChange} 
                required/>

                <button
                 type='sumbmit' 
                 className='bg-brand text-white py-2 px-3 rounded-sm hover:brightness-110' disabled={isUploading}>
                    {isUploading ? '업로드중,,,' : '제품 등록하기'}
                 </button>
            
            </form>

        </section>
        );
}

