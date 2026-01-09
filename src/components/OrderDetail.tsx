import { ArrowLeft, MapPin, CreditCard, ShoppingBag, X, Smartphone } from 'lucide-react';

interface OrderDetailProps {
    orderId: string;
    onBack: () => void;
}

export function OrderDetail({ orderId, onBack }: OrderDetailProps) {
    return (
        <div className="flex flex-col gap-8 text-[#151515]">
            {/* Header */}
            <div className="flex flex-col gap-6">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm text-[#525252] hover:text-[#151515] transition-colors w-fit"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Orders</span>
                </button>

                <div className="flex md:items-center justify-between flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-[#151515]/60">Order ID</span>
                        <h1 className="text-xl font-semibold">{orderId}</h1>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-[#151515]/60">Placed on</span>
                        <span className="text-base font-medium">6 Nov 2025, 2:32 PM</span>
                    </div>
                    <div className="bg-[#EDFCF2] text-[#0F9D58] border border-[#0F9D58]/20 px-4 py-2 rounded-full text-sm font-medium w-fit">
                        Delivered
                    </div>
                    <button className="border border-[#151515]/20 rounded-lg px-4 py-2 text-sm font-medium hover:border-[#151515] transition-colors">
                        Save Invoice
                    </button>
                </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-[#E5E5E5]">
                {/* Billing Address */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">Billing Address</h3>
                    <div className="flex items-start gap-2 text-sm text-[#525252]">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                        <div className="flex flex-col">
                            <span className="font-medium text-[#151515] mb-1">CG Road</span>
                            <span>502, Silver Arc Residency</span>
                            <span>Law College Road, Erandwane</span>
                            <span>Pune, Maharashtra 411004</span>
                            <span>+91 98231 45670</span>
                        </div>
                    </div>
                </div>

                {/* Payment */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">Payment</h3>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 border border-[#E5E5E5] rounded p-1.5 w-fit">
                            <span className="text-blue-600 font-bold italic text-xs px-1">VISA</span>
                            <span className="text-xs text-[#151515]">Visa ending 4242</span>
                        </div>
                        <div className="flex flex-col text-sm">
                            <span className="text-[#151515]/60">Paid On</span>
                            <span className="font-medium text-[#151515]">6 Nov 2025</span>
                        </div>
                    </div>
                </div>

                {/* Purchase Type */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">Purchase Type</h3>
                    <div className="flex items-center gap-2 text-sm text-[#151515]">
                        <span>Store Pickup</span>
                    </div>
                </div>

                {/* Store Details */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">Store Details</h3>
                    <div className="flex items-start gap-2 text-sm text-[#525252]">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                        <div className="flex flex-col">
                            <span className="font-medium text-[#151515] mb-1">CG Road</span>
                            <span>Ground Floor, Shop No 2 Shoppers Plaza 4, Opp. BSNL Bhavan, CG Road, Navrangpura, Ahmedabad, Gujarat, India 380009.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Items Included */}
                <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-6">Items included</h2>
                    <div className="w-full">
                        <div className="flex items-center text-sm text-[#151515]/40 mb-4 px-4">
                            <span className="w-16">Qty</span>
                            <span className="flex-1">Product</span>
                            <span>Amount</span>
                        </div>
                        <div className="bg-white border border-[#E5E5E5] rounded-xl p-4 flex items-center gap-6">
                            <span className="w-8 text-center text-[#151515]">1</span>
                            <X className="w-3 h-3 text-[#151515]/40" />
                            <div className="w-16 h-16 bg-[#FDF2EC] rounded-lg p-2 flex items-center justify-center">
                                {/* Placeholder for iPhone Image */}
                                <Smartphone className="w-10 h-10 text-orange-600" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <span className="font-semibold text-[#151515]">iPhone 17 Pro</span>
                                <span className="text-sm text-[#525252]">Cosmic Orange, 512 GB</span>
                            </div>
                            <span className="font-semibold text-[#151515]">₹1,30,900</span>
                        </div>
                    </div>
                </div>

                {/* Payment Summary */}
                <div className="w-full lg:w-[360px] bg-white border border-[#E5E5E5] rounded-2xl p-6 h-fit">
                    <h2 className="text-lg font-semibold mb-6">Payment Summary</h2>

                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E5E5E5]">
                        <div className="border border-[#E5E5E5] rounded p-1.5">
                            <span className="text-blue-600 font-bold italic text-sm px-1">VISA</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-[#151515]">Visa ending 4242</span>
                            <div className="flex gap-2 text-xs text-[#151515]/60">
                                <span>Paid On</span>
                                <span>6 Nov 2025</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 text-sm mb-4">
                        <div className="flex justify-between">
                            <span className="text-[#525252]">Subtotal</span>
                            <span className="font-medium text-[#151515]">₹1,30,900</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#525252]">Cashback</span>
                            <span className="font-medium text-[#151515]">- ₹6,000</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#525252]">Promo Code</span>
                            <span className="font-medium text-[#151515]">- ₹2,000</span>
                        </div>
                    </div>

                    <div className="flex justify-between text-sm mb-2 pt-2 border-t border-dashed border-[#E5E5E5]">
                        <span className="text-[#525252]">Online Minimal Payment</span>
                        <span className="font-semibold text-[#151515]">₹5,000</span>
                    </div>
                    <div className="flex justify-between text-lg pt-2">
                        <span className="text-[#151515]/60">Payment At Store</span>
                        <span className="font-semibold text-[#151515]">₹1,17,900</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
