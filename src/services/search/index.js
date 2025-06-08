// services/search.js
class SearchService {
    constructor() {
        this.STORAGE_KEY = 'search_history';
        this.SEARCH_API_URL = 'https://api.example.com/search'; // Replace with your API
        this.mockData = this.generateMockData();
    }

    // Generate mock data for demo
    generateMockData() {
        return {
            products: [
                { id: 1, name: 'iPhone 15 Pro Max', category: 'Điện thoại', price: 29990000, image: 'iphone.jpg' },
                { id: 2, name: 'Samsung Galaxy S24 Ultra', category: 'Điện thoại', price: 26990000, image: 'samsung.jpg' },
                { id: 3, name: 'MacBook Air M3', category: 'Laptop', price: 28990000, image: 'macbook.jpg' },
                { id: 4, name: 'Dell XPS 13', category: 'Laptop', price: 25990000, image: 'dell.jpg' },
                { id: 5, name: 'iPad Air', category: 'Máy tính bảng', price: 14990000, image: 'ipad.jpg' },
                { id: 6, name: 'AirPods Pro 2', category: 'Tai nghe', price: 5990000, image: 'airpods.jpg' },
                { id: 7, name: 'Sony WH-1000XM5', category: 'Tai nghe', price: 7990000, image: 'sony.jpg' },
                { id: 8, name: 'Apple Watch Series 9', category: 'Đồng hồ thông minh', price: 8990000, image: 'watch.jpg' },
                { id: 9, name: 'Nike Air Max 270', category: 'Giày thể thao', price: 3290000, image: 'nike.jpg' },
                { id: 10, name: 'Adidas Ultraboost 22', category: 'Giày thể thao', price: 4990000, image: 'adidas.jpg' },
                { id: 11, name: 'Canon EOS R6', category: 'Máy ảnh', price: 45990000, image: 'canon.jpg' },
                { id: 12, name: 'Sony Alpha A7 IV', category: 'Máy ảnh', price: 52990000, image: 'sony-camera.jpg' },
                { id: 13, name: 'Gaming Chair Pro', category: 'Ghế gaming', price: 4990000, image: 'chair.jpg' },
                { id: 14, name: 'Mechanical Keyboard RGB', category: 'Bàn phím', price: 1990000, image: 'keyboard.jpg' },
                { id: 15, name: 'Wireless Mouse Gaming', category: 'Chuột', price: 890000, image: 'mouse.jpg' }
            ],
            suggestions: [
                'iPhone 15', 'Samsung Galaxy', 'MacBook', 'iPad', 'AirPods',
                'Laptop gaming', 'Tai nghe không dây', 'Đồng hồ thông minh',
                'Giày thể thao', 'Máy ảnh', 'Ghế gaming', 'Bàn phím cơ'
            ]
        };
    }

    // Get search history from localStorage
    async getHistory() {
        try {
            const history = localStorage.getItem(this.STORAGE_KEY);
            return history ? JSON.parse(history) : [];
        } catch (error) {
            console.error('Error getting search history:', error);
            return [];
        }
    }

    // Save search history to localStorage
    async saveHistory(history) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
            return true;
        } catch (error) {
            console.error('Error saving search history:', error);
            return false;
        }
    }

    // Clear search history
    async clearHistory() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
            return true;
        } catch (error) {
            console.error('Error clearing search history:', error);
            return false;
        }
    }

    // Search function with mock data (replace with real API call)
    async searchTearmFunc(query = '') {
        // Simulate API delay
        await this.delay(300);

        try {
            if (!query || query.trim() === '') {
                return {
                    products: [],
                    suggestions: this.mockData.suggestions.slice(0, 6),
                    total: 0
                };
            }

            const searchQuery = query.toLowerCase().trim();
            
            // Filter products based on search query
            const filteredProducts = this.mockData.products.filter(product => 
                product.name.toLowerCase().includes(searchQuery) ||
                product.category.toLowerCase().includes(searchQuery)
            );

            // Filter suggestions
            const filteredSuggestions = this.mockData.suggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(searchQuery)
            );

            return {
                products: filteredProducts,
                suggestions: filteredSuggestions,
                total: filteredProducts.length,
                query: query
            };

        } catch (error) {
            console.error('Search error:', error);
            throw new Error('Không thể thực hiện tìm kiếm. Vui lòng thử lại.');
        }
    }

    // Real API search function (uncomment and modify for production)
    async searchWithAPI(query) {
        try {
            const response = await fetch(`${this.SEARCH_API_URL}?q=${encodeURIComponent(query)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Add authorization headers if needed
                    // 'Authorization': `Bearer ${your_token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error('API search error:', error);
            throw error;
        }
    }

    // Get popular searches or trending
    async getPopularSearches() {
        await this.delay(200);
        
        return [
            'iPhone 15 Pro Max',
            'MacBook Air M3',
            'Samsung Galaxy S24',
            'AirPods Pro',
            'iPad Air',
            'Gaming Chair',
            'Mechanical Keyboard',
            'Wireless Mouse'
        ];
    }

    // Get search suggestions based on input
    async getSearchSuggestions(query) {
        if (!query || query.length < 2) {
            return [];
        }

        await this.delay(150);

        const searchQuery = query.toLowerCase();
        return this.mockData.suggestions
            .filter(suggestion => suggestion.toLowerCase().includes(searchQuery))
            .slice(0, 5);
    }

    // Get category filters
    async getCategories() {
        await this.delay(100);
        
        const categories = [...new Set(this.mockData.products.map(p => p.category))];
        return categories.map(category => ({
            name: category,
            count: this.mockData.products.filter(p => p.category === category).length
        }));
    }

    // Advanced search with filters
    async advancedSearch(query, filters = {}) {
        await this.delay(400);

        try {
            let results = this.mockData.products;

            // Apply text search
            if (query && query.trim()) {
                const searchQuery = query.toLowerCase().trim();
                results = results.filter(product => 
                    product.name.toLowerCase().includes(searchQuery) ||
                    product.category.toLowerCase().includes(searchQuery)
                );
            }

            // Apply category filter
            if (filters.category) {
                results = results.filter(product => 
                    product.category === filters.category
                );
            }

            // Apply price range filter
            if (filters.minPrice || filters.maxPrice) {
                results = results.filter(product => {
                    const price = product.price;
                    const minPrice = filters.minPrice || 0;
                    const maxPrice = filters.maxPrice || Infinity;
                    return price >= minPrice && price <= maxPrice;
                });
            }

            // Apply sorting
            if (filters.sortBy) {
                results = this.sortResults(results, filters.sortBy);
            }

            // Apply pagination
            const page = filters.page || 1;
            const limit = filters.limit || 10;
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;
            const paginatedResults = results.slice(startIndex, endIndex);

            return {
                products: paginatedResults,
                total: results.length,
                page: page,
                totalPages: Math.ceil(results.length / limit),
                hasMore: endIndex < results.length,
                filters: filters,
                query: query
            };

        } catch (error) {
            console.error('Advanced search error:', error);
            throw new Error('Không thể thực hiện tìm kiếm nâng cao.');
        }
    }

    // Sort results helper
    sortResults(results, sortBy) {
        switch (sortBy) {
            case 'price_asc':
                return [...results].sort((a, b) => a.price - b.price);
            case 'price_desc':
                return [...results].sort((a, b) => b.price - a.price);
            case 'name_asc':
                return [...results].sort((a, b) => a.name.localeCompare(b.name));
            case 'name_desc':
                return [...results].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return results;
        }
    }

    // Format price for display
    formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    }

    // Utility function for delays (simulating API calls)
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Analytics - track search queries (for improvement)
    async trackSearch(query, resultsCount) {
        try {
            // In production, send to analytics service
            console.log('Search tracked:', {
                query,
                resultsCount,
                timestamp: new Date().toISOString()
            });

            // Could send to Google Analytics, Mixpanel, etc.
            // gtag('event', 'search', {
            //     search_term: query,
            //     results_count: resultsCount
            // });

        } catch (error) {
            console.error('Error tracking search:', error);
        }
    }
}

// Create and export singleton instance
const searchService = new SearchService();
export default searchService;

// Alternative export for named imports
export { searchService as search };

// Usage examples:
/*
// In your component:
import search from '../services/search';

// Basic search
const results = await search.searchTearmFunc('iPhone');

// Advanced search with filters
const advancedResults = await search.advancedSearch('laptop', {
    category: 'Laptop',
    minPrice: 20000000,
    maxPrice: 50000000,
    sortBy: 'price_asc',
    page: 1,
    limit: 12
});

// Get search suggestions
const suggestions = await search.getSearchSuggestions('Mac');

// Get popular searches
const popular = await search.getPopularSearches();

// Track search for analytics
await search.trackSearch('iPhone 15', 5);
*/