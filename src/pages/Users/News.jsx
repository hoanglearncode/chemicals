import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, Filter, ChevronRight, TrendingUp, Eye, ArrowRight, Star, Bookmark } from 'lucide-react';
import Banner from '../../components/common/Banner/NewsBanner';
import {SearchContextProvider} from '../../context/searchContext'
export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Banner />

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 lg:px-20 py-2'>
               
        </div>
    </div>
  );
}