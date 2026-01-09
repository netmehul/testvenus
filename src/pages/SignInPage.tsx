import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook } from 'lucide-react';

export function SignInPage() {
    const navigate = useNavigate();
    const [step, setStep] = useState<'mobile' | 'otp'>('mobile');
    const [mobile, setMobile] = useState('');
    const [otpCode, setOtpCode] = useState(['', '', '', '']);

    const handleMobileSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (mobile.length >= 10) {
            setStep('otp');
        }
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const fullOtp = otpCode.join('');
        if (fullOtp.length === 4) { // Dummy validation
            navigate('/account');
        }
    };

    const handleOtpChange = (value: string, index: number) => {
        if (/^\d*$/.test(value)) {
            const newOtp = [...otpCode];
            newOtp[index] = value.slice(-1);
            setOtpCode(newOtp);

            if (value && index < 3) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                nextInput?.focus();
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === 'Backspace' && !otpCode[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
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
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-center gap-4">
                                    {otpCode.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            id={`otp-${idx}`}
                                            type="text"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleOtpChange(e.target.value, idx)}
                                            onKeyDown={(e) => handleKeyDown(e, idx)}
                                            className="w-[64px] h-[64px] text-[24px] font-semibold text-[#151515] text-center rounded-[12px] border border-[#E5E5E5] focus:border-[#151515] focus:ring-1 focus:ring-[#151515] outline-none transition-all shadow-sm"
                                            autoFocus={idx === 0}
                                            required
                                        />
                                    ))}
                                </div>
                                <p className="text-sm text-[#949494] text-center">
                                    OTP sent to {mobile} <button type="button" onClick={() => setStep('mobile')} className="text-[#151515] font-medium underline hover:text-black">Edit</button>
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={otpCode.some(d => !d)}
                                className={`w-full h-[52px] text-[16px] font-medium rounded-[8px] transition-all
                                    ${otpCode.every(d => d)
                                        ? 'bg-[#525252] text-white hover:bg-[#333]'
                                        : 'bg-[#eeeeee] text-[#949494] cursor-not-allowed'}
                                `}
                            >
                                Verify & Sign In
                            </button>

                            <button type="button" className="text-[14px] text-[#525252] font-medium hover:underline text-center">
                                Resend OTP in 0:45
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
