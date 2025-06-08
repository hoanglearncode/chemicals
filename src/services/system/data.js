// ==================== DANH MỤC HÓA CHẤT ====================
export const categories = [
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
];

// ==================== SẢN PHẨM HÓA CHẤT ====================
export const products = [
  // Hóa chất Công nghiệp
  {
    id: 1,
    name: "Ethanol 99.5%",
    category_id: 1,
    category: "Hóa chất Công nghiệp",
    sku: "ETH-995-25L",
    price: 250000,
    unit: "Lít",
    packaging: "Thùng 25L",
    stock: 150,
    status: "available",
    description: "Ethanol tinh khiết 99.5% dùng làm dung môi trong công nghiệp",
    applications: ["Dung môi", "Sản xuất mỹ phẩm", "Khử trùng"],
    specifications: {
      purity: "99.5%",
      density: "0.789 g/cm³",
      boiling_point: "78.37°C",
      flash_point: "13°C"
    },
    safety_info: {
      hazard_class: "Dễ cháy",
      storage_temp: "15-25°C",
      ventilation: "Tốt"
    },
    supplier: "Samsung Chemical",
    origin: "Hàn Quốc",
    certification: ["ISO 9001", "REACH"],
    image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    gallery: ["https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg", "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg"]
  },
  {
    id: 2,
    name: "Acetone Technical Grade",
    category_id: 1,
    category: "Hóa chất Công nghiệp",
    sku: "ACE-TG-200L",
    price: 180000,
    unit: "Lít",
    packaging: "Thùng 200L",
    stock: 80,
    status: "available",
    description: "Acetone cấp kỹ thuật dùng làm dung môi và chất tẩy rửa",
    applications: ["Dung môi sơn", "Tẩy rửa", "Sản xuất nhựa"],
    specifications: {
      purity: "99.0%",
      density: "0.784 g/cm³",
      boiling_point: "56°C",
      flash_point: "-20°C"
    },
    safety_info: {
      hazard_class: "Dễ cháy",
      storage_temp: "Dưới 30°C",
      ventilation: "Rất tốt"
    },
    supplier: "LG Chemical",
    origin: "Hàn Quốc",
    certification: ["ISO 9001"],
    image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    gallery: ["https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg", "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg"]
  },

  // Hóa chất Xử lý nước
  {
    id: 3,
    name: "PAC (Poly Aluminum Chloride)",
    category_id: 2,
    category: "Hóa chất Xử lý nước",
    sku: "PAC-30-25KG",
    price: 45000,
    unit: "Kg",
    packaging: "Bao 25kg",
    stock: 200,
    status: "available",
    description: "Chất keo tụ PAC 30% dùng xử lý nước thải và nước sinh hoạt",
    applications: ["Xử lý nước thải", "Xử lý nước sinh hoạt", "Làm trong nước"],
    specifications: {
      al2o3_content: "30%",
      ph: "3.5-5.0",
      density: "1.19-1.25 g/cm³",
      solubility: "Tan hoàn toàn"
    },
    safety_info: {
      hazard_class: "Ăn mòn nhẹ",
      storage_temp: "5-35°C",
      humidity: "Khô ráo"
    },
    supplier: "Kemira",
    origin: "Phần Lan",
    certification: ["NSF 60", "ISO 9001"],
    image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    gallery: ["https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg", "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg"]
  },
  {
    id: 4,
    name: "Sodium Hypochlorite 12%",
    category_id: 2,
    category: "Hóa chất Xử lý nước",
    sku: "NAOCL-12-30L",
    price: 85000,
    unit: "Lít",
    packaging: "Can 30L",
    stock: 120,
    status: "available",
    description: "Dung dịch Sodium Hypochlorite 12% khử trùng nước",
    applications: ["Khử trùng nước", "Tẩy trắng", "Khử mùi"],
    specifications: {
      active_chlorine: "12%",
      ph: "11-13",
      density: "1.16 g/cm³",
      stability: "6 tháng"
    },
    safety_info: {
      hazard_class: "Ăn mòn",
      storage_temp: "Dưới 25°C",
      light: "Tránh ánh sáng"
    },
    supplier: "Oxy Chemical",
    origin: "Thái Lan",
    certification: ["WHO", "NSF 60"],
    image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    gallery: ["https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg", "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg"]
  },

  // Hóa chất Nông nghiệp
  {
    id: 5,
    name: "NPK 16-16-8 Phân bón",
    category_id: 3,
    category: "Hóa chất Nông nghiệp",
    sku: "NPK-16168-50KG",
    price: 380000,
    unit: "Kg",
    packaging: "Bao 50kg",
    stock: 300,
    status: "available",
    description: "Phân bón NPK 16-16-8 cung cấp dinh dưỡng cân đối cho cây trồng",
    applications: ["Phân bón lúa", "Phân bón rau", "Cây ăn quả"],
    specifications: {
      nitrogen: "16%",
      phosphorus: "16%",
      potassium: "8%",
      moisture: "Dưới 2%"
    },
    safety_info: {
      hazard_class: "An toàn",
      storage_temp: "Khô ráo",
      ventilation: "Thông thoáng"
    },
    supplier: "Vietnam National Chemical",
    origin: "Việt Nam",
    certification: ["TCVN", "QUATEST 3"],
    image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    gallery: ["https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg", "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg"]
  },

  // Hóa chất Thực phẩm
  {
    id: 6,
    name: "Citric Acid Monohydrate",
    category_id: 4,
    category: "Hóa chất Thực phẩm",
    sku: "CIT-MONO-25KG",
    price: 95000,
    unit: "Kg",
    packaging: "Bao 25kg",
    stock: 180,
    status: "available",
    description: "Acid citric monohydrate cấp thực phẩm làm chất điều vị",
    applications: ["Chất điều vị", "Chất bảo quản", "Đồ uống"],
    specifications: {
      purity: "99.5%",
      moisture: "7.5-9.0%",
      ash: "Dưới 0.05%",
      heavy_metals: "Dưới 5ppm"
    },
    safety_info: {
      hazard_class: "An toàn thực phẩm",
      storage_temp: "Khô mát",
      humidity: "Dưới 65%"
    },
    supplier: "Jungbunzlauer",
    origin: "Áo",
    certification: ["FDA", "HALAL", "KOSHER"],
    image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    gallery: ["https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg", "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg"]
  },

  // Hóa chất Y tế
  {
    id: 7,
    name: "Isopropyl Alcohol 99%",
    category_id: 5,
    category: "Hóa chất Y tế",
    sku: "IPA-99-5L",
    price: 320000,
    unit: "Lít",
    packaging: "Can 5L",
    stock: 90,
    status: "available",
    description: "Isopropyl Alcohol 99% cấp y tế dùng khử trùng",
    applications: ["Khử trùng da", "Làm sạch thiết bị y tế", "Dung môi dược phẩm"],
    specifications: {
      purity: "99.0%",
      water_content: "Dưới 1%",
      acidity: "Dưới 0.02%",
      color: "Không màu"
    },
    safety_info: {
      hazard_class: "Dễ cháy",
      storage_temp: "15-25°C",
      ventilation: "Tốt"
    },
    supplier: "Merck KGaA",
    origin: "Đức",
    certification: ["USP", "EP", "GMP"],
    image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    gallery: ["https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg", "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg"]
  },

  // Hóa chất Dệt nhuộm
  {
    id: 8,
    name: "Reactive Dye Red 195",
    category_id: 6,
    category: "Hóa chất Dệt nhuộm",
    sku: "RD-R195-25KG",
    price: 450000,
    unit: "Kg",
    packaging: "Thùng 25kg",
    stock: 60,
    status: "limited",
    description: "Thuốc nhuộm reactive màu đỏ 195 cho vải cotton",
    applications: ["Nhuộm vải cotton", "Nhuộm vải viscose", "In textile"],
    specifications: {
      strength: "100%",
      solubility: "Tốt",
      fastness: "Grade 4-5",
      ph_stability: "6-11"
    },
    safety_info: {
      hazard_class: "Không độc hại",
      storage_temp: "Khô mát",
      light: "Tránh ánh sáng trực tiếp"
    },
    supplier: "Huntsman",
    origin: "Thụy Sĩ",
    certification: ["OEKO-TEX", "ZDHC"],
    image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    gallery: ["https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg", "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg"]
  },

  {
    id: 9,
    name: "Hydrogen Peroxide 35%",
    category_id: 6,
    category: "Hóa chất Dệt nhuộm",
    sku: "H2O2-35-30L",
    price: 275000,
    unit: "Lít",
    packaging: "Can 30L",
    stock: 45,
    status: "available",
    description: "Hydrogen Peroxide 35% dùng tẩy trắng vải",
    applications: ["Tẩy trắng vải", "Xử lý cotton", "Loại bỏ tạp chất"],
    specifications: {
      concentration: "35%",
      stability: "Cao",
      ph: "2-4",
      density: "1.13 g/cm³"
    },
    safety_info: {
      hazard_class: "Oxy hóa mạnh",
      storage_temp: "Dưới 30°C",
      ventilation: "Rất tốt"
    },
    supplier: "Solvay",
    origin: "Bỉ",
    certification: ["ISO 9001", "REACH"],
    image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    gallery: ["https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg", "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg"]
  },

  {
    id: 10,
    name: "Calcium Chloride 94%",
    category_id: 1,
    category: "Hóa chất Công nghiệp",
    sku: "CACL2-94-25KG",
    price: 65000,
    unit: "Kg",
    packaging: "Bao 25kg",
    stock: 0,
    status: "out_of_stock",
    description: "Calcium Chloride 94% dùng làm chất hút ẩm và tan băng",
    applications: ["Hút ẩm", "Tan băng đường", "Sản xuất xi măng"],
    specifications: {
      purity: "94%",
      moisture: "Dưới 5%",
      insoluble: "Dưới 0.2%",
      ph: "8-10"
    },
    safety_info: {
      hazard_class: "Gây kích ứng nhẹ",
      storage_temp: "Khô ráo",
      humidity: "Dưới 50%"
    },
    supplier: "Zirax",
    origin: "Nga",
    certification: ["ISO 9001"],
    image: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    gallery: ["https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg", "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg"]
  }
];

