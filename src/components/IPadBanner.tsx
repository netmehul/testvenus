import topText from '../assets/banner-text-top.png';
import deviceImg from '../assets/banner-ipad-device.png';
import bottomText from '../assets/banner-text-bottom.png';

export function IPadBanner() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black relative p-4">
            {/* Top Text Group */}
            <div className="mb-2 relative z-10 shrink-0">
                <img
                    src={topText}
                    alt="iPad Pro - Advanced AI performance"
                    className="h-auto w-auto max-h-[88px] object-contain"
                />
            </div>

            {/* Device Image */}
            <div className="relative z-0 -my-2 transform scale-100 origin-center shrink-0">
                <img
                    src={deviceImg}
                    alt="iPad Pro Device"
                    className="h-auto w-auto max-h-[130px] object-contain"
                />
            </div>

            {/* Bottom Text & Offers */}
            <div className="mt-2 relative z-10 shrink-0">
                <img
                    src={bottomText}
                    alt="Current offers and bank partners"
                    className="h-auto w-auto max-h-[100px] object-contain"
                />
            </div>
        </div>
    );
}
