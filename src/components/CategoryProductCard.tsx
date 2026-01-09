import { ArrowRightLeft, Bell, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductBadge {
    text: string;
    type: 'hot-deal' | 'student-offer';
}

interface CategoryProductCardProps {
    id: number | string;
    title: string;
    price: string;
    originalPrice?: string;
    image: string;
    badges?: ProductBadge[];
    description: string;
    cashbackOffer?: string;
    inStock?: boolean;
}

export function CategoryProductCard({
    id,
    title,
    price,
    originalPrice,
    image,
    badges = [],
    description,
    cashbackOffer,
    inStock = true
}: CategoryProductCardProps) {
    return (
        <div className="bg-white rounded-[14px] p-[14px] flex flex-col gap-3 h-full relative group transition-shadow hover:shadow-lg">
            {/* Image Container */}
            <div className="relative aspect-square flex items-center justify-center bg-white rounded-lg overflow-hidden mb-2">
                {/* Badges */}
                <div className="absolute top-0 left-0 flex flex-col gap-2 z-10">
                    {badges.map((badge, index) => (
                        <span
                            key={index}
                            className={`px-3 py-1 rounded text-xs font-medium text-white flex items-center gap-1 ${badge.type === 'hot-deal' ? 'bg-[#D64123]' : 'bg-[#7BA05B]'
                                }`}
                        >
                            {badge.type === 'hot-deal' ? '🔥' : '🎓'} {badge.text}
                        </span>
                    ))}
                </div>

                {/* Product Image */}
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-contain mix-blend-multiply ${!inStock ? 'opacity-50' : ''}`}
                />

                {/* Out of Stock Overlay */}
                {!inStock && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                            Out of stock
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="text-[19px] font-semibold text-[#151515] leading-tight">{title}</h3>
                    <div className="flex flex-col items-end">
                        <span className="text-[18px] font-semibold text-[#151515]">{price}</span>
                        {originalPrice && (
                            <span className="text-xs text-[#151515]/40 line-through decoration-1">{originalPrice}</span>
                        )}
                    </div>
                </div>

                <p className="text-[12px] text-[#151515]/60 leading-snug line-clamp-2 min-h-[2.5em]">
                    {description}
                </p>
            </div>

            {/* Cashback Offer */}
            {cashbackOffer && (
                <div className="flex items-center gap-2 border border-[#E5E5E5] rounded-[8px] p-2 bg-[#FAFAFA]">
                    <Gift className="w-4 h-4 text-[#525252]" />
                    <span className="text-[12px] text-[#151515] font-medium">{cashbackOffer}</span>
                </div>
            )}

            {/* Actions */}
            <div className="mt-auto pt-2 grid grid-cols-2 gap-2">
                {inStock ? (
                    <>
                        <Link
                            to={`/product/${id}`}
                            className="bg-[#525252] hover:bg-[#333] text-white text-[14px] font-medium py-2.5 px-4 rounded-[8px] transition-colors text-center"
                        >
                            View
                        </Link>
                        <button className="border border-[#3C3C3C] text-[#525252] hover:bg-gray-50 text-[14px] font-medium py-2.5 px-4 rounded-[8px] flex items-center justify-center gap-2 transition-colors">
                            Compare
                            <ArrowRightLeft className="w-3.5 h-3.5" />
                        </button>
                    </>
                ) : (
                    <button className="col-span-2 border border-[#3C3C3C] text-[#525252] hover:bg-gray-50 text-[14px] font-medium py-2.5 px-4 rounded-[8px] flex items-center justify-center gap-2 transition-colors w-full">
                        Notify Me
                        <Bell className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
}
