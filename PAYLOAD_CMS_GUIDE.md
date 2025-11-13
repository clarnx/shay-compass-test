# Payload CMS Integration - All Sections Editable

## Overview
All homepage sections are now fully editable through Payload CMS admin panel.

## Created Globals

### 1. Hero Section (`hero-section`)
**Location:** `/admin/globals/hero-section`

**Editable Fields:**
- Title (Main headline)
- Subtitle (Subheading)
- Background Image (Upload)
- Background Position (CSS position)

**Component:** `src/components/HeroSection.tsx`

---

### 2. About/Team Section (`about-section`)
**Location:** `/admin/globals/about-section`

**Editable Fields:**
- Title (Section heading)
- Description (Rich text content)
- Partner Companies (Array of logos with names and alt text)
- Learn More Link (URL)

**Component:** `src/components/AboutSection.tsx`

---

### 3. Neighborhood Section (`neighborhood-section`)
**Location:** `/admin/globals/neighborhood-section`

**Editable Fields:**
- Title (Section heading)
- Image (Upload main image)
- Image Alt Text (Accessibility)
- Description (Rich text content)
- Learn More Link (URL)

**Component:** `src/components/NeighborhoodSection.tsx`

---

### 4. Contact Section (`contact-section`)
**Location:** `/admin/globals/contact-section`

**Editable Fields:**
- Title (Section heading)
- Name Label
- Name Placeholder
- Email Label
- Email Placeholder
- Message Label
- Message Placeholder
- Submit Button Text

**Component:** `src/components/ContactSection.tsx`

---

### 5. Projects (Existing Collection)
**Location:** `/admin/collections/projects`

Already configured with full editing capabilities.

---

## How to Edit Content

### Step 1: Access Payload Admin
Navigate to: `http://localhost:3000/admin`

### Step 2: Edit Global Sections
1. In the left sidebar, find "Globals"
2. Click on the section you want to edit:
   - Hero Section
   - About/Team Section
   - Neighborhood Section
   - Contact Section

### Step 3: Make Changes
- Edit text fields directly
- Upload images using the media selector
- Add/remove items from arrays (like company logos)
- Use rich text editor for formatted content

### Step 4: Save
Click "Save" or "Save and Publish" to make changes live

### Step 5: View Changes
Refresh your homepage to see the updated content

---

## File Structure

```
src/
├── collections/
│   ├── HeroSection.ts          # Hero global config
│   ├── AboutSection.ts         # About global config
│   ├── NeighborhoodSection.ts  # Neighborhood global config
│   ├── ContactSection.ts       # Contact global config
│   ├── Projects.ts             # Projects collection (existing)
│   ├── Media.ts                # Media collection (existing)
│   └── Users.ts                # Users collection (existing)
├── components/
│   ├── HeroSection.tsx         # Now accepts props from CMS
│   ├── AboutSection.tsx        # Now accepts props from CMS
│   ├── NeighborhoodSection.tsx # Now accepts props from CMS
│   └── ContactSection.tsx      # Now accepts props from CMS
├── util/
│   └── payloadQueries.ts       # Added fetch functions for globals
├── app/
│   └── page.tsx                # Fetches and passes CMS data
└── payload.config.ts           # Registers all globals
```

---

## Key Features

### Fallback Support
All components have default values, so the site will work even if CMS data isn't available yet.

### Type Safety
All components use TypeScript interfaces for props.

### Performance
- All data fetched in parallel using `Promise.all()`
- Server-side rendering for optimal performance
- Proper error handling with try/catch

### Media Handling
Images uploaded through Payload CMS are automatically referenced and displayed with proper URLs.

---

## Default Content
All sections are pre-configured with sensible defaults matching your existing content. You can start editing immediately without breaking anything.

---

## Next Steps

1. **Start Payload CMS:**
   ```bash
   npm run dev
   ```

2. **Access Admin Panel:**
   Navigate to `http://localhost:3000/admin`

3. **Create/Login User:**
   If first time, create an admin user

4. **Edit Globals:**
   Go to Globals section and start editing each section

5. **Upload Images:**
   Use the Media collection to upload and manage images

6. **Preview Changes:**
   Save your edits and refresh the homepage to see changes

---

## Tips

- **Rich Text Fields:** Support for formatted text with headings, links, etc.
- **Image Uploads:** Recommended sizes:
  - Hero Background: 1920x1080px or larger
  - Neighborhood Image: 800x400px
  - Company Logos: 120x120px (square)
- **Backup:** Payload stores data in PostgreSQL - make regular backups
- **Versioning:** Payload tracks changes - you can revert if needed
