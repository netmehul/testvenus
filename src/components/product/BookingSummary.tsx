import type { Product } from '../../data/products';

interface BookingSummaryProps {
    product: Product;
    showCheckout?: boolean;
    onCheckout?: () => void;
}

export function BookingSummary({ product, showCheckout, onCheckout }: BookingSummaryProps) {
    return (
        <div className="bg-white rounded-[18px] p-[18px] flex flex-col gap-[18px] shadow-sm border border-gray-100">
            {/* Title */}
            <h2 className="text-[20px] font-medium text-[#151515] font-display leading-normal">
                Booking Summary
            </h2>

            {/* Divider */}
            <div className="h-[1px] bg-[#F2F2F2] w-full shrink-0" />

            {/* Product Card */}
            <div className="flex items-center justify-between w-full">
                <div className="flex gap-[13px] items-center">
                    <div className="w-[84px] h-[84px] border border-[rgba(82,82,82,0.1)] rounded-[8px] flex items-center justify-center bg-white shrink-0 p-2">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <p className="text-[16px] font-medium text-[#151515] font-display">
                            {product.title}
                        </p>
                        <p className="text-[12px] text-[rgba(21,21,21,0.6)] font-normal">
                            Cosmic Orange, 512 GB
                        </p>
                    </div>
                </div>
                <div className="text-[16px] font-medium text-[#151515]">
                    {product.effectivePrice || product.price}
                </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#F2F2F2] w-full shrink-0" />

            {/* Pricing Breakdown */}
            <div className="flex flex-col gap-[16px] w-full">
                <div className="flex justify-between items-center w-full">
                    <span className="text-[16px] text-[rgba(21,21,21,0.6)] font-medium">Subtotal</span>
                    <span className="text-[16px] text-[#151515] font-medium">{product.effectivePrice || product.price}</span>
                </div>
                <div className="flex justify-between items-center w-full">
                    <span className="text-[16px] text-[rgba(21,21,21,0.6)] font-medium">Cashback</span>
                    <span className="text-[16px] text-[#525252] font-medium">- ₹6,000</span>
                </div>
            </div>

            {/* Promo Code Input */}
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Add Promo Code"
                    className="w-full h-[48px] pl-4 pr-16 bg-white border border-[rgba(82,82,82,0.2)] rounded-[12px] text-[14px] placeholder:text-[rgba(21,21,21,0.4)] focus:outline-none focus:border-[#525252] transition-colors"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#525252] font-medium text-[14px] hover:text-[#151515] transition-colors">
                    Apply
                </button>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#F2F2F2] w-full shrink-0" />

            {/* Total */}
            <div className="flex justify-between items-center w-full">
                <span className="text-[20px] text-[rgba(21,21,21,0.6)] font-medium">Total</span>
                <span className="text-[20px] text-[#151515] font-medium">{product.price}</span>
            </div>

            {/* Checkout Button */}
            {showCheckout && (
                <button
                    onClick={onCheckout}
                    className="w-full h-[52px] bg-[#151515] text-white rounded-[12px] text-[16px] font-medium hover:bg-[#525252] transition-colors font-display"
                >
                    Continue Checkout
                </button>
            )}
        </div>
    );
}
