import { LayoutDashboard, Package, Heart, MapPin, User } from 'lucide-react';

interface AccountTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function AccountTabs({ activeTab, onTabChange }: AccountTabsProps) {
    const tabs = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'orders', label: 'Orders', icon: Package },
        { id: 'wishlist', label: 'Wishlist', icon: Heart },
        { id: 'addresses', label: 'Addresses', icon: MapPin },
        { id: 'details', label: 'Account Details', icon: User },
    ];

    return (
        <div className="mt-12 w-full">
            <div className="container mx-auto px-4">
                <div className="relative flex w-full border-b border-[#E5E5E5]">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                className={`
                                    flex-1 flex items-center justify-center gap-2 py-4 border-b-2 transition-all whitespace-nowrap relative
                                    ${isActive
                                        ? 'border-[#151515] text-[#151515] font-medium bg-gradient-to-t from-[#E86C17]/10 to-transparent'
                                        : 'border-transparent text-[#525252] font-normal hover:text-[#151515]'
                                    }
                                `}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2px]' : 'stroke-[1.5px]'}`} />
                                <span className="text-[16px]">
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
