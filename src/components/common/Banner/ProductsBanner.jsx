import React, { useState } from 'react';
import {Package, Zap, Shield, Beaker, Flame} from 'lucide-react';

export default function Banner () {
    return (
        <section className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-green-800 text-white py-20 overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-400 rounded-full opacity-5 animate-bounce"></div>
            <Beaker className="absolute top-20 right-1/4 w-12 h-12 text-white opacity-10 animate-pulse delay-500" />
            <Flame className="absolute bottom-20 left-1/4 w-10 h-10 text-orange-400 opacity-15 animate-bounce delay-700" />
            </div>
            
            <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Sản Phẩm Hóa Chất
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Khám phá bộ sưu tập hóa chất chất lượng cao với đa dạng ứng dụng 
                từ công nghiệp đến phòng thí nghiệm
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white border-opacity-30">
                    <Package className="w-5 h-5 inline mr-2" />
                    <span className="text-sm font-semibold">48+ Sản phẩm</span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white border-opacity-30">
                    <Shield className="w-5 h-5 inline mr-2" />
                    <span className="text-sm font-semibold">Chất lượng đảm bảo</span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white border-opacity-30">
                    <Zap className="w-5 h-5 inline mr-2" />
                    <span className="text-sm font-semibold">Giao hàng nhanh</span>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}