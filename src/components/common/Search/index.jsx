// SearchComponent.js
import React, { useState, useRef, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import SearchTerm from "./SearchTearm";
import { appSearch } from "../../../context/searchContext";

const SearchComponent = ({bg = "bg-white/20", text }) => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    const { setSearchValue, addHistory, loading } = appSearch();

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current && 
                !dropdownRef.current.contains(event.target) &&
                !inputRef.current?.contains(event.target)
            ) {
                setShowDropdown(false);
                setIsFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Update search context with debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchValue(inputValue);
        }, 300);

        return () => clearTimeout(timer);
    }, [inputValue, setSearchValue]);

    // Handle keyboard events in input
    const handleInputKeyDown = (e) => {
        switch (e.key) {
            case 'ArrowDown':
                if (showDropdown) {
                    e.preventDefault();
                    // Focus will be handled by SearchTerm component
                }
                break;
            case 'Escape':
                setShowDropdown(false);
                setIsFocused(false);
                inputRef.current?.blur();
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addHistory(inputValue.trim());
            setShowDropdown(false);
            inputRef.current?.blur();
            // Trigger search
            performSearch(inputValue.trim());
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
        setShowDropdown(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (!showDropdown && e.target.value) {
            setShowDropdown(true);
        }
    };

    // Handle item selection from SearchTerm
    const handleSelectHistoryItem = (item) => {
        setInputValue(item);
        addHistory(item);
        setShowDropdown(false);
        setIsFocused(false);
        inputRef.current?.blur();
        // Trigger search
        performSearch(item);
    };

    // Handle dropdown close from SearchTerm
    const handleCloseDropdown = () => {
        setShowDropdown(false);
        setIsFocused(false);
        inputRef.current?.focus();
    };

    // Perform search function
    const performSearch = (query) => {
        setSearchValue(query);
        // Additional search logic here if needed
        console.log('Performing search for:', query);
    };

    return (
        <div className="relative w-full max-w-md">
            <form onSubmit={handleSubmit} className="relative">
                <div
                    className={`
                        flex items-center ${bg} backdrop-blur-md rounded-full px-4 py-3
                        border border-white/30 transition-all duration-300 hover:bg-white/30
                        ${isFocused ? 'ring-2 ring-white/50 bg-white/30 shadow-lg' : ''}
                    `}
                >
                    <Search size={18} className="text-white/80 mr-3 flex-shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onKeyDown={handleInputKeyDown}
                        className={`bg-transparent ${text || 'text-white' } placeholder-white/70 outline-none 
                                 text-sm flex-1 min-w-0`}
                        autoComplete="off"
                        aria-label="Tìm kiếm sản phẩm"
                        aria-expanded={showDropdown}
                        aria-haspopup="listbox"
                    />
                    {loading && (
                        <Loader2 size={16} className="text-white/80 animate-spin ml-2" />
                    )}
                </div>
            </form>

            {/* Dropdown */}
            {showDropdown && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 right-0 mt-2 p-4 bg-white 
                             rounded-xl shadow-xl border border-gray-200 z-50
                             animate-fadeIn md:w-[25vw] w-full"
                >
                    <SearchTerm 
                        onSelectItem={handleSelectHistoryItem}
                        onClose={handleCloseDropdown}
                    />
                </div>
            )}
        </div>
    );
};

export default SearchComponent;