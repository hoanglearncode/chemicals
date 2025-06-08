import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Badge, Headset, List, Shield, Truck, FileText, MapPin, 
    Clock, CheckCircle, MessageCircle, Send, ChevronDown, 
    Phone, Mail, Building, User 
} from 'lucide-react';

// Components
import Banner from '../../components/common/Banner/HomeBanner.jsx';
import ProductCard from '../../components/Products/Card.jsx';
import Reviews from '../../components/Custom/Reviews.jsx';

// Services
import productService from '../../services/Products/index.js';
import Customer from '../../services/Customer/index.js';

// Constants
const FEATURES_DATA = [
    {
        icon: Shield,
        title: "An Toàn Tuyệt Đối",
        description: "Tuân thủ nghiêm ngặt các tiêu chuẩn an toàn MSDS và quy định quốc tế",
        gradient: "from-green-500 to-emerald-600",
        hoverColor: "hover:shadow-green-200"
    },
    {
        icon: Badge,
        title: "Chất Lượng Đảm Bảo",
        description: "Sản phẩm được kiểm định chặt chẽ, đạt tiêu chuẩn ISO và chứng nhận quốc tế",
        gradient: "from-blue-500 to-cyan-600",
        hoverColor: "hover:shadow-blue-200"
    },
    {
        icon: Truck,
        title: "Giao Hàng Nhanh Chóng",
        description: "Hệ thống logistics chuyên nghiệp, giao hàng an toàn trong toàn quốc",
        gradient: "from-orange-500 to-red-600",
        hoverColor: "hover:shadow-orange-200"
    },
    {
        icon: Headset,
        title: "Hỗ Trợ 24/7",
        description: "Đội ngũ chuyên gia tư vấn kỹ thuật và chăm sóc khách hàng tận tình",
        gradient: "from-purple-500 to-pink-600",
        hoverColor: "hover:shadow-purple-200"
    }
];

const INITIAL_FORM_DATA = {
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    productType: 'industrial'
};

const STATS_DATA = [
    { value: '10+', label: 'Năm Kinh Nghiệm', color: 'text-blue-600' },
    { value: '1000+', label: 'Khách Hàng Tin Tưởng', color: 'text-green-600' },
    { value: '500+', label: 'Sản Phẩm Chất Lượng', color: 'text-purple-600' },
    { value: '99%', label: 'Hài Lòng Khách Hàng', color: 'text-orange-600' }
];

// Sub-components
const FeatureCard = React.memo(({ feature, index }) => {
    const IconComponent = feature.icon;
    
    return (
        <div 
            className={`group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl ${feature.hoverColor} transition-all duration-500 transform hover:-translate-y-2 border border-gray-100`}
        >
            <div className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse delay-150`}>
                <IconComponent size={32} />
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                {feature.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                {feature.description}
            </p>
            
            <div className="w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 mt-4 rounded-full"></div>
        </div>
    );
});

const StatCard = React.memo(({ stat }) => (
    <div className="group">
        <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform animate-pulse`}>
            {stat.value}
        </div>
        <div className="text-gray-600">{stat.label}</div>
    </div>
));

const SectionHeader = React.memo(({ title, description }) => (
    <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 relative">
            {title}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
            {description}
        </p>
    </div>
));

const ContactForm = React.memo(({ formData, isSubmitted, onInputChange, onSubmit }) => (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Gửi Yêu Cầu Tư Vấn</h2>
            <p className="text-gray-600">Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất</p>
        </div>

        {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-700 font-medium">Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong 24 giờ.</p>
            </div>
        )}

        <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                    <User className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={onInputChange}
                        placeholder="Họ và tên *"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                    />
                </div>
                <div className="relative">
                    <Building className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={onInputChange}
                        placeholder="Tên công ty"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                    <Mail className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={onInputChange}
                        placeholder="Email *"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                    />
                </div>
                <div className="relative">
                    <Phone className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={onInputChange}
                        placeholder="Số điện thoại *"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                    />
                </div>
            </div>

            <div className="relative">
                <ChevronDown className="absolute top-3 right-3 w-5 h-5 text-gray-400 pointer-events-none" />
                <select
                    name="productType"
                    value={formData.productType}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white"
                >
                    <option value="industrial">Hóa chất công nghiệp</option>
                    <option value="laboratory">Hóa chất phòng thí nghiệm</option>
                    <option value="food">Hóa chất thực phẩm</option>
                    <option value="pharmaceutical">Hóa chất dược phẩm</option>
                    <option value="agricultural">Hóa chất nông nghiệp</option>
                    <option value="other">Khác</option>
                </select>
            </div>

            <div className="relative">
                <FileText className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={onInputChange}
                    placeholder="Tiêu đề *"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                />
            </div>

            <div>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={onInputChange}
                    placeholder="Nội dung chi tiết về yêu cầu của bạn... *"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
                <Send className="w-5 h-5" />
                <span>{isSubmitted ? 'Đang gửi...' : 'Gửi Yêu Cầu'}</span>
            </button>
        </form>
    </div>
));

// Main Component
const Homepage = () => {
    // ❌ QUAN TRỌNG: Luôn khai báo tất cả hooks ở đầu component
    // và theo cùng một thứ tự trong mọi lần render
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const navigate = useNavigate();

    // ✅ Tất cả hooks phải được khai báo ở đây, không được trong điều kiện
    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setIsSubmitted(true);
        
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData(INITIAL_FORM_DATA);
        }, 3000);
    }, []);

    const handleNavigateToProducts = useCallback(() => {
        navigate('/product');
    }, [navigate]);

    const featuredProducts = useMemo(() => products, [products]);
    const featuredReviews = useMemo(() => reviews, [reviews]);

    // ✅ useEffect luôn được gọi
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const productsData = productService.getAllProducts();
                const reviewsData = Customer.getFeaturedReviews();
                
                setProducts(productsData.slice(0, 9));
                setReviews(reviewsData.slice(0, 3));
                
            } catch (err) {
                setError('Có lỗi xảy ra khi tải dữ liệu');
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // ✅ Empty dependency array

    // ❌ KHÔNG BAO GIỜ làm điều này:
    // if (someCondition) {
    //     const [conditionalState] = useState(); // ❌ Hooks trong điều kiện
    //     useEffect(() => {}, []); // ❌ Hooks trong điều kiện
    // }

    // ✅ Thay vào đó, luôn render cùng một JSX structure
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-red-500 text-center">
                    <p className="text-xl mb-4">{error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Thử lại
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Banner />
            
            {/* Features Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <SectionHeader 
                        title="Tại Sao Chọn Hóa Chất Nhật Minh?"
                        description="Chúng tôi cam kết mang đến những sản phẩm hóa chất chất lượng cao nhất với dịch vụ chuyên nghiệp và đáng tin cậy"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {FEATURES_DATA.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} index={index} />
                        ))}
                    </div>
                </div>
            </section>
                
            {/* Products Section */}
            <section className="py-10 bg-white">
                <SectionHeader 
                    title="Sản Phẩm Nổi Bật"
                    description="Khám phá bộ sưu tập hóa chất chuyên nghiệp của chúng tôi"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className='flex justify-center items-center mt-10'>
                    <button 
                        onClick={handleNavigateToProducts}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                        <List size={20} />
                        <span>Xem tất cả sản phẩm</span>
                    </button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {STATS_DATA.map((stat, index) => (
                            <StatCard key={index} stat={stat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className='py-10 bg-gray-500 bg-opacity-70'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <SectionHeader 
                        title="Khách Hàng Nói Gì"
                        description="Những phản hồi tích cực từ khách hàng tin tưởng chúng tôi"
                    />
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-4'>
                        {featuredReviews.map((item, index) => (
                            <Reviews key={index} reviews={item}/>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="relative max-w-6xl mx-auto px-6 py-2 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-blue-600 bg-clip-text text-transparent">
                            Liên Hệ Với Chúng Tôi
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn giải pháp hóa chất tối ưu cho doanh nghiệp của bạn
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12">
                        <ContactForm 
                            formData={formData}
                            isSubmitted={isSubmitted}
                            onInputChange={handleInputChange}
                            onSubmit={handleSubmit}
                        />

                        {/* Map & Additional Info */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Vị Trí Trụ Sở Chính</h3>
                                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 h-64 flex items-center justify-center mb-6">
                                    <div className="text-center">
                                        <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                        <p className="text-lg font-semibold text-gray-700">Bản đồ tương tác</p>
                                        <p className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <span>📍 Gần Metro Bến Thành</span>
                                    <span>🚗 Có bãi đậu xe</span>
                                    <span>🏢 Tầng 5-6</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Tại Sao Chọn Chúng Tôi?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Phản hồi nhanh chóng</h4>
                                            <p className="text-gray-600 text-sm">Cam kết phản hồi trong vòng 2 giờ</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Tư vấn chuyên nghiệp</h4>
                                            <p className="text-gray-600 text-sm">Đội ngũ kỹ sư hóa học giàu kinh nghiệm</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                            <Send className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Giao hàng toàn quốc</h4>
                                            <p className="text-gray-600 text-sm">Vận chuyển an toàn, đúng hẹn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Add display names for debugging
FeatureCard.displayName = 'FeatureCard';
StatCard.displayName = 'StatCard';
SectionHeader.displayName = 'SectionHeader';
ContactForm.displayName = 'ContactForm';

export default Homepage;