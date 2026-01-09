import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { products } from '../data/products';
import { ImageGallery } from '../components/product/ImageGallery';
import { ProductDetailsInfo } from '../components/product/ProductDetailsInfo';
import { ProductAccordions } from '../components/product/ProductAccordions';
import { BundleSelection } from '../components/product/BundleSelection';

export function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id.toString() === id);

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
                    { label: 'iPhone', path: '/category/iphone' },
                    { label: product.title }
                ]}
            />

            <div className="container mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Gallery */}
                    <div className='lg:sticky lg:top-48'>
                        <ImageGallery images={product.images} title={product.title} />
                    </div>

                    {/* Right Column: Info and Accordions */}
                    <div>
                        <div className="bg-white rounded-[32px] p-4 lg:p-6 flex flex-col gap-8 shadow-sm border border-gray-100">
                            <ProductDetailsInfo
                                title={product.title}
                                price={product.price}
                                originalPrice={product.originalPrice}
                                effectivePrice={product.effectivePrice}
                                sku={product.sku}
                                colors={product.colors}
                                storageOptions={product.storageOptions}
                                coverageOptions={product.coverageOptions}
                                offers={product.offers}
                            />

                            <ProductAccordions features={product.features} />
                        </div>


                        {/* Bottom Section: Bundle Selection */}
                        <BundleSelection product={product} />
                    </div>

                </div>



            </div>
        </div>
    );
}
