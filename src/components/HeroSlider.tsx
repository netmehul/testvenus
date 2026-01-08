import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import arrowIcon from '../assets/arrow-icon.svg';

export interface BannerSlide {
    id: string;
    // Each banner can have multiple slides (images or custom components)
    // We treat them as a uniform "items" array where each item can be an image URL or a component
    items: (string | ReactNode)[];
}

interface HeroSliderProps {
    banners?: BannerSlide[];
    autoSlideInterval?: number;
}

export function HeroSlider({
    banners = [],
    autoSlideInterval = 5000
}: HeroSliderProps) {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    // Flatten all items into a single playback sequence
    const allSlides = banners.flatMap((banner, bIdx) =>
        banner.items.map((item, iIdx) => ({
            content: item,
            type: typeof item === 'string' ? 'image' : 'component',
            bannerId: banner.id,
            bannerIndex: bIdx,
            itemIndex: iIdx
        }))
    );

    const totalSlides = allSlides.length;

    // Auto-slide logic
    useEffect(() => {
        if (totalSlides === 0) return;

        const interval = setInterval(() => {
            setCurrentItemIndex((prev) => (prev + 1) % totalSlides);
        }, autoSlideInterval);

        return () => clearInterval(interval);
    }, [totalSlides, autoSlideInterval]);

    const nextSlide = () => {
        setCurrentItemIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentItemIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index: number) => {
        setCurrentItemIndex(index);
    };

    if (totalSlides === 0) {
        return (
            <div className="relative w-full md:w-[872px] h-[345px] bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center">
                <p className="text-white">No banners available</p>
            </div>
        );
    }

    return (
        <div className="relative w-full md:w-[872px] h-[345px] bg-black rounded-3xl overflow-hidden group">
            {/* Slides Container */}
            <div className="relative w-full h-full">
                {allSlides.map((slide, index) => (
                    <div
                        key={`${slide.bannerId}-${slide.itemIndex}`}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${index === currentItemIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                    >
                        {slide.type === 'image' ? (
                            <img
                                src={slide.content as string}
                                alt={`${slide.bannerId} - Slide ${slide.itemIndex + 1}`}
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <div className="w-full h-full">
                                {slide.content as ReactNode}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all shadow-lg z-20 group-hover:opacity-100 opacity-0 md:opacity-100"
                aria-label="Previous slide"
            >
                <img src={arrowIcon} alt="" className="w-[18px] h-[18px] rotate-180" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all shadow-lg z-20 group-hover:opacity-100 opacity-0 md:opacity-100"
                aria-label="Next slide"
            >
                <img src={arrowIcon} alt="" className="w-[18px] h-[18px]" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {allSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${currentItemIndex === index ? 'bg-white' : 'bg-white/30'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
