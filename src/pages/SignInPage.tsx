import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook } from 'lucide-react';

export function SignInPage() {
    const navigate = useNavigate();
    const [step, setStep] = useState<'mobile' | 'otp'>('mobile');
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');

    const handleMobileSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (mobile.length >= 10) {
            setStep('otp');
        }
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.length === 4) { // Dummy validation
            navigate('/account');
        }
    };

    return (
        <div className="min-h-screen bg-white flex">
            {/* Left Side - Hero/Banner */}
            <div className="hidden lg:flex w-1/2 bg-[#F3F3F3] items-center justify-center relative overflow-hidden">
                <div className="text-center z-10 px-12 mt-[-200px]">
                    <h2 className="text-[48px] leading-[58px] font-semibold text-[#151515] mb-20 whitespace-pre-line">
                        Discover premium.{'\n'}Experience perfection.
                    </h2>
                </div>

                {/* Product Image Positioned at Bottom */}
                <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80"
                    alt="iPhone"
                    className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80%] max-w-[600px] object-contain drop-shadow-2xl"
                />
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-12 lg:px-24">
                <div className="w-full max-w-[440px]">
                    <h2 className="text-[32px] font-semibold text-[#151515] mb-8 text-center">
                        {step === 'mobile' ? 'Welcome Back' : 'Enter OTP'}
                    </h2>

                    {step === 'mobile' ? (
                        <form onSubmit={handleMobileSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <input
                                    type="tel"
                                    placeholder="Mobile No."
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className="w-full h-[52px] px-4 rounded-[8px] border border-[#E5E5E5] text-[16px] text-[#151515] placeholder:text-[#949494] focus:outline-none focus:border-[#151515] transition-colors"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full h-[52px] bg-[#525252] text-white text-[16px] font-medium rounded-[8px] hover:bg-[#333] transition-colors"
                            >
                                Sign In
                            </button>

                            <div className="flex items-center gap-4 my-2">
                                <div className="h-[1px] bg-[#E5E5E5] flex-1"></div>
                                <span className="text-[14px] text-[#525252]">Or Continue with</span>
                                <div className="h-[1px] bg-[#E5E5E5] flex-1"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button type="button" className="h-[52px] border border-[#E5E5E5] rounded-[8px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                                    <span className="text-[16px] text-[#525252]">Google</span>
                                </button>
                                <button type="button" className="h-[52px] border border-[#E5E5E5] rounded-[8px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                                    <span className="text-[16px] text-[#525252]">Facebook</span>
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleOtpSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter 4-digit OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)} // Allow only numbers in real app
                                    maxLength={4}
                                    className="w-full h-[52px] px-4 rounded-[8px] border border-[#E5E5E5] text-[16px] text-[#151515] placeholder:text-[#949494] focus:outline-none focus:border-[#151515] transition-colors text-center tracking-[0.5em]"
                                    autoFocus
                                    required
                                />
                                <p className="text-sm text-[#949494] text-center">
                                    OTP sent to {mobile} <button type="button" onClick={() => setStep('mobile')} className="text-[#151515] font-medium underline">Edit</button>
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full h-[52px] bg-[#525252] text-white text-[16px] font-medium rounded-[8px] hover:bg-[#333] transition-colors"
                            >
                                Verify & Sign In
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
