// ==================== PRODUCT SERVICES ====================
// Comprehensive product management services for chemical products

import { 
  categories, 
  products, 
  suppliers, 
  units, 
  productStatus, 
  sampleProducts 
} from '../system/data.js'

class ProductService {
  constructor() {
    // Simulate database with localStorage fallback
    this.products = [...products];
    this.categories = [...categories];
    this.suppliers = [...suppliers];
    this.units = [...units];
    this.productStatus = [...productStatus];
    this.sampleProducts = [...sampleProducts];
  }

  // ==================== BASIC CRUD OPERATIONS ====================
  
  /**
   * Get all products with optional filters
   * @param {Object} filters - Filter criteria
   * @returns {Array} Filtered products
   */
  getAllProducts(filters = {}) {
    let filteredProducts = [...this.products];

    // Filter by category
    if (filters.category_id) {
      filteredProducts = filteredProducts.filter(p => p.category_id === filters.category_id);
    }

    // Filter by status
    if (filters.status) {
      filteredProducts = filteredProducts.filter(p => p.status === filters.status);
    }

    // Filter by supplier
    if (filters.supplier) {
      filteredProducts = filteredProducts.filter(p => 
        p.supplier.toLowerCase().includes(filters.supplier.toLowerCase())
      );
    }

    // Filter by price range
    if (filters.minPrice || filters.maxPrice) {
      filteredProducts = filteredProducts.filter(p => {
        const price = p.price;
        const minMatch = !filters.minPrice || price >= filters.minPrice;
        const maxMatch = !filters.maxPrice || price <= filters.maxPrice;
        return minMatch && maxMatch;
      });
    }

    // Search by name or description
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.sku.toLowerCase().includes(searchTerm)
      );
    }

    // Sort products
    if (filters.sortBy) {
      filteredProducts = this.sortProducts(filteredProducts, filters.sortBy, filters.sortOrder);
    }

    // Pagination
    if (filters.page && filters.limit) {
      const startIndex = (filters.page - 1) * filters.limit;
      const endIndex = startIndex + filters.limit;
      return {
        products: filteredProducts.slice(startIndex, endIndex),
        total: filteredProducts.length,
        page: filters.page,
        limit: filters.limit,
        totalPages: Math.ceil(filteredProducts.length / filters.limit)
      };
    }

    return filteredProducts;
  }

  /**
   * Get product by ID
   * @param {number} id - Product ID
   * @returns {Object|null} Product object or null
   */
  getProductById(id) {
    return this.products.find(p => p.id === parseInt(id)) || null;
  }

  /**
   * Get product by SKU
   * @param {string} sku - Product SKU
   * @returns {Object|null} Product object or null
   */
  getProductBySku(sku) {
    return this.products.find(p => p.sku === sku) || null;
  }

  /**
   * Create new product
   * @param {Object} productData - Product data
   * @returns {Object} Created product
   */
  createProduct(productData) {
    const newProduct = {
      id: Math.max(...this.products.map(p => p.id)) + 1,
      ...productData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    this.products.push(newProduct);
    return newProduct;
  }

  /**
   * Update product
   * @param {number} id - Product ID
   * @param {Object} updateData - Update data
   * @returns {Object|null} Updated product or null
   */
  updateProduct(id, updateData) {
    const index = this.products.findIndex(p => p.id === parseInt(id));
    if (index === -1) return null;

    this.products[index] = {
      ...this.products[index],
      ...updateData,
      updated_at: new Date().toISOString()
    };

    return this.products[index];
  }

  /**
   * Delete product
   * @param {number} id - Product ID
   * @returns {boolean} Success status
   */
  deleteProduct(id) {
    const index = this.products.findIndex(p => p.id === parseInt(id));
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }

  // ==================== ADVANCED FEATURES ====================

  /**
   * Get products by category with subcategory support
   * @param {number} categoryId - Category ID
   * @param {string} subcategory - Subcategory name
   * @returns {Array} Products in category/subcategory
   */
  getProductsByCategory(categoryId, subcategory = null) {
    let products = this.products.filter(p => p.category_id === categoryId);
    
    if (subcategory) {
      // This would require extending the product model to include subcategory
      // For now, we'll filter by applications
      products = products.filter(p => 
        p.applications.some(app => 
          app.toLowerCase().includes(subcategory.toLowerCase())
        )
      );
    }

    return products;
  }

  /**
   * Get low stock products
   * @param {number} threshold - Stock threshold (default: 50)
   * @returns {Array} Low stock products
   */
  getLowStockProducts(threshold = 50) {
    return this.products.filter(p => p.stock <= threshold && p.stock > 0);
  }

  /**
   * Get out of stock products
   * @returns {Array} Out of stock products
   */
  getOutOfStockProducts() {
    return this.products.filter(p => p.stock === 0 || p.status === 'out_of_stock');
  }

  /**
   * Search products with advanced filters
   * @param {Object} searchCriteria - Advanced search criteria
   * @returns {Array} Matching products
   */
  advancedSearch(searchCriteria) {
    let results = [...this.products];

    // Text search across multiple fields
    if (searchCriteria.query) {
      const query = searchCriteria.query.toLowerCase();
      results = results.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.sku.toLowerCase().includes(query) ||
        p.supplier.toLowerCase().includes(query) ||
        p.origin.toLowerCase().includes(query) ||
        p.applications.some(app => app.toLowerCase().includes(query))
      );
    }

    // Filter by specifications
    if (searchCriteria.specifications) {
      results = results.filter(p => {
        return Object.entries(searchCriteria.specifications).every(([key, value]) => {
          const spec = p.specifications[key];
          if (!spec) return false;
          return spec.toString().toLowerCase().includes(value.toLowerCase());
        });
      });
    }

    // Filter by certifications
    if (searchCriteria.certifications) {
      results = results.filter(p =>
        searchCriteria.certifications.every(cert =>
          p.certification.some(c => c.toLowerCase().includes(cert.toLowerCase()))
        )
      );
    }

    // Filter by applications
    if (searchCriteria.applications) {
      results = results.filter(p =>
        searchCriteria.applications.some(app =>
          p.applications.some(pApp => pApp.toLowerCase().includes(app.toLowerCase()))
        )
      );
    }

    return results;
  }

  /**
   * Get product recommendations based on category and applications
   * @param {number} productId - Base product ID
   * @param {number} limit - Number of recommendations
   * @returns {Array} Recommended products
   */
  getProductRecommendations(productId, limit = 5) {
    const baseProduct = this.getProductById(productId);
    if (!baseProduct) return [];

    const recommendations = this.products
      .filter(p => p.id !== productId)
      .map(p => {
        let score = 0;
        
        // Same category bonus
        if (p.category_id === baseProduct.category_id) score += 3;
        
        // Similar applications bonus
        const commonApps = p.applications.filter(app =>
          baseProduct.applications.includes(app)
        );
        score += commonApps.length * 2;
        
        // Same supplier bonus
        if (p.supplier === baseProduct.supplier) score += 1;
        
        // Available stock bonus
        if (p.status === 'available') score += 1;

        return { ...p, recommendationScore: score };
      })
      .filter(p => p.recommendationScore > 0)
      .sort((a, b) => b.recommendationScore - a.recommendationScore)
      .slice(0, limit);

    return recommendations;
  }

  /**
   * Get product analytics
   * @returns {Object} Analytics data
   */
  getProductAnalytics() {
    const totalProducts = this.products.length;
    const categories = {};
    const suppliers = {};
    const statusCounts = {};
    let totalValue = 0;

    this.products.forEach(p => {
      // Category distribution
      categories[p.category] = (categories[p.category] || 0) + 1;
      
      // Supplier distribution
      suppliers[p.supplier] = (suppliers[p.supplier] || 0) + 1;
      
      // Status distribution
      statusCounts[p.status] = (statusCounts[p.status] || 0) + 1;
      
      // Total inventory value
      totalValue += p.price * p.stock;
    });

    return {
      totalProducts,
      totalValue,
      categoryDistribution: categories,
      supplierDistribution: suppliers,
      statusDistribution: statusCounts,
      lowStockCount: this.getLowStockProducts().length,
      outOfStockCount: this.getOutOfStockProducts().length
    };
  }

  /**
   * Sort products by various criteria
   * @param {Array} products - Products to sort
   * @param {string} sortBy - Sort field
   * @param {string} order - Sort order (asc/desc)
   * @returns {Array} Sorted products
   */
  sortProducts(products, sortBy, order = 'asc') {
    const sortedProducts = [...products].sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'stock':
          aValue = a.stock;
          bValue = b.stock;
          break;
        case 'category':
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        case 'supplier':
          aValue = a.supplier.toLowerCase();
          bValue = b.supplier.toLowerCase();
          break;
        case 'created_at':
          aValue = new Date(a.created_at || '2024-01-01');
          bValue = new Date(b.created_at || '2024-01-01');
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return order === 'asc' ? -1 : 1;
      if (aValue > bValue) return order === 'asc' ? 1 : -1;
      return 0;
    });

    return sortedProducts;
  }

  // ==================== INVENTORY MANAGEMENT ====================

  /**
   * Update product stock
   * @param {number} productId - Product ID
   * @param {number} quantity - New quantity
   * @param {string} operation - Operation type (set, add, subtract)
   * @returns {Object|null} Updated product
   */
  updateStock(productId, quantity, operation = 'set') {
    const product = this.getProductById(productId);
    if (!product) return null;

    let newStock;
    switch (operation) {
      case 'add':
        newStock = product.stock + quantity;
        break;
      case 'subtract':
        newStock = Math.max(0, product.stock - quantity);
        break;
      case 'set':
      default:
        newStock = quantity;
        break;
    }

    // Update status based on stock
    let newStatus = product.status;
    if (newStock === 0) {
      newStatus = 'out_of_stock';
    } else if (newStock <= 10 && newStatus === 'out_of_stock') {
      newStatus = 'limited';
    } else if (newStock > 10 && (newStatus === 'out_of_stock' || newStatus === 'limited')) {
      newStatus = 'available';
    }

    return this.updateProduct(productId, { 
      stock: newStock, 
      status: newStatus,
      last_stock_update: new Date().toISOString()
    });
  }

  /**
   * Bulk update stock
   * @param {Array} updates - Array of {productId, quantity, operation}
   * @returns {Array} Update results
   */
  bulkUpdateStock(updates) {
    return updates.map(update => {
      const result = this.updateStock(update.productId, update.quantity, update.operation);
      return {
        productId: update.productId,
        success: !!result,
        product: result
      };
    });
  }

  // ==================== SAMPLE MANAGEMENT ====================

  /**
   * Get available samples
   * @returns {Array} Available sample products
   */
  getAvailableSamples() {
    return this.sampleProducts
      .filter(sample => sample.available)
      .map(sample => ({
        ...sample,
        product: this.getProductById(sample.product_id)
      }));
  }

  /**
   * Request sample
   * @param {number} productId - Product ID
   * @param {Object} requestInfo - Request information
   * @returns {Object} Sample request result
   */
  requestSample(productId, requestInfo) {
    const sample = this.sampleProducts.find(s => s.product_id === productId);
    if (!sample || !sample.available) {
      return { success: false, message: 'Sample not available' };
    }

    // Simulate sample request processing
    return {
      success: true,
      sampleId: `SAMPLE-${Date.now()}`,
      product: this.getProductById(productId),
      sampleSize: sample.sample_size,
      requestInfo,
      status: 'requested',
      requestDate: new Date().toISOString()
    };
  }

  // ==================== UTILITY METHODS ====================

  /**
   * Get all categories
   * @returns {Array} Categories
   */
  getAllCategories() {
    return this.categories;
  }

  /**
   * Get all suppliers
   * @returns {Array} Suppliers
   */
  getAllSuppliers() {
    return this.suppliers;
  }

  /**
   * Get all units
   * @returns {Array} Units
   */
  getAllUnits() {
    return this.units;
  }

  /**
   * Get product status options
   * @returns {Array} Status options
   */
  getProductStatusOptions() {
    return this.productStatus;
  }

  /**
   * Validate product data
   * @param {Object} productData - Product data to validate
   * @returns {Object} Validation result
   */
  validateProduct(productData) {
    const errors = [];
    const required = ['name', 'category_id', 'price', 'unit', 'stock'];

    required.forEach(field => {
      if (!productData[field]) {
        errors.push(`${field} is required`);
      }
    });

    if (productData.price && productData.price < 0) {
      errors.push('Price must be positive');
    }

    if (productData.stock && productData.stock < 0) {
      errors.push('Stock must be non-negative');
    }

    if (productData.sku) {
      const existingProduct = this.getProductBySku(productData.sku);
      if (existingProduct && existingProduct.id !== productData.id) {
        errors.push('SKU already exists');
      }
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Export products to CSV format
   * @param {Array} products - Products to export
   * @returns {string} CSV string
   */
  exportToCSV(products = null) {
    const exportProducts = products || this.products;
    const headers = [
      'ID', 'Name', 'SKU', 'Category', 'Price', 'Unit', 'Stock', 
      'Status', 'Supplier', 'Origin', 'Description'
    ];

    const csvRows = [
      headers.join(','),
      ...exportProducts.map(p => [
        p.id,
        `"${p.name}"`,
        p.sku,
        `"${p.category}"`,
        p.price,
        p.unit,
        p.stock,
        p.status,
        `"${p.supplier}"`,
        `"${p.origin}"`,
        `"${p.description.replace(/"/g, '""')}"`
      ].join(','))
    ];

    return csvRows.join('\n');
  }

  /**
   * Reset to original data
   */
  resetData() {
    this.products = [...products];
    this.categories = [...categories];
    this.suppliers = [...suppliers];
    this.units = [...units];
    this.productStatus = [...productStatus];
    this.sampleProducts = [...sampleProducts];
  }
}

// ==================== SINGLETON INSTANCE ====================
const productService = new ProductService();

// ==================== EXPORT ====================
export default productService;

