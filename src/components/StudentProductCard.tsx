import { useState } from 'react';
import { BadgePercent, GraduationCap, X } from 'lucide-react';

interface StudentProductCardProps {
    title: string;
    price: string;
    image: string;
    cashbackAmount?: string;
    educationDiscount?: string;
    effectivePrice?: string;
    inStock?: boolean;
    description?: string;
}

export function StudentProductCard({
    title,
    price,
    image,
    cashbackAmount,
    educationDiscount,
    effectivePrice,
    inStock = true,
    description = "Premium Apple product designed for students. Experience the best in class technology and performance."
}: StudentProductCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        if (inStock) {
            setIsModalOpen(true);
        }
    };

    const cardContent = (
        <div
            onClick={handleCardClick}
            className={`bg-white rounded-[14px] p-[14px] border border-gray-100 transition-all duration-300 flex flex-col h-full group cursor-pointer ${inStock ? 'hover:shadow-lg' : 'cursor-not-allowed opacity-80'}`}
        >
            {/* Image Container */}
            <div className="relative h-[200px] flex items-center justify-center p-2 rounded-[15px] overflow-hidden mb-3">
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

    return (
        <>
            {cardContent}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    />
                    <div className="bg-white rounded-[20px] w-full max-w-lg relative z-10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>

                        <div className="p-8">
                            <div className="aspect-square w-48 mx-auto mb-6">
                                <img src={image} alt={title} className="w-full h-full object-contain mix-blend-multiply" />
                            </div>

                            <h2 className="text-2xl font-semibold text-[#151515] mb-2">{title}</h2>
                            <p className="text-[#525252] leading-relaxed mb-6">
                                {description}
                            </p>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-500">M.R.P.</span>
                                    <span className="font-medium">{price}</span>
                                </div>
                                {cashbackAmount && (
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100 text-green-600">
                                        <span className="flex items-center gap-2">
                                            <BadgePercent className="w-4 h-4" />
                                            Instant Cashback
                                        </span>
                                        <span className="font-medium">- {cashbackAmount}</span>
                                    </div>
                                )}
                                {educationDiscount && (
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100 text-[#7BA05B]">
                                        <span className="flex items-center gap-2">
                                            <GraduationCap className="w-4 h-4" />
                                            Education Discount
                                        </span>
                                        <span className="font-medium">- {educationDiscount}</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center pt-4">
                                    <span className="text-lg font-semibold text-[#151515]">Effective Price</span>
                                    <span className="text-xl font-bold text-[#151515]">{effectivePrice || price}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-full mt-8 bg-[#151515] text-white py-4 rounded-xl font-semibold hover:bg-black transition-colors"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
