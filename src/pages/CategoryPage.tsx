import { Breadcrumb } from '../components/Breadcrumb';
import { CategoryProductCard } from '../components/CategoryProductCard';

export function CategoryPage() {
    // Dummy data mirroring Figma design
    const products = [
        {
            id: 1,
            title: "iPhone 17 Pro",
            price: "₹1,34,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702728", // Placeholder
            badges: [{ text: "Hot Deal", type: 'hot-deal' as const }],
            description: "Innovative design for ultimate performance and battery life.",
            cashbackOffer: "Get Rs. 4000 additional Cashback",
            inStock: true
        },
        {
            id: 2,
            title: "iPhone 17 Pro",
            price: "₹82,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972",
            badges: [{ text: "Student Offer", type: 'student-offer' as const }],
            description: "Innovative design for ultimate performance and battery life.",
            cashbackOffer: "Get Rs. 4000 additional Cashback",
            inStock: true
        },
        {
            id: 3,
            title: "iPhone 17 Pro Max",
            price: "",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311",
            description: "Innovative design for ultimate performance and battery life.",
            inStock: false
        },
        {
            id: 4,
            title: "iPhone Air",
            price: "₹1,34,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972",
            badges: [{ text: "Hot Deal", type: 'hot-deal' as const }],
            description: "Innovative design for ultimate performance and battery life.",
            cashbackOffer: "Get Rs. 4000 additional Cashback",
            inStock: true
        },
        // Duplicate row for 4x2 grid as per design name "product-grid 4 x 2"
        {
            id: 5,
            title: "iPhone 16 Plus",
            price: "₹75,900",
            originalPrice: "₹79,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923779169",
            description: "Innovative design for ultimate performance and battery life.",
            cashbackOffer: "Get Rs. 4000 additional Cashback",
            inStock: true
        },
        {
            id: 6,
            title: "iPhone 16 Plus",
            price: "₹75,900",
            originalPrice: "₹79,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923779169",
            badges: [{ text: "Hot Deal", type: 'hot-deal' as const }],
            description: "Innovative design for ultimate performance and battery life.",
            cashbackOffer: "Get Rs. 4000 additional Cashback",
            inStock: true
        },
        {
            id: 7,
            title: "iPhone 16e",
            price: "₹75,900",
            originalPrice: "₹79,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656712888655",
            description: "Essential performance. Effortlessly iPhone.",
            cashbackOffer: "Get Rs. 4000 additional Cashback",
            inStock: true
        },
        {
            id: 8,
            title: "iPhone 15",
            price: "₹59,000",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972",
            description: "Everyday extraordinary. Designed to do it all.",
            inStock: true
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'iPhone' }]} />

            {/* Category Header */}
            <div className="container mx-auto px-4 mt-12 mb-8 flex flex-col items-left">
                <div className="flex items-center gap-[10px]">
                    <h1 className="text-[38px] leading-[42px] font-medium text-[#151515] whitespace-nowrap">
                        iPhone
                    </h1>
                    <span className="text-[24px] leading-[26px] text-[#151515] opacity-60">
                        (9)
                    </span>
                </div>
            </div>

            {/* Category Grid */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <CategoryProductCard
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
