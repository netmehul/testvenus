import { Search, X, Crosshair } from 'lucide-react';
import { useEffect } from 'react';

// SVGs from Figma
const imgGateOfIndia = "http://localhost:3845/assets/13b4a1ca41a303da90456214095f084e94fe7b10.svg";
const imgHyderabad = "http://localhost:3845/assets/a1b6eca054ea28acdd0330e4afd9cac6da8aacea.svg";
const imgDelhi = "http://localhost:3845/assets/cb6da92ef17f00a0f93a053e2727f4ce0ac76034.svg";
const imgBangalore = "http://localhost:3845/assets/c7ca16fc924e929ab7eb21e82a7f9f887ad44439.svg";
const imgAhmedabad = "http://localhost:3845/assets/5d4ee6aef2d2a57a5bcb64c0003c54ff78252d10.svg";

interface CityCard {
    name: string;
    stores: number;
    image: string;
}

const cities: CityCard[] = [
    { name: 'Mumbai', stores: 12, image: imgGateOfIndia },
    { name: 'Hyderabad', stores: 8, image: imgHyderabad },
    { name: 'Delhi', stores: 11, image: imgDelhi },
    { name: 'Bangalore', stores: 16, image: imgBangalore },
    { name: 'Ahmedabad', stores: 20, image: imgAhmedabad },
];

interface LocationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectCity: (city: string) => void;
}

export function LocationModal({ isOpen, onClose, onSelectCity }: LocationModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="bg-white w-full max-w-[800px] rounded-[18px] p-8 shadow-2xl relative z-10 animate-in zoom-in-95 duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X className="w-6 h-6 text-[#151515]" />
                </button>

                <h2 className="text-[24px] font-semibold text-[#151515] text-center mb-8 font-display tracking-tight">
                    Select Location
                </h2>

                <div className="flex flex-col md:flex-row gap-4 mb-10 items-center">
                    {/* Search Bar */}
                    <div className="relative flex-1 w-full">
                        <input
                            type="text"
                            placeholder="Search by city, area or store name..."
                            className="w-full h-[48px] pl-4 pr-12 rounded-[12px] border border-[#151515]/24 text-[14px] text-[#151515] placeholder:text-[#151515]/40 focus:outline-none focus:border-[#151515] transition-colors"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#151515]" />
                    </div>

                    <div className="hidden md:block h-[32px] w-[1px] bg-[#151515]/10 mx-2" />

                    {/* Detect Location */}
                    <button className="flex items-center gap-2 text-[#525252] hover:text-[#151515] transition-colors group shrink-0 py-2">
                        <Crosshair className="w-5 h-5 text-[#525252] group-hover:text-[#151515]" />
                        <span className="text-[14px] font-medium leading-none">Detect my location</span>
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-[14px] font-medium text-[#151515] font-sans">
                        Popular Cities :
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {cities.map((city) => (
                            <div
                                key={city.name}
                                onClick={() => onSelectCity(city.name)}
                                className="group cursor-pointer border border-[#E5E5E5] rounded-[12px] p-4 flex flex-col gap-1 hover:border-[#E86C17] hover:shadow-md transition-all relative overflow-hidden h-[120px]"
                            >
                                <span className="text-[16px] font-semibold text-[#151515] font-display">
                                    {city.name}
                                </span>
                                <span className="text-[12px] text-[#525252]/60">
                                    {city.stores} Stores
                                </span>

                                {/* City Landmark Mock (SVG from Figma) */}
                                <div className="absolute right-[-10px] bottom-[-5px] opacity-40 group-hover:opacity-100 transition-opacity">
                                    <img
                                        src={city.image}
                                        alt={city.name}
                                        className="w-[70px] h-[70px] object-contain grayscale group-hover:grayscale-0 transition-all"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
