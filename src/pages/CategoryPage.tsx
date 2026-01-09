import { Breadcrumb } from '../components/Breadcrumb';
import { CategoryProductCard } from '../components/CategoryProductCard';
import { products } from '../data/products';

export function CategoryPage() {
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
