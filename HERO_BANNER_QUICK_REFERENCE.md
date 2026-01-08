# HeroSlider Component - Quick Reference

## Component Usage

```tsx
import { HeroSlider } from './components/HeroSlider';

// Variant 1: iPad Pro (Default)
<HeroSlider variant="hero-banner-01" />

// Variant 2: iPhone 17 Pro
<HeroSlider variant="hero-banner-02" />

// Variant 3: MacBook Pro
<HeroSlider variant="hero-banner-03" />
```

## Variant Comparison

| Feature | Hero Banner 01 | Hero Banner 02 | Hero Banner 03 |
|---------|----------------|----------------|----------------|
| **Product** | iPad Pro | iPhone 17 Pro | MacBook Pro |
| **Background** | Black | Beige (#F5E6D3) | Black |
| **Layout** | Centered | 3-Column | Image Left |
| **Offer** | ₹3,000 cashback | ₹4,000 flat off | ₹5,000 cashback |
| **Exchange Bonus** | - | ₹10,000 | ₹10,000 |
| **Special Feature** | AI Performance | Trade-in pricing | M5 Chip |

## Props

```typescript
interface HeroSliderProps {
    variant?: 'hero-banner-01' | 'hero-banner-02' | 'hero-banner-03';
}
```

**Default:** `'hero-banner-01'`

## Features

✅ Three distinct product banner variants  
✅ Navigation arrows with hover effects  
✅ Pagination dots (clickable)  
✅ Bank offer badges (ICICI, IDFC, SBI)  
✅ Responsive design  
✅ Smooth transitions  
✅ TypeScript support  

## Dimensions

- **Height:** 345px
- **Max Width:** 824px (content area)
- **Border Radius:** 24px
- **Navigation Buttons:** 40px × 40px
- **Arrow Icons:** 18px × 18px
- **Pagination Dots:** 2.5px × 2.5px

## Color Palette

### Variant 01 & 03 (Dark)
- Background: `#000000`
- Text: `#FFFFFF`
- Accent Yellow: Tailwind `yellow-400`
- Accent Cyan: Tailwind `cyan-400`
- Button Overlay: `rgba(255,255,255,0.1)`

### Variant 02 (Light)
- Background: `#F5E6D3`
- Text: `#000000`
- Card Background: `#FFFFFF`
- Button Overlay: `rgba(255,255,255,0.1)`

## Interactive Elements

### Navigation Arrows
- **Position:** Left & Right, vertically centered
- **Hover Effect:** Opacity increases from 10% to 20%
- **Shadow:** `0px 11px 34px 0px rgba(0,0,0,0.3)`
- **Backdrop Blur:** Medium

### Pagination Dots
- **Active:** Full opacity
- **Inactive:** 30% opacity
- **Clickable:** Yes
- **Position:** Bottom right

## State Management

```typescript
const [currentSlide, setCurrentSlide] = useState(0);

// Navigate to next slide
const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
};

// Navigate to previous slide
const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
};
```

## Assets Required

### Product Images
- `hero-ipad-pro.png` (368KB)
- `hero-iphone-17.png` (28KB)
- `hero-macbook-pro.png` (165KB)

### Bank Logos
- `bank-icici.png` (23KB)
- `bank-idfc.png` (11KB)
- `bank-sbi.png` (10KB)

### Icons
- `arrow-icon.svg` (713 bytes)

## Testing

To test all variants, use the demo page:

```tsx
import HeroSliderDemo from './HeroSliderDemo';

// Render demo page
<HeroSliderDemo />
```

The demo page includes:
- Interactive variant switcher
- Live preview
- Component documentation
- Usage examples

## Integration

Already integrated in `src/App.tsx`:

```tsx
<div className="flex flex-col xl:flex-row gap-6 justify-center max-w-[1400px] mx-auto">
  <HeroSlider variant="hero-banner-01" />
  <FeatureCards />
</div>
```

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Requirements:**
- CSS Grid & Flexbox
- Backdrop Filter
- Modern ES6+ JavaScript

## Accessibility

- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ Keyboard navigation
- ✅ Proper contrast ratios
- ✅ Interactive elements are focusable

## Performance

- ✅ Images optimized and lazy-loaded
- ✅ Minimal re-renders
- ✅ CSS transitions (GPU accelerated)
- ✅ No external dependencies

## Customization

To customize the component:

1. **Change dimensions:** Modify `h-[345px]` and `max-w-[824px]`
2. **Update colors:** Change Tailwind classes
3. **Add animations:** Extend transition classes
4. **Modify layout:** Adjust flexbox properties
5. **Add variants:** Extend the variant type and add new conditions

## Troubleshooting

### Images not loading?
- Check asset paths in imports
- Verify files exist in `src/assets/`
- Clear Vite cache: `npm run dev -- --force`

### TypeScript errors?
- Ensure variant prop matches type
- Check import paths
- Verify TypeScript version compatibility

### Styling issues?
- Confirm Tailwind CSS is configured
- Check for conflicting global styles
- Verify browser supports backdrop-filter

## Next Steps

1. **Test in browser:** Navigate to http://localhost:5173
2. **Switch variants:** Change the `variant` prop
3. **View demo:** Import and render `HeroSliderDemo`
4. **Customize:** Modify colors, spacing, or content
5. **Deploy:** Build and deploy to production

---

**Status:** ✅ Complete and Production Ready

**Last Updated:** 2026-01-08

**Component Version:** 1.0.0
