# HeroSlider - Dynamic Banner Component

## Overview
The HeroSlider component now supports **dynamic banner arrays** where each banner can contain **multiple images**. The slider automatically cycles through all images from all banners.

## Component Interface

```typescript
export interface BannerSlide {
    id: string;           // Unique identifier for the banner
    images: string[];     // Array of image URLs/paths
}

interface HeroSliderProps {
    banners?: BannerSlide[];      // Array of banner objects
    autoSlideInterval?: number;   // Auto-slide interval in milliseconds (default: 5000)
}
```

## Usage Examples

### Basic Usage - Single Image Per Banner

```tsx
import { HeroSlider } from './components/HeroSlider';
import banner1 from './assets/banner1.png';
import banner2 from './assets/banner2.png';
import banner3 from './assets/banner3.png';

function App() {
  const banners = [
    { id: 'banner-1', images: [banner1] },
    { id: 'banner-2', images: [banner2] },
    { id: 'banner-3', images: [banner3] }
  ];

  return <HeroSlider banners={banners} />;
}
```

### Advanced Usage - Multiple Images Per Banner

```tsx
import { HeroSlider } from './components/HeroSlider';

function App() {
  const banners = [
    {
      id: 'ipad-pro',
      images: [
        '/images/ipad-pro-1.png',
        '/images/ipad-pro-2.png',
        '/images/ipad-pro-3.png'
      ]
    },
    {
      id: 'iphone-17',
      images: [
        '/images/iphone-17-1.png',
        '/images/iphone-17-2.png'
      ]
    },
    {
      id: 'macbook-pro',
      images: [
        '/images/macbook-1.png',
        '/images/macbook-2.png',
        '/images/macbook-3.png',
        '/images/macbook-4.png'
      ]
    }
  ];

  return <HeroSlider banners={banners} autoSlideInterval={3000} />;
}
```

### Custom Auto-Slide Interval

```tsx
// Slide every 3 seconds
<HeroSlider banners={banners} autoSlideInterval={3000} />

// Slide every 7 seconds
<HeroSlider banners={banners} autoSlideInterval={7000} />

// Default (5 seconds)
<HeroSlider banners={banners} />
```

## How It Works

### Image Flattening
The component flattens all images from all banners into a single array:

```
Banner 1: [img1, img2, img3]
Banner 2: [img4, img5]
Banner 3: [img6, img7, img8, img9]

Flattened: [img1, img2, img3, img4, img5, img6, img7, img8, img9]
```

### Slide Order
Images are displayed in the order they appear:
1. All images from Banner 1 (in order)
2. All images from Banner 2 (in order)
3. All images from Banner 3 (in order)
4. Loop back to Banner 1

### Navigation
- **Auto-slide**: Automatically advances every `autoSlideInterval` milliseconds
- **Manual arrows**: Click left/right arrows to navigate
- **Pagination dots**: Click any dot to jump to that specific image

## Current Implementation (App.tsx)

```tsx
import heroBanner01 from './assets/hero-ipad-pro.png';
import heroBanner02 from './assets/hero-iphone-17.png';
import heroBanner03 from './assets/hero-macbook-pro.png';

function App() {
  const bannerData = [
    {
      id: 'ipad-pro',
      images: [heroBanner01] // Add more images here
    },
    {
      id: 'iphone-17-pro',
      images: [heroBanner02] // Add more images here
    },
    {
      id: 'macbook-pro',
      images: [heroBanner03] // Add more images here
    }
  ];

  return <HeroSlider banners={bannerData} autoSlideInterval={5000} />;
}
```

## Adding More Images

### Option 1: Add to Existing Banners

```tsx
const bannerData = [
  {
    id: 'ipad-pro',
    images: [
      heroBanner01,
      heroBanner01_variant2,  // Add new image
      heroBanner01_variant3   // Add another
    ]
  },
  // ... other banners
];
```

### Option 2: Add New Banners

```tsx
import newBanner from './assets/new-banner.png';

const bannerData = [
  // ... existing banners
  {
    id: 'new-product',
    images: [newBanner]
  }
];
```

### Option 3: Load from API

```tsx
import { useState, useEffect } from 'react';

function App() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch('/api/banners')
      .then(res => res.json())
      .then(data => setBanners(data));
  }, []);

  return <HeroSlider banners={banners} />;
}
```

## Features

✅ **Dynamic banner arrays** - Add as many banners as needed  
✅ **Multiple images per banner** - Each banner can have 1+ images  
✅ **Auto-slide** - Configurable interval  
✅ **Manual navigation** - Arrow buttons  
✅ **Direct access** - Clickable pagination dots  
✅ **Smooth transitions** - Fade in/out effects  
✅ **Responsive design** - Works on all screen sizes  
✅ **TypeScript support** - Full type safety  

## Pagination Dots

The number of pagination dots equals the **total number of images** across all banners:

```
Banner 1: 3 images
Banner 2: 2 images
Banner 3: 4 images
Total dots: 9
```

Each dot represents one image in the flattened array.

## Empty State

If no banners are provided, the component shows a placeholder:

```tsx
<HeroSlider banners={[]} />
// Shows: "No banners available"
```

## Performance Considerations

### Image Loading
- All images are loaded upfront
- Consider lazy loading for many images
- Use optimized image formats (WebP, AVIF)

### Memory Usage
- Each image is rendered but hidden with opacity
- For 10+ images, consider implementing virtual scrolling

### Optimization Tips

```tsx
// 1. Preload images
const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

// 2. Use smaller images
// Resize images to 872px × 345px for optimal performance

// 3. Lazy load
// Only render visible + adjacent slides
```

## Accessibility

✅ Semantic HTML structure  
✅ Alt text with banner ID and image index  
✅ ARIA labels on navigation buttons  
✅ Keyboard navigation support  
✅ Focus indicators  

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Troubleshooting

### Images not showing?
- Check image paths are correct
- Verify images exist in assets folder
- Check browser console for 404 errors

### Slider not auto-sliding?
- Verify `autoSlideInterval` is set
- Check if `banners` array is empty
- Look for console errors

### TypeScript errors?
- Ensure banner objects match `BannerSlide` interface
- Check `id` is a string
- Verify `images` is an array of strings

## Example: E-commerce Product Showcase

```tsx
const productBanners = [
  {
    id: 'summer-sale',
    images: [
      '/banners/summer-sale-hero.jpg',
      '/banners/summer-sale-products.jpg',
      '/banners/summer-sale-discount.jpg'
    ]
  },
  {
    id: 'new-arrivals',
    images: [
      '/banners/new-arrivals-1.jpg',
      '/banners/new-arrivals-2.jpg'
    ]
  },
  {
    id: 'featured-brands',
    images: [
      '/banners/brand-apple.jpg',
      '/banners/brand-samsung.jpg',
      '/banners/brand-sony.jpg'
    ]
  }
];

<HeroSlider banners={productBanners} autoSlideInterval={4000} />
```

## Migration from Old Version

### Before (Static)
```tsx
<HeroSlider variant="hero-banner-01" />
```

### After (Dynamic)
```tsx
const banners = [
  { id: 'banner-1', images: [image1] }
];
<HeroSlider banners={banners} />
```

## Summary

The HeroSlider component is now **fully dynamic** and supports:
- ✅ Multiple banners
- ✅ Multiple images per banner
- ✅ Configurable auto-slide
- ✅ Easy to extend
- ✅ Type-safe
- ✅ Production-ready

Simply pass an array of banner objects, and the component handles the rest!
