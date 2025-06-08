import React from "react";

// Một component con để hiển thị star (★ hoặc ☆) tùy rating
function Star({ filled }) {
  return (
    <span className={`mr-1 ${filled ? "text-yellow-400" : "text-gray-300"}`}>
      ★
    </span>
  );
}

export default function CustomerReview({ review }) {
  // Nếu không truyền prop, dùng dữ liệu mặc định dưới đây
  const defaultReview = {
    id: 1,
    customerName: "Nguyễn Văn A",
    avatar:
      "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    rating: 5, // 1-5 sao
    title: "Chất lượng vượt mong đợi",
    reviewText:
      "Tôi rất ưng ý với chất lượng hóa chất bên công ty. Sản phẩm đóng gói cẩn thận, giao hàng nhanh chóng, nhân viên hỗ trợ nhiệt tình. Chắc chắn sẽ tiếp tục hợp tác lâu dài!",
    date: "2025-04-15",
  };

  // Dùng review nếu có, nếu không dùng defaultReview
  const r = review || defaultReview;

  // Hàm format ngày theo kiểu "15/04/2025"
  const formatDate = (isoString) => {
    const d = new Date(isoString);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col">
      {/* Header: avatar + tên + rating */}
      <div className="flex items-center mb-4">
        <img
          src={r.avatar}
          alt={r.customerName}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{r.customerName}</h3>
          <div className="flex">
            {/* Hiển thị đầy đủ rating: filled sao (★) và gray sao còn lại */}
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < r.rating} />
            ))}
          </div>
        </div>
      </div>

      {/* Title của review */}
      <h4 className="text-lg italic text-gray-700 mb-2">“{r.title}”</h4>

      {/* Nội dung review */}
      <p className="text-gray-600 mb-4 flex-grow">{r.reviewText}</p>

      {/* Ngày đăng */}
      <p className="text-sm text-gray-500 self-end">
        {formatDate(r.date)}
      </p>
    </div>
  );
}
