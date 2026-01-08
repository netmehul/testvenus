import { useState } from 'react';
import { HeroSlider } from './components/HeroSlider';

/**
 * Demo page to showcase all three HeroSlider variants
 * This demonstrates the component's flexibility with different product banners
 */
export function HeroSliderDemo() {
    const [selectedVariant, setSelectedVariant] = useState<'hero-banner-01' | 'hero-banner-02' | 'hero-banner-03'>('hero-banner-01');

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="text-4xl font-bold mb-2 text-center">Hero Banner Component</h1>
                <p className="text-gray-600 text-center mb-8">Showcasing all three variants from Figma design</p>

                {/* Variant Selector */}
                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={() => setSelectedVariant('hero-banner-01')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${selectedVariant === 'hero-banner-01'
                            ? 'bg-black text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        iPad Pro Banner
                    </button>
                    <button
                        onClick={() => setSelectedVariant('hero-banner-02')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${selectedVariant === 'hero-banner-02'
                            ? 'bg-black text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        iPhone 17 Pro Banner
                    </button>
                    <button
                        onClick={() => setSelectedVariant('hero-banner-03')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${selectedVariant === 'hero-banner-03'
                            ? 'bg-black text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        MacBook Pro Banner
                    </button>
                </div>

                {/* Hero Slider Component */}
                <div className="mb-12">
                    <HeroSlider variant={selectedVariant} />
                </div>

                {/* Component Documentation */}
                <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">Component Props</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">variant (optional)</h3>
                            <p className="text-gray-600 mb-2">Type: <code className="bg-gray-100 px-2 py-1 rounded">'hero-banner-01' | 'hero-banner-02' | 'hero-banner-03'</code></p>
                            <p className="text-gray-600">Default: <code className="bg-gray-100 px-2 py-1 rounded">'hero-banner-01'</code></p>
                            <ul className="mt-2 space-y-1 text-gray-600">
                                <li>• <strong>hero-banner-01</strong>: iPad Pro with dark background and centered layout</li>
                                <li>• <strong>hero-banner-02</strong>: iPhone 17 Pro with beige background and offer card</li>
                                <li>• <strong>hero-banner-03</strong>: MacBook Pro with dark background and right-aligned content</li>
                            </ul>
                        </div>

                        <div className="border-t pt-4">
                            <h3 className="font-semibold text-lg mb-2">Features</h3>
                            <ul className="space-y-1 text-gray-600">
                                <li>✓ Three distinct product banner variants</li>
                                <li>✓ Navigation arrows with hover effects</li>
                                <li>✓ Pagination dots for slide indication</li>
                                <li>✓ Bank offer badges (ICICI, IDFC, SBI)</li>
                                <li>✓ Responsive design with proper spacing</li>
                                <li>✓ Smooth transitions and animations</li>
                            </ul>
                        </div>

                        <div className="border-t pt-4">
                            <h3 className="font-semibold text-lg mb-2">Usage Example</h3>
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                {`import { HeroSlider } from './components/HeroSlider';

// Default variant (iPad Pro)
<HeroSlider />

// Specific variant
<HeroSlider variant="hero-banner-02" />

// MacBook Pro variant
<HeroSlider variant="hero-banner-03" />`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSliderDemo;
