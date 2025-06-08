import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, Filter, ChevronRight, TrendingUp, Eye, ArrowRight, Star, Bookmark } from 'lucide-react';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tất cả', count: 24 },
    { id: 'industry', name: 'Tin ngành', count: 8 },
    { id: 'products', name: 'Sản phẩm', count: 6 },
    { id: 'technology', name: 'Công nghệ', count: 5 },
    { id: 'regulations', name: 'Quy định', count: 3 },
    { id: 'company', name: 'Công ty', count: 2 }
  ];

  const featuredNews = {
    title: 'Xu hướng Hóa chất Xanh - Tương lai Bền vững của Ngành Công nghiệp',
    excerpt: 'Ngành hóa chất đang chuyển mình mạnh mẽ theo hướng xanh và bền vững. Các doanh nghiệp tiên phong áp dụng công nghệ mới để giảm thiểu tác động môi trường...',
    image: '🌱',
    category: 'Tin ngành',
    date: '2025-06-05',
    readTime: '5 phút đọc',
    views: '2.1K',
    author: 'TS. Nguyễn Văn A'
  };

  const newsList = [
    {
      id: 1,
      title: 'Cập nhật Quy định Mới về An toàn Hóa chất 2025',
      excerpt: 'Bộ Tài nguyên và Môi trường vừa ban hành quy định mới về quản lý và sử dụng hóa chất công nghiệp...',
      image: '⚖️',
      category: 'Quy định',
      date: '2025-06-04',
      readTime: '3 phút đọc',
      views: '1.8K',
      author: 'Biên tập viên',
      tags: ['Quy định', 'An toàn', 'Pháp luật']
    },
    {
      id: 2,
      title: 'Ra mắt Dòng Sản phẩm Hóa chất Nano Thế hệ Mới',
      excerpt: 'ChemTech Solutions chính thức giới thiệu dòng sản phẩm hóa chất nano với hiệu suất vượt trội...',
      image: '🔬',
      category: 'Sản phẩm',
      date: '2025-06-03',
      readTime: '4 phút đọc',
      views: '3.2K',
      author: 'Phòng Marketing',
      tags: ['Sản phẩm mới', 'Nano', 'Công nghệ']
    },
    {
      id: 3,
      title: 'Hội thảo Quốc tế về Hóa chất Thân thiện Môi trường',
      excerpt: 'Sự kiện quy tụ các chuyên gia hàng đầu thế giới về hóa chất xanh và bền vững...',
      image: '🌍',
      category: 'Tin ngành',
      date: '2025-06-02',
      readTime: '6 phút đọc',
      views: '1.5K',
      author: 'Ban tổ chức',
      tags: ['Hội thảo', 'Quốc tế', 'Môi trường']
    },
    {
      id: 4,
      title: 'Công nghệ AI trong Kiểm soát Chất lượng Hóa chất',
      excerpt: 'Ứng dụng trí tuệ nhân tạo đang cách mạng hóa quy trình kiểm soát chất lượng trong sản xuất hóa chất...',
      image: '🤖',
      category: 'Công nghệ',
      date: '2025-06-01',
      readTime: '7 phút đọc',
      views: '2.7K',
      author: 'ThS. Trần Thị B',
      tags: ['AI', 'Chất lượng', 'Tự động hóa']
    },
    {
      id: 5,
      title: 'Đối tác Chiến lược với Tập đoàn Hóa chất Châu Âu',
      excerpt: 'ChemTech Solutions ký kết thỏa thuận hợp tác độc quyền với nhà sản xuất hàng đầu châu Âu...',
      image: '🤝',
      category: 'Công ty',
      date: '2025-05-30',
      readTime: '3 phút đọc',
      views: '4.1K',
      author: 'Ban Giám đốc',
      tags: ['Hợp tác', 'Đối tác', 'Quốc tế']
    },
    {
      id: 6,
      title: 'Bảo quản Hóa chất trong Mùa Mưa - Lưu ý Quan trọng',
      excerpt: 'Hướng dẫn chi tiết về cách bảo quản hóa chất an toàn và hiệu quả trong điều kiện ẩm ướt...',
      image: '☂️',
      category: 'Hướng dẫn',
      date: '2025-05-28',
      readTime: '5 phút đọc',
      views: '1.9K',
      author: 'Phòng Kỹ thuật',
      tags: ['Bảo quản', 'An toàn', 'Mùa mưa']
    }
  ];

  const trendingTopics = [
    { name: 'Hóa chất xanh', posts: 15 },
    { name: 'Công nghệ nano', posts: 12 },
    { name: 'An toàn lao động', posts: 8 },
    { name: 'Quy định mới', posts: 6 },
    { name: 'Đổi mới sáng tạo', posts: 4 }
  ];

  const filteredNews = newsList.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      

      {/* Search & Filter Section */}
      <section className="py-12 px-6 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm tin tức..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* News List */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">
                  {selectedCategory === 'all' ? 'Tất cả tin tức' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="text-gray-600">{filteredNews.length} bài viết</span>
              </div>

              {/* News Cards */}
              <div className="space-y-8">
                {filteredNews.map((news) => (
                  <div key={news.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="text-6xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          {news.image}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                              {news.category}
                            </span>
                            <div className="flex items-center space-x-2 text-gray-500 text-sm">
                              <Calendar className="w-4 h-4" />
                              <span>{news.date}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500 text-sm">
                              <Clock className="w-4 h-4" />
                              <span>{news.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500 text-sm">
                              <Eye className="w-4 h-4" />
                              <span>{news.views}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                            {news.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {news.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <User className="w-4 h-4" />
                              <span>{news.author}</span>
                            </div>
                            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-all">
                              <span>Đọc thêm</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-4">
                            {news.tags?.map((tag, index) => (
                              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold px-8 py-4 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Xem thêm tin tức
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Topics */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                  <h3 className="text-2xl font-bold text-gray-800">Chủ đề nổi bật</h3>
                </div>
                <div className="space-y-4">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <span className="font-medium text-gray-700">#{topic.name}</span>
                      <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-semibold">
                        {topic.posts}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Đăng ký nhận tin</h3>
                <p className="mb-6 text-blue-100">
                  Nhận thông tin mới nhất về ngành hóa chất và xu hướng công nghệ
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
                  />
                  <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Đăng ký ngay
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Liên kết nhanh</h3>
                <div className="space-y-3">
                  {[
                    'Danh mục sản phẩm',
                    'Hướng dẫn sử dụng',
                    'Chính sách bảo hành',
                    'Hỗ trợ kỹ thuật',
                    'Liên hệ tư vấn'
                  ].map((link, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{link}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}