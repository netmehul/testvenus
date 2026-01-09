import { useState } from 'react';
import { Check } from 'lucide-react';
import type { Product } from '../../data/products';

interface BundleSelectionProps {
    product: Product;
}

export function BundleSelection({ product }: BundleSelectionProps) {
    const [selectedIds, setSelectedIds] = useState<number[]>(
        [product.bundleItems[0]?.id, product.bundleItems[1]?.id]
            .filter((id): id is number => id !== undefined)
    );

    const toggleItem = (id: number) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const parsePrice = (priceStr: string) => {
        return parseInt(priceStr.replace(/[^\d]/g, '')) || 0;
    };

    const totalPrice = parsePrice(product.price) +
        product.bundleItems
            .filter(item => selectedIds.includes(item.id))
            .reduce((sum, item) => sum + parsePrice(item.price.toString()), 0);

    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mt-12">
            <h2 className="text-xl font-bold text-[#151515] mb-8">People often bought together</h2>

            <div className="flex flex-row items-center gap-4 md:gap-8 mb-8 md:mb-12 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                {/* Main Product */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-50 rounded-xl md:rounded-2xl p-2 md:p-4 flex items-center justify-center relative">
                        <img src={product.image} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <p className="text-[10px] md:text-xs text-center text-gray-500 max-w-[80px] md:max-w-[120px] line-clamp-2">{product.title}</p>
                </div>

                {product.bundleItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 md:gap-8 shrink-0">
                        <span className="text-xl md:text-2xl text-gray-300 font-light">+</span>
                        <div className="flex flex-col items-center gap-2 relative">
                            <button
                                onClick={() => toggleItem(item.id)}
                                className={`w-20 h-20 md:w-32 md:h-32 rounded-xl md:rounded-2xl p-2 md:p-4 flex items-center justify-center transition-all relative
                                    ${selectedIds.includes(item.id) ? 'bg-white border-2 border-[#E86C17]' : 'bg-gray-50 border-2 border-transparent'}
                                `}
                            >
                                <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                <div className={`absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center transition-colors
                                    ${selectedIds.includes(item.id) ? 'bg-[#525252] text-white' : 'bg-white border border-gray-200 text-transparent'}
                                `}>
                                    <Check className="w-3 h-3 md:w-4 md:h-4" />
                                </div>
                            </button>
                            <p className="text-[10px] md:text-xs text-center text-gray-500 max-w-[80px] md:max-w-[120px] line-clamp-2">{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-6">
                <div className="flex items-center gap-6">
                    <span className="text-2xl font-bold text-[#151515]">₹{totalPrice.toLocaleString()}</span>
                    <div className="flex flex-col text-xs text-gray-500">
                        <span>{product.price}</span>
                        {product.bundleItems.filter(item => selectedIds.includes(item.id)).map(item => (
                            <span key={item.id}>+ {item.price}</span>
                        ))}
                    </div>
                </div>
                <button className="bg-[#525252] text-white px-10 py-4 rounded-xl font-medium hover:bg-[#333] transition-colors w-full md:w-auto">
                    Add To Cart
                </button>
            </div>
        </div>
    );
}
