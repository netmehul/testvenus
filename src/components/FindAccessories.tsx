import { ArrowRight } from 'lucide-react';
import AccessoriesImg from '../assets/AssetsFromUser/homepage-image/find-accesories-image.png';
export function FindAccessories() {
    return (
        <section className="w-full flex justify-center">
            <div className="bg-gray-100 rounded-3xl overflow-hidden flex flex-col md:flex-row h-[420px] max-w-[1096px]">
                {/* Left Image Section */}
                <div className="w-full md:w-[605px] h-full relative">
                    <img
                        src={AccessoriesImg}
                        alt="Accessories"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay for better text contrast if needed, mostly for aesthetics here */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none md:hidden" />
                </div>

                {/* Right Content Section */}
                <div className="flex-1 flex flex-col justify-center px-12 md:px-16 space-y-8 bg-gray-100">
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-tight max-w-sm">
                        Find the accessories you’re looking for.
                    </h2>

                    <button className="flex items-center gap-2 text-base font-semibold text-white group transition-colors w-fit">
                        <span className="bg-[#525252] px-6 py-3 rounded-full hover:bg-black shadow-sm transition-all flex items-center gap-2 text-sm uppercase tracking-wider">
                            Explore <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
