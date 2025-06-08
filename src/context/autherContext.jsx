import { createContext, useState, useContext, useEffect } from 'react';
import accont from '../services/accont/index.js';
// Create the context
export const AutherContext = createContext();

// Create a provider component
export const AutherContextProvider = ({ children }) => {
    const [isAuther, setIsAuther] = useState(false)
    const [cart, setCart] = useState({item: 1})
    const [account, setAccount] = useState({})
    useEffect (()=>{
        setIsAuther(true)
        setAccount(accont.getAccountData())
        setCart(accont.getCartData())
    }, []);
    const value = {
        isAuther,
        cart,
        account,
        setIsAuther,
        setCart,
        setAccount,
    };


    return (
        <AutherContext.Provider value={value}>
            {children}
        </AutherContext.Provider>
    );
};

// Custom hook for using the context
export const appAuther = () => {
    const context = useContext(AutherContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};


