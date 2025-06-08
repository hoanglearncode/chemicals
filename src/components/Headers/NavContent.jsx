import React, { useState, useEffect, useContext } from "react"
import { AlignJustify, ChevronDown, Menu, X } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { appData } from '../../context/dataContext.jsx'

export default function NavContent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('/')
    
    const { categoriesData } = appData();
    const navigate = useNavigate();
    const location = useLocation();
    
    const navigationItems = [
        { to: '/', label: 'Trang chủ' },
        { to: '/product', label: 'Sản phẩm' },
        { to: '/news', label: 'Tin Tức' },
        { to: '/about', label: 'Về chúng tôi' },
        { to: '/contact', label: 'Liên hệ' }
    ]

    // Đồng bộ activeLink với URL hiện tại
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleNavClick = (path) => {
        navigate(path); 
        setActiveLink(path)
        setIsMenuOpen(false)
    }

    return (
        <nav className="bg-gray-100 shadow-lg border-t top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 lg:pr-8">
                <div className="flex justify-between items-center h-16">
                    {/* Category Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg group"
                        >
                            <AlignJustify size={20} className="group-hover:rotate-180 transition-transform duration-300"/>
                            <span className="font-medium">Danh Mục Sản Phẩm</span>
                            <ChevronDown 
                                size={16} 
                                className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        
                        {/* Category Dropdown Menu */}
                        {isCategoryOpen && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                                {categoriesData.length > 0 ? (
                                    <div className="py-2">
                                        {categoriesData.map((category, index) => (
                                            <button
                                                key={index}
                                                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-50 last:border-b-0 hover:translate-x-1 transform"
                                            >
                                                <span>{category.icon}</span>{category.name}
                                            </button>
                                        ))}
                                    </div>
                                    ): (
                                        <div className="py-2">
                                                <span
                                                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-50 last:border-b-0 hover:translate-x-1 transform"
                                                >
                                                    Không có dữ liệu
                                                </span>
                                        </div>
                                    )}
                            </div>
                        )}
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 z-30">
                        {navigationItems.map((item) => (
                            <button
                                key={item.to}
                                onClick={() => handleNavClick(item.to)}
                                className={`relative px-3 py-2 font-medium transition-all duration-300 group ${
                                    activeLink === item.to
                                        ? 'text-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`}
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                                    activeLink === item.to ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 bg-white animate-slideDown">
                        <div className="py-4 space-y-2">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.to}
                                    onClick={() => handleNavClick(item.to)}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                        activeLink === item.to
                                            ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay for category dropdown */}
            {isCategoryOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black bg-opacity-10"
                    onClick={() => setIsCategoryOpen(false)}
                ></div>
            )}
        </nav>
    )
}