// Dữ liệu mẫu cho tài khoản (account)
export const sampleAccount = {
  id: 12345,
  name: "Nguyễn Văn A",
  email: "nguyenvana@example.com",
  phone: "0988 123 456",
    image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
  address: {
    street: "123 Đường Hòa Bình",
    ward: "Phường 5",
    district: "Quận 10",
    city: "TP. Hồ Chí Minh",
    postalCode: "700000"
  },
  role: "customer",        // "customer" | "admin" | "guest"
  registeredAt: "2024-08-15T10:30:00Z",
  // Lịch sử đơn hàng cũ (order history)
  orderHistory: [
    {
      orderId: "ORD-20240501-0001",
      date: "2024-05-01T14:20:00Z",
      items: [
        {
          productId: 101,
          productName: "Hóa chất Xử lý nước A",
          quantity: 10,
          unitPrice: 250000,   // giá tính theo 1 đơn vị (đồng)
          subtotal: 10 * 250000
        },
        {
          productId: 205,
          productName: "Hóa chất Công nghiệp B",
          quantity: 5,
          unitPrice: 180000,
          subtotal: 5 * 180000
        }
      ],
      shippingFee: 50000,
      totalAmount: (10 * 250000) + (5 * 180000) + 50000,
      status: "delivered"   // "pending" | "shipped" | "delivered" | "cancelled"
    },
    {
      orderId: "ORD-20240610-0002",
      date: "2024-06-10T09:15:00Z",
      items: [
        {
          productId: 310,
          productName: "Hóa chất Nông nghiệp C",
          quantity: 20,
          unitPrice: 120000,
          subtotal: 20 * 120000
        }
      ],
      shippingFee: 30000,
      totalAmount: (20 * 120000) + 30000,
      status: "shipped"
    }
  ]
};


// Dữ liệu mẫu cho giỏ hàng (cart)
export const sampleCart = {
  // Nếu chưa đăng nhập, userId có thể để null hoặc "guest"
  userId: 12345,           // tương ứng với sampleAccount.id
  items: [
    {
      productId: 101,
      productName: "Hóa chất Xử lý nước A",
      image: "/images/products/water-treatment-a.jpg",
      quantity: 3,
      unitPrice: 250000,     // giá 1kg hoặc 1 chai
      subtotal: 3 * 250000
    },
    {
      productId: 450,
      productName: "Hóa chất Dệt nhuộm D",
      image: "/images/products/textile-d.jpg",
      quantity: 2,
      unitPrice: 300000,
      subtotal: 2 * 300000
    }
  ],
  shippingAddress: {
    street: "123 Đường Hòa Bình",
    ward: "Phường 5",
    district: "Quận 10",
    city: "TP. Hồ Chí Minh",
    postalCode: "700000"
  },
  shippingFee: 40000,
  // Tạm tính (items subtotal)
  itemsTotal: (3 * 250000) + (2 * 300000),  // 750000 + 600000 = 1.350.000
  // Tổng đơn hàng = itemsTotal + shippingFee
  totalAmount: ((3 * 250000) + (2 * 300000)) + 40000  // 1.350.000 + 40.000 = 1.390.000
};
