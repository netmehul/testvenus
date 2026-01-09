import { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { AccountProfileHeader } from '../components/AccountProfileHeader';
import { AccountTabs } from '../components/AccountTabs';
import { Dashboard } from '../components/Dashboard';
import { OrdersTab } from '../components/OrdersTab';
import { OrderDetail } from '../components/OrderDetail';
import { WishlistTab } from '../components/WishlistTab';
import { AddressTab } from '../components/AddressTab';
import { AccountDetailsTab } from '../components/AccountDetailsTab';

export function AccountPage() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

    // Reset selected order when changing tabs
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setSelectedOrderId(null);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <Dashboard />;
            case 'orders':
                if (selectedOrderId) {
                    return <OrderDetail orderId={selectedOrderId} onBack={() => setSelectedOrderId(null)} />;
                }
                return <OrdersTab onOrderClick={setSelectedOrderId} />;
            case 'wishlist':
                return <WishlistTab />;
            case 'addresses':
                return <AddressTab />;
            case 'details':
                return <AccountDetailsTab />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'My Profile' }]} />

            <div className="mt-0">
                <AccountProfileHeader />
            </div>

            <AccountTabs activeTab={activeTab} onTabChange={handleTabChange} />

            <div className="container mx-auto px-4 mt-8">
                {renderContent()}
            </div>
        </div>
    );
}
