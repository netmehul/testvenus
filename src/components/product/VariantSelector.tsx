import { CheckCircle2, PlayCircle } from 'lucide-react';

export interface VariantOption {
    id: string | number;
    label: string;
    value?: string; // hex for colors
    inStock: boolean;
    features?: string[];
}

interface VariantSelectorProps {
    options: VariantOption[];
    selectedId: string | number;
    onSelect: (option: VariantOption) => void;
    type: 'color' | 'text' | 'coverage';
}

export function VariantSelector({
    options,
    selectedId,
    onSelect,
    type
}: VariantSelectorProps) {
    if (type === 'coverage') {
        return (
            <div className="flex flex-col lg:flex-row gap-4 items-start">
                <div className="flex-1 flex flex-col gap-3 w-full">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => option.inStock && onSelect(option)}
                            className={`flex flex-col gap-4 p-5 rounded-2xl border transition-all text-left w-full
                                ${selectedId === option.id
                                    ? 'border-[#525252] bg-white ring-1 ring-[#525252]'
                                    : 'border-transparent bg-[#F5F5F7] hover:border-gray-200'
                                }
                                ${!option.inStock ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                        >
                            <span className="text-base lg:text-lg font-semibold text-[#151515]">
                                {option.label}
                            </span>

                            {option.features && option.features.length > 0 && (
                                <ul className="flex flex-col gap-2">
                                    {option.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-[#151515]">
                                            <CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </button>
                    ))}
                </div>

                {/* Video Card Placeholder */}
                <div className="w-full lg:w-[240px] h-[200px] lg:h-[280px] rounded-2xl relative overflow-hidden group cursor-pointer shrink-0">
                    <img
                        src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2670&auto=format&fit=crop"
                        alt="AppleCare Support"
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-end p-6 text-center text-white">
                        <PlayCircle className="w-12 h-12 mb-4 opacity-90" />
                        <p className="text-sm font-medium leading-tight">
                            How does AppleCare+ work?
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-2">
            {options.map((option) => (
                <button
                    key={option.id}
                    onClick={() => option.inStock && onSelect(option)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left group
                        ${selectedId === option.id
                            ? 'border-[#E86C17] bg-[#E86C17]/5'
                            : 'border-gray-100 bg-white hover:border-gray-200'
                        }
                        ${!option.inStock ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                >
                    {type === 'color' && option.value && (
                        <span
                            className="w-6 h-6 rounded-full shadow-inner shrink-0"
                            style={{ backgroundColor: option.value }}
                        ></span>
                    )}
                    <span className={`text-base font-medium transition-colors ${selectedId === option.id ? 'text-[#151515]' : 'text-gray-500 group-hover:text-gray-700'}`}>
                        {option.label} {!option.inStock && '(Out of stock)'}
                    </span>
                </button>
            ))}
        </div>
    );
}
