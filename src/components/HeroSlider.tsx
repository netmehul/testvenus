import { ChevronLeft, ChevronRight } from 'lucide-react';

export function HeroSlider() {
    return (
        <div className="relative w-full md:w-[872px] h-[345px] bg-gray-900 rounded-3xl overflow-hidden group">
            {/* Placeholder Image */}
            <img
                src="https://images.unsplash.com/photo-1556656793-02f13a06f63d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Hero Banner"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
                <span className="text-sm font-medium tracking-wider uppercase mb-2">New Arrival</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 max-w-md">Experience the future of innovation.</h2>
                <button className="w-fit px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
                    Shop Now
                </button>
            </div>

            {/* Navigation Controls */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
        </div>
    );
}
