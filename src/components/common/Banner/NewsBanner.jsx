import React, { useState } from 'react';
import {Star, Calendar, Eye, Beaker, Flame} from 'lucide-react';

export default function Banner () {
      const [featuredNews, setFeaturedNews] = useState({
            title: 'Xu hướng Hóa chất Xanh - Tương lai Bền vững của Ngành Công nghiệp',
            excerpt: 'Ngành hóa chất đang chuyển mình mạnh mẽ theo hướng xanh và bền vững. Các doanh nghiệp tiên phong áp dụng công nghệ mới để giảm thiểu tác động môi trường...',
            image: '🌱',
            category: 'Tin ngành',
            date: '2025-06-05',
            readTime: '5 phút đọc',
            views: '2.1K',
            author: 'TS. Nguyễn Văn A'
        })
    return (
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full opacity-5 animate-bounce"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Tin Tức & Xu Hướng
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Cập nhật những thông tin mới nhất về ngành hóa chất, công nghệ tiên tiến 
                và các xu hướng phát triển bền vững
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white border-opacity-30">
                  <span className="text-sm">📈 24 bài viết mới</span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white border-opacity-30">
                  <span className="text-sm">🔥 5 chủ đề hot</span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white border-opacity-30">
                  <span className="text-sm">⚡ Cập nhật hàng ngày</span>
                </div>
              </div>
            </div>
            
            {/* Featured News Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Tin nổi bật</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{featuredNews.title}</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">{featuredNews.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-blue-200">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredNews.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{featuredNews.views}</span>
                  </span>
                </div>
                <button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Đọc thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}