import { useParams, useNavigate } from 'react-router-dom';
import { Check, MapPin, HelpCircle } from 'lucide-react';
import { products } from '../data/products';
import BackgroundImageEnd from '../assets/thank-you-image/backgroudn-image-end.png';

export function ThankYouPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === Number(id));

    if (!product) return <div className="p-20 text-center font-display">Order not found.</div>;

    // Hardcoded demo values matching Figma
    const orderNumber = "INV-20251106-4591";
    const orderDate = "6 Nov 2025";

    return (
        <div className="w-full bg-[#FAFAFA]">
            {/* Top Section with Background Image */}
            <div className="relative w-full h-[300px] overflow-hidden">
                <img
                    src={BackgroundImageEnd}
                    alt="Thank you background"
                    className="absolute -top-[250px] left-0 w-full h-[600px] object-contain"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-[48px] font-bold text-[#151515] font-display mb-2">Thank You</h1>
                    <p className="text-[16px] text-[#525252] font-display">
                        We've received your order and sent a confirmation email.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-20 pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        {/* Order Number Card */}
                        <div className="bg-white rounded-[18px] p-6 border border-gray-100 shadow-sm flex items-start gap-4">
                            <div className="w-[32px] h-[32px] bg-[#151515] rounded-full flex items-center justify-center shrink-0">
                                <Check className="w-[18px] h-[18px] text-white" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[14px] text-gray-500 font-display">Order number</p>
                                <p className="text-[20px] font-bold text-[#151515] font-display">{orderNumber}</p>
                            </div>
                        </div>

                        {/* Product Detail Table */}
                        <div className="bg-white rounded-[18px] overflow-hidden border border-gray-100 shadow-sm">
                            <div className="grid grid-cols-12 p-4 text-[12px] text-gray-400 font-display border-bottom border-gray-50">
                                <div className="col-span-1">Qty</div>
                                <div className="col-span-9 pl-4">Product</div>
                                <div className="col-span-2 text-right">Amount</div>
                            </div>
                            <div className="grid grid-cols-12 p-6 items-center">
                                <div className="col-span-1 text-[16px] font-medium text-[#151515] font-display">1</div>
                                <div className="col-span-1 flex items-center justify-center px-2">
                                    <span className="text-gray-300">×</span>
                                </div>
                                <div className="col-span-8 flex gap-4 items-center pl-2">
                                    <div className="w-[64px] h-[64px] border border-gray-100 rounded-[8px] flex items-center justify-center bg-white shrink-0 p-1">
                                        <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[16px] font-medium text-[#151515] font-display">{product.title}</p>
                                        <p className="text-[12px] text-gray-500 font-display">Cosmic Orange, 512 GB</p>
                                    </div>
                                </div>
                                <div className="col-span-2 text-right text-[16px] font-medium text-[#151515] font-display">₹5,000</div>
                            </div>
                        </div>

                        {/* Store Details / Map */}
                        <div>
                            <h2 className="text-[20px] font-medium text-[#151515] font-display mb-4">Store Details</h2>
                            <div className="h-[230px] bg-white rounded-[18px] overflow-hidden border border-gray-100 shadow-sm relative group">
                                {/* Mock Map View */}
                                <div className="absolute inset-0 bg-[#E5E5E5] flex items-center justify-center">
                                    <MapPin className="w-10 h-10 text-[#FF0000] fill-[#FF0000]" />
                                </div>

                                {/* Floating Address Widget */}
                                <div className="absolute top-4 right-4 w-[240px] bg-white rounded-[8px] p-[12px] shadow-lg border border-gray-100 flex flex-col gap-[8px] animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="flex items-center gap-[5px]">
                                        <MapPin className="w-[16px] h-[16px] text-[#525252]" />
                                        <p className="font-display font-medium text-[14px] text-[#525252]">CG Road</p>
                                    </div>
                                    <p className="font-display text-[10px] leading-[15px] text-[rgba(21,21,21,0.6)]">
                                        Ground Floor, Shop No 2 Shoppers Plaza 4, Opp. BSNL Bhavan, CG Road, Navrangpura, Ahmedabad, Gujarat, India 380009.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 text-[14px] text-[#525252] font-display hover:text-[#151515] transition-colors">
                            <HelpCircle className="w-[18px] h-[18px]" />
                            <span className="underline">Contact Support</span>
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-[18px] p-6 border border-gray-100 shadow-sm flex flex-col gap-6">
                            <h2 className="text-[20px] font-medium text-[#151515] font-display">Booking Summary</h2>
                            <div className="h-[1px] bg-gray-50 w-full" />

                            {/* Payment Card Info */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-[48px] h-[32px] border border-gray-100 rounded-[4px] flex items-center justify-center p-1">
                                        <span className="text-[10px] font-bold italic text-blue-800">VISA</span>
                                    </div>
                                    <span className="text-[14px] text-[#151515] font-display">Visa ending 4242</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] text-gray-400 font-display">Paid On</span>
                                    <span className="text-[14px] font-medium text-[#151515] font-display">{orderDate}</span>
                                </div>
                            </div>

                            <div className="h-[1px] bg-gray-50 w-full" />

                            {/* Pricing Breakdown */}
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[16px] text-gray-500 font-display">Subtotal</span>
                                    <span className="text-[16px] font-medium text-[#151515] font-display whitespace-nowrap">₹1,30,900</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[16px] text-gray-500 font-display">Cashback</span>
                                    <span className="text-[16px] font-medium text-[#151515] font-display whitespace-nowrap">- ₹6,000</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[16px] text-gray-500 font-display">Promo Code</span>
                                    <span className="text-[16px] font-medium text-[#151515] font-display whitespace-nowrap">- ₹2,000</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[16px] text-gray-500 font-display">GST (Claimable)</span>
                                    <span className="text-[16px] font-medium text-[#151515] font-display whitespace-nowrap">- ₹19,966</span>
                                </div>
                            </div>

                            <div className="h-[1px] bg-gray-50 w-full" />

                            <div className="flex justify-between items-center">
                                <span className="text-[20px] text-gray-500 font-display">Minimal Payment</span>
                                <span className="text-[20px] text-gray-500 font-display whitespace-nowrap">- ₹5,000</span>
                            </div>

                            <div className="h-[1px] bg-gray-50 w-full" />

                            <div className="flex justify-between items-center">
                                <span className="text-[20px] text-gray-500 font-display">Total Payable at Store</span>
                                <span className="text-[24px] font-bold text-[#151515] font-display whitespace-nowrap">₹1,02,934</span>
                            </div>

                            <button
                                onClick={() => navigate('/')}
                                className="w-full h-[56px] bg-[#151515] text-white rounded-[12px] text-[16px] font-medium hover:bg-[#525252] transition-colors font-display"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
