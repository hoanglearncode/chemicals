// SearchTerm.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Clock, X, Trash2 } from "lucide-react";
import { appSearch } from "../../../context/searchContext";

const SearchTerm = ({ onSelectItem, onClose }) => {
    const { historyData, deleteHistory, clearHistory } = appSearch();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    // Reset selected index when history data changes
    useEffect(() => {
        setSelectedIndex(-1);
        itemRefs.current = itemRefs.current.slice(0, historyData.length);
    }, [historyData]);

    // Scroll selected item into view
    const scrollToItem = useCallback((index) => {
        if (itemRefs.current[index]) {
            itemRefs.current[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (historyData.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => {
                    const newIndex = prev < historyData.length - 1 ? prev + 1 : 0;
                    scrollToItem(newIndex);
                    return newIndex;
                });
                break;

            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => {
                    const newIndex = prev > 0 ? prev - 1 : historyData.length - 1;
                    scrollToItem(newIndex);
                    return newIndex;
                });
                break;

            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < historyData.length) {
                    const selectedItem = historyData[selectedIndex];
                    onSelectItem?.(selectedItem);
                }
                break;

            case 'Delete':
            case 'Backspace':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    if (selectedIndex >= 0 && selectedIndex < historyData.length) {
                        const itemToDelete = historyData[selectedIndex];
                        deleteHistory(itemToDelete);
                        // Adjust selected index after deletion
                        setSelectedIndex(prev => {
                            if (prev >= historyData.length - 1) {
                                return historyData.length - 2; // Will be -1 if only one item
                            }
                            return prev;
                        });
                    }
                }
                break;

            case 'Escape':
                e.preventDefault();
                setSelectedIndex(-1);
                onClose?.();
                break;

            default:
                break;
        }
    }, [historyData, selectedIndex, deleteHistory, onSelectItem, onClose, scrollToItem]);

    // Add keyboard event listener
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('keydown', handleKeyDown);
            // Focus container to receive keyboard events
            container.focus();
            
            return () => {
                container.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [handleKeyDown]);

    // Handle item click
    const handleItemClick = (item) => {
        onSelectItem?.(item);
    };

    // Handle delete with keyboard shortcut hint
    const handleDeleteClick = (e, item) => {
        e.stopPropagation(); // Prevent item selection
        deleteHistory(item);
    };

    if (historyData.length === 0) {
        return (
            <div className="text-center py-4 text-gray-500">
                <Clock size={24} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm">Chưa có lịch sử tìm kiếm</p>
                <p className="text-xs mt-1 opacity-75">
                    Nhập từ khóa để bắt đầu tìm kiếm
                </p>
            </div>
        );
    }

    return (
        <div 
            ref={containerRef}
            className="space-y-3 outline-none"
            tabIndex={0}
            role="listbox"
            aria-label="Lịch sử tìm kiếm"
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Clock size={18} className="text-gray-500" />
                    <span className="font-medium text-gray-700">Tìm kiếm gần đây</span>
                </div>
                <button
                    onClick={clearHistory}
                    className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 
                             hover:bg-red-50 px-2 py-1 rounded transition-colors"
                    aria-label="Xóa tất cả lịch sử"
                >
                    <Trash2 size={14} />
                    Xóa tất cả
                </button>
            </div>

            {/* History Items */}
            <div className="space-y-1 max-h-64 overflow-y-auto">
                {historyData.map((item, index) => (
                    <div
                        key={`${item}-${index}`}
                        ref={el => itemRefs.current[index] = el}
                        className={`
                            flex items-center justify-between py-2 px-3 rounded-md 
                            cursor-pointer transition-all duration-150
                            ${selectedIndex === index 
                                ? 'bg-blue-50 border border-blue-200 shadow-sm' 
                                : 'hover:bg-gray-50 border border-transparent'
                            }
                            group
                        `}
                        onClick={() => handleItemClick(item)}
                        role="option"
                        aria-selected={selectedIndex === index}
                        tabIndex={-1}
                    >
                        <span 
                            className={`
                                text-sm flex-1 transition-colors
                                ${selectedIndex === index 
                                    ? 'text-blue-900 font-medium' 
                                    : 'text-gray-700 group-hover:text-gray-900'
                                }
                            `}
                        >
                            {item}
                        </span>
                        
                        <button
                            onClick={(e) => handleDeleteClick(e, item)}
                            className={`
                                p-1 rounded-full transition-all duration-150
                                ${selectedIndex === index 
                                    ? 'opacity-100 hover:bg-red-100 text-red-600' 
                                    : 'opacity-0 group-hover:opacity-100 hover:bg-gray-200 text-gray-500'
                                }
                            `}
                            aria-label={`Xóa "${item}" khỏi lịch sử`}
                            tabIndex={-1}
                        >
                            <X size={14} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchTerm;