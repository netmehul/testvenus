import TucanoImg from '../assets/AssetsFromUser/Trusted Brands/Rectangle 35-2.png';
import MarshallImg from '../assets/AssetsFromUser/Trusted Brands/Rectangle 35-1.png';
import DailyObjectsImg from '../assets/AssetsFromUser/Trusted Brands/Rectangle 35.png';
import DailyObjectsLogo from '../assets/AssetsFromUser/Trusted Brands/daily-objects 1.png';
// Using generic placeholders for other logos if not clear, or map if available.
// Found image 24.png and image 25.png - likely logos.
import TucanoLogo from '../assets/AssetsFromUser/Trusted Brands/image 24.png';
import MarshallLogo from '../assets/AssetsFromUser/Trusted Brands/image 25.png';

const brands = [
    {
        name: 'Tucano Milano 1985',
        description: 'Protection with style everything you need to work freely wherever you are',
        image: TucanoImg,
        logoImage: TucanoLogo
    },
    {
        name: 'Marshall',
        description: 'Take your music on the road for 30+ hours with the latest member of our portable line-up',
        headline: 'PARTY ANYWHERE WITH BROMLEY 750',
        image: MarshallImg,
        logoImage: MarshallLogo
    },
    {
        name: 'Daily Objects',
        description: 'Meet POP 100W Type-C Kevlar core magnetic Charging cables in five vibrant colours',
        image: DailyObjectsImg,
        logoImage: DailyObjectsLogo
    }
];

export function TrustedBrands() {
    return (
        <section className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                <h2 className="font-display text-4xl font-semibold text-gray-900 tracking-tight">
                    Trusted Brands
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {brands.map((brand, index) => (
                    <div key={index} className="group bg-[#F3F3F3] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-row">

                        {/* Text Content */}
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="h-8 mb-4">
                                {/* Logo */}
                                {brand.logoImage ? (
                                    <img src={brand.logoImage} alt={brand.name} className="h-full object-contain" />
                                ) : (
                                    <span className="font-bold text-lg uppercase tracking-wider text-gray-800">{brand.name.split(' ')[0]}</span>
                                )}
                            </div>

                            {brand.headline && (
                                <h3 className="font-display text-lg font-bold uppercase mb-2 leading-snug">
                                    {brand.headline}
                                </h3>
                            )}

                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                {brand.description}
                            </p>

                            <div className="mt-auto">
                                <button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#525252] hover:bg-black transition-colors px-4 py-2 rounded-full w-fit">
                                    Explore
                                </button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-48 overflow-hidden">
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
