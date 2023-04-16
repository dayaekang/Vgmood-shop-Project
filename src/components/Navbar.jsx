import React from 'react';
import {Link} from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import Button from './Button';
import { useUserContext } from '../context/UserContext';
import CartsStatus from './CartsStatus';

export default function Navbar() {
    const {user, login, logout} = useUserContext();

    return (
      <header className='flex justify-between border-b border-gray-300 p-2 mb-2'>
        <Link to='/' className='flex items-center text-4xl text-brand'>
            <img className='w-9 h-7' src ="./image/logo.PNG" alt = 'logo'/>
            <h1>Vgmood</h1>
        </Link>

        <nav className='flex items-center gap-4 font-semibold'>
            <Link to='/products'>Products</Link>
            {user && (
            <Link to='/carts'>
              <CartsStatus/>
            </Link>
            )}
            {user && user.isAdmin && (
                <Link to='/products/new' className='text-1xl'>
                  <BsFillPencilFill/>
                </Link>
            )}
            {user && <User user={user}/>}
            {!user && <Button text={'Login'} onClick={login} />}
            {user && <Button text={'Logout'} onClick={logout} />}

        </nav>
      </header>
    );
}

