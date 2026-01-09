import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { User, CreditCard, FileText, MapPin, Check } from 'lucide-react';
import { FloatingLabelInput } from '../ui/FloatingLabelInput';
import { FloatingLabelSelect } from '../ui/FloatingLabelSelect';
import type { Store } from '../store/StoreCard';

interface CustomerDetailsProps {
    store: Store | null;
}

export function CustomerDetails({ store }: CustomerDetailsProps) {
    if (!store) return null;

    const navigate = useNavigate();
    const { id } = useParams();
    const [activeStep, setActiveStep] = React.useState<1 | 2 | 3>(1);
    const [otp, setOtp] = React.useState(['', '', '', '']);
    const [showOtp, setShowOtp] = React.useState(false);

    const handlePayNow = () => {
        if (!agreeToTerms) {
            alert("Please agree to the terms and conditions");
            return;
        }
        navigate(`/thank-you/${id}`);
    };
    const [fullName, setFullName] = React.useState('John Doe'); // Default for demo/testing
    const [mobileNumber, setMobileNumber] = React.useState('');

    // Billing State
    const [companyName, setCompanyName] = React.useState('Avenue Star');
    const [address1, setAddress1] = React.useState('2315 - Avenue Building');
    const [address2, setAddress2] = React.useState('Sector Street');
    const [country, setCountry] = React.useState('India');
    const [state, setState] = React.useState('Gujarat');
    const [city, setCity] = React.useState('Ahmedabad');
    const [pincode, setPincode] = React.useState('395009');
    const [gstNo, setGstNo] = React.useState('262655616511516351');
    const [notes, setNotes] = React.useState('');
    const [saveInfo, setSaveInfo] = React.useState(true);

    // Payment State
    const [paymentMethod, setPaymentMethod] = React.useState<'pinelabs' | 'payu'>('pinelabs');
    const [agreeToTerms, setAgreeToTerms] = React.useState(false);

    const otpInputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) value = value[0];
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            otpInputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            otpInputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerifyOtp = () => {
        // Here you would typically verify the OTP with the backend
        setActiveStep(2);
        setShowOtp(false); // Reset OTP view or keep it hidden in "done" state
    };

    const handleBillingSubmit = () => {
        if (!address1 || !country || !state || !city || !pincode) return; // Basic validation
        setActiveStep(3);
    };

    // Summary View for Step 1
    const renderStep1Summary = () => (
        <div className="flex flex-col gap-[18px] w-full animate-in fade-in slide-in-from-top-2">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-[7px]">
                    <div className="relative shrink-0 size-[18px] bg-[#151515] rounded-full flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className="text-[#151515] text-[16px] font-display">Your information</p>
                </div>
                <button onClick={() => setActiveStep(1)} className="text-[14px] font-medium text-[#525252] font-display underline hover:text-[#151515]">
                    Edit
                </button>
            </div>

            <div className="flex gap-[24px] w-full">
                <div className="flex flex-col gap-[8px] flex-1">
                    <p className="text-[#525252] text-[12px] font-display">Full Name</p>
                    <p className="text-[#151515] text-[16px] font-display font-medium">{fullName}</p>
                </div>
                <div className="flex flex-col gap-[8px] flex-1">
                    <p className="text-[#525252] text-[12px] font-display">Mobile No.*</p>
                    <p className="text-[#151515] text-[16px] font-display font-medium">{mobileNumber}</p>
                </div>
            </div>
        </div>
    );

    // Summary View for Step 2
    const renderStep2Summary = () => (
        <div className="flex flex-col gap-[18px] w-full animate-in fade-in slide-in-from-top-2">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-[7px]">
                    <div className="relative shrink-0 size-[18px] bg-[#151515] rounded-full flex items-center justify-center">
                        <Check className="w-[10px] h-[8px] text-white" />
                    </div>
                    <p className="text-[#151515] text-[16px] font-display">Billing Information</p>
                </div>
                <button onClick={() => setActiveStep(2)} className="text-[14px] font-medium text-[#525252] font-display underline hover:text-[#151515]">
                    Edit
                </button>
            </div>

            <div className="grid grid-cols-4 gap-y-6 gap-x-4 w-full">
                {/* Row 1: Company Name (2 cols) & GST No (2 cols) */}
                <div className="col-span-2 flex flex-col gap-[8px]">
                    <p className="text-[#525252] text-[12px] font-display">Company Name (Optional)</p>
                    <p className="text-[#151515] text-[16px] font-display font-medium break-words">{companyName || '-'}</p>
                </div>
                <div className="col-span-2 flex flex-col gap-[8px]">
                    <p className="text-[#525252] text-[12px] font-display">GST No*</p>
                    <p className="text-[#151515] text-[16px] font-display font-medium break-words">{gstNo}</p>
                </div>

                {/* Row 2: Address line 1 (4 cols) */}
                <div className="col-span-4 flex flex-col gap-[8px]">
                    <p className="text-[#525252] text-[12px] font-display">Address line 1*</p>
                    <p className="text-[#151515] text-[16px] font-display font-medium break-words">{address1}</p>
                </div>

                {/* Row 3: Address line 2 (4 cols) */}
                <div className="col-span-4 flex flex-col gap-[8px]">
                    <p className="text-[#525252] text-[12px] font-display">Address line 2 (Optional)</p>
                    <p className="text-[#151515] text-[16px] font-display font-medium break-words">{address2 || '-'}</p>
                </div>

                {/* Row 4: Country, State, City, Pincode (1 col each) */}
                <div className="col-span-1 flex flex-col gap-[8px]">
                    <p className="text-[#525252] text-[12px] font-display">Country Region*</p>
                    <p className="text-[#151515] text-[16px] font-display font-medium">{country}</p>
                </div>
                <div className="col-span-1 flex flex-col gap-[8px]">
                    <p className="text-[#525252] text-[12px] font-display">State</p>
                    <p className="text-[#151515] text-[16px] font-display font-medium">{state}</p>
                </div>
                <div className="col-span-1 flex flex-col gap-[8px]">
                    <p className="text-[#525252] text-[12px] font-display">Town / City</p>
                    <p className="text-[#151515] text-[16px] font-display font-medium">{city}</p>
                </div>
                <div className="col-span-1 flex flex-col gap-[8px]">
                    <p className="text-[#525252] text-[12px] font-display">Pin Code</p>
                    <p className="text-[#151515] text-[16px] font-display font-medium">{pincode}</p>
                </div>
            </div>
        </div>
    );

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

            {/* Step 1: Mobile Number */}
            <div className={`
                bg-white rounded-[18px] transition-all duration-300
                ${activeStep === 1 ? 'p-6 border border-gray-100 shadow-sm' : 'p-[18px] border border-transparent'}
            `}>
                {activeStep > 1 ? (
                    renderStep1Summary()
                ) : (
                    <>
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

                        <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                            <FloatingLabelInput
                                label="Full Name"
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <FloatingLabelInput
                                label="Mobile No.*"
                                type="tel"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />

                            {!showOtp ? (
                                <button
                                    onClick={() => setShowOtp(true)}
                                    className="w-full h-[52px] bg-[#151515] text-white rounded-[12px] text-[16px] font-medium hover:bg-[#525252] transition-colors font-display mt-2"
                                >
                                    Verify Your Mobile No.
                                </button>
                            ) : (
                                <div className="max-w-[280px] space-y-6 mt-6 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <p className="text-[14px] text-[rgba(21,21,21,0.6)] font-display">
                                        Please enter OTP to verify your mobile number
                                    </p>
                                    <div className="flex gap-3">
                                        {otp.map((digit, index) => (
                                            <div
                                                key={index}
                                                className="h-[58px] flex-1 border border-[rgba(21,21,21,0.24)] rounded-[12px] flex items-center justify-center overflow-hidden bg-white"
                                            >
                                                <input
                                                    ref={el => { otpInputRefs.current[index] = el; }}
                                                    type="text"
                                                    value={digit}
                                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                                    className="w-full h-full text-center text-[16px] text-[#151515] outline-none font-display bg-transparent"
                                                    maxLength={1}
                                                    inputMode="numeric"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={handleVerifyOtp}
                                        className="w-full h-[52px] bg-[#151515] text-white rounded-[12px] text-[16px] font-medium hover:bg-[#525252] transition-colors font-display mt-2"
                                    >
                                        Verify OTP
                                    </button>
                                    <p className="text-[14px] text-[rgba(21,21,21,0.6)] font-display">
                                        Didn't got OTP? <span className="font-bold text-[#525252] cursor-pointer hover:underline">Resend again</span>
                                    </p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>

            {/* Step 2: Billing Details */}
            <div className={`
                bg-white rounded-[18px] border transition-all duration-300
                ${activeStep === 2 ? 'p-6 border-gray-100 shadow-sm' : 'p-[18px] border-gray-100'}
            `}>
                {activeStep <= 2 && (
                    <div className={`flex justify-between items-center ${activeStep === 2 ? 'mb-6' : ''}`}>
                        <div className="flex items-center gap-3">
                            <div className="w-[18px] h-[18px] flex items-center justify-center">
                                <FileText className={`w-full h-full ${activeStep === 2 ? 'text-[#151515]' : 'text-gray-400'}`} />
                            </div>
                            <h2 className={`text-[16px] font-medium font-display ${activeStep === 2 ? 'text-[#151515]' : 'text-gray-400'}`}>
                                Billing Information
                            </h2>
                        </div>
                    </div>
                )}

                {activeStep > 2 ? (
                    renderStep2Summary()
                ) : activeStep === 2 ? (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                        <FloatingLabelInput
                            label="Company Name (Optional)"
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                        <FloatingLabelInput
                            label="Address line 1*"
                            type="text"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                        />
                        <FloatingLabelInput
                            label="Address line 2 (Optional)"
                            type="text"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                        />

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <FloatingLabelSelect
                                    label="Country Check*"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    options={[
                                        { value: 'India', label: 'India' },
                                        { value: 'USA', label: 'USA' },
                                        { value: 'UK', label: 'UK' },
                                    ]}
                                />
                            </div>
                            <div className="flex-1">
                                <FloatingLabelInput
                                    label="State"
                                    type="text"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <FloatingLabelInput
                                    label="Town / City"
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="flex-1">
                                <FloatingLabelInput
                                    label="Pin Code"
                                    type="text"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                />
                            </div>
                        </div>

                        <FloatingLabelInput
                            label="GST No."
                            type="text"
                            value={gstNo}
                            onChange={(e) => setGstNo(e.target.value)}
                        />
                        <FloatingLabelInput
                            label="Additional Notes (Optional)"
                            type="text"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />

                        <div className="flex items-center gap-3 py-2 cursor-pointer" onClick={() => setSaveInfo(!saveInfo)}>
                            <div className={`w-[22px] h-[22px] rounded-[6px] flex items-center justify-center transition-colors ${saveInfo ? 'bg-[#525252]' : 'border border-gray-300'}`}>
                                {saveInfo && <Check className="w-3.5 h-3.5 text-white" />}
                            </div>
                            <span className="text-[16px] text-gray-500 font-display">Save information</span>
                        </div>

                        <button
                            onClick={handleBillingSubmit}
                            className="w-full h-[52px] bg-[#525252] text-white rounded-[8px] text-[16px] font-medium hover:bg-[#151515] transition-colors font-display mt-2"
                        >
                            Next
                        </button>
                    </div>
                ) : null}
            </div>

            {/* Step 3: Payment */}
            <div className={`
                bg-white rounded-[18px] border transition-all duration-300
                ${activeStep === 3 ? 'p-6 border-gray-100 shadow-sm' : 'p-[18px] border-gray-100'}
            `}>
                <div className="flex items-center gap-3">
                    <div className="w-[18px] h-[18px] flex items-center justify-center">
                        <CreditCard className={`w-full h-full ${activeStep === 3 ? 'text-[#151515]' : 'text-gray-400'}`} />
                    </div>
                    <h2 className={`text-[16px] font-medium font-display ${activeStep === 3 ? 'text-[#151515]' : 'text-gray-400'}`}>
                        Payment
                    </h2>
                </div>
                {activeStep === 3 && (
                    <div className="mt-6 animate-in fade-in slide-in-from-top-2 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* PineLabs Option */}
                            <div
                                className={`
                                    relative p-4 rounded-[12px] border-2 cursor-pointer transition-all
                                    ${paymentMethod === 'pinelabs' ? 'border-[#151515] bg-white' : 'border-gray-100 bg-[#F5F5F5]'}
                                `}
                                onClick={() => setPaymentMethod('pinelabs')}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-display font-medium text-[16px] text-[#151515]">PineLabs</span>
                                    {/* Plural Logo Mock */}
                                    <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>
                                    <span className="font-display text-[#00A0E3] font-medium">plural</span>
                                    <span className="bg-[#525252] text-white text-[10px] px-2 py-0.5 rounded ml-auto">For Cashbacks</span>
                                </div>
                                <p className="text-[12px] text-gray-500 font-display">
                                    Pay securely via Edge – Payment Gateway by Pine Labs.
                                </p>
                            </div>

                            {/* PayUBiz Option */}
                            <div
                                className={`
                                    relative p-4 rounded-[12px] border-2 cursor-pointer transition-all
                                    ${paymentMethod === 'payu' ? 'border-[#151515] bg-white' : 'border-gray-100 bg-[#F5F5F5]'}
                                `}
                                onClick={() => setPaymentMethod('payu')}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-display font-medium text-[16px] text-[#151515]">PayUBiz</span>
                                    {/* PayU Logo Mock */}
                                    <span className="font-display text-[#A4C639] font-bold">PayU</span>
                                    <div className="flex gap-1 ml-auto opacity-60">
                                        <div className="w-6 h-4 bg-gray-200 rounded"></div>
                                        <div className="w-6 h-4 bg-gray-200 rounded"></div>
                                        <div className="w-6 h-4 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                                <p className="text-[12px] text-gray-500 font-display">
                                    Pay securely by Credit or Debit card or net banking
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setAgreeToTerms(!agreeToTerms)}>
                            <div className={`w-[22px] h-[22px] rounded-[6px] flex items-center justify-center transition-colors shrink-0 ${agreeToTerms ? 'bg-[#525252]' : 'border border-gray-300'}`}>
                                {agreeToTerms && <Check className="w-3.5 h-3.5 text-white" />}
                            </div>
                            <p className="text-[14px] text-gray-500 font-display">
                                I have read and agree to the website <span className="font-bold text-[#525252]">terms and conditions*</span>
                            </p>
                        </div>

                        <button
                            onClick={handlePayNow}
                            className={`w-full h-[52px] rounded-[8px] text-[16px] font-medium transition-colors font-display ${agreeToTerms ? 'bg-[#151515] text-white hover:bg-[#525252]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                        >
                            Pay Now
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
