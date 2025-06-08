export default {
    getCategory: async () => {
        const data = [
            {
                id: 1,
                name: "Hóa chất Công nghiệp",
                slug: "hoa-chat-cong-nghiep",
                description: "Các loại hóa chất phục vụ sản xuất công nghiệp",
                image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
                icon: "⚗️",
                subcategories: ["Dung môi", "Chất tẩy rửa", "Chất xúc tác", "Chất phụ gia"]
            },
            {
                id: 2,
                name: "Hóa chất Xử lý nước",
                slug: "hoa-chat-xu-ly-nuoc",
                description: "Hóa chất chuyên dùng xử lý nước thải và nước sinh hoạt",
                image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
                icon: "💧",
                subcategories: ["Chất keo tụ", "Chất khử trùng", "Điều chỉnh pH", "Chất lọc"]
            },
            {
                id: 3,
                name: "Hóa chất Nông nghiệp",
                slug: "hoa-chat-nong-nghiep",
                description: "Phân bón, thuốc bảo vệ thực vật và chất cải tạo đất",
                image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
                icon: "🌱",
                subcategories: ["Phân bón", "Thuốc trừ sâu", "Chất điều hòa", "Cải tạo đất"]
            },
            {
                id: 4,
                name: "Hóa chất Thực phẩm",
                slug: "hoa-chat-thuc-pham",
                description: "Phụ gia thực phẩm an toàn và chất bảo quản",
                image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
                icon: "🍎",
                subcategories: ["Chất bảo quản", "Chất tạo màu", "Chất tạo vị", "Chất nhũ hóa"]
            },
            {
                id: 5,
                name: "Hóa chất Y tế",
                slug: "hoa-chat-y-te",
                description: "Hóa chất y tế, khử trùng và vệ sinh bệnh viện",
                image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
                icon: "🏥",
                subcategories: ["Khử trùng", "Sát khuẩn", "Chẩn đoán", "Điều trị"]
            },
            {
                id: 6,
                name: "Hóa chất Dệt nhuộm",
                slug: "hoa-chat-det-nhuom",
                description: "Hóa chất chuyên dụng cho ngành dệt may và nhuộm",
                image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
                icon: "🧵",
                subcategories: ["Chất nhuộm", "Chất tẩy trắng", "Chất hoàn tất", "Chất xử lý vải"]
            }
        ]
        return data;
    }
}