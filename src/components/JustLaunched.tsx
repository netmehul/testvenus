import iPhone17Img from '../assets/AssetsFromUser/just-launched/i17.png';
import iPhone17ProImg from '../assets/AssetsFromUser/just-launched/i17-Pro.png';
import iPhoneAirImg from '../assets/AssetsFromUser/just-launched/i-AIr.png';
import MacBookAirImg from '../assets/AssetsFromUser/just-launched/McAir.png';

interface Product {
    name: string;
    image: string;
    background: string;
}

const products: Product[] = [
    {
        name: 'iPhone 17',
        image: iPhone17Img,
        background: 'linear-gradient(180deg, rgba(169, 187, 247, 0.20) 0%, rgba(92, 98, 239, 0.30) 100%)'
    },
    {
        name: 'iPhone 17 PRO',
        image: iPhone17ProImg,
        background: 'linear-gradient(180deg, rgba(253, 188, 128, 0.20) 0%, rgba(199, 72, 9, 0.40) 100%)'
    },
    {
        name: 'iPhone Air',
        image: iPhoneAirImg,
        background: 'linear-gradient(180deg, rgba(176, 191, 226, 0.10) 0%, rgba(194, 211, 233, 0.60) 100%)'
    },
    {
        name: 'MacBook Air',
        image: MacBookAirImg,
        background: 'linear-gradient(180deg, rgba(253, 188, 128, 0.10) 0%, rgba(199, 72, 9, 0.07) 100%)'
    },
];

export function JustLaunched() {
    return (
        <section className="w-full">
            <h2 className="font-display text-4xl font-semibold mb-8 text-gray-900 tracking-tight">
                Just Launched
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.name} className="group cursor-pointer">
                        <div
                            className="relative aspect-[312/262] rounded-2xl overflow-hidden mb-4 border border-gray-100 transition-all duration-300"
                            style={{ background: product.background }}
                        >
                            {/* Title Overlay or Top Section based on design? 
                   Design shows title above rectangle in metadata: Frame -> Title, Rectangle.
                   Let's match that structure.
               */}
                            <div className="absolute top-0 left-0 w-full p-6 z-10">
                                <h3 className="font-display text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    {product.name}
                                </h3>
                            </div>

                            {/* Image Area (Rectangle 35 in Figma) */}
                            <div className="absolute bottom-0 w-full h-[75%] flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
