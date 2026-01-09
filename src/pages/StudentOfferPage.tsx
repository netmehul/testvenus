import { Breadcrumb } from '../components/Breadcrumb';
import { StudentProductCard } from '../components/StudentProductCard';
import StudentOfferBanner from '../assets/student-offer/student-offer-banner-img.png';
import IPadProductImg from '../assets/student-offer/ipad-product-image.png';
import IPadProductImg1 from '../assets/student-offer/ipad-product-image-1.png';
import IPadProductImg2 from '../assets/student-offer/ipad-product-image-2.png';
import IPadProductImg3 from '../assets/student-offer/ipad-product-image-3.png';
import MacProductImg from '../assets/student-offer/mac-product-image.png';
import MacProductImg1 from '../assets/student-offer/mac-product-image-1.png';
import MacProductImg2 from '../assets/student-offer/mac-product-image-2.png';
import MacProductImg3 from '../assets/student-offer/mac-product-image-3.png';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HowToAvailOffer } from '../components/HowToAvailOffer';
import { AppleEducationSection } from '../components/AppleEducationSection';

export function StudentOfferPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Student Offers' }]} />

            {/* Banner Image */}
            <div className="container mx-auto px-4 mt-8">
                <img
                    src={StudentOfferBanner}
                    alt="Student Offer Banner"
                    className="w-full h-auto object-cover rounded-2xl"
                />
            </div>

            <div className="container mx-auto px-4 mt-16">

                {/* iPad Products Section */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-display text-4xl font-semibold text-gray-900 tracking-tight">
                            iPad for Students
                        </h2>

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                id: 1,
                                img: IPadProductImg,
                                name: 'iPad Pro',
                                price: '₹89,900',
                                effectivePrice: '₹74,900',
                                cashbackAmount: '₹5,000',
                                educationDiscount: '₹10,000',
                            },
                            {
                                id: 2,
                                img: IPadProductImg1,
                                name: 'iPad Air',
                                price: '₹59,900',
                                effectivePrice: '₹49,900',
                                cashbackAmount: '₹4,000',
                                educationDiscount: '₹6,000',
                            },
                            {
                                id: 3,
                                img: IPadProductImg2,
                                name: 'iPad',
                                price: '₹45,900',
                                effectivePrice: '₹37,900',
                                cashbackAmount: '₹3,000',
                                educationDiscount: '₹5,000',
                            },
                            {
                                id: 4,
                                img: IPadProductImg3,
                                name: 'iPad mini',
                                price: '₹49,900',
                                effectivePrice: '₹41,900',
                                cashbackAmount: '₹3,000',
                                educationDiscount: '₹5,000',
                            }
                        ].map((product) => (
                            <StudentProductCard
                                key={product.id}
                                title={product.name}
                                price={product.price}
                                effectivePrice={product.effectivePrice}
                                image={product.img}
                                cashbackAmount={product.cashbackAmount}
                                educationDiscount={product.educationDiscount}
                                productLink={`/product/${product.id}`}
                            />
                        ))}
                    </div>
                </section>

                {/* Mac Products Section */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-display text-4xl font-semibold text-gray-900 tracking-tight">
                            Mac for Students
                        </h2>
                        <Link
                            to="/category/macbook"
                            className="text-[#525252] hover:text-[#151515] font-medium flex items-center gap-2 transition-colors"
                        >
                            View All
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                id: 5,
                                img: MacProductImg,
                                name: 'MacBook Pro',
                                price: '₹1,99,900',
                                effectivePrice: '₹1,69,900',
                                cashbackAmount: '₹10,000',
                                educationDiscount: '₹20,000',
                            },
                            {
                                id: 6,
                                img: MacProductImg1,
                                name: 'MacBook Air',
                                price: '₹99,900',
                                effectivePrice: '₹84,900',
                                cashbackAmount: '₹5,000',
                                educationDiscount: '₹10,000',
                            },
                            {
                                id: 7,
                                img: MacProductImg2,
                                name: 'iMac',
                                price: '₹1,29,900',
                                effectivePrice: '₹1,11,900',
                                cashbackAmount: '₹8,000',
                                educationDiscount: '₹10,000',
                            },
                            {
                                id: 8,
                                img: MacProductImg3,
                                name: 'Mac mini',
                                price: '₹59,900',
                                effectivePrice: '₹49,900',
                                cashbackAmount: '₹4,000',
                                educationDiscount: '₹6,000',
                            }
                        ].map((product) => (
                            <StudentProductCard
                                key={product.id}
                                title={product.name}
                                price={product.price}
                                effectivePrice={product.effectivePrice}
                                image={product.img}
                                cashbackAmount={product.cashbackAmount}
                                educationDiscount={product.educationDiscount}
                                productLink={`/product/${product.id}`}
                            />
                        ))}
                    </div>
                </section>


                <HowToAvailOffer />
                <AppleEducationSection />
            </div>
        </div>
    );
}
