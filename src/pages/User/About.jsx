import React from 'react';
import { Award, Users, Shield, Truck, CheckCircle, Star, Globe, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutPage() {
  const achievements = [
    { icon: Award, title: '15+ Năm Kinh Nghiệm', desc: 'Phục vụ trong lĩnh vực hóa chất công nghiệp' },
    { icon: Users, title: '500+ Khách Hàng', desc: 'Tin tưởng và đồng hành cùng chúng tôi' },
    { icon: Shield, title: 'Chứng Nhận ISO', desc: 'Đảm bảo chất lượng và an toàn tuyệt đối' },
    { icon: Truck, title: 'Giao Hàng Toàn Quốc', desc: 'Vận chuyển an toàn, đúng hẹn' }
  ];

  const values = [
    { icon: CheckCircle, title: 'Chất Lượng', desc: 'Cam kết cung cấp sản phẩm chất lượng cao, đạt tiêu chuẩn quốc tế' },
    { icon: Shield, title: 'An Toàn', desc: 'Tuân thủ nghiêm ngặt các quy định về an toàn và bảo vệ môi trường' },
    { icon: Star, title: 'Uy Tín', desc: 'Xây dựng mối quan hệ lâu dài dựa trên sự tin cậy và minh bạch' },
    { icon: Globe, title: 'Đổi Mới', desc: 'Không ngừng cập nhật công nghệ và giải pháp tiên tiến nhất' }
  ];

  const team = [
    { name: 'TS. Nguyễn Văn A', role: 'Giám Đốc Điều Hành', image: '👨‍🔬' },
    { name: 'ThS. Trần Thị B', role: 'Trưởng Phòng Kỹ Thuật', image: '👩‍🔬' },
    { name: 'KS. Lê Văn C', role: 'Quản Lý Chất Lượng', image: '👨‍💼' }
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
            ChemTech Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Đối tác tin cậy trong cung cấp hóa chất công nghiệp chất lượng cao, 
            phục vụ sự phát triển bền vững của doanh nghiệp Việt Nam
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white border-opacity-30">
              <span className="text-3xl font-bold">15+</span>
              <p className="text-sm">Năm kinh nghiệm</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white border-opacity-30">
              <span className="text-3xl font-bold">500+</span>
              <p className="text-sm">Khách hàng</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white border-opacity-30">
              <span className="text-3xl font-bold">1000+</span>
              <p className="text-sm">Sản phẩm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Câu Chuyện Của Chúng Tôi</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Thành lập từ năm 2009, ChemTech Solutions bắt đầu với tầm nhìn trở thành nhà cung cấp 
                hóa chất công nghiệp hàng đầu tại Việt Nam. Từ một công ty khởi nghiệp nhỏ, chúng tôi 
                đã phát triển thành một tập đoàn với mạng lưới phân phối rộng khắp cả nước.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Với đội ngũ chuyên gia giàu kinh nghiệm và hệ thống quản lý chất lượng nghiêm ngặt, 
                chúng tôi cam kết mang đến những sản phẩm và dịch vụ tốt nhất cho khách hàng.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Chứng nhận ISO 9001:2015</h4>
                  <p className="text-gray-600">Hệ thống quản lý chất lượng quốc tế</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Tầm Nhìn</h4>
                    <p className="text-sm text-gray-600">Dẫn đầu ngành hóa chất công nghiệp Việt Nam</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Sứ Mệnh</h4>
                    <p className="text-sm text-gray-600">Cung cấp giải pháp hóa chất tối ưu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Thành Tựu Nổi Bật</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những con số ấn tượng khẳng định vị thế và uy tín của chúng tôi trong ngành
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Giá Trị Cốt Lõi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những nguyên tắc định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Đội Ngũ Lãnh Đạo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những chuyên gia hàng đầu với nhiều năm kinh nghiệm trong ngành hóa chất
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Sẵn Sàng Hợp Tác Cùng Chúng Tôi?</h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Liên hệ ngay để được tư vấn giải pháp hóa chất phù hợp nhất cho doanh nghiệp của bạn
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-blue-300" />
              <span className="text-lg">0123 456 789</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-blue-300" />
              <span className="text-lg">info@chemtech.vn</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-blue-300" />
              <span className="text-lg">TP. Hồ Chí Minh</span>
            </div>
          </div>
          
          <button className="bg-white text-blue-900 font-bold text-lg px-10 py-4 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Liên Hệ Ngay
          </button>
        </div>
      </section>
    </div>
  );
}