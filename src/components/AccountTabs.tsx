import { LayoutDashboard, Package, Heart, MapPin, User, ChevronDown } from 'lucide-react';

interface AccountTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function AccountTabs({ activeTab, onTabChange }: AccountTabsProps) {
    const tabs = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'orders', label: 'Orders', icon: Package },
        { id: 'wishlist', label: 'Wishlist', icon: Heart },
        { id: 'addresses', label: 'Addresses', icon: MapPin },
        { id: 'details', label: 'Account Details', icon: User },
    ];

    const activeTabObj = tabs.find(t => t.id === activeTab);
    const ActiveIcon = activeTabObj ? activeTabObj.icon : LayoutDashboard;

    return (
        <div className="mt-8 md:mt-12 w-full">
            <div className="container mx-auto px-4">

                {/* Mobile Dropdown */}
                <div className="md:hidden w-full relative">
                    <div className="relative w-full border border-[#E5E5E5] rounded-xl bg-white px-4 py-3.5 flex items-center justify-between shadow-sm focus-within:border-[#151515] transition-colors">
                        <div className="flex items-center gap-3">
                            <ActiveIcon className="w-5 h-5 text-[#151515]" />
                            <span className="font-medium text-[#151515] text-base">{activeTabObj?.label}</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-[#525252]" />

                        <select
                            value={activeTab}
                            onChange={(e) => onTabChange(e.target.value)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        >
                            {tabs.map((tab) => (
                                <option key={tab.id} value={tab.id}>
                                    {tab.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Desktop Tabs */}
                <div className="hidden md:flex relative w-full border-b border-[#E5E5E5]">
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
