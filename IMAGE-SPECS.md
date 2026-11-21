# Image Delivery Specifications - Juraan Portfolio

**Client**: Juraan
**Project**: Sculpture Portfolio Website
**Date**: December 2025

---

## Critical Images Needed (Exhibition Section)

These images are causing layout issues and need to be replaced with properly cropped versions.

### 1. at-expo-sculpture (Hero Image)

**Desktop Version** (`at-expo-sculpture-desktop.JPG`):

- **Dimensions**: 1600 x 1000px (16:10 landscape)
- **Crop**: Landscape orientation, focus on sculpture
- **Format**: JPG, max 500KB

**Mobile Version** (`at-expo-sculpture-mobile.JPG`):

- **Dimensions**: 1080 x 1440px (3:4 portrait)
- **Crop**: Portrait orientation, same subject but cropped for vertical
- **Format**: JPG, max 500KB

---

### 2. crowd-1 (Exhibition Opening)

**Desktop Version** (`crowd-1-desktop.JPG`):

- **Dimensions**: 1080 x 1350px (4:5 portrait)
- **Crop**: Portrait orientation showing crowd
- **Format**: JPG, max 400KB

**Mobile Version** (`crowd-1-mobile.JPG`):

- **Dimensions**: 1080 x 1350px (4:5 portrait) - same crop
- **Crop**: Can be same as desktop
- **Format**: JPG, max 400KB

---

### 3. musician (Traditional Musician)

**Desktop Version** (`musician-desktop.JPG`):

- **Dimensions**: 1080 x 1350px (4:5 portrait)
- **Crop**: Portrait orientation, musician in frame
- **Format**: JPG, max 400KB

**Mobile Version** (`musician-mobile.JPG`):

- **Dimensions**: 1080 x 1350px (4:5 portrait) - same crop
- **Crop**: Can be same as desktop
- **Format**: JPG, max 400KB

---

### 4. god-and-devil (Exhibition Space)

**Desktop Version** (`god-and-devil-desktop.JPG`):

- **Dimensions**: 1920 x 1080px (16:9 landscape)
- **Crop**: Wide landscape showing both sculptures
- **Format**: JPG, max 600KB

**Mobile Version** (`god-and-devil-mobile.JPG`):

- **Dimensions**: 1080 x 1440px (3:4 portrait)
- **Crop**: Portrait crop focusing on one sculpture or tighter framing
- **Format**: JPG, max 500KB

---

## Current Images (Can Keep)

These are working fine:

- `crowd-2.JPG` - already correct ratio
- `juraan-himself.JPG` - works as-is

---

## Image Preparation Guidelines

1. **Cropping**:
   - Desktop landscape = wider, cinematic framing
   - Mobile portrait = tighter, vertical framing
   - Same subject, different composition

2. **Quality**:
   - Export at 85-90% JPG quality
   - No watermarks
   - sRGB color space

3. **File Naming**:
   - Use EXACT names listed above
   - Case sensitive (use .JPG not .jpg)

4. **Delivery**:
   - Upload to shared folder or send via WeTransfer
   - All 8 images (4 desktop + 4 mobile versions)

---

## Technical Notes

- Images will be lazy-loaded for performance
- Desktop images load on screens 768px+
- Mobile images load on screens <768px
- `object-cover` CSS will handle minor crop adjustments
- WebP conversion happens automatically on build

---

## Questions?

Contact: Gray @ 910studio
Email: [your email]
Phone: [your number]