// ==================== NHÃN HIỆU / NHÀ CUNG CẤP ====================
export const suppliers = [
  {
    id: 1,
    name: "Samsung Chemical",
    country: "Hàn Quốc",
    logo: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    description: "Tập đoàn hóa chất hàng đầu Hàn Quốc",
    products_count: 15,
    established: 1965
  },
  {
    id: 2,
    name: "LG Chemical",
    country: "Hàn Quốc", 
    logo: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    description: "Công ty hóa chất đa quốc gia",
    products_count: 12,
    established: 1947
  },
  {
    id: 3,
    name: "Merck KGaA",
    country: "Đức",
    logo: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg", 
    description: "Công ty dược phẩm và hóa chất toàn cầu",
    products_count: 8,
    established: 1668
  },
  {
    id: 4,
    name: "Huntsman",
    country: "Thụy Sĩ",
    logo: "https://res.cloudinary.com/dmzcks0q6/image/upload/v1744222658/jsxrg5ohx4v4ynq9fw4u.jpg",
    description: "Chuyên gia hóa chất dệt nhuộm",
    products_count: 6,
    established: 1970
  }
];

// ==================== ĐƠN VỊ ĐO LƯỜNG ====================
export const units = [
  { id: 1, name: "Kg", description: "Kilogram" },
  { id: 2, name: "Lít", description: "Liter" },
  { id: 3, name: "Tấn", description: "Tonne" },
  { id: 4, name: "Gam", description: "Gram" },
  { id: 5, name: "M³", description: "Mét khối" }
];

// ==================== TRẠNG THÁI SẢN PHẨM ====================
export const productStatus = [
  { value: "available", label: "Có sẵn", color: "green" },
  { value: "limited", label: "Sắp hết", color: "yellow" },
  { value: "out_of_stock", label: "Hết hàng", color: "red" },
  { value: "discontinued", label: "Ngừng kinh doanh", color: "gray" }
];

// ==================== HÀNG MẪU MIỄN PHÍ ====================
export const sampleProducts = [
  {
    product_id: 1,
    sample_size: "100ml",
    description: "Mẫu thử Ethanol 99.5%",
    available: true
  },
  {
    product_id: 6,
    sample_size: "50g", 
    description: "Mẫu thử Citric Acid",
    available: true
  },
  {
    product_id: 8,
    sample_size: "10g",
    description: "Mẫu thử thuốc nhuộm",
    available: false
  }
];

// ==================== XUẤT DỮ LIỆU ====================
export default {
  categories,
  products,
  suppliers,
  units,
  productStatus,
  sampleProducts
};