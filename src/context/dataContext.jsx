import { createContext, useState, useContext, useEffect } from 'react';
import category from '../services/category/index.js'
import system from '../services/system/index.js';
// Create the context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
    const [categoriesData, setCategories] = useState([])
    const [logo, setLogo] = useState('https://res.cloudinary.com/dmzcks0q6/image/upload/v1749056334/logo-nm_jomcus.png')
    const [banner, setBanner] = useState([])
    useEffect (()=>{
        const getCategory = async () => {
            const data = await category.getCategory();
            setCategories(data)
        }
        const getBanner = async () => {
            const data = await system.getBanner();
            setBanner(data)
        }
        getBanner()
        getCategory();
    }, []);
    const value = {
        categoriesData,
        logo,
        banner,
        setBanner,
        setLogo,
        setCategories,
    };


    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook for using the context
export const appData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};


