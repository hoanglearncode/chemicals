import React, { useState, useRef, useEffect } from 'react';
import './assets/App.css'
import { Send, Mic, Paperclip, RotateCcw, Copy, ThumbsUp, ThumbsDown, User, Bot, Menu, Plus, MessageSquare, BookOpen, GraduationCap, Target, Lightbulb, TrendingUp } from 'lucide-react';

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: `Chào mừng bạn đến với **EduGuide AI**! 🎓

Tôi là trợ lý AI chuyên về định hướng giáo dục và phát triển nghề nghiệp. Tôi có thể giúp bạn:

• **Phân tích năng lực cá nhân** - Đánh giá điểm mạnh, sở thích
• **Định hướng nghề nghiệp** - Tư vấn ngành học và con đường phát triển  
• **Lập lộ trình học tập** - Kế hoạch chi tiết theo mục tiêu
• **Phát triển kỹ năng** - Soft skills và hard skills cần thiết
• **Cập nhật xu hướng** - Ngành nghề hot và cơ hội việc làm

Hãy bắt đầu bằng cách chia sẻ về bản thân hoặc mục tiêu của bạn! 💡`,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const quickPrompts = [
    { icon: GraduationCap, text: "Tôi là học sinh lớp 12 cần định hướng nghề nghiệp", category: "career" },
    { icon: TrendingUp, text: "Các ngành học hot hiện nay là gì?", category: "trends" },
    { icon: Target, text: "Làm sao để lập kế hoạch học tập hiệu quả?", category: "planning" },
    { icon: Lightbulb, text: "Tôi cần phát triển kỹ năng gì để thành công?", category: "skills" }
  ];

  const conversations = [
    { id: 1, title: "Định hướng nghề nghiệp CNTT", date: "Hôm nay", active: true },
    { id: 2, title: "Lộ trình học Marketing", date: "Hôm qua" },
    { id: 3, title: "Phát triển kỹ năng lãnh đạo", date: "2 ngày trước" },
    { id: 4, title: "Xu hướng ngành Y tế", date: "1 tuần trước" }
  ];

  const aiResponses = {
    career: [
      `Tuyệt vời! Định hướng nghề nghiệp là bước quan trọng trong cuộc đời. Để tôi có thể tư vấn chính xác nhất, bạn có thể cho tôi biết:

**🎯 Về bản thân:**
• Bạn đang học tổ hợp nào? (Tự nhiên, Xã hội, hay Chưa xác định)
• Môn học nào bạn cảm thấy hứng thú và học tốt nhất?
• Bạn có sở thích đặc biệt nào không?

**💭 Về mong muốn:**
• Bạn thích làm việc trong môi trường như thế nào?
• Có ngành nghề nào bạn đã quan tâm chưa?
• Mục tiêu thu nhập và phát triển của bạn?

Dựa trên thông tin này, tôi sẽ phân tích và đưa ra những gợi ý phù hợp nhất! ✨`,

      `Rất vui được hỗ trợ bạn! Việc định hướng sớm sẽ giúp bạn có lộ trình rõ ràng và tự tin hơn.

**📊 Quy trình tư vấn của tôi:**

1. **Đánh giá năng lực** - Phân tích điểm mạnh, sở thích qua các câu hỏi
2. **Khám phá ngành nghề** - Giới thiệu các lĩnh vực phù hợp với profile
3. **Lập lộ trình** - Kế hoạch học tập và phát triển kỹ năng cụ thể
4. **Theo dõi tiến độ** - Hỗ trợ điều chỉnh kế hoạch khi cần

Để bắt đầu, bạn có muốn làm bài test đánh giá năng lực ngắn không? Hoặc chia sẻ trực tiếp về bản thân cũng được nhé! 🚀`
    ],
    trends: [
      `Dựa trên xu hướng thị trường lao động 2024-2025, đây là những ngành học đang "hot" nhất:

**🔥 Top ngành CNTT:**
• **Trí tuệ nhân tạo (AI)** - Mức lương: 15-50 triệu/tháng
• **Data Science** - Phân tích dữ liệu lớn
• **Cybersecurity** - Bảo mật thông tin
• **Cloud Computing** - Điện toán đám mây
• **IoT & Embedded Systems** - Internet vạn vật

**💊 Lĩnh vực Y tế:**
• **Y học số (Digital Health)** - Kết hợp công nghệ
• **Dược phẩm** - Nghiên cứu thuốc mới
• **Dinh dưỡng & Wellness** - Sức khỏe cộng đồng

**🌱 Ngành mới nổi:**
• **Năng lượng tái tạo** - Xu hướng xanh
• **Fintech** - Công nghệ tài chính  
• **E-commerce & Digital Marketing**
• **UX/UI Design** - Thiết kế trải nghiệm

Bạn quan tâm lĩnh vực nào nhất? Tôi có thể tư vấn chi tiết hơn! 🎯`,

      `Xu hướng nghề nghiệp đang thay đổi rất nhanh! Đây là phân tích mới nhất:

**📈 Những ngành tăng trưởng mạnh:**

**Công nghệ & Kỹ thuật số:**
• Developer (Web, Mobile, AI) - Nhu cầu tăng 40%
• Data Analyst/Scientist - Tăng 35%
• Digital Marketing Specialist - Tăng 30%

**Sức khỏe & Chăm sóc:**
• Điều dưỡng chuyên khoa - Tăng 25%
• Tâm lý học ứng dụng - Tăng 20%
• Vật lý trị liệu - Tăng 18%

**Tài chính & Kinh doanh:**
• Financial Analyst - Tăng 22%
• Project Manager - Tăng 15%
• Sustainability Consultant - Tăng 28%

**💡 Lời khuyên:** Chọn ngành vừa phù hợp với năng lực, vừa có triển vọng phát triển. Bạn muốn tìm hiểu ngành nào cụ thể?`
    ],
    planning: [
      `Lập kế hoạch học tập hiệu quả cần có phương pháp khoa học! Đây là framework tôi khuyên dùng:

**📋 Phương pháp SMART Goals:**
• **S**pecific - Mục tiêu cụ thể
• **M**easurable - Có thể đo lường
• **A**chievable - Khả thi
• **R**elevant - Phù hợp
• **T**ime-bound - Có thời hạn

**🎯 Cấu trúc kế hoạch 6 bước:**

1. **Đánh giá hiện trạng** (1 tuần)
   - Xác định điểm mạnh/yếu
   - Đo lường năng lực hiện tại

2. **Xác định mục tiêu** (3 ngày)
   - Mục tiêu ngắn hạn (3-6 tháng)
   - Mục tiêu dài hạn (1-3 năm)

3. **Lập timeline** (2 ngày)
   - Chia nhỏ mục tiêu lớn
   - Đặt milestone quan trọng

4. **Phân bổ thời gian** (1 ngày)
   - 60% thời gian cho môn chính
   - 25% cho kỹ năng mềm
   - 15% cho hoạt động thực hành

5. **Chọn phương pháp học** (1 ngày)
   - Tìm phong cách học phù hợp
   - Lựa chọn tài liệu, khóa học

6. **Theo dõi & điều chỉnh** (Hàng tuần)
   - Review tiến độ
   - Tối ưu phương pháp

Bạn muốn tôi hỗ trợ bước nào trước? 🚀`
    ],
    skills: [
      `Kỹ năng cần thiết để thành công trong thời đại số hiện nay rất đa dạng! Tôi sẽ chia thành 3 nhóm chính:

**🧠 Hard Skills (Kỹ năng chuyên môn):**
• **Kỹ năng số** - Tin học văn phòng, lập trình cơ bản
• **Ngoại ngữ** - Tiếng Anh (IELTS 6.5+), tiếng Trung/Nhật
• **Phân tích dữ liệu** - Excel nâng cao, Power BI
• **Kỹ năng chuyên ngành** - Tùy theo lĩnh vực

**💡 Soft Skills (Kỹ năng mềm):**
• **Giao tiếp** - Thuyết trình, viết báo cáo
• **Tư duy phản biện** - Phân tích, giải quyết vấn đề
• **Lãnh đạo** - Quản lý nhóm, ra quyết định
• **Thích ứng** - Linh hoạt với thay đổi
• **Quản lý thời gian** - Tối ưu hiệu suất

**🎯 Meta Skills (Kỹ năng học tập):**
• **Học cách học** - Phương pháp học hiệu quả
• **Tư duy sáng tạo** - Innovation, out-of-the-box thinking
• **Networking** - Xây dựng mối quan hệ
• **Emotional Intelligence** - Hiểu biết cảm xúc

**📈 Lộ trình phát triển 12 tháng:**
• Tháng 1-3: Nền tảng (Giao tiếp + Tin học)
• Tháng 4-6: Chuyên sâu (Kỹ năng chuyên ngành)
• Tháng 7-9: Mở rộng (Ngoại ngữ + Lãnh đạo)
• Tháng 10-12: Tối ưu (Networking + Sáng tạo)

Bạn muốn tập trung phát triển nhóm kỹ năng nào trước? 🎪`
    ],
    default: [
      `Cảm ơn bạn đã chia sẻ! Để tôi có thể hỗ trợ bạn tốt nhất, bạn có thể cung cấp thêm thông tin chi tiết không?

**🤔 Một số câu hỏi gợi ý:**
• Bạn đang ở cấp học nào?
• Mục tiêu cụ thể của bạn là gì?
• Bạn đang gặp khó khăn gì?
• Có điều gì đặc biệt bạn muốn tìm hiểu?

Hoặc bạn có thể chọn một trong những chủ đề phổ biến bên dưới để tôi tư vấn chi tiết hơn! 💫`,

      `Tôi hiểu câu hỏi của bạn. Tuy nhiên, để đưa ra lời khuyên chính xác và hữu ích nhất, tôi cần hiểu rõ hơn về:

**📋 Bối cảnh của bạn:**
• Độ tuổi và cấp học hiện tại
• Mục tiêu ngắn hạn và dài hạn
• Những thách thức bạn đang gặp phải

**🎯 Mong muốn cụ thể:**
• Bạn muốn được tư vấn về vấn đề gì?
• Có khung thời gian nào cần hoàn thành không?
• Bạn đã thử cách nào chưa?

Hãy chia sẻ thêm để tôi có thể hỗ trợ bạn một cách toàn diện nhất! 🌟`
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const determineCategory = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('định hướng') || msg.includes('nghề nghiệp') || msg.includes('lớp 12') || msg.includes('chọn ngành')) {
      return 'career';
    } else if (msg.includes('ngành học') || msg.includes('hot') || msg.includes('xu hướng') || msg.includes('tương lai')) {
      return 'trends';
    } else if (msg.includes('kế hoạch') || msg.includes('lập lịch') || msg.includes('học tập') || msg.includes('lộ trình')) {
      return 'planning';
    } else if (msg.includes('kỹ năng') || msg.includes('skill') || msg.includes('phát triển')) {
      return 'skills';
    }
    return 'default';
  };

  const getRandomResponse = (category) => {
    const responses = aiResponses[category] || aiResponses.default;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    const category = determineCategory(inputMessage);
    const response = getRandomResponse(category);

    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      content: response,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleQuickPrompt = (prompt) => {
    setInputMessage(prompt);
    inputRef.current?.focus();
  };

  const formatMessage = (content) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>');
  };

  const copyMessage = (content) => {
    navigator.clipboard.writeText(content.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1'));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 bg-gray-800">
          <h1 className="text-xl font-bold text-white">EduGuide AI</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4">
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={16} />
            Cuộc trò chuyện mới
          </button>
        </div>

        <div className="px-4 pb-4">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Lịch sử trò chuyện</h3>
          <div className="space-y-1">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  conv.active 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <MessageSquare size={16} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{conv.title}</div>
                  <div className="text-xs text-gray-400">{conv.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div>
              <div className="font-medium">User</div>
              <div className="text-xs text-gray-400">Free Plan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">EduGuide AI</h2>
                <p className="text-xs text-gray-500">Trợ lý định hướng học tập</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-6">
            {messages.length === 1 && (
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickPrompt(prompt.text)}
                      className="flex items-start gap-3 p-4 text-left border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <prompt.icon size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{prompt.text}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id} className={`mb-6 ${message.type === 'user' ? 'ml-auto' : ''}`}>
                <div className={`flex gap-4 ${message.type === 'user' ? 'flex-row-reverse' : ''} max-w-4xl`}>
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full">
                    {message.type === 'user' ? (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <User size={16} className="text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Bot size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block max-w-full ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-xl px-4 py-2' 
                        : 'bg-transparent'
                    }`}>
                      <div 
                        className={`text-sm leading-relaxed ${message.type === 'user' ? 'text-white' : 'text-gray-900'}`}
                        dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                      {message.type === 'bot' && (
                        <div className="flex items-center gap-1">
                          <button 
                            onClick={() => copyMessage(message.content)}
                            className="p-1 text-gray-400 hover:text-gray-600 rounded"
                          >
                            <Copy size={12} />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                            <ThumbsUp size={12} />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                            <ThumbsDown size={12} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="mb-6">
                <div className="flex gap-4 max-w-4xl">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-gray-500">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm">Đang soạn tin nhắn...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 bg-white p-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center gap-2">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Nhập câu hỏi của bạn... (Shift + Enter để xuống dòng)"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows="1"
                  style={{ minHeight: '48px', maxHeight: '120px' }}
                />
                <div className="absolute right-2 bottom-2 flex items-center gap-1">
                  <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded">
                    <Paperclip size={16} />
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded">
                    <Mic size={16} />
                  </button>
                </div>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              EduGuide AI có thể tạo ra thông tin không chính xác. Vui lòng kiểm tra các thông tin quan trọng.
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AIChatbot;