import type { Product } from '../../data/products';

interface PickupBookingSummaryProps {
    product: Product;
}

export function PickupBookingSummary({ product }: PickupBookingSummaryProps) {
    // Hardcoded values from Figma or derived for logic
    const cashback = 6000;
    const promoCodeValue = 2000;
    const minimalPayment = 5000;

    // Parse price strings to numbers for calculation (assuming format "₹1,30,900")
    const parsePrice = (priceStr: string) => {
        return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    };

    const subtotal = parsePrice(product.price); // Using price as subtotal base on Figma
    const effectiveTotal = subtotal - cashback - promoCodeValue;
    const payableAtStore = effectiveTotal - minimalPayment; // Figma logic seems to be: Subtotal - cashback - promo - minimal = Payable? Or is Minimal deducted?
    // Figma image shows:
    // Subtotal: 1,30,900
    // Cashback: -6,000
    // Promo Code: -2,000
    // (Line)
    // Minimal Payment: -5,000 (Wait, minimal payment is usually what you PAY NOW, so it splits the total?)
    // Total Payable at Store: 1,17,900

    // Math check:
    // 130900 - 6000 - 2000 = 122900 (Total Cost)
    // 122900 - 5000 (Paid now) = 117900 (Payable at Store) -> THIS MATCHES FIGMA!

    const formatPrice = (amount: number) => {
        return '₹' + amount.toLocaleString('en-IN');
    };

    return (
        <div className="bg-white rounded-[18px] p-[18px] flex flex-col gap-[18px] shadow-sm border border-gray-100">
            {/* Title */}
            <h2 className="text-[20px] font-medium text-[#151515] font-display leading-normal">
                Booking Summary
            </h2>

            {/* Divider */}
            <div className="h-[1px] bg-[#F2F2F2] w-full shrink-0" />

            {/* Product Details */}
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
                        <p className="text-[12px] text-[rgba(21,21,21,0.6)] font-normal font-display">
                            Cosmic Orange, 512 GB
                        </p>
                    </div>
                </div>
                <div className="text-[16px] font-medium text-[#151515] font-display">
                    {product.price}
                </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#F2F2F2] w-full shrink-0" />

            {/* Breakdown */}
            <div className="flex flex-col gap-[16px] w-full">
                <div className="flex justify-between items-center w-full">
                    <span className="text-[16px] text-[rgba(21,21,21,0.6)] font-medium font-display">Subtotal</span>
                    <span className="text-[16px] text-[#151515] font-medium font-display">{product.price}</span>
                </div>
                <div className="flex justify-between items-center w-full">
                    <span className="text-[16px] text-[rgba(21,21,21,0.6)] font-medium font-display">Cashback</span>
                    <span className="text-[16px] text-[#525252] font-medium font-display">- ₹6,000</span>
                </div>
                <div className="flex justify-between items-center w-full">
                    <span className="text-[16px] text-[rgba(21,21,21,0.6)] font-medium font-display">Promo Code</span>
                    <span className="text-[16px] text-[#525252] font-medium font-display">- ₹2,000</span>
                </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#F2F2F2] w-full shrink-0" />

            <div className="flex justify-between items-center w-full">
                <span className="text-[20px] text-[rgba(21,21,21,0.6)] font-medium font-display">Minimal Payment</span>
                <span className="text-[20px] text-[rgba(21,21,21,0.6)] font-medium font-display">- ₹5,000</span>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#F2F2F2] w-full shrink-0" />

            {/* Total Payable at Store */}
            <div className="flex justify-between items-center w-full">
                <span className="text-[20px] text-[rgba(21,21,21,0.6)] font-medium font-display">Total Payable at Store</span>
                <span className="text-[20px] text-[#151515] font-medium font-display">{formatPrice(payableAtStore)}</span>
            </div>
        </div>
    );
}
