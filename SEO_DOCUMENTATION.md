# SEO Optimization - AMK Safety & Security Qatar

## Overview
Technical SEO improvements implemented to increase visibility in Doha, Qatar search results.

## Implemented Features

### 1. Sitemap (`/sitemap.xml`)
- Dynamic XML sitemap with all pages
- Proper priority and change frequency settings
- Location: `/src/app/sitemap.ts`
- Accessible at: `https://amk.qa/sitemap.xml`

### 2. Robots.txt (`/robots.txt`)
- Allows all search engines
- References sitemap location
- Location: `/src/app/robots.ts`
- Accessible at: `https://amk.qa/robots.txt`

### 3. Web Manifest (`/manifest.json`)
- PWA-ready configuration
- Brand colors and icons
- Location: `/src/app/manifest.ts`

### 4. Enhanced Metadata (Root Layout)
**Location:** `/src/app/layout.tsx`

Features:
- Comprehensive title templates
- Qatar/Doha-specific keywords
- Open Graph tags for social media
- Twitter Card integration
- Proper canonical URLs
- Google verification tag

### 5. Structured Data (Schema.org)
Two JSON-LD schemas added to root layout:

**LocalBusiness Schema:**
- Business name and contact info
- Physical address in Doha, Qatar
- Geo-coordinates
- Opening hours
- Service catalog
- Area served (Qatar)

**Organization Schema:**
- Company information
- Contact points
- Multi-language support (English, Arabic)

### 6. Page-Specific SEO

All pages have optimized metadata:

| Page | Title | Focus Keywords |
|------|-------|----------------|
| **Home** | AMK Safety & Security Services - Fire Protection Solutions in Doha, Qatar | fire alarm Qatar, fire protection Doha |
| **Services** | Fire Protection Services in Qatar | fire alarm installation, fire suppression Qatar |
| **Products** | Fire Safety Products Qatar - Honeywell, Simplex, Siemens | Honeywell Qatar, Simplex Doha, Siemens fire alarm |
| **About Us** | About AMK Safety & Security - Leading Fire Protection Company | AMK Safety Qatar, fire company Doha |
| **Contact** | Contact AMK Safety Qatar | contact fire protection Qatar, Doha fire safety |
| **WhatsApp** | Contact Us on WhatsApp - Instant Fire Safety Solutions | WhatsApp fire safety Qatar, instant consultation |
| **Projects** | Fire Protection Projects in Qatar | fire projects Qatar, installations Doha |

## Qatar/Doha Local SEO Elements

### Geographic Targeting
- All titles and descriptions mention "Qatar" and/or "Doha"
- LocalBusiness schema with Doha address
- Geo-coordinates: 25.2854, 51.5310 (Doha)
- Area served: Qatar country-wide
- Address: Zone 51, Maan Bin Addi St, Doha

### Local Keywords Optimized
- fire alarm system Qatar
- fire protection Doha
- fire suppression system Qatar
- fire fighting equipment Doha
- fire safety services Qatar
- [Brand] fire alarm Qatar (Honeywell, Simplex, etc.)

### Contact Information
- Phone: +974-7043-4631
- Email: info@amk.qa, sales@amk.qa
- Business hours included in schema

## Google Analytics
- Tracking ID: G-W42E2Y40LC
- Implemented on WhatsApp landing page
- Event tracking for conversions
- Page view tracking

## Next Steps for Further Optimization

### 1. Content Optimization
- Add more Qatar-specific blog posts
- Create location-specific landing pages (West Bay, Industrial Area, etc.)
- Add customer testimonials from Qatar projects

### 2. Technical
- Add Arabic language version (`hreflang` tags)
- Implement lazy loading for images
- Add breadcrumb schema
- Create FAQ schema for common questions

### 3. Off-Page SEO
- Submit to Qatar business directories
- Get listed on Google Business Profile
- Build backlinks from Qatar websites
- Register with Qatar Chamber of Commerce

### 4. Performance
- Optimize images (WebP format)
- Implement CDN
- Enable compression
- Minimize JavaScript

### 5. Local Citations
- Register business on:
  - Google Business Profile
  - Qatar Living Business Directory
  - Expatriates.com Qatar
  - Qatar Tribune Business Directory
  - Marhaba Qatar

## Testing & Validation

### Verify SEO Implementation:
1. **Sitemap:** Visit `https://amk.qa/sitemap.xml`
2. **Robots:** Visit `https://amk.qa/robots.txt`
3. **Manifest:** Visit `https://amk.qa/manifest.json`
4. **Structured Data:** Use [Google Rich Results Test](https://search.google.com/test/rich-results)
5. **Mobile-Friendly:** Use [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
6. **Page Speed:** Use [PageSpeed Insights](https://pagespeed.web.dev/)

### Submit to Search Engines:
1. **Google Search Console:** Submit sitemap
2. **Bing Webmaster Tools:** Submit sitemap
3. **Monitor:** Check indexing status regularly

## Monitoring

Track these metrics:
- Organic traffic from Qatar
- Keyword rankings for target terms
- Click-through rates (CTR)
- Conversion rate from landing pages
- WhatsApp click conversions

## Files Modified/Created

```
src/app/
├── sitemap.ts (NEW)
├── robots.ts (NEW)
├── manifest.ts (NEW)
├── layout.tsx (ENHANCED)
├── services/page.tsx (ENHANCED)
├── products/
│   ├── page.tsx (ENHANCED)
│   └── layout.tsx (NEW)
├── about-us/
│   ├── page.tsx (ENHANCED)
│   └── layout.tsx (NEW)
├── contact-us/
│   ├── page.tsx (ENHANCED)
│   └── whatsapp/
│       ├── page.tsx (ENHANCED)
│       └── layout.tsx (NEW)
└── our-projects/page.tsx (ENHANCED)
```

---

**Last Updated:** December 28, 2025  
**Maintained by:** AMK Safety & Security Services
