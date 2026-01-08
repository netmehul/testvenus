import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { HeroSlider } from './components/HeroSlider';
import { FeatureCards } from './components/FeatureCards';
import { JustLaunched } from './components/JustLaunched';
import { NeedSection } from './components/NeedSection';
import { TrustedBrands } from './components/TrustedBrands';
import { WhyChooseIvanus } from './components/WhyChooseIvanus';
import { FindAccessories } from './components/FindAccessories';
import { ServiceCenters } from './components/ServiceCenters';
import { CertifiedExperts } from './components/CertifiedExperts';
import { Footer } from './components/Footer';

import { IPadBanner } from './components/IPadBanner';
import { MacBookBanner } from './components/MacBookBanner';
import { IPhoneBanner } from './components/IPhoneBanner';

function App() {
  // Define banner data - using only the new custom Figma-designed banners
  const bannerData = [
    {
      id: 'ipad-pro',
      items: [<IPadBanner key="ipad-main" />]
    },
    {
      id: 'iphone-17-pro',
      items: [<IPhoneBanner key="iphone-main" />]
    },
    {
      id: 'macbook-pro',
      items: [<MacBookBanner key="macbook-main" />]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <CategoryNav />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col xl:flex-row gap-6 justify-center max-w-[1400px] mx-auto">
          {/* Hero Slider */}
          <HeroSlider banners={bannerData} autoSlideInterval={5000} />

          {/* Feature Cards */}
          <FeatureCards />
        </div>

        {/* Just Launched Section */}
        <div className="max-w-[1400px] mx-auto mt-12 mb-20 space-y-[75px]">
          <JustLaunched />
          <NeedSection />
          <TrustedBrands />
          <WhyChooseIvanus />
          <FindAccessories />
          <ServiceCenters />
          <CertifiedExperts />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
