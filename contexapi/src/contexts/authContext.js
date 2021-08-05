import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


//we dont use this in funtional components
//when we pass children as an argument we dont ned to use props.children
const AuthContextProvider = ({children}) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeAuthStatus = () => {
        this.setIsLoggedIn(!isLoggedIn);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn , changeAuthStatus }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;