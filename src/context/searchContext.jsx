// SearchContext.js
import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import search from '../services/search';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState(null);
    const [historyData, setHistoryData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Load initial history data
    useEffect(() => {
        const loadInitialHistory = async () => {
            try {
                const value = await search.getHistory();
                setHistoryData(value || []);
            } catch (error) {
                console.error('Error loading history:', error);
            }
        };
        loadInitialHistory();
    }, []);

    // Handle search when searchValue changes
    useEffect(() => {
        const performSearch = async () => {
            if (searchValue === '') {
                setData(null);
                return;
            }

            setLoading(true);
            try {
                const result = await search.searchTearmFunc(searchValue);
                setData(result);
            } catch (error) {
                console.error('Search error:', error);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        const debounceTimer = setTimeout(performSearch, 300);
        return () => clearTimeout(debounceTimer);
    }, [searchValue]);

    const addHistory = useCallback((value) => {
        if (!value || value.trim() === '') return;
        
        const trimmedValue = value.trim();
        setHistoryData(prev => {
            // Remove duplicates and add to beginning
            const filtered = prev.filter(item => item !== trimmedValue);
            const newHistory = [trimmedValue, ...filtered].slice(0, 10); // Keep only 10 recent searches
            
            // Save to storage
            search.saveHistory?.(newHistory);
            return newHistory;
        });
    }, []);

    const deleteHistory = useCallback((value) => {
        setHistoryData(prev => {
            const newHistory = prev.filter(item => item !== value);
            search.saveHistory?.(newHistory);
            return newHistory;
        });
    }, []);

    const clearHistory = useCallback(() => {
        setHistoryData([]);
        search.clearHistory?.();
    }, []);

    const contextValue = {
        searchValue,
        data,
        historyData,
        loading,
        setSearchValue,
        setData,
        addHistory,
        deleteHistory,
        clearHistory
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

export const appSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchContextProvider');
    }
    return context;
};