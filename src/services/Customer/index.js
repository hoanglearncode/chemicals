export default {
    getFeaturedReviews: () => {
    const data = [
      {
        id: 1,
        customerName: "Nguyễn Văn A",
        avatar: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",  // Có thể là URL tới ảnh đại diện
        rating: 5,                             // 1-5 sao
        title: "Chất lượng vượt mong đợi",
        reviewText:
          "Tôi rất ưng ý với chất lượng hóa chất bên công ty. Sản phẩm đóng gói cẩn thận, giao hàng nhanh chóng, nhân viên hỗ trợ nhiệt tình. Chắc chắn sẽ tiếp tục hợp tác lâu dài!",
        date: "2025-04-15"
      },
      {
        id: 2,
        customerName: "Trần Thị B",
        avatar: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
        rating: 4,
        title: "Dịch vụ tốt, sản phẩm ổn định",
        reviewText:
          "Hóa chất xử lý nước mà công ty cung cấp rất hiệu quả, đúng chuẩn công nghiệp. Chỉ trừ lần giao hàng có chậm 1 ngày, còn lại mọi thứ đều ok. Sẽ giới thiệu cho đồng nghiệp.",
        date: "2025-03-28"
      },
      {
        id: 3,
        customerName: "Lê Văn C",
        avatar: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
        rating: 5,
        title: "Đáng đồng tiền bát gạo",
        reviewText:
          "Tôi mua nhà máy dệt, bên này cung cấp hóa chất nhuộm tuyệt vời, màu lên chuẩn và độ bền cao. Đội kỹ thuật của họ cũng tư vấn rất chu đáo. Rất đáng đồng tiền!",
        date: "2025-05-02"
      },
      {
        id: 4,
        customerName: "Phạm Thị D",
        avatar: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
        rating: 5,
        title: "Hóa chất y tế chất lượng",
        reviewText:
          "Dùng hóa chất khử trùng của công ty cho bệnh viện, rất yên tâm. An toàn, đúng tiêu chuẩn y tế, không có mùi khó chịu. Rất hài lòng!",
        date: "2025-02-10"
      },
      {
        id: 5,
        customerName: "Ngô Văn E",
        avatar: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
        rating: 4,
        title: "Tốt nhưng cần cải thiện thời gian giao",
        reviewText:
          "Sản phẩm tốt, giá cả cạnh tranh. Tuy nhiên, có một vài lần giao hàng bị trễ do thời tiết. Nói chung vẫn đánh giá 4/5, hy vọng lần sau sẽ nhanh hơn.",
        date: "2025-04-01"
      }
    ];
    return data;
  }
}