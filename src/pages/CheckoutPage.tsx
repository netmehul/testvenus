import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { products } from '../data/products'; // Assuming we have access to products
import { Breadcrumb } from '../components/Breadcrumb';
import { PickupBookingSummary } from '../components/checkout/PickupBookingSummary';
import { CustomerDetails } from '../components/checkout/CustomerDetails';
import type { Store } from '../components/store/StoreCard';

export function CheckoutPage() {
    const { id } = useParams();
    const location = useLocation();

    // Get product
    const product = products.find(p => p.id === Number(id));

    // Get store from navigation state or localStorage
    // In real app, might want to persist this more robustly
    const [selectedStore, setSelectedStore] = useState<Store | null>(null);

    useEffect(() => {
        // Try to get from location state first
        if (location.state?.selectedStore) {
            setSelectedStore(location.state.selectedStore);
        } else {
            // Fallback or redirect if no store selected?
            // For now, let's just redirect back to picking a store if no store is found
            // Or we could rely on a localStorage 'cart' but user specific 'store' selection seems to be flow based.
            const stored = localStorage.getItem('ivenus_selected_store');
            if (stored) {
                setSelectedStore(JSON.parse(stored));
            } else {
                // Redirect back to book page if needed, for demo just stay
            }
        }
    }, [location.state]);

    if (!product) return <div>Product not found</div>;

    return (
        <div className="w-full">
            <Breadcrumb
                items={[
                    { label: 'Home', path: '/' },
                    { label: 'MacBook', path: '/category/macbook' },
                    { label: 'Booking', path: `/book/${id}` },
                    { label: 'Checkout', path: `/checkout/${id}` }
                ]}
            />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-[32px] font-bold text-[#151515] mb-8 font-display">
                    Checkout
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-start">
                    {/* Left Column - 7 Cols */}
                    <div className="lg:col-span-7">
                        <CustomerDetails store={selectedStore} />
                    </div>

                    {/* Right Sidebar - 5 Cols */}
                    <div className="lg:col-span-5 sticky top-8 flex flex-col gap-8 self-start">
                        <PickupBookingSummary product={product} />
                        {/* showCheckout is undefined/false, so button won't show, which is correct for checkout page */}
                    </div>
                </div>
            </div>
        </div>
    );
}
