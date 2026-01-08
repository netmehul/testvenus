import proText from '../assets/banner-iphone-pro-text.png';
import priceText from '../assets/banner-iphone-price.png';
import deviceStack from '../assets/banner-iphone-stack.png';
import offerCard from '../assets/banner-iphone-offer.png';

export function IPhoneBanner() {
    return (
        <div className="w-full h-full flex items-center justify-between px-8 bg-gradient-to-r from-[#FFF5E6] via-[#FFF0E5] to-[#FDEAF3] relative">
            {/* Left Column - Pro Text & Price */}
            <div className="flex flex-col items-center gap-6 z-10">
                <div className="h-[76px] w-auto">
                    <img
                        src={proText}
                        alt="iPhone 17 Pro"
                        className="h-full w-auto object-contain"
                    />
                </div>
                <div className="h-[125px] w-auto">
                    <img
                        src={priceText}
                        alt="Price ₹65,300"
                        className="h-full w-auto object-contain"
                    />
                </div>
            </div>

            {/* Center Column - Device Stack */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                    src={deviceStack}
                    alt="iPhone Colors"
                    className="h-[345px] w-auto object-contain"
                />
            </div>

            {/* Right Column - Offer Card */}
            <div className="z-10 pl-60"> {/* Added padding to push it right, allowing center image space */}
                <div className="h-[258px] w-auto shadow-sm rounded-xl overflow-hidden">
                    <img
                        src={offerCard}
                        alt="Flat ₹4,000 Off"
                        className="h-full w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
