import type { Product } from '../../data/products';

interface RelatedProductsProps {
    product: Product;
}

export function RelatedProducts({ product }: RelatedProductsProps) {
    return (
        <div className="mt-2 bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
            <h2 className="text-[24px] font-semibold text-[#151515] mb-6 font-display">
                Related Products
            </h2>

            <div className="flex flex-row gap-6">
                {product.bundleItems.map((item) => (
                    <div key={item.id} className="group">
                        <div className="aspect-square bg-[#F8F8F8] rounded-[16px] p-4 mb-4 flex items-center justify-center border border-transparent group-hover:border-[#525252] transition-all relative w-[140px] h-[140px]">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="max-w-[140px] max-h-[140px] object-contain transition-transform group-hover:scale-105"
                            />
                        </div>
                        <h3 className="w-[140px] text-[14px] font-medium text-[#151515] mb-4 line-clamp-2 h-[40px] font-display">
                            {item.name}
                        </h3>
                        <button className="w-[140px] h-[40px] bg-gray-100 rounded-[12px] text-[14px] font-medium text-[#151515] hover:bg-[#151515] hover:text-white transition-all">
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
