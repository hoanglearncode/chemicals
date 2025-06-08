import { Phone, MessageCircle, Globe, MapPin, Mail, Beaker } from "lucide-react";
export default {
    getBanner : async () =>{
        const bannerSlides = [
                {
                    id: 1,
                    badge: "CHÍNH HÃNG",
                    title: "Hóa Chất Nhật Minh",
                    subtitle: "Nhận Báo giá ngay",
                    description: "Cung cấp hóa chất chất lượng cao cho mọi nhu cầu công nghiệp và phòng thí nghiệm",
                    buttonText: "Liên Hệ Ngay",
                    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
                    features: ["Chất lượng cao", "Giá cạnh tranh", "Giao hàng nhanh"]
                },
                {
                    id: 2,
                    badge: "CHUYÊN NGHIỆP",
                    title: "Giải Pháp Hóa Chất",
                    subtitle: "Tư vấn miễn phí",
                    description: "Đội ngũ chuyên gia hàng đầu sẵn sàng hỗ trợ bạn 24/7",
                    buttonText: "Tư Vấn Ngay",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
                    features: ["Tư vấn chuyên nghiệp", "Hỗ trợ 24/7", "Giải pháp tối ưu"]
                },
                {
                    id: 3,
                    badge: "ƯU ĐÃI",
                    title: "Khuyến Mãi Đặc Biệt",
                    subtitle: "Giảm giá lên đến 30%",
                    description: "Cơ hội sở hữu hóa chất chất lượng với giá ưu đãi nhất",
                    buttonText: "Xem Ưu Đãi",
                    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
                    features: ["Giảm giá 30%", "Miễn phí vận chuyển", "Quà tặng hấp dẫn"]
                }
                ];
        return bannerSlides;
    },
    getConnectMethod: async () =>{
        const contactMethods = [
            {
                icon: Globe,
                label: "Website",
                color: "from-blue-500 to-blue-600",
                hoverColor: "hover:from-blue-600 hover:to-blue-700",
                action: () => window.open("#", "_blank")
            },
            {
                icon: MessageCircle,
                label: "Chat Zalo",
                color: "from-green-500 to-green-600",
                hoverColor: "hover:from-green-600 hover:to-green-700",
                action: () => window.open("https://zalo.me/0988416983", "_blank")
            },
            {
                icon: Phone,
                label: "Gọi điện",
                color: "from-red-500 to-red-600",
                hoverColor: "hover:from-red-600 hover:to-red-700",
                action: () => setShowPhoneNumber(!showPhoneNumber),
                special: true
            }
        ];
        return contactMethods;
    },
    getContactInfor : async () => {
        const contactInfo = [
                {
                    id: 'address',
                    icon: MapPin,
                    text: "Hóa chất Nhật Minh",
                    shortText: "Địa chỉ",
                    tooltip: "300 - phố Quan Nhân - Nhân Chính - Thanh Xuân - Hà Nội"
                },
                {
                    id: 'mail',
                    icon: Mail,
                    text: "Email",
                    shortText: "Email",
                    tooltip: "demo@gmail.com"
                },
                {
                    id:'phone',
                    icon: Phone,
                    text: "0988 416 983",
                    shortText: "Hotline",
                    tooltip: "0988 416 983"
                }
            ];
        return contactInfo
    }
}