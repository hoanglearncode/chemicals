
import React, { useState } from 'react';
import { Info, Star, Heart, Settings, User, Mail, Phone, Calendar } from 'lucide-react';

const Tooltip = ({ children, text, position = 'top' }) => {
    const [isVisible, setIsVisible] = useState(false);

    const positions = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            >
                {children}
            </div>
            {isVisible && (
                <div
                    className={`
                        absolute ${positions[position]}
                        px-3 py-2
                        bg-gray-800 text-white
                        text-sm rounded-md
                        whitespace-nowrap
                        z-50 transition-all delay-400
                        shadow-lg
                        animate-in fade-in-0 zoom-in-95 duration-200
                    `}
                >
                    {text}
                    <div
                        className={`
                            absolute w-2 h-2
                            bg-gray-800
                            transform rotate-45
                            ${position === 'top' ? 'top-full -mt-1 left-1/2 -translate-x-1/2' : ''}
                            ${position === 'bottom' ? 'bottom-full -mb-1 left-1/2 -translate-x-1/2' : ''}
                            ${position === 'left' ? 'left-full -ml-1 top-1/2 -translate-y-1/2' : ''}
                            ${position === 'right' ? 'right-full -mr-1 top-1/2 -translate-y-1/2' : ''}
                        `}
                    />
                </div>
            )}
        </div>
    );
};

export default Tooltip;