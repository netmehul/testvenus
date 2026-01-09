import { ArrowRight } from 'lucide-react';
import ServiceCenterImg from '../assets/AssetsFromUser/homepage-image/ivenus-authorised-service-img.png';
export function ServiceCenters() {
    return (
        <section className="w-full flex justify-center">
            <div className="bg-gray-100 rounded-3xl overflow-hidden flex flex-col md:flex-row h-[420px] max-w-[1096px]">
                {/* Left Content Section */}
                <div className="flex-1 flex flex-col justify-center px-12 md:px-16 space-y-8 bg-gray-100 order-2 md:order-1">
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-tight max-w-md">
                        iVenus Apple Authorised Service Centers
                    </h2>
                    <p className="font-sans text-gray-600 text-base md:text-sm">
                        Repairs, Tech support and much more all at one place.
                    </p>

                    <button className="flex items-center gap-2 text-base font-semibold text-white group transition-colors w-fit">
                        <span className="bg-[#525252] px-6 py-3 rounded-full hover:bg-black shadow-sm transition-all flex items-center gap-2 text-sm uppercase tracking-wider">
                            Explore <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                    </button>
                </div>

                {/* Right Image Section */}
                <div className="w-full md:w-[605px] h-full relative order-1 md:order-2">
                    <img
                        src={ServiceCenterImg}
                        alt="Service Center Tech Support"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent pointer-events-none md:hidden" />
                </div>
            </div>
        </section>
    );
}
