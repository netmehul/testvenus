import deviceImg from '../assets/banner-macbook-device.png';
import topText from '../assets/banner-macbook-text-top.png';
import bottomText from '../assets/banner-macbook-text-bottom.png';

export function MacBookBanner() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-black relative p-6 gap-8">
            {/* Left Side - Device Image */}
            <div className="flex-1 flex items-center justify-end h-full">
                <img
                    src={deviceImg}
                    alt="MacBook Pro"
                    className="h-auto w-auto max-h-[280px] object-contain"
                />
            </div>

            {/* Right Side - Text & Offers */}
            <div className="flex-1 flex flex-col items-start justify-center gap-6 h-full pt-4">
                {/* Top Text Group */}
                <div className="relative z-10 shrink-0">
                    <img
                        src={topText}
                        alt="MacBook Pro - Supercharged by M5"
                        className="h-auto w-auto max-h-[120px] object-contain"
                    />
                </div>

                {/* Bottom Offers */}
                <div className="relative z-10 shrink-0">
                    <img
                        src={bottomText}
                        alt="Current offers and bank partners"
                        className="h-auto w-auto max-h-[100px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
