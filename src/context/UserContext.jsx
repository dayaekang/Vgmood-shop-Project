import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserstateChange } from '../api/firebase';

const  UserContext = createContext();

export function UserContextProvider({children}){
    const [user, setUser] = useState();

    useEffect(()=>{
        onUserstateChange((user)=> {
            setUser(user);
        })
    },[]);

    return (
         <UserContext.Provider value={{ user, uid: user && user.uid, login, logout }}>
            {children}
        </UserContext.Provider>
    );
    
}

export function useUserContext(){
    return useContext(UserContext);
}