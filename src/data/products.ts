export interface ProductBadge {
    text: string;
    type: 'hot-deal' | 'student-offer';
}

export interface ProductColor {
    name: string;
    hex: string;
    inStock: boolean;
}

export interface ProductOffer {
    text: string;
}

export interface ProductFeature {
    title: string;
    content: string;
}

export interface BundleItem {
    id: number;
    name: string;
    price: number | string;
    image: string;
}

export interface VariantItem {
    id: string | number;
    label: string;
    inStock: boolean;
    priceModifier?: number;
    features?: string[];
}

export interface Product {
    id: number;
    title: string;
    price: string;
    originalPrice?: string;
    effectivePrice?: string;
    image: string; // Featured image
    images: string[]; // Gallery images
    sku: string;
    badges?: ProductBadge[];
    colors: ProductColor[];
    storageOptions?: VariantItem[];
    coverageOptions?: VariantItem[];
    offers: ProductOffer[];
    features: ProductFeature[];
    bundleItems: BundleItem[];
    description: string;
    cashbackOffer?: string;
    inStock: boolean;
}

export const products: Product[] = [
    {
        id: 1,
        title: "iPhone 17 Pro",
        price: "₹1,24,900",
        originalPrice: "₹1,34,900",
        effectivePrice: "₹1,30,900",
        sku: "MG8M4HN/A",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702728",
        images: [
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702728",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702728",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702728"
        ],
        colors: [
            { name: "Cosmic Orange", hex: "#E86C17", inStock: true },
            { name: "Deep Blue", hex: "#4A5D7F", inStock: true },
            { name: "Silver", hex: "#E5E5E5", inStock: false }
        ],
        storageOptions: [
            { id: '128gb', label: '128 GB', inStock: true },
            { id: '256gb', label: '256 GB', inStock: true },
            { id: '512gb', label: '512 GB', inStock: false },
            { id: '1tb', label: '1 TB', inStock: true }
        ],
        coverageOptions: [
            { id: 'none', label: 'No AppleCare+', inStock: true },
            {
                id: 'applecare',
                label: 'Add AppleCare+',
                inStock: true,
                features: [
                    'Unlimited repairs for accidental damage',
                    'Apple-certified service and support',
                    'Pickup and delivery service',
                    'Priority access to Apple experts'
                ]
            }
        ],
        offers: [
            { text: "Get Rs. 4000 additional Cashback" },
            { text: "Get Flat 3% off on 1TB Cosmic Orange & Deep Blue only*" }
        ],
        features: [
            { title: "Features", content: "Experience the next generation of performance with the A19 Pro chip. Triple-lens camera system with 48MP main sensor." },
            { title: "Trade-in and Save", content: "Swap your old phone for credit towards your new iPhone 17 Pro." },
            { title: "Finance Options", content: "Low interest EMI options available starting from ₹5,200/month." },
            { title: "Delivery & Returns Policy", content: "Free shipping on all orders. Easy returns within 14 days." }
        ],
        bundleItems: [
            { id: 101, name: "20W USB-C POWER ADAPTER", price: "₹1,199", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU7V2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1537233346939" },
            { id: 102, name: "iPhone 17 Pro Max Silicone Case with MagSafe", price: "₹3,989", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4P3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702728" }
        ],
        badges: [{ text: "Hot Deal", type: 'hot-deal' }],
        description: "Innovative design for ultimate performance and battery life.",
        cashbackOffer: "Get Rs. 4000 additional Cashback",
        inStock: true
    }
];
