import { Link } from 'react-router-dom';
import { BadgePercent, GraduationCap } from 'lucide-react';

interface StudentProductCardProps {
    title: string;
    price: string;
    image: string;
    cashbackAmount?: string;
    educationDiscount?: string;
    effectivePrice?: string;
    inStock?: boolean;
    productLink?: string;
}

export function StudentProductCard({
    title,
    price,
    image,
    cashbackAmount,
    educationDiscount,
    effectivePrice,
    inStock = true,
    productLink
}: StudentProductCardProps) {
    const cardContent = (
        <div className="bg-white rounded-[14px] p-[14px] border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
            {/* Image Container */}
            <div className="relative h-[200px] flex items-center justify-center p-2 rounded-[15px] overflow-hidden mb-3">
                {/* Product Image */}

                {/* Product Image */}
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300 ${!inStock ? 'opacity-50' : ''
                        }`}
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
            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h3 className="font-['SF_Pro_Display',sans-serif] text-[16px] font-medium text-[#151515] leading-[22px]">{title}</h3>
                    <span className="font-['SF_Pro_Display',sans-serif] text-[16px] font-medium text-[#151515]">{price}</span>
                </div>

                <div className="h-px bg-[#E5E5E5] w-full" />

                {/* Details */}
                <div className="flex flex-col gap-2">
                    {cashbackAmount && (
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-[#525252]">
                                <BadgePercent className="w-4 h-4" />
                                <span className="text-[14px] font-medium">Instant Cashback</span>
                            </div>
                            <span className="text-[14px] font-medium text-[#525252]">- {cashbackAmount}</span>
                        </div>
                    )}
                    {educationDiscount && (
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-[#525252]">
                                <GraduationCap className="w-4 h-4" />
                                <span className="text-[14px] font-medium">Education Discount</span>
                            </div>
                            <span className="text-[14px] font-medium text-[#525252]">- {educationDiscount}</span>
                        </div>
                    )}
                </div>

                <div className="h-px bg-[#E5E5E5] w-full" />

                {/* Effective Price */}
                <div className="flex justify-between items-center">
                    <span className="font-['SF_Pro_Display',sans-serif] text-[16px] font-medium text-[#151515]">Effective Price</span>
                    <span className="font-['SF_Pro_Display',sans-serif] text-[16px] font-medium text-[#151515]">{effectivePrice || price}</span>
                </div>
            </div>
        </div>
    );

    // If productLink is provided, wrap in Link, otherwise return as div
    if (productLink && inStock) {
        return (
            <Link to={productLink} className="block h-full">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}
