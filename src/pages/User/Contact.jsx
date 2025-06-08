import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, User, Building, FileText, ChevronDown, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    productType: 'industrial'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      productType: 'industrial'
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Hotline',
      details: ['0123 456 789', '0987 654 321'],
      subtitle: 'Hỗ trợ 24/7'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@chemtech.vn', 'sales@chemtech.vn'],
      subtitle: 'Phản hồi trong 2 giờ'
    },
    {
      icon: MapPin,
      title: 'Địa Chỉ',
      details: ['123 Đường ABC, Quận 1', 'TP. Hồ Chí Minh, Việt Nam'],
      subtitle: 'Showroom & Kho hàng'
    },
    {
      icon: Clock,
      title: 'Giờ Làm Việc',
      details: ['T2-T6: 8:00 - 17:30', 'T7: 8:00 - 12:00'],
      subtitle: 'Chủ nhật nghỉ'
    }
  ];

  const offices = [
    {
      city: 'TP. Hồ Chí Minh',
      address: '123 Đường ABC, Quận 1',
      phone: '0123 456 789',
      type: 'Trụ sở chính'
    },
    {
      city: 'Hà Nội',
      address: '456 Đường XYZ, Cầu Giấy',
      phone: '0987 654 321',
      type: 'Chi nhánh'
    },
    {
      city: 'Đà Nẵng',
      address: '789 Đường DEF, Hải Châu',
      phone: '0369 258 147',
      type: 'Văn phòng đại diện'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full opacity-5 animate-bounce"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn giải pháp hóa chất tối ưu cho doanh nghiệp của bạn
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white border-opacity-30">
              <MessageCircle className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Tư vấn miễn phí</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white border-opacity-30">
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Phản hồi nhanh chóng</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white border-opacity-30">
              <CheckCircle className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Hỗ trợ 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-blue-600 text-sm font-semibold">{info.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
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

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    placeholder="Tiêu đề *"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Nội dung chi tiết về yêu cầu của bạn... *"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Gửi Yêu Cầu</span>
                </button>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
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

              {/* Quick Stats */}
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

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hệ Thống Văn Phòng</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mạng lưới văn phòng rộng khắp, sẵn sàng phục vụ khách hàng trên toàn quốc
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">{office.city}</h3>
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {office.type}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <p className="text-gray-600 font-medium">{office.phone}</p>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300">
                  Xem Bản Đồ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Hỗ Trợ Khẩn Cấp 24/7</h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Đối với các tình huống khẩn cấp liên quan đến an toàn hóa chất, vui lòng liên hệ ngay
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-8 py-4 border border-white border-opacity-30">
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">0911 999 888</p>
              <p className="text-sm text-red-100">Hotline khẩn cấp</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-8 py-4 border border-white border-opacity-30">
              <Mail className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">emergency@chemtech.vn</p>
              <p className="text-sm text-red-100">Email khẩn cấp</p>
            </div>
          </div>
          <p className="text-red-100">
            Chúng tôi có đội ngũ kỹ thuật sẵn sàng hỗ trợ 24/7 cho mọi tình huống khẩn cấp
          </p>
        </div>
      </section>
    </div>
  );
}