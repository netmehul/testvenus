import { useState } from 'react';
import { ShoppingBag, Bell, Percent, Flame, GraduationCap } from 'lucide-react';

interface WishlistProduct {
    id: string;
    name: string;
    description: string;
    price: string;
    originalPrice?: string;
    image: string; // Placeholder color or URL
    badge?: { type: 'hot' | 'student'; label: string };
    stockStatus: 'in-stock' | 'out-of-stock';
    offerText?: string;
}

export function WishlistTab() {
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

    const toggleSelection = (id: string) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedItems(newSelected);
    };

    const dummyProducts: WishlistProduct[] = [
        {
            id: '1',
            name: 'iPhone 17 Pro',
            description: 'Innovative design for ultimate performance and battery ...',
            price: '₹1,34,900',
            image: 'bg-orange-100',
            badge: { type: 'hot', label: 'Hot Deal' },
            stockStatus: 'in-stock',
            offerText: 'Get Rs. 4000 additional Cashback',
        },
        {
            id: '2',
            name: 'iPhone 17 Pro',
            description: 'Innovative design for ultimate performance and battery ...',
            price: '₹82,900',
            image: 'bg-gray-800',
            badge: { type: 'student', label: 'Student Offer' },
            stockStatus: 'in-stock',
            offerText: 'Get Rs. 4000 additional Cashback',
        },
        {
            id: '3',
            name: 'iPhone 17 Pro Max',
            description: 'Innovative design for ultimate performance and battery life.',
            price: '', // Price hidden for out of stock in design? keeping generic
            image: 'bg-slate-700',
            stockStatus: 'out-of-stock',
        },
        {
            id: '4',
            name: 'iPhone Air',
            description: 'Innovative design for ultimate performance and battery ...',
            price: '₹1,34,900',
            image: 'bg-yellow-50',
            badge: { type: 'hot', label: 'Hot Deal' },
            stockStatus: 'in-stock',
            offerText: 'Get Rs. 4000 additional Cashback',
        },
        {
            id: '5',
            name: 'iPhone 16 Plus',
            description: 'Innovative design for ultimate performance and battery ...',
            price: '₹75,900',
            originalPrice: '₹79,900',
            image: 'bg-pink-100',
            stockStatus: 'in-stock',
            offerText: 'Get Rs. 4000 additional Cashback',
        },
        {
            id: '6',
            name: 'iPhone 16 Plus',
            description: 'Innovative design for ultimate performance and battery ...',
            price: '₹75,900',
            originalPrice: '₹79,900',
            image: 'bg-pink-200',
            stockStatus: 'in-stock',
            offerText: 'Get Rs. 4000 additional Cashback',
        }
    ];

    return (
        <div className="flex flex-col gap-6 w-full">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-end gap-4">
                    <h2 className="text-2xl font-medium text-[#151515]">{dummyProducts.length} items</h2>
                    {selectedItems.size > 0 && (
                        <span className="text-sm text-[#151515]/60 mb-1">{selectedItems.size} selected</span>
                    )}
                </div>
                {selectedItems.size > 0 && (
                    <button className="bg-[#525252] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#151515] transition-colors">
                        Add selected to cart
                    </button>
                )}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dummyProducts.map((product) => (
                    <div key={product.id} className="bg-white border border-[#E5E5E5] rounded-2xl p-4 flex flex-col gap-4 relative group hover:shadow-lg transition-shadow">
                        {/* Checkbox */}
                        <div className="absolute top-4 right-4 z-10">
                            <input
                                type="checkbox"
                                checked={selectedItems.has(product.id)}
                                onChange={() => toggleSelection(product.id)}
                                className="w-5 h-5 rounded border-gray-300 text-[#151515] focus:ring-[#151515] cursor-pointer"
                            />
                        </div>

                        {/* Badge */}
                        {product.badge && (
                            <div className={`absolute top-4 left-4 z-10 px-2 py-1 rounded-md text-[10px] font-bold text-white flex items-center gap-1 ${product.badge.type === 'hot' ? 'bg-[#E86C17]' : 'bg-[#6CA965]'
                                }`}>
                                {product.badge.type === 'hot' ? <Flame className="w-3 h-3 fill-current" /> : <GraduationCap className="w-3 h-3 fill-current" />}
                                {product.badge.label}
                            </div>
                        )}

                        {/* Image Area */}
                        <div className={`aspect-square w-full rounded-xl ${product.image} relative flex items-center justify-center overflow-hidden`}>
                            {/* Placeholder Image Logic */}
                            <div className="w-1/2 h-full bg-current opacity-20 transform scale-75" />

                            {/* Out of Stock Overlay */}
                            {product.stockStatus === 'out-of-stock' && (
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2 rounded-full text-sm font-medium">
                                        Out of stock
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2 flex-1">
                            {/* Title & Price */}
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-[#151515]">{product.name}</h3>
                                {product.price && (
                                    <div className="flex flex-col items-end">
                                        <span className="font-semibold text-[#151515]">{product.price}</span>
                                        {product.originalPrice && (
                                            <span className="text-xs text-[#151515]/40 line-through">{product.originalPrice}</span>
                                        )}
                                    </div>
                                )}
                            </div>

                            <p className="text-xs text-[#151515]/60 line-clamp-2">{product.description}</p>

                            {/* Offer Tag */}
                            {product.offerText && (
                                <div className="border border-[#E5E5E5] rounded-lg px-3 py-2 flex items-center gap-2 mt-auto">
                                    <Percent className="w-3 h-3 text-[#151515]" />
                                    <span className="text-[10px] text-[#151515]">{product.offerText}</span>
                                </div>
                            )}
                        </div>

                        {/* Action Button */}
                        {product.stockStatus === 'in-stock' ? (
                            <button className="w-full border border-[#151515] rounded-lg py-2.5 text-sm font-medium text-[#151515] hover:bg-[#151515] hover:text-white transition-colors flex items-center justify-center gap-2">
                                Add to cart
                                <ShoppingBag className="w-4 h-4" />
                            </button>
                        ) : (
                            <button className="w-full border border-[#151515] rounded-lg py-2.5 text-sm font-medium text-[#151515] hover:bg-[#151515] hover:text-white transition-colors flex items-center justify-center gap-2">
                                Notify Me
                                <Bell className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
