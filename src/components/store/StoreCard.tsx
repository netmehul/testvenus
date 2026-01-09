import { MapPin, Phone, Clock } from 'lucide-react';

export interface Store {
    name: string;
    address: string;
    phone: string;
    hours: string;
    distance: string;
}

interface StoreCardProps {
    store: Store;
    isSelected?: boolean;
    onSelect?: () => void;
}

export function StoreCard({ store, isSelected, onSelect }: StoreCardProps) {
    return (
        <div
            onClick={onSelect}
            className={`
                group relative rounded-[12px] p-4 transition-all cursor-pointer border
                ${isSelected
                    ? 'border-[#525252] shadow-md bg-white'
                    : 'border-transparent hover:border-[#525252] hover:shadow-md bg-[rgba(21,21,21,0.05)]'
                }
            `}
        >
            <div className="flex flex-col gap-3">
                {/* Header: Icon, Name, Distance */}
                <div className="flex items-center gap-2">
                    <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
                        <MapPin className="w-full h-full text-[#151515]" />
                    </div>
                    <h3 className="text-[14px] font-medium text-[#151515] font-display whitespace-nowrap">
                        {store.name}
                    </h3>
                    <div className="bg-white px-[8px] py-[4px] rounded-[5px] flex items-center gap-1 ml-1 shrink-0">
                        <span className="text-[12px] font-medium text-[#525252] font-display">
                            {store.distance}
                        </span>
                        <span className="text-[12px] text-[rgba(82,82,82,0.6)] font-normal font-display">
                            away
                        </span>
                    </div>
                </div>

                {/* Address */}
                <p className="text-[14px] leading-[22px] text-[#151515] font-normal pl-[26px]">
                    {store.address}
                </p>

                {/* Metadata: Phone, Hours */}
                <div className="flex flex-col gap-2 pl-[26px]">
                    {/* Phone hidden in this specific Figma view but common in others, keeping if needed or hiding based on strict figma. 
                       Figma node 95:1812 only shows timings in bottom row. Let's keep timings. 
                   */}
                    <div className="flex items-center gap-2">
                        <Clock className="w-[14px] h-[14px] text-[#151515]" />
                        <span className="text-[12px] text-[rgba(21,21,21,0.6)] font-normal font-display">
                            {store.hours}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
