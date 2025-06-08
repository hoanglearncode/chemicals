import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Headers/index'

import './assets/App.css'
import Homepage from './pages/Users/Homepage'
import Contact from './pages/User/Contact'
import AboutPage from './pages/User/About'
import Demo from './pages/User/News'
import NewsPage from './pages/Users/News.jsx'
import ProductsPages from './pages/Users/Products.jsx'
import Footer from './components/Footer'
import ContactComponent from './components/common/Apps/Contact'
import {AutherContextProvider} from './context/autherContext.jsx'
function App() {
    return (
        <div className=''>
            <AutherContextProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Homepage />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/about' element={<AboutPage />}/>
                    <Route path='/news' element={<NewsPage />}/>
                    <Route path='/product' element={<ProductsPages />}/>
                    <Route path='/demo' element={<Demo />}/>
                </Routes>         
                <Footer/>   
                <ContactComponent />
            </AutherContextProvider>
        </div> 
    )
}

export default App
