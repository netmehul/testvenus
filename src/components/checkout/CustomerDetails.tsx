import { User, CreditCard, FileText, MapPin } from 'lucide-react';
import { FloatingLabelInput } from '../ui/FloatingLabelInput';
import type { Store } from '../store/StoreCard';

interface CustomerDetailsProps {
    store: Store | null;
}

export function CustomerDetails({ store }: CustomerDetailsProps) {
    if (!store) return null;

    return (
        <div className="flex flex-col gap-6">
            {/* Store Details Section */}
            <div>
                <h2 className="text-[20px] font-medium text-[#151515] font-display mb-4">
                    Store Details
                </h2>
                <div className="bg-white rounded-[18px] p-6 border border-gray-100 shadow-sm flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <MapPin className="w-[18px] h-[18px] text-[#151515]" />
                        <h3 className="text-[16px] font-medium text-[#151515] font-display">
                            {store.name}
                        </h3>
                    </div>
                    <p className="text-[14px] leading-[22px] text-gray-500 font-display pl-7">
                        {store.address}
                    </p>
                </div>
            </div>

            {/* Step 1: Mobile Number (Active) */}
            <div className="bg-white rounded-[18px] p-6 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-[18px] h-[18px] flex items-center justify-center">
                            <User className="w-full h-full text-[#151515]" />
                        </div>
                        <h2 className="text-[16px] font-medium text-[#151515] font-display">
                            Your information
                        </h2>
                    </div>
                    <span className="text-[14px] text-gray-500 font-display">
                        Already have an account? <span className="text-[#151515] underline cursor-pointer">Sign In</span>
                    </span>
                </div>

                <div className="space-y-4">
                    <FloatingLabelInput
                        label="Full Name"
                        type="text"
                    />
                    <FloatingLabelInput
                        label="Mobile No.*"
                        type="tel"
                    />

                    <button className="w-full h-[52px] bg-[#151515] text-white rounded-[12px] text-[16px] font-medium hover:bg-[#525252] transition-colors font-display mt-2">
                        Verify Your Mobile No.
                    </button>
                </div>
            </div>

            {/* Step 2: Billing Details (Inactive) */}
            <div className="bg-white rounded-[12px] p-[18px] border border-gray-100 flex items-center gap-3">
                <div className="w-[18px] h-[18px] flex items-center justify-center">
                    <FileText className="w-full h-full text-[#151515]" />
                </div>
                <h2 className="text-[16px] font-medium text-[#151515] font-display">
                    Billing Information
                </h2>
            </div>

            {/* Step 3: Payment (Inactive) */}
            <div className="bg-white rounded-[12px] p-[18px] border border-gray-100 flex items-center gap-3">
                <div className="w-[18px] h-[18px] flex items-center justify-center">
                    <CreditCard className="w-full h-full text-[#151515]" />
                </div>
                <h2 className="text-[16px] font-medium text-[#151515] font-display">
                    Payment
                </h2>
            </div>
        </div>
    );
}
