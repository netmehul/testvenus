import React, { useState } from 'react';

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function FloatingLabelInput({ label, className = '', ...props }: FloatingLabelInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value);

    // Sync hasValue with props.value if it changes (controlled mode)
    React.useEffect(() => {
        if (props.value !== undefined) {
            setHasValue(!!props.value && props.value.toString().length > 0);
        }
    }, [props.value]);

    // Determine if label should float
    const isFloating = isFocused || hasValue;

    return (
        <div className="relative">
            <input
                {...props}
                className={`
                    w-full h-[52px] px-4 pt-4 pb-1 border border-gray-200 rounded-[12px] 
                    text-[15px] focus:outline-none focus:border-[#525252] transition-colors
                    bg-transparent
                    ${className}
                `}
                onFocus={(e) => {
                    setIsFocused(true);
                    props.onFocus?.(e);
                }}
                onBlur={(e) => {
                    setIsFocused(false);
                    props.onBlur?.(e);
                }}
                onChange={(e) => {
                    setHasValue(e.target.value.length > 0);
                    props.onChange?.(e);
                }}
            />
            <label
                className={`
                    absolute left-4 transition-all duration-200 pointer-events-none
                    ${isFloating
                        ? 'top-2 text-[11px] text-[#525252] font-medium'
                        : 'top-1/2 -translate-y-1/2 text-[15px] text-gray-400'
                    }
                `}
            >
                {label}
            </label>
        </div>
    );
}
