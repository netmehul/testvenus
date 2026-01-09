import { useState } from 'react';
import { Info, Heart, ArrowRightLeft, Share2, ChevronRight } from 'lucide-react';
import { VariantSlider, type VariantGroup } from './VariantSlider';
import { type VariantOption } from './VariantSelector';
import type { ProductColor, ProductOffer, VariantItem } from '../../data/products';

interface ProductDetailsInfoProps {
    title: string;
    price: string;
    originalPrice?: string;
    effectivePrice?: string;
    sku: string;
    colors: ProductColor[];
    storageOptions?: VariantItem[];
    coverageOptions?: VariantItem[];
    offers: ProductOffer[];
}

export function ProductDetailsInfo({
    title,
    price,
    originalPrice,
    effectivePrice,
    sku,
    colors,
    storageOptions = [],
    coverageOptions = [],
    offers
}: ProductDetailsInfoProps) {
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedStorageId, setSelectedStorageId] = useState<string | number>(storageOptions[0]?.id);
    const [selectedCoverageId, setSelectedCoverageId] = useState<string | number>(coverageOptions[0]?.id);

    const handleVariantSelect = (groupId: string, option: VariantOption) => {
        if (groupId === 'color') {
            const color = colors.find(c => c.name === option.id);
            if (color) setSelectedColor(color);
        } else if (groupId === 'storage') {
            setSelectedStorageId(option.id);
        } else if (groupId === 'coverage') {
            setSelectedCoverageId(option.id);
        }
    };

    const variantGroups: VariantGroup[] = [
        {
            id: 'color',
            label: 'Pick your Colour',
            type: 'color',
            options: colors.map(c => ({
                id: c.name,
                label: c.name,
                value: c.hex,
                inStock: c.inStock
            })),
            selectedId: selectedColor.name
        },
        ...(storageOptions.length > 0 ? [{
            id: 'storage',
            label: 'Storage',
            type: 'text' as const,
            options: storageOptions.map(s => ({
                id: s.id,
                label: s.label,
                inStock: s.inStock
            })),
            selectedId: selectedStorageId
        }] : []),
        {
            id: 'coverage',
            label: 'Coverage',
            type: 'coverage' as const,
            options: coverageOptions.map(c => ({
                id: c.id,
                label: c.label,
                inStock: c.inStock,
                features: c.features
            })),
            selectedId: selectedCoverageId
        }
    ];

    return (
        <div className="flex flex-col gap-8">
            {/* Title and Pricing */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="text-2xl md:text-3xl font-semibold text-[#151515]">{title}</h1>
                    <div className="flex flex-col items-end shrink-0">
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl md:text-3xl font-semibold text-[#151515]">{price}</span>
                            {originalPrice && (
                                <span className="text-lg text-gray-400 line-through">{originalPrice}</span>
                            )}
                        </div>
                        {effectivePrice && (
                            <span className="text-sm text-gray-500">Effective Price With Cashback : {effectivePrice}</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Offers */}
            <div className="flex flex-col gap-3">
                {offers.map((offer, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-[#FAFAFA] border border-gray-100 rounded-xl">
                        <div className="flex items-center gap-3">
                            <span className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                                <Info className="w-4 h-4 text-gray-500" />
                            </span>
                            <span className="text-sm font-medium text-gray-700">{offer.text}</span>
                        </div>
                        <Info className="w-4 h-4 text-gray-400" />
                    </div>
                ))}
            </div>

            {/* SKU and Shipping */}
            <div className="flex flex-col gap-1 text-sm">
                <p className="text-gray-500">SKU: <span className="text-gray-800 font-medium">{sku}</span></p>
                <p className="text-gray-500">FREE SHIPPING: <span className="text-gray-800 font-medium">Delivery in 2-4 working days</span></p>
            </div>

            {/* Variant Slider */}
            <VariantSlider
                groups={variantGroups}
                onSelect={handleVariantSelect}
            />

            {/* Stock Location */}
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#151515] transition-colors">
                <ArrowRightLeft className="w-4 h-4 rotate-90" />
                <span>Stock available at nearest <span className="underline font-medium italic">iVenus store</span></span>
                <ChevronRight className="w-4 h-4" />
            </button>

            {/* Actions */}
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-[#525252] text-white py-4 rounded-xl font-medium hover:bg-[#333] transition-colors">
                        Book Online With Minimal
                    </button>
                    <button className="border border-gray-300 text-gray-800 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                        Buy Now
                    </button>
                </div>
                <div className="flex items-center justify-around py-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#151515]">
                        <Heart className="w-4 h-4" /> Wishlist
                    </button>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#151515]">
                        <ArrowRightLeft className="w-4 h-4" /> Compare
                    </button>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#151515]">
                        <Share2 className="w-4 h-4" /> Share
                    </button>
                </div>
            </div>
        </div>
    );
}
