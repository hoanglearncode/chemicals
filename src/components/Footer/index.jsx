import React, {useState,useEffect} from "react";
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle } from "lucide-react";
import system from "../../services/system";
export default function Footer() {
    const [contactInfo, setContactInfo] = useState([])
    useEffect(()=>{
        const handleData = async () => {
            const infor = await system.getContactInfor();
            setContactInfo(infor)
        } 
        handleData()
    }, [])
    return (
        <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20">
                                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                                    <img src="logo.svg" alt="" className=" rounded-full" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-400">
                                HÓA CHẤT NHẬT MINH
                            </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Chuyên cung cấp hóa chất chất lượng cao, phục vụ các ngành công nghiệp và nghiên cứu với độ tin cậy hàng đầu tại Việt Nam.
                        </p>
                        <div className="flex space-x-3 pt-2">
                            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-blue-400 mb-6 flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            Thông Tin Liên Hệ
                        </h4>
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                                    <div className="p-2 bg-sky-100 text-sky-600 rounded-full">
                                        <contact.icon size={16} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white text-sm">{contact.shortText}</p>
                                        <p className="text-gray-200 text-xs">{contact.tooltip}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-blue-400 mb-6 flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            Giờ Làm Việc
                        </h4>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <Clock className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                                    <div className="text-gray-300">
                                        <p className="font-medium text-white">Thứ 2 - Thứ 6:</p>
                                        <p className="text-blue-200">8:00 - 17:30</p>
                                    </div>
                                </div>
                                <div className="ml-6 pl-3 border-l border-blue-400/30">
                                    <p className="text-gray-300">
                                        <span className="font-medium text-white">Thứ 7:</span> 
                                        <span className="text-blue-200 ml-2">8:00 - 12:00</span>
                                    </p>
                                    <p className="text-gray-300">
                                        <span className="font-medium text-white">Chủ nhật:</span> 
                                        <span className="text-red-300 ml-2">Nghỉ</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            <p>© 2025 Hóa Chất Nhật Minh. Tất cả quyền được bảo lưu.</p>
                        </div>
                        <div className="text-gray-400 text-sm">
                            <p>Thiết kế bởi <span className="text-blue-400 font-medium">Nhật Minh Tech</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    );
}