import React, { useState } from 'react';
import { ShoppingCart, Eye, Star, Award, Shield } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 h-64">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Quality Badge */}
        <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Award className="w-3 h-3" />
          Chất Lượng Cao
        </div>
        
        {/* Safety Badge */}
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Shield className="w-3 h-3" />
          An Toàn
        </div>
        
        {/* Quick View Button */}
        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Xem Chi Tiết
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-xl w-full overflow-hidden text-nowrap font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < (product.rating || 5) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">({product.reviews || 25})</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {product.description}
        </p>
        
        {/* Specifications */}
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-gray-500">Độ Tinh Khiết:</span>
              <span className="font-semibold text-gray-700 ml-1">{product.purity || '99.9%'}</span>
            </div>
            <div>
              <span className="text-gray-500">Quy Cách:</span>
              <span className="font-semibold text-gray-700 ml-1">{product.package || '1L'}</span>
            </div>
          </div>
        </div>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Thêm Vào Giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard