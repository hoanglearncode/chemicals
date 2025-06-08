import React from "react";
import {
  Shield,
  Truck,
  AlertTriangle,
  Award,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Star,
  ArrowRight,
  CheckCircle,
  Pause,
  Play,
  VolumeX,
  Volume2
} from "lucide-react";

import {appData} from '../../../context/dataContext'

export default function Banner() {
  const {banner} = appData(); 
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [indexItem, setIndexItem] = React.useState({});
  const [isAutoPlay, setIsAutoPlay] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState('next');

  React.useEffect(() => {
    if (Array.isArray(banner) && banner.length > 0) {
      const newItem = banner[activeIndex];
      setIndexItem(newItem);
    }
  }, [activeIndex, banner]);

  // Auto-play functionality with progress tracking
  React.useEffect(() => {
    if (isAutoPlay && isPlaying && banner.length > 1) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveIndex((current) => (current < banner.length - 1 ? current + 1 : 0));
            setSlideDirection('next');
            return 0;
          }
          return prev + 2; // Increase by 2% every 100ms (5 seconds total)
        });
      }, 100);
      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [isAutoPlay, isPlaying, banner.length, activeIndex]);

  const trustFeatures = [
    {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "An toàn tuyệt đối",
      desc: "Tuân thủ tiêu chuẩn MSDS",
      color: "text-blue-400"
    },
    {
      icon: <Truck className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Vận chuyển chuyên nghiệp",
      desc: "Đóng gói theo quy chuẩn",
      color: "text-green-400"
    },
    {
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Chứng nhận chất lượng",
      desc: "Certificate of Analysis",
      color: "text-yellow-400"
    },
    {
      icon: <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Hỗ trợ kỹ thuật 24/7",
      desc: "Tư vấn chuyên môn",
      color: "text-red-400"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev < banner.length - 1 ? prev + 1 : 0));
    setSlideDirection('next');
    setProgress(0);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : banner.length - 1));
    setSlideDirection('prev');
    setProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleClick = (url) => {
    console.log('Navigate to:', url); // Replace with actual navigation
  };

  return (
    <div className="relative pt-0 px-20 w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 sm:right-20 w-20 h-20 sm:w-40 sm:h-40 bg-green-400 rounded-full opacity-8 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-purple-400 rounded-full opacity-6 animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-yellow-400 rounded-full opacity-5 animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full opacity-20 animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110 group"
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110 group"
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      {/* Main Content */}
      <div className="relative z-5 flex flex-col lg:flex-row items-center justify-between min-h-screen px-20 sm:px-6 lg:px-12 lg:pb-24 sm:pt-2">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left mb-8 lg:mb-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6 animate-bounce">
            <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-xs sm:text-sm lg:text-base">
              {indexItem?.badge || "CHÍNH HÃNG"}
            </span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              {indexItem?.title || "Hóa Chất Nhật Minh"}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-base sm:text-lg lg:text-xl text-blue-200 mb-4 sm:mb-6 font-medium">
            {indexItem?.subtitle || "Nhận Báo giá ngay"}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0 hidden md:block ">
            {indexItem?.description || "Cung cấp hóa chất chất lượng cao cho mọi nhu cầu"}
          </p>

          {/* Features */}
          {indexItem?.features && (
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 px-2 lg:px-0">
              {indexItem.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span className="text-white text-xs sm:text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <button 
            className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            onClick={() => handleClick('/product')}
          >
            <span className="flex items-center gap-2">
              {indexItem?.buttonText || "Liên Hệ Ngay"}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button> 
        </div>

        {/* Right Content - Image Section */}
        <div className="flex-1 flex justify-center items-center relative order-first lg:order-last mb-4 z-0">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={indexItem?.image || "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop"} 
                alt={indexItem?.title || "Hóa chất"}
                className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <Award className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-spin shadow-lg" style={{animationDuration: '3s'}}>
              <Shield className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
            </div>

            <div className="absolute top-1/2 -right-4 sm:-right-8 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
              <FlaskConical className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator with Progress */}
      <div className="absolute bottom-5 sm:bottom-32 left-1/2 transform -translate-x-1/2 z-15 md:mb-4">
        <div className="flex justify-center gap-2 sm:gap-3 mb-4">
          {banner.map((_, idx) => (
            <button
              key={idx}
              className={`relative w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => {
                setActiveIndex(idx);
                setProgress(0);
              }}
            >
              {idx === activeIndex && (
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
              )}
              {idx === activeIndex && isPlaying && (
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                  style={{
                    clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)`
                  }}
                ></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Trust Features Section */}
      <div className="absolute hidden md:block bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-8">
            {trustFeatures.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-2 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`${feature.color} mb-1 sm:mb-2 transform hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base mb-1">
                  {feature.text}
                </h3>
                <p className="text-gray-300 text-xs lg:text-sm hidden sm:block">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 relative"
          style={{ width: `${((activeIndex + 1) / banner.length) * 100}%` }}
        >
          <div className="absolute right-0 top-0 w-2 h-full bg-white opacity-75 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}