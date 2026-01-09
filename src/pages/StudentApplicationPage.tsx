import { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { StudentApplicationStepper } from '../components/StudentApplicationStepper';
import { StudentProductCard } from '../components/StudentProductCard';
import { ChevronDown, Upload, FileText, Check } from 'lucide-react';

// Import assets (reusing imports from StudentOfferPage)
import IPadProductImg from '../assets/student-offer/ipad-product-image.png';
import IPadProductImg1 from '../assets/student-offer/ipad-product-image-1.png';
import IPadProductImg2 from '../assets/student-offer/ipad-product-image-2.png';
import IPadProductImg3 from '../assets/student-offer/ipad-product-image-3.png';
import MacProductImg from '../assets/student-offer/mac-product-image.png';
import MacProductImg1 from '../assets/student-offer/mac-product-image-1.png';
import MacProductImg2 from '../assets/student-offer/mac-product-image-2.png';
import MacProductImg3 from '../assets/student-offer/mac-product-image-3.png';

const PRODUCT_DATA = {
    ipad: [
        {
            id: 'ipad-pro',
            name: 'iPad Pro',
            products: [
                { id: 'ipad-pro-11', name: 'iPad Pro 11" M4', img: IPadProductImg, price: '₹89,900', effectivePrice: '₹74,900', cashback: '₹5,000', discount: '- 11%', description: 'The ultimate iPad experience with M4 chip.' },
                { id: 'ipad-pro-13', name: 'iPad Pro 13" M4', img: IPadProductImg, price: '₹1,29,900', effectivePrice: '₹1,09,900', cashback: '₹10,000', discount: '- 11%', description: 'The ultimate iPad experience with M4 chip.' },
            ]
        },
        {
            id: 'ipad-air',
            name: 'iPad Air',
            products: [
                { id: 'ipad-air-11', name: 'iPad Air 11" M4', img: IPadProductImg1, price: '₹59,900', effectivePrice: '₹49,900', cashback: '₹4,000', discount: '- 11%', description: 'Supercharged by Apple M2 chip.' }
            ]
        },
        {
            id: 'ipad-base',
            name: 'iPad',
            products: [
                { id: 'ipad-10', name: 'iPad 10th Gen', img: IPadProductImg2, price: '₹45,900', effectivePrice: '₹37,900', cashback: '₹3,000', discount: '- 11%', description: 'Colorfully redesigned and more capable.' }
            ]
        },
        {
            id: 'ipad-mini',
            name: 'iPad mini',
            products: [
                { id: 'ipad-mini-6', name: 'iPad mini 6', img: IPadProductImg3, price: '₹49,900', effectivePrice: '₹41,900', cashback: '₹3,000', discount: '- 11%', description: 'Mega power in a mini size.' }
            ]
        }
    ],
    mac: [
        {
            id: 'macbook-air',
            name: 'Macbook Air',
            products: [
                { id: 'mba-13-m4-1', name: 'Macbook Air 13" M4', img: MacProductImg1, price: '₹99,900', effectivePrice: '₹76,913', cashback: '₹10,000', discount: '- 11%', description: 'Strikingly thin and fast for everything you do.' },
                { id: 'mba-13-m4-2', name: 'Macbook Air 13" M4', img: MacProductImg1, price: '₹99,900', effectivePrice: '₹78,910', cashback: '₹10,000', discount: '- 11%', description: 'Strikingly thin and fast for everything you do.' },
                { id: 'mba-15-m4', name: 'Macbook Air 15" M4', img: MacProductImg, price: '₹1,24,900', effectivePrice: '₹1,01,160', cashback: '₹5,000', discount: '- 11%', description: 'Strikingly thin and fast for everything you do.' },
            ]
        },
        {
            id: 'macbook-pro',
            name: 'Macbook Pro',
            products: [
                { id: 'mbp-14-m4', name: 'Macbook Pro 14" M4', img: MacProductImg, price: '₹1,69,900', effectivePrice: '₹1,44,900', cashback: '₹10,000', discount: '- 11%', description: 'Most advanced chips for personal computer.' }
            ]
        },
        {
            id: 'imac',
            name: 'iMac',
            products: [
                { id: 'imac-24-m3', name: 'iMac 24" M3', img: MacProductImg2, price: '₹1,29,900', effectivePrice: '₹1,11,900', cashback: '₹8,000', discount: '- 11%', description: 'Inspired by the best of Apple.' }
            ]
        },
        {
            id: 'mac-mini',
            name: 'Mac Mini',
            products: [
                { id: 'mac-mini-m4', name: 'Mac Mini M4', img: MacProductImg3, price: '₹59,900', effectivePrice: '₹50,500', cashback: '₹4,000', discount: '- 9%', description: 'More muscle, more hustle.' }
            ]
        }
    ]
};

const VARIANT_OPTIONS = {
    colors: ['Space Gray', 'Silver', 'Midnight', 'Starlight'],
    storage: ['256GB', '512GB', '1TB', '2TB']
};

export function StudentApplicationPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [productType, setProductType] = useState<'mac' | 'ipad' | ''>('');
    const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedStorage, setSelectedStorage] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [step2SubStep, setStep2SubStep] = useState<'MOBILE' | 'OTP' | 'FORM'>('MOBILE');
    const [otpCode, setOtpCode] = useState(['', '', '', '']); // 4-digit OTP as per common pattern, or 6? Let's use 4 for now or check design. DESIGN shows 1 line in screenshot 1, but usually 4 or 6. Let's use 6 for better security feel.
    const [enrollmentData, setEnrollmentData] = useState({
        instituteName: '',
        pincode: '',
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India',
        address: '',
        firstName: '',
        lastName: '',
        email: ''
    });
    const [uploadedFiles, setUploadedFiles] = useState<{ form: File | null; idProof: File | null }>({
        form: null,
        idProof: null
    });

    const currentModel = productType && selectedModelId
        ? PRODUCT_DATA[productType].find(m => m.id === selectedModelId)
        : null;

    const currentProduct = currentModel && selectedProductId
        ? currentModel.products.find(p => p.id === selectedProductId)
        : null;

    const isNextAvailable = productType && selectedProductId && selectedColor && selectedStorage;

    return (
        <div className="min-h-screen bg-[#FBFBFD] pb-20">
            {currentStep < 4 && (
                <Breadcrumb items={[
                    { label: 'Home', path: '/' },
                    { label: 'Student Offers', path: '/student-offers' },
                    { label: 'Application', path: currentStep > 1 ? undefined : undefined }, // Active state handled by Breadcrumb component usually
                    ...(currentStep === 2 ? [{ label: 'Register enrolment' }] : [])
                ]} />
            )}

            <div className={`container mx-auto px-6 ${currentStep === 4 ? 'pt-20' : 'pt-4'}`}>
                {currentStep < 4 && <StudentApplicationStepper currentStep={currentStep} />}

                <div className="mt-8 w-full mx-auto flex flex-col items-center gap-6">
                    {currentStep === 1 && (
                        <>
                            <h1 className="text-[36px] font-semibold text-[#151515] text-center tracking-tight leading-[48px] font-display">
                                Select product
                            </h1>

                            {/* Step 1.1: Product Type Selection - Figma Redesign */}
                            <div className="relative w-full max-w-[368px]">
                                <div className="group relative w-full h-[58px] border border-[#151515] rounded-[12px] p-[12px] flex items-center justify-between bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-[#525252] leading-none mb-1 font-sans">Category</span>
                                        <span className="text-[14px] text-[#151515] font-sans font-medium">
                                            {productType ? (productType === 'mac' ? 'Mac' : 'iPad') : 'Select Category'}
                                        </span>
                                    </div>
                                    <ChevronDown className="w-[18px] h-[18px] text-[#525252] group-focus-within:rotate-180 transition-transform duration-300" />

                                    {/* Invisible select covering the box */}
                                    <select
                                        value={productType}
                                        onChange={(e) => {
                                            setProductType(e.target.value as any);
                                            setSelectedModelId(null);
                                            setSelectedProductId(null);
                                            setSelectedColor('');
                                            setSelectedStorage('');
                                        }}
                                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                        aria-label="Select Category"
                                    >
                                        <option value="" disabled>Select</option>
                                        <option value="mac">Mac</option>
                                        <option value="ipad">iPad</option>
                                    </select>
                                </div>
                            </div>

                            {/* Step 1.2: Model Selection & Navigation Arrows */}
                            {productType && (
                                <div className="w-full flex items-center justify-center mt-2 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <div className="flex flex-wrap justify-center gap-[8px]">
                                        {PRODUCT_DATA[productType].map((model) => (
                                            <button
                                                key={model.id}
                                                onClick={() => {
                                                    setSelectedModelId(model.id);
                                                    setSelectedProductId(null);
                                                    setSelectedColor('');
                                                    setSelectedStorage('');
                                                }}
                                                className={`
                                            px-[24px] py-[10px] rounded-[8px] border-[1.2px] text-[14px] leading-tight font-sans transition-all duration-300
                                            ${selectedModelId === model.id
                                                        ? 'border-[#151515] text-[#151515] bg-white shadow-sm font-medium'
                                                        : 'bg-white border-[#f0f0f0] text-[#525252] hover:border-gray-200'}
                                        `}
                                            >
                                                {model.name}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Navigation Arrows */}
                                    {/* <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                                    <span className="text-gray-400 text-lg">←</span>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                                    <span className="text-gray-400 text-lg">→</span>
                                </button>
                            </div> */}
                                </div>
                            )}

                            {/* Step 1.3: Product Slider/Grid */}
                            {productType && selectedModelId && currentModel && (
                                <div className="w-full mt-6 overflow-x-auto pb-4 hide-scrollbar">
                                    <div className="flex gap-6 justify-center w-full">
                                        {currentModel.products.map((product) => (
                                            <div key={product.id} className="w-[305px]">
                                                <StudentProductCard
                                                    title={product.name}
                                                    price={product.price}
                                                    effectivePrice={product.effectivePrice}
                                                    image={product.img}
                                                    cashbackAmount={product.cashback}
                                                    educationDiscount={product.discount}
                                                    description={product.description}
                                                    onClick={() => {
                                                        setSelectedProductId(product.id);
                                                        setSelectedColor('');
                                                        setSelectedStorage('');
                                                    }}
                                                    isSelected={selectedProductId === product.id}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 1.4: Refined Variant Bar - Positioned under products, not sticky */}
                            {selectedProductId && currentProduct && (
                                <div className="max-w-4xl bg-transparent py-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <div className="flex flex-wrap items-center gap-4">
                                        {/* Configuration Summary Text */}
                                        <div className="text-[16px] text-[#525252] font-sans whitespace-nowrap mr-2">
                                            10-core CPU and 8-core GPU
                                        </div>

                                        {/* Variant Selectors */}
                                        <div className="flex flex-1 flex-wrap items-center gap-3">
                                            {/* Memory Selector */}
                                            <div className="relative group flex-1 min-w-[140px]">
                                                <div className="h-[48px] border border-[#d2d2d7] rounded-[8px] p-[10px] flex items-center justify-between bg-[#F5F5F7] overflow-hidden">
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] text-[#86868b] leading-none mb-0.5">Memory</span>
                                                        <span className="text-[14px] text-[#151515] font-medium leading-none">24 GB</span>
                                                    </div>
                                                    <ChevronDown className="w-4 h-4 text-[#86868b]" />
                                                    <select
                                                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                                        defaultValue="24"
                                                    >
                                                        <option value="24">24 GB</option>
                                                        <option value="32">32 GB</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Storage Selector */}
                                            <div className="relative group flex-1 min-w-[140px]">
                                                <div className="h-[48px] border border-[#d2d2d7] rounded-[8px] p-[10px] flex items-center justify-between bg-[#F5F5F7] overflow-hidden">
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] text-[#86868b] leading-none mb-0.5">Storage</span>
                                                        <span className="text-[14px] text-[#151515] font-medium leading-none">{selectedStorage || '512 GB'}</span>
                                                    </div>
                                                    <ChevronDown className="w-4 h-4 text-[#86868b]" />
                                                    <select
                                                        value={selectedStorage}
                                                        onChange={(e) => setSelectedStorage(e.target.value)}
                                                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                                    >
                                                        <option value="" disabled>Select Storage</option>
                                                        <option value="512GB">512 GB</option>
                                                        <option value="1TB">1 TB</option>
                                                        <option value="2TB">2 TB</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Color Selector */}
                                            <div className="relative group flex-1 min-w-[140px]">
                                                <div className="h-[48px] border border-[#d2d2d7] rounded-[8px] p-[10px] flex items-center justify-between bg-[#F5F5F7] overflow-hidden">
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] text-[#86868b] leading-none mb-0.5">Color</span>
                                                        <span className="text-[14px] text-[#151515] font-medium leading-none">{selectedColor || 'Silver'}</span>
                                                    </div>
                                                    <ChevronDown className="w-4 h-4 text-[#86868b]" />
                                                    <select
                                                        value={selectedColor}
                                                        onChange={(e) => setSelectedColor(e.target.value)}
                                                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                                    >
                                                        <option value="" disabled>Select Color</option>
                                                        {VARIANT_OPTIONS.colors.map(c => <option key={c} value={c}>{c}</option>)}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Continue Button */}
                                            <button
                                                onClick={() => setCurrentStep(2)}
                                                disabled={!isNextAvailable && !selectedColor && !selectedStorage}
                                                className={`
                                            min-w-[160px] h-[48px] rounded-[8px] font-medium text-[16px] transition-all duration-300 ml-auto font-sans
                                            ${(isNextAvailable || (selectedColor || selectedStorage))
                                                        ? 'bg-[#525252] text-white hover:bg-[#333]'
                                                        : 'bg-[#eeeeee] text-[#86868b] cursor-not-allowed'}
                                        `}
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {currentStep === 2 && (
                        <div className={`w-full ${step2SubStep === 'FORM' ? 'max-w-[840px]' : 'max-w-[424px]'} mx-auto animate-in fade-in slide-in-from-right-8 duration-500`}>
                            <h2 className="text-[36px] font-semibold text-[#151515] text-center tracking-tight leading-[48px] mb-8 font-display">
                                Register & Enrolment
                            </h2>

                            {step2SubStep === 'MOBILE' && (
                                <div className="max-w-[424px] mx-auto bg-white rounded-[20px] p-8 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] border border-[#EDEDED]">
                                    <h3 className="text-[24px] font-semibold text-[#151515] mb-6 font-display">
                                        Enter your mobile no.
                                    </h3>

                                    <div className="flex flex-col gap-6">
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                placeholder="Mobile No."
                                                value={mobileNumber}
                                                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                                                className="w-full h-[52px] px-4 rounded-[12px] border border-[#EDEDED] focus:border-[#151515] focus:ring-1 focus:ring-[#151515] outline-none font-sans text-[16px] transition-all"
                                            />
                                        </div>

                                        <button
                                            onClick={() => setStep2SubStep('OTP')}
                                            disabled={mobileNumber.length < 10}
                                            className={`
                                                w-full h-[52px] rounded-[12px] font-sans text-[16px] font-medium transition-all duration-300
                                                ${mobileNumber.length >= 10
                                                    ? 'bg-[#525252] text-white hover:bg-[#333]'
                                                    : 'bg-[#eeeeee] text-[#86868b] cursor-not-allowed'}
                                            `}
                                        >
                                            Verify Mobile Number
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step2SubStep === 'OTP' && (
                                <div className="max-w-[424px] mx-auto bg-white rounded-[20px] p-8 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] border border-[#EDEDED]">
                                    <h3 className="text-[24px] font-semibold text-[#151515] mb-2 font-display">
                                        Verify OTP
                                    </h3>
                                    <p className="text-[14px] text-[#86868b] mb-6">
                                        Enter the 6-digit code sent to +91 {mobileNumber}
                                    </p>

                                    <div className="flex flex-col gap-6">
                                        <div className="flex justify-between gap-2">
                                            {[0, 1, 2, 3, 4, 5].map((idx) => (
                                                <input
                                                    key={idx}
                                                    type="text"
                                                    maxLength={1}
                                                    className="w-12 h-14 border border-[#EDEDED] rounded-[12px] text-center text-xl font-semibold focus:border-[#151515] focus:ring-1 focus:ring-[#151515] outline-none"
                                                    onChange={(e) => {
                                                        const val = e.target.value;
                                                        if (/^\d*$/.test(val)) {
                                                            const newOtp = [...otpCode];
                                                            newOtp[idx] = val;
                                                            setOtpCode(newOtp);
                                                            if (val && e.target.nextElementSibling) {
                                                                (e.target.nextElementSibling as HTMLInputElement).focus();
                                                            }
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => setStep2SubStep('FORM')}
                                            className="w-full h-[52px] rounded-[12px] bg-[#151515] text-white font-sans text-[16px] font-medium hover:bg-black transition-all"
                                        >
                                            Verify & Proceed
                                        </button>

                                        <button
                                            onClick={() => setStep2SubStep('MOBILE')}
                                            className="text-[14px] text-[#525252] font-medium hover:underline text-center"
                                        >
                                            Change Number
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step2SubStep === 'FORM' && (
                                <div className="w-full bg-white rounded-[20px] p-10 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] border border-[#EDEDED]">
                                    <h3 className="text-[24px] font-semibold text-[#151515] mb-8 text-center font-display">
                                        Your Information
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                                        <div className="md:col-span-2 relative group">
                                            <div className="h-[58px] border border-[#151515] rounded-[12px] p-[10px] flex flex-col justify-center bg-white">
                                                <span className="text-[10px] text-[#525252] leading-none mb-1">Institute Name*</span>
                                                <input
                                                    type="text"
                                                    className="w-full bg-transparent outline-none text-[14px] text-[#151515] font-medium"
                                                    placeholder="St. Thomas International High School"
                                                    value={enrollmentData.instituteName}
                                                    onChange={e => setEnrollmentData({ ...enrollmentData, instituteName: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <div className="h-[58px] border border-[#EDEDED] rounded-[12px] p-[10px] flex flex-col justify-center bg-white focus-within:border-[#151515]">
                                                <span className="text-[10px] text-[#525252] leading-none mb-1">Pin code*</span>
                                                <input
                                                    type="text"
                                                    className="w-full bg-transparent outline-none text-[14px] text-[#151515] font-medium"
                                                    value={enrollmentData.pincode}
                                                    onChange={e => setEnrollmentData({ ...enrollmentData, pincode: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <div className="h-[58px] border border-[#EDEDED] rounded-[12px] p-[10px] flex items-center justify-between bg-white overflow-hidden">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-[#525252] leading-none mb-1">City*</span>
                                                    <span className="text-[14px] text-[#151515] font-medium">{enrollmentData.city}</span>
                                                </div>
                                                <ChevronDown className="w-4 h-4 text-[#86868b]" />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <div className="h-[58px] border border-[#EDEDED] rounded-[12px] p-[10px] flex items-center justify-between bg-white overflow-hidden">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-[#525252] leading-none mb-1">State*</span>
                                                    <span className="text-[14px] text-[#151515] font-medium">{enrollmentData.state}</span>
                                                </div>
                                                <ChevronDown className="w-4 h-4 text-[#86868b]" />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <div className="h-[58px] border border-[#EDEDED] rounded-[12px] p-[10px] flex items-center justify-between bg-white overflow-hidden">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-[#525252] leading-none mb-1">Country*</span>
                                                    <span className="text-[14px] text-[#151515] font-medium">{enrollmentData.country}</span>
                                                </div>
                                                <ChevronDown className="w-4 h-4 text-[#86868b]" />
                                            </div>
                                        </div>

                                        <div className="md:col-span-2 relative group">
                                            <div className="h-[58px] border border-[#EDEDED] rounded-[12px] p-[10px] flex flex-col justify-center bg-white focus-within:border-[#151515]">
                                                <span className="text-[10px] text-[#525252] leading-none mb-1">Address*</span>
                                                <input
                                                    type="text"
                                                    className="w-full bg-transparent outline-none text-[14px] text-[#151515] font-medium"
                                                    placeholder="Enter your detailed address"
                                                    value={enrollmentData.address}
                                                    onChange={e => setEnrollmentData({ ...enrollmentData, address: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <div className="h-[58px] border border-[#EDEDED] rounded-[12px] p-[10px] flex flex-col justify-center bg-white focus-within:border-[#151515]">
                                                <span className="text-[10px] text-[#525252] leading-none mb-1">First Name*</span>
                                                <input
                                                    type="text"
                                                    className="w-full bg-transparent outline-none text-[14px] text-[#151515] font-medium"
                                                    value={enrollmentData.firstName}
                                                    onChange={e => setEnrollmentData({ ...enrollmentData, firstName: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <div className="h-[58px] border border-[#EDEDED] rounded-[12px] p-[10px] flex flex-col justify-center bg-white focus-within:border-[#151515]">
                                                <span className="text-[10px] text-[#525252] leading-none mb-1">Last Name*</span>
                                                <input
                                                    type="text"
                                                    className="w-full bg-transparent outline-none text-[14px] text-[#151515] font-medium"
                                                    value={enrollmentData.lastName}
                                                    onChange={e => setEnrollmentData({ ...enrollmentData, lastName: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <div className="h-[58px] border border-[#EDEDED] rounded-[12px] p-[10px] flex flex-col justify-center bg-white focus-within:border-[#151515]">
                                                <span className="text-[10px] text-[#525252] leading-none mb-1">Email*</span>
                                                <input
                                                    type="email"
                                                    className="w-full bg-transparent outline-none text-[14px] text-[#151515] font-medium"
                                                    value={enrollmentData.email}
                                                    onChange={e => setEnrollmentData({ ...enrollmentData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <div className="h-[58px] border border-[#EDEDED] rounded-[12px] p-[10px] flex flex-col justify-center bg-[#F5F5F7]">
                                                <span className="text-[10px] text-[#86868b] leading-none mb-1">Phone*</span>
                                                <span className="text-[14px] text-[#151515] font-medium opacity-60">+91 {mobileNumber}</span>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2 pt-4">
                                            <button
                                                onClick={() => setCurrentStep(3)}
                                                className="w-full h-[52px] rounded-[12px] bg-[#525252] text-white font-sans text-[16px] font-medium hover:bg-[#333] transition-all"
                                            >
                                                Complete Registration
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="w-full max-w-[840px] mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
                            <h2 className="text-[36px] font-semibold text-[#151515] text-center tracking-tight leading-[48px] mb-8 font-display">
                                Upload Document
                            </h2>

                            <div className="bg-white rounded-[20px] p-8 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] border border-[#EDEDED]">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Upload Form */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-[20px] font-medium text-[#151515] text-center font-display">
                                            Upload Form
                                        </h3>
                                        <div
                                            className={`
                                                relative border-2 border-dashed rounded-[12px] h-[165px] flex flex-col items-center justify-center p-6 transition-all cursor-pointer
                                                ${uploadedFiles.form ? 'border-green-500 bg-green-50/30' : 'border-[#151515]/20 hover:border-[#151515]/40'}
                                            `}
                                            onClick={() => document.getElementById('form-upload')?.click()}
                                        >
                                            <input
                                                id="form-upload"
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => setUploadedFiles({ ...uploadedFiles, form: e.target.files?.[0] || null })}
                                                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                                            />
                                            {uploadedFiles.form ? (
                                                <div className="flex flex-col items-center gap-2">
                                                    <FileText className="w-8 h-8 text-green-600" />
                                                    <span className="text-[14px] text-green-700 font-medium truncate max-w-full px-4">
                                                        {uploadedFiles.form.name}
                                                    </span>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setUploadedFiles({ ...uploadedFiles, form: null });
                                                        }}
                                                        className="text-[12px] text-red-500 hover:underline"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ) : (
                                                <>
                                                    <Upload className="w-6 h-6 text-[#151515]/60 mb-2" />
                                                    <p className="text-[14px] text-[#525252]/60 text-center">
                                                        Drag & Drop or <span className="text-[#525252] font-medium">Choose file</span> to upload
                                                    </p>
                                                    <p className="text-[10px] text-[#525252]/60 mt-1">
                                                        JPG, PNG, PDF & DOC only allowed
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Upload ID Proof */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-[20px] font-medium text-[#151515] text-center font-display">
                                            Upload ID Proof
                                        </h3>
                                        <div
                                            className={`
                                                relative border-2 border-dashed rounded-[12px] h-[165px] flex flex-col items-center justify-center p-6 transition-all cursor-pointer
                                                ${uploadedFiles.idProof ? 'border-green-500 bg-green-50/30' : 'border-[#151515]/20 hover:border-[#151515]/40'}
                                            `}
                                            onClick={() => document.getElementById('id-upload')?.click()}
                                        >
                                            <input
                                                id="id-upload"
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => setUploadedFiles({ ...uploadedFiles, idProof: e.target.files?.[0] || null })}
                                                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                                            />
                                            {uploadedFiles.idProof ? (
                                                <div className="flex flex-col items-center gap-2">
                                                    <FileText className="w-8 h-8 text-green-600" />
                                                    <span className="text-[14px] text-green-700 font-medium truncate max-w-full px-4">
                                                        {uploadedFiles.idProof.name}
                                                    </span>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setUploadedFiles({ ...uploadedFiles, idProof: null });
                                                        }}
                                                        className="text-[12px] text-red-500 hover:underline"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ) : (
                                                <>
                                                    <Upload className="w-6 h-6 text-[#151515]/60 mb-2" />
                                                    <p className="text-[14px] text-[#525252]/60 text-center">
                                                        Drag & Drop or <span className="text-[#525252] font-medium">Choose file</span> to upload
                                                    </p>
                                                    <p className="text-[10px] text-[#525252]/60 mt-1">
                                                        JPG, PNG, PDF & DOC only allowed
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 max-w-[400px] mx-auto">
                                    <button
                                        onClick={() => setCurrentStep(4)}
                                        disabled={!uploadedFiles.form || !uploadedFiles.idProof}
                                        className={`
                                            w-full h-[52px] rounded-[12px] font-sans text-[16px] font-medium transition-all duration-300
                                            ${(uploadedFiles.form && uploadedFiles.idProof)
                                                ? 'bg-[#525252] text-white hover:bg-[#333]'
                                                : 'bg-[#eeeeee] text-[#86868b] cursor-not-allowed'}
                                        `}
                                    >
                                        Continue to Overview
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-700">
                            {/* Header Section */}
                            <div className="text-center mb-12">
                                <h1 className="text-[42px] font-semibold text-[#151515] tracking-tight leading-[48px] font-display mb-3">
                                    Your Application is Submitted
                                </h1>
                                <p className="text-[16px] text-[#151515] font-sans max-w-[600px] mx-auto leading-[18px]">
                                    Our team is currently reviewing your submission. This process usually takes up to 24 hours.
                                </p>
                            </div>

                            {/* Horizontal Progress Map */}
                            <div className="w-full max-w-[1000px] mb-20 relative mt-8">
                                <div className="absolute top-[18px] left-[65px] right-[65px] h-[1px] bg-[#525252]"></div>

                                <div className="flex justify-between items-start relative z-10 px-4">
                                    {[
                                        { label: 'Downloaded And', sub: 'Filled Form', completed: true },
                                        { label: 'Selected', sub: 'Mac Model', completed: true },
                                        { label: 'Registration', sub: 'Completed', completed: true },
                                        { label: 'Documents', sub: 'Uploaded', completed: true },
                                        { label: 'Verification in', sub: 'Progress', current: true },
                                        { label: 'Waitng', sub: 'For Approval', pending: true }
                                    ].map((s, i) => (
                                        <div key={i} className="flex flex-col items-center w-[130px]">
                                            <div className={`
                                                w-9 h-9 rounded-full flex items-center justify-center border-2 mb-3 bg-white transition-all duration-500
                                                ${s.completed || s.current ? 'border-[#525252]' : 'border-[#525252]/20'}
                                            `}>
                                                {s.completed && <Check className="w-5 h-5 text-[#525252]" />}
                                                {s.current && (
                                                    <div className="relative w-5 h-5 flex items-center justify-center">
                                                        {[0, 1, 2, 3, 4, 5, 6, 7].map(j => (
                                                            <div
                                                                key={j}
                                                                className="absolute w-[2px] h-[4px] bg-[#525252] rounded-full"
                                                                style={{
                                                                    transformOrigin: '50% 10px',
                                                                    transform: `rotate(${j * 45}deg) translateY(-8px)`
                                                                }}
                                                            ></div>
                                                        ))}
                                                    </div>
                                                )}
                                                {s.pending && <div className="w-2.5 h-2.5 rounded-full bg-[#525252]/20"></div>}
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[12px] text-[#151515] font-medium font-sans leading-[1.2]">{s.label}</p>
                                                <p className="text-[12px] text-[#151515] font-medium font-sans leading-[1.2]">{s.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Info Text */}
                            <div className="text-center mb-12">
                                <p className="text-[32px] text-[#525252] font-display font-medium tracking-tight mb-2">
                                    No action required from your side.
                                </p>
                                <p className="text-[32px] text-[#525252] font-display font-medium tracking-tight">
                                    You'll be notified once verified Till then
                                </p>
                            </div>

                            {/* Navigation */}
                            <a
                                href="/"
                                className="inline-flex items-center justify-center bg-[#525252] text-white h-[52px] min-w-[160px] px-8 rounded-[8px] font-sans text-[16px] font-medium hover:bg-[#333] transition-all"
                            >
                                Back To Home
                            </a>
                        </div>
                    )}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </div>
    );
}
