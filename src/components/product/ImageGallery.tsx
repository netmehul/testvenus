import { useState } from 'react';
import { Search } from 'lucide-react';

interface ImageGalleryProps {
    images: string[];
    title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="flex flex-col md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 order-2 md:order-1">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImage(img)}
                        className={`w-20 h-20 rounded-xl border-2 transition-all p-2 bg-white flex items-center justify-center overflow-hidden
                            ${activeImage === img ? 'border-[#E86C17]' : 'border-transparent hover:border-gray-200'}
                        `}
                    >
                        <img src={img} alt={`${title} ${index + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative flex items-center justify-center order-1 md:order-2 aspect-[4/3]">
                <img
                    src={activeImage}
                    alt={title}
                    className="w-full h-full object-contain mix-blend-multiply max-h-[500px]"
                />
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Search className="w-5 h-5 text-gray-500" />
                </button>
            </div>
        </div>
    );
}
