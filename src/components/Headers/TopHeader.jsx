import React, { useState, useRef, useEffect } from "react";
import { 
    MapPin, 
    Mail, 
    Phone, 
    ChevronDown, 
    ShoppingBag, 
    User, 
    LogOut,
    Menu,
    X,
    Globe
} from 'lucide-react';
import { useNavigate } from "react-router-dom";
import SearchComponent from '../common/Search/index'
import Tooltip from '../common/Tooltip/index'
import { appAuther } from "../../context/autherContext";
import system from "../../services/system";


const TopHeader = () => {
    const { isAuther, account, cart } = appAuther();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({ code: 'VN', name: 'Tiếng Việt' });
    const [contactInfo, setContactInfo] = useState([])

    const userMenuRef = useRef(null);
    const languageMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const Navigate = useNavigate();

    const languages = [
        { code: 'VN', name: 'Tiếng Việt' },
        { code: 'EN', name: 'English' },
    ];


    const handleClick = (url) => {
        Navigate(url);
        setIsMobileMenuOpen(false);
    };

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
            if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
                setIsLanguageMenuOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(()=>{
        const handleData = async () => {
            const infor = await system.getContactInfor();
            setContactInfo(infor)
        } 
        handleData()
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="relative w-full z-50">
            {/* Desktop Header */}
            <div className="hidden lg:block">
                <div className="relative bg-gradient-to-r from-sky-500/95 via-sky-400/95 to-blue-500/95 backdrop-blur-md py-4 w-full flex justify-between items-center px-6 xl:px-20 shadow-xl border-b border-white/20">
                    
                    {/* Contact Information */}
                    <div id="contact" className="flex gap-6 items-center">
                        {contactInfo.map((contact, index) => (
                            <Tooltip key={index} text={contact.tooltip} position="bottom">
                                <div className="group flex text-white text-sm font-medium items-center cursor-pointer hover:text-yellow-200 transition-all duration-300 hover:scale-105">
                                    <div className="p-2.5 rounded-full bg-white/20 mr-3 group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12 group-hover:shadow-lg">
                                        <contact.icon size={16} className="group-hover:scale-110 transition-transform duration-300"/>
                                    </div>
                                    <span className="font-semibold xl:inline hidden">{contact.text}</span>
                                    <span className="xl:hidden font-semibold">{contact.shortText}</span>
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                    
                    {/* Search and User Actions */}
                    <div className="flex items-center gap-4">
                        <SearchComponent />
                        
                        {/* Language Selector */}
                        <div className="relative" ref={languageMenuRef}>
                            <div 
                                className="flex items-center gap-2 text-white/90 text-sm cursor-pointer hover:text-white transition-all duration-300 hover:bg-white/10 px-3 py-2 rounded-lg"
                                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                            >
                                <span className="font-semibold">{selectedLanguage.code}</span>
                                <ChevronDown 
                                    size={14} 
                                    className={`transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
                                />
                            </div>
                            
                            {/* Language Dropdown */}
                            <div className={`absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 min-w-[140px] z-50 transform transition-all duration-300 origin-top-right ${
                                isLanguageMenuOpen 
                                    ? 'opacity-100 scale-100 translate-y-0' 
                                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                            }`}>
                                {languages.map((lang) => (
                                    <div
                                        key={lang.code}
                                        className={`px-4 py-2 cursor-pointer hover:bg-blue-50 transition-colors duration-200 ${
                                            selectedLanguage.code === lang.code ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
                                        }`}
                                        onClick={() => {
                                            setSelectedLanguage(lang);
                                            setIsLanguageMenuOpen(false);
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">{lang.name}</span>
                                            <span className="text-xs text-gray-500">{lang.code}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* User Section */}
                        {isAuther ? (
                            <div className="flex gap-4 items-center">
                                {/* Shopping Cart */}
                                <Tooltip text={`Giỏ hàng`} position="bottom">
                                    <div className="relative group cursor-pointer" onClick={()=>{handleClick('/cart')}}>
                                        <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:from-emerald-600 hover:to-green-600">
                                            <ShoppingBag size={20}/>
                                        </div>
                                        {cart.items > 0 && (
                                            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                                                {cart.items}
                                            </div>
                                        )}
                                    </div>
                                </Tooltip>
                                
                                {/* User Menu */}
                                <div className="relative" ref={userMenuRef}>
                                    <div 
                                        className="flex items-center cursor-pointer group"
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 p-2 text-white rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 z-20">
                                            {account.image ? (
                                                <img 
                                                    src={account.image} 
                                                    alt="avatar" 
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                            ) : (
                                                <User size={20}/>
                                            )}
                                        </div>
                                        <div className="relative flex items-center bg-gradient-to-r from-emerald-500 to-green-500 rounded-r-lg px-4 py-2 ml-[-8px] text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:from-emerald-500 group-hover:to-green-500">
                                            <span className="font-semibold mr-2 max-w-[120px] truncate">{account.name}</span>
                                            <ChevronDown 
                                                size={18} 
                                                className={`transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`}
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* User Dropdown Menu */}
                                    <div className={`absolute top-full right-0 mt-3 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 min-w-[220px] transform transition-all duration-300 origin-top-right ${
                                        isUserMenuOpen 
                                            ? 'opacity-100 scale-100 translate-y-0' 
                                            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                    }`}>
                                        {/* User Info */}
                                        <div className="px-4 py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors duration-200" onClick={()=>{handleClick('/account')}}>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                                                    {account.image ? (
                                                        <img 
                                                            src={account.image} 
                                                            alt="avatar" 
                                                            className="w-full h-full rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        <User size={18} className="text-white"/>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-800 text-sm">{account.name}</p>
                                                    <p className="text-gray-500 text-xs">{account.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Menu Items */}
                                        <div 
                                            className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-red-50 transition-colors duration-200 text-red-600"
                                            onClick={()=>{handleClick('/logout')}}
                                        >
                                            <LogOut size={16} />
                                            <span className="text-sm font-medium">Đăng xuất</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <button 
                                    onClick={()=>{handleClick('/login')}}
                                    className="px-6 py-2 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm border border-white/30"
                                >
                                    Đăng nhập
                                </button>
                                <button 
                                    onClick={()=>{handleClick('/register')}}
                                    className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    Đăng ký
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden">
                <div className="relative bg-gradient-to-r from-sky-500/95 via-sky-400/95 to-blue-500/95 backdrop-blur-md py-3 px-4 shadow-xl border-b border-white/20">
                    <div className="flex items-center justify-between">
                        {/* Left side - Company name */}
                        <div className="flex items-center">
                            <div className="text-white font-bold text-lg">
                                Hóa chất Nhật Minh
                            </div>
                        </div>

                        {/* Right side - Actions */}
                        <div className="flex items-center gap-3">
                            {/* Search Component */}
                            <div className="hidden sm:block">
                                <SearchComponent />
                            </div>

                            {/* Shopping Cart (for authenticated users) */}
                            {isAuther && (
                                <div className="relative cursor-pointer" onClick={()=>{handleClick('/cart')}}>
                                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-2.5 text-white rounded-full shadow-lg">
                                        <ShoppingBag size={18}/>
                                    </div>
                                    {cart.items > 0 && (
                                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                                            {cart.items}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Mobile Menu Button */}
                            <button 
                                className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                    <div className="sm:hidden mt-3">
                        <SearchComponent />
                    </div>
                    {/* Mobile Search for small screens */}
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 z-40 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
                    
                    {/* Mobile Menu Content */}
                    <div 
                        ref={mobileMenuRef}
                        className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${
                            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-4 text-white">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-bold">Menu</h2>
                                    <button 
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto">
                                {/* User Section */}
                                {isAuther ? (
                                    <div className="p-4 border-b border-gray-200">
                                        <div 
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                                            onClick={() => handleClick('/account')}
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                                                {account.image ? (
                                                    <img 
                                                        src={account.image} 
                                                        alt="avatar" 
                                                        className="w-full h-full rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <User size={20} className="text-white"/>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-gray-800">{account.name}</p>
                                                <p className="text-gray-500 text-sm">{account.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-4 border-b border-gray-200 space-y-3">
                                        <button 
                                            onClick={() => handleClick('/login')}
                                            className="w-full px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-blue-600 transition-all duration-300"
                                        >
                                            Đăng nhập
                                        </button>
                                        <button 
                                            onClick={() => handleClick('/register')}
                                            className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300"
                                        >
                                            Đăng ký
                                        </button>
                                    </div>
                                )}

                                {/* Contact Information */}
                                <div className="p-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-800 mb-3">Thông tin liên hệ</h3>
                                    <div className="space-y-3">
                                        {contactInfo.map((contact, index) => (
                                            <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                                <div className="p-2 bg-sky-100 text-sky-600 rounded-full">
                                                    <contact.icon size={16} />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-800 text-sm">{contact.shortText}</p>
                                                    <p className="text-gray-600 text-xs">{contact.tooltip}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Language Selector */}
                                <div className="p-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-800 mb-3">Ngôn ngữ</h3>
                                    <div className="space-y-2">
                                        {languages.map((lang) => (
                                            <div
                                                key={lang.code}
                                                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                                                    selectedLanguage.code === lang.code 
                                                        ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                                                        : 'hover:bg-gray-50'
                                                }`}
                                                onClick={() => {
                                                    setSelectedLanguage(lang);
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Globe size={16} />
                                                    <span className="font-medium">{lang.name}</span>
                                                </div>
                                                <span className="text-sm text-gray-500">{lang.code}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Logout (for authenticated users) */}
                                {isAuther && (
                                    <div className="p-4">
                                        <button
                                            onClick={() => handleClick('/logout')}
                                            className="w-full flex items-center justify-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <LogOut size={16} />
                                            <span className="font-medium">Đăng xuất</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;