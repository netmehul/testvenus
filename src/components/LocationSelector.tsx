import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LocationModal } from './LocationModal';

interface LocationSelectorProps {
    className?: string;
}

export function LocationSelector({ className = '' }: LocationSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState(() => localStorage.getItem('ivenus_city') || 'Ahmedabad');
    const [selectedArea, setSelectedArea] = useState(() => localStorage.getItem('ivenus_area') || 'Navrangpura');

    useEffect(() => {
        const hasSetLocation = localStorage.getItem('ivenus_city');
        if (!hasSetLocation) {
            // Short delay to ensure animations and other components are ready
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleSelectCity = (city: string) => {
        setSelectedCity(city);
        const areaMap: Record<string, string> = {
            'Mumbai': 'Andheri West',
            'Hyderabad': 'Banjara Hills',
            'Delhi': 'Connaught Place',
            'Bangalore': 'Indiranagar',
            'Ahmedabad': 'Navrangpura'
        };
        const area = areaMap[city] || 'Main Branch';
        setSelectedArea(area);

        // Persist selection
        localStorage.setItem('ivenus_city', city);
        localStorage.setItem('ivenus_area', area);

        setIsOpen(false);
    };

    return (
        <>
            <div
                className={`flex items-center gap-2 cursor-pointer group select-none ${className}`}
                onClick={() => setIsOpen(true)}
            >
                <div className="flex flex-col items-end leading-tight">
                    <span className="text-[14px] font-medium text-white group-hover:text-gray-200 transition-colors">
                        {selectedCity}
                    </span>
                    <span className="text-[12px] text-white/60 group-hover:text-white/80 transition-colors">
                        {selectedArea}
                    </span>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <LocationModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSelectCity={handleSelectCity}
            />
        </>
    );
}
