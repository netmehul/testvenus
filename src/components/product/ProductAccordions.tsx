import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ProductFeature } from '../../data/products';

interface ProductAccordionsProps {
    features: ProductFeature[];
}

export function ProductAccordions({ features }: ProductAccordionsProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="flex flex-col border-t border-gray-100">
            {features.map((feature, index) => (
                <div key={index} className="border-b border-gray-100">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-2"
                    >
                        <span className="text-base font-semibold text-[#151515]">{feature.title}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-600 text-sm leading-relaxed px-2">
                            {feature.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
