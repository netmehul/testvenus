import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { products } from '../data/products';
import { Search } from 'lucide-react';
import { StoreCard } from '../components/store/StoreCard';
import { BookingSummary } from '../components/product/BookingSummary';
import { RelatedProducts } from '../components/product/RelatedProducts';
import { FloatingLabelInput } from '../components/ui/FloatingLabelInput';
import { FloatingLabelSelect } from '../components/ui/FloatingLabelSelect';

export function BookingPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === Number(id));

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedStoreIndex, setSelectedStoreIndex] = useState<number | null>(null);

    useEffect(() => {
        const savedCity = localStorage.getItem('ivenus_city');
        if (savedCity) {
            setSelectedCity(savedCity);
        }
    }, []);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Product Not Found</h1>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <Breadcrumb
                items={[
                    { label: 'Home', path: '/' },
                    { label: product.title, path: `/product/${id}` },
                    { label: 'Booking' }
                ]}
            />

            <div className="container mx-auto px-4 mt-12 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column - Main Content (7 Columns) */}
                    <div className="lg:col-span-7">
                        <h1 className="font-display text-[32px] md:text-[36px] font-semibold text-[#151515] mb-12 tracking-[-1.08px]">
                            Select Pickup Store
                        </h1>

                        {/* Search and Filters */}
                        <div className="space-y-6 mb-12">
                            <div className="relative">
                                <FloatingLabelInput
                                    label="Search by city, area or store name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pr-12"
                                />
                                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FloatingLabelSelect
                                    label="Select State"
                                    options={['Gujarat', 'Maharashtra']}
                                    value={selectedState}
                                    onChange={(e) => setSelectedState(e.target.value)}
                                />
                                <FloatingLabelSelect
                                    label="Select City"
                                    options={['Ahmedabad', 'Mumbai', 'Pune', 'Surat', 'Vadodara']}
                                    value={selectedCity}
                                    onChange={(e) => {
                                        const city = e.target.value;
                                        setSelectedCity(city);
                                        localStorage.setItem('ivenus_city', city);
                                    }}
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-[14px]">
                                <span className="font-medium text-gray-900">Popular Cities :</span>
                                {['Mumbai', 'Hyderabad', 'Delhi', 'Bangalore', 'Pune'].map((city) => (
                                    <button
                                        key={city}
                                        onClick={() => {
                                            setSelectedCity(city);
                                            localStorage.setItem('ivenus_city', city);
                                        }}
                                        className={`px-6 py-2 border rounded-full transition-all ${selectedCity === city
                                            ? 'bg-[#151515] text-white border-[#151515]'
                                            : 'bg-white border-gray-100 text-gray-600 hover:border-[#525252] hover:text-[#525252]'
                                            }`}
                                    >
                                        {city}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Store List */}
                        {selectedCity && (
                            <div className="grid gap-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {[
                                    {
                                        name: `iVenus - ${selectedCity} Main`,
                                        address: "Ground Floor, Heritage Arise, Opp. Rasranjan, Navrangpura, Ahmedabad, Gujarat 380009",
                                        phone: "+91 97120 00979",
                                        hours: "10:30 AM - 08:30 PM",
                                        distance: "1.2 km"
                                    },
                                    {
                                        name: `iVenus - ${selectedCity} Center`,
                                        address: "Shop No. 5, Span Trade Center, Near Shyamal Cross Road, Satellite, Ahmedabad, Gujarat 380015",
                                        phone: "+91 97120 00980",
                                        hours: "10:30 AM - 08:30 PM",
                                        distance: "3.5 km"
                                    },
                                    {
                                        name: `iVenus - ${selectedCity} West`,
                                        address: "Ground Floor, Titanium City Center, Prahladnagar, Ahmedabad, Gujarat 380015",
                                        phone: "+91 97120 00981",
                                        hours: "10:30 AM - 08:30 PM",
                                        distance: "4.8 km"
                                    }
                                ].map((store, index) => (
                                    <StoreCard
                                        key={index}
                                        store={store}
                                        isSelected={selectedStoreIndex === index}
                                        onSelect={() => setSelectedStoreIndex(index)}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Related Products removed from here */}
                    </div>

                    {/* Right Column - Sidebar (5 Columns) */}
                    <div className="sticky top-8 lg:col-span-5 flex flex-col gap-8 self-start">
                        <BookingSummary
                            product={product}
                            showCheckout={selectedStoreIndex !== null}
                            onCheckout={() => {
                                if (selectedStoreIndex !== null && selectedCity) {
                                    // Construct store object again or pick from list
                                    // Since we built the list dynamically, we need to reconstruct the chosen one
                                    // This is a bit duplicative logic, in real app 'stores' would be a state or fetched data

                                    // Recalculating the store object to pass it
                                    // For simplicity, let's move the store generation to a useMemo or variable if possible
                                    // But since it's mapped inline, I'll just grab it from a reconstructed array or cache
                                    // Actually, let's just assume we can regenerate it easily.

                                    const stores = [
                                        {
                                            name: `iVenus - ${selectedCity} Main`,
                                            address: "Ground Floor, Heritage Arise, Opp. Rasranjan, Navrangpura, Ahmedabad, Gujarat 380009",
                                            phone: "+91 97120 00979",
                                            hours: "10:30 AM - 08:30 PM",
                                            distance: "1.2 km"
                                        },
                                        {
                                            name: `iVenus - ${selectedCity} Center`,
                                            address: "Shop No. 5, Span Trade Center, Near Shyamal Cross Road, Satellite, Ahmedabad, Gujarat 380015",
                                            phone: "+91 97120 00980",
                                            hours: "10:30 AM - 08:30 PM",
                                            distance: "3.5 km"
                                        },
                                        {
                                            name: `iVenus - ${selectedCity} West`,
                                            address: "Ground Floor, Titanium City Center, Prahladnagar, Ahmedabad, Gujarat 380015",
                                            phone: "+91 97120 00981",
                                            hours: "10:30 AM - 08:30 PM",
                                            distance: "4.8 km"
                                        }
                                    ];
                                    const selectedStore = stores[selectedStoreIndex];

                                    // Persist for refresh
                                    localStorage.setItem('ivenus_selected_store', JSON.stringify(selectedStore));

                                    navigate(`/checkout/${id}`, { state: { selectedStore } });
                                }
                            }}
                        />
                        <RelatedProducts product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}
