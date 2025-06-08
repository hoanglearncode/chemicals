import React, { useEffect, useState } from 'react';
import { Search, Grid, List, Star, ShoppingCart, Eye, Heart, Award, ChevronDown, ChevronRight, AlignCenter, Filter, X, SlidersHorizontal } from 'lucide-react';
import Banner from '../../components/common/Banner/ProductsBanner';
import {SearchContextProvider} from '../../context/searchContext'
import { appData } from '../../context/dataContext';
import SearchComponent from '../../components/common/Search';
import ProductCard from '../../components/Products/Card.jsx';
import productService from '../../services/Products/index.js';
export default function ProductsPage() {
    const { categoriesData } = appData();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [selectedBrand, setSelectedBrand] = useState('');
    const [rating, setRating] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [product, setProducts] = useState([])

    const ratings = [5, 4, 3, 2, 1];
    
    const sortOptions = [
        { value: '', label: 'Mặc định' },
        { value: 'price_asc', label: 'Giá thấp đến cao' },
        { value: 'price_desc', label: 'Giá cao đến thấp' },
        { value: 'name_asc', label: 'Tên A-Z' },
        { value: 'name_desc', label: 'Tên Z-A' },
        { value: 'rating_desc', label: 'Đánh giá cao nhất' },
        { value: 'newest', label: 'Mới nhất' },
        { value: 'bestseller', label: 'Bán chạy nhất' }
    ];
    
    const clearFilters = () => {
        setSelectedCategory('');
        setPriceRange({ min: '', max: '' });
        setSelectedBrand('');
        setRating('');
        setSortBy('');
    };
    
    const hasActiveFilters = selectedCategory || priceRange.min || priceRange.max || selectedBrand || rating;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = productService.getAllProducts();
                setProducts(productsData);
                
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
            }
        };

        fetchData();
    }, [selectedCategory, priceRange, selectedBrand, rating, sortBy]);

    return (
        <div className="min-h-screen flex flex-col gap-5 bg-gray-100 py-5">
            <Banner />

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 lg:px-20 py-2'>
                {/* Sidebar Filters */}
                <div className={`lg:col-span-1 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
                    <div className='flex flex-col bg-white px-5 py-4 border rounded-lg shadow-sm'>
                        {/* Filter Header */}
                        <div className='flex items-center justify-between mb-4'>
                            <h3 className='text-gray-800 font-bold text-xl flex items-center gap-2'>
                                <SlidersHorizontal size={20} />
                                Bộ lọc
                            </h3>
                            {hasActiveFilters && (
                                <button 
                                    onClick={clearFilters}
                                    className='text-red-500 hover:text-red-700 text-sm flex items-center gap-1'
                                >
                                    <X size={16} />
                                    Xóa tất cả
                                </button>
                            )}
                        </div>
                        
                        {/* Categories Filter */}
                        <div className='w-full flex flex-col mb-6'>
                            <span className='text-gray-700 font-semibold text-lg py-2 border-b mb-3'>
                                Danh mục
                            </span>
                            <div className="space-y-2">
                                {categoriesData.length > 0 ? (
                                    categoriesData.map((category, index) => (
                                        <label key={index} className="flex items-center cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={category.name}
                                                checked={selectedCategory === category.name}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                className="mr-3 text-blue-600"
                                            />
                                            <img src={category.image} alt="" className='w-6 h-6 rounded-full mr-2'/>
                                            <span className='text-gray-700 group-hover:text-blue-600 transition-colors'>
                                                {category.name}
                                            </span>
                                        </label>
                                    ))
                                ) : (
                                    <span className="text-gray-500 italic">Không có dữ liệu</span>
                                )}
                            </div>
                        </div>

                        {/* Price Range Filter */}
                        <div className='mb-6'>
                            <span className='text-gray-700 font-semibold text-lg py-2 border-b mb-3 block'>
                                Khoảng giá
                            </span>
                            <div className='flex flex-col gap-2 items-center'>
                                <input
                                    type="number"
                                    placeholder="Từ .. VND"
                                    value={priceRange.min}
                                    onChange={(e) => setPriceRange(prev => ({...prev, min: e.target.value}))}
                                    className='flex-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                                <input
                                    type="number"
                                    placeholder="Đến .. VND"
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange(prev => ({...prev, max: e.target.value}))}
                                    className='flex-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                        </div>

                        {/* Rating Filter */}
                        <div className='mb-6'>
                            <span className='text-gray-700 font-semibold text-lg py-2 border-b mb-3 block'>
                                Đánh giá
                            </span>
                            <div className="space-y-2">
                                {ratings.map((star, index) => (
                                    <label key={index} className="flex items-center cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={star}
                                            checked={rating === star.toString()}
                                            onChange={(e) => setRating(e.target.value)}
                                            className="mr-3 text-blue-600"
                                        />
                                        <div className='flex items-center'>
                                            {[...Array(star)].map((_, i) => (
                                                <Star key={i} size={16} className="text-yellow-400 fill-current" />
                                            ))}
                                            {[...Array(5 - star)].map((_, i) => (
                                                <Star key={i} size={16} className="text-gray-300" />
                                            ))}
                                            <span className='ml-2 text-gray-700 group-hover:text-blue-600 transition-colors'>
                                                {star} sao trở lên
                                            </span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className='col-span-1 lg:col-span-3'>
                    <SearchContextProvider>  
                        <div className='bg-gradient-to-r from-blue-500 to-sky-600 p-4 rounded-lg shadow-sm mb-4 '>
                            {/* Mobile Filter Toggle */}
                            <div className='lg:hidden mb-4'>
                                <button
                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                                >
                                    <Filter size={20} />
                                    Bộ lọc
                                </button>
                            </div>

                            {/* Search and Sort */}
                            <div className='flex flex-col sm:flex-row gap-4 items-center justify-between '>
                                <div className='flex-1 w-full sm:w-auto '>
                                    <SearchComponent/>
                                </div>
                                
                                <div className='flex items-center gap-4 w-full sm:w-auto'>
                                    <span className='text-white text-sm whitespace-nowrap'>Sắp xếp theo:</span>
                                    <select 
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-[200px]'
                                    >
                                        {sortOptions.map((option, index) => (
                                            <option key={index} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Active Filters Display */}
                            {hasActiveFilters && (
                                <div className='mt-4 pt-4 border-t'>
                                    <div className='flex flex-wrap gap-2 items-center'>
                                        <span className='text-sm text-white mr-2'>Bộ lọc đang áp dụng:</span>
                                        {selectedCategory && (
                                            <span className='inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'>
                                                {selectedCategory}
                                                <button onClick={() => setSelectedCategory('')}>
                                                    <X size={14} />
                                                </button>
                                            </span>
                                        )}
                                        {selectedBrand && (
                                            <span className='inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full'>
                                                {selectedBrand}
                                                <button onClick={() => setSelectedBrand('')}>
                                                    <X size={14} />
                                                </button>
                                            </span>
                                        )}
                                        {rating && (
                                            <span className='inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full'>
                                                {rating}+ sao
                                                <button onClick={() => setRating('')}>
                                                    <X size={14} />
                                                </button>
                                            </span>
                                        )}
                                        {(priceRange.min || priceRange.max) && (
                                            <span className='inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full'>
                                                {priceRange.min || '0'} - {priceRange.max || '∞'} VNĐ
                                                <button onClick={() => setPriceRange({ min: '', max: '' })}>
                                                    <X size={14} />
                                                </button>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Products Grid - Placeholder */}
                        {product.length > 0 ? (
                            <div className='bg-white p-6 rounded-lg shadow-sm gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                {product.map((item)=>(
                                    <div key={item.id}>
                                        <ProductCard product={item}/>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='bg-white p-6 rounded-lg shadow-sm'>
                                <div className='text-center text-gray-500'>
                                    <div className='mb-4'>
                                        <Grid size={48} className='mx-auto text-gray-300' />
                                    </div>
                                    <p>Danh sách sản phẩm sẽ hiển thị ở đây</p>
                                    <p className='text-sm mt-2'>Dữ liệu sẽ được lọc theo các tiêu chí đã chọn</p>
                                </div>
                            </div>
                        )}
                        
                    </SearchContextProvider>
                </div>
            </div>
        </div>
    );
}