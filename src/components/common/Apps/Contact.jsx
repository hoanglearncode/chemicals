import React, { useState } from "react";
import { Phone, MessageCircle, Globe, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ContactComponent() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    const contactMethods = [
        {
            icon: Globe,
            label: "Website",
            color: "from-blue-500 to-blue-600",
            hoverColor: "hover:from-blue-600 hover:to-blue-700",
            action: () => window.open("#", "_blank")
        },
        {
            icon: MessageCircle,
            label: "Chat Zalo",
            color: "from-green-500 to-green-600",
            hoverColor: "hover:from-green-600 hover:to-green-700",
            action: () => window.open("https://zalo.me/0988416983", "_blank")
        },
        {
            icon: Phone,
            label: "Gọi điện",
            color: "from-red-500 to-red-600",
            hoverColor: "hover:from-red-600 hover:to-red-700",
            action: () => setShowPhoneNumber(!showPhoneNumber),
            special: true
        }
    ];

    return (
        <>
            {/* Main Contact Widget */}
            <div className="fixed bottom-8 left-8 z-50">
                <div className="flex flex-col items-start gap-3">
                    
                    {/* Expanded Contact Methods */}
                    <div className={`flex flex-col gap-3 transition-all duration-500 ease-in-out transform ${
                        isExpanded 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                    }`}>
                        {contactMethods.map((method, index) => (
                            <div key={index} className="flex items-center group">
                                {/* Contact Button */}
                                <button
                                    onClick={method.action}
                                    className={`
                                        relative p-4 rounded-full shadow-lg 
                                        bg-gradient-to-r ${method.color} ${method.hoverColor}
                                        transform transition-all duration-300 ease-out
                                        hover:scale-110 hover:shadow-xl
                                        active:scale-95
                                        focus:outline-none focus:ring-4 focus:ring-white/20
                                    `}
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <method.icon size={24} className="text-white" />
                                    
                                    {/* Ripple Effect */}
                                    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                </button>

                                {/* Label Tooltip */}
                                <div className={`
                                    ml-4 px-4 py-2 bg-gray-800/90 backdrop-blur-sm text-white rounded-lg shadow-lg
                                    transform transition-all duration-300 ease-out
                                    opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0
                                    pointer-events-none text-sm font-medium whitespace-nowrap
                                `}>
                                    {method.label}
                                    {/* Arrow */}
                                    <div className="absolute left-[-4px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Main Toggle Button */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`
                            relative p-4 rounded-full shadow-2xl 
                            bg-gradient-to-r from-indigo-500 to-purple-600
                            hover:from-indigo-600 hover:to-purple-700
                            transform transition-all duration-300 ease-out
                            hover:scale-110 hover:shadow-xl
                            active:scale-95
                            focus:outline-none focus:ring-4 focus:ring-indigo-300/50
                            ${isExpanded ? 'rotate-45' : 'rotate-0'}
                        `}
                    >
                        {isExpanded ? (
                            <X size={28} className="text-white" />
                        ) : (
                            <MessageCircle size={28} className="text-white" />
                        )}
                        
                        {/* Pulse Animation */}
                        <div className={`
                            absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500
                            animate-ping opacity-20 ${isExpanded ? 'hidden' : 'block'}
                        `}></div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 opacity-20 blur-lg"></div>
                    </button>

                    {/* Help Text */}
                    {!isExpanded && (
                        <div className="ml-2 px-3 py-2 bg-black/70 backdrop-blur-sm text-white text-sm rounded-lg shadow-lg animate-bounce">
                            Cần hỗ trợ?
                            <div className="absolute left-[-4px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-black/70 rotate-45"></div>
                        </div>
                    )}
                </div>
            </div>

            {/* Phone Number Modal */}
            {showPhoneNumber && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-300 scale-100">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                                <Phone className="mr-3 text-red-500" size={28} />
                                Liên hệ ngay
                            </h3>
                            <button
                                onClick={() => setShowPhoneNumber(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Phone Number Display */}
                        <div className="text-center mb-8">
                            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                                <p className="text-gray-600 mb-2">Hotline hỗ trợ 24/7</p>
                                <p className="text-4xl font-bold text-red-600 tracking-wider">
                                    0988 416 983
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => window.location.href = 'tel:0988416983'}
                                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                            >
                                <Phone size={20} className="mr-2" />
                                Gọi ngay
                            </button>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText('0988416983');
                                    // You could add a toast notification here
                                }}
                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                            >
                                Sao chép
                            </button>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-500 text-sm">
                                🕒 Thời gian hỗ trợ: 8:00 - 22:00 hàng ngày
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}