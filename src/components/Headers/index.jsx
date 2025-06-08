import React from 'react';
import { Truck, Clock, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopHeader from './TopHeader';
import NavContent from './NavContent';
import {appData} from '../../context/dataContext.jsx'
import {SearchContextProvider} from '../../context/searchContext';
const Header = () => {
    const {logo} = appData()
    const Navigate = useNavigate()
    const handleClick = (url) => {
        Navigate(url)
    };

    const features = [
        {
            icon: <Truck className="w-8 h-8 text-blue-600" />,
            title: "Miễn Phí Vận Chuyển",
            subtitle: "Bán kính 100km",
            bgColor: "bg-blue-50"
        },
        {
            icon: <Clock className="w-8 h-8 text-green-600" />,
            title: "Hỗ trợ 24/7",
            subtitle: "Hotline: 0988 416 983",
            bgColor: "bg-green-50"
        },
        {
            icon: <Phone className="w-8 h-8 text-orange-600" />,
            title: "Giờ làm việc",
            subtitle: "T2-T7 Hỗ trợ giờ hành chính",
            bgColor: "bg-orange-50"
        }
    ];

    return (
        <header className="bg-white shadow-lg relative z-10">
            <SearchContextProvider>
                <TopHeader />    
            </SearchContextProvider>
            
            
            {/* Main Header */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <img 
                            src={logo}
                            alt='Company Logo' 
                            onClick={() => handleClick('/')} 
                            className='max-w-[200px] h-auto cursor-pointer hover:opacity-80 transition-opacity duration-300'
                        />
                    </div>

                    {/* Features Section */}
                    <div className="md:flex flex-col sm:flex-row gap-4 lg:gap-8 hidden">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className={`flex items-center gap-3 p-4 rounded-lg ${feature.bgColor} hover:shadow-md transition-shadow duration-300`}
                            >
                                <div className="flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-gray-800 text-sm lg:text-base">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs lg:text-sm">
                                        {feature.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <NavContent />
        </header>
    );
};

export default Header;