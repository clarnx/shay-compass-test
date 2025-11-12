import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

// Load environment variables from .env.local BEFORE importing config
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

import { getPayload } from 'payload'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

// Import collections
import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { Projects } from './src/collections/Projects'

async function seed() {
  console.log('🌱 Starting to seed projects...\n')
  console.log('Database URI:', process.env.DATABASE_URI ? 'Set ✓' : 'Missing ✗')
  console.log('DATABASE_URI value:', process.env.DATABASE_URI?.substring(0, 50) + '...')

  // Build config inline with current env vars
  const config = buildConfig({
    admin: {
      user: 'users',
    },
    collections: [Users, Media, Projects],
    editor: lexicalEditor({}),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
      outputFile: path.resolve(process.cwd(), 'payload-types.ts'),
    },
    db: postgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URI || '',
      },
    }),
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
    sharp,
  })

  const payload = await getPayload({ config })

  try {
    console.log('📸 Uploading images...\n')

    // Upload hero images for each project
    const heroImage1 = await payload.create({
      collection: 'media',
      data: {
        alt: 'Riverside District - Waterfront Development',
      },
      filePath: path.resolve(process.cwd(), 'temp-images/project1.jpg'),
    })
    console.log('✅ Uploaded: Riverside District hero image')

    const heroImage2 = await payload.create({
      collection: 'media',
      data: {
        alt: 'Heritage Commons - Historic Building',
      },
      filePath: path.resolve(process.cwd(), 'temp-images/project2.jpg'),
    })
    console.log('✅ Uploaded: Heritage Commons hero image')

    const heroImage3 = await payload.create({
      collection: 'media',
      data: {
        alt: 'Oakmont Estates - Luxury Homes',
      },
      filePath: path.resolve(process.cwd(), 'temp-images/project3.jpg'),
    })
    console.log('✅ Uploaded: Oakmont Estates hero image\n')

    console.log('🏗️  Creating projects...\n')

    // Project 1: Riverside District
    const project1 = await payload.create({
      collection: 'projects',
      data: {
        title: 'Riverside District',
        slug: 'riverside-district',
        description: 'A premier mixed-use development featuring luxury residential units and ground-floor commercial spaces along the waterfront.',
        heroImage: heroImage1.id,
        gallery: [{ image: heroImage1.id }],
        fullDescription: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Riverside District represents the pinnacle of urban living, combining sophisticated residential units with vibrant commercial spaces. This waterfront development features thoughtful architecture, premium finishes, and amenities designed for the modern professional.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'The project includes 120 residential units ranging from one to three bedrooms, alongside 15,000 square feet of retail space, creating a dynamic live-work-play environment. Each residence offers stunning river views and high-end finishes throughout.',
                  },
                ],
              },
            ],
          },
        },
        technologies: [
          { technology: 'Luxury Finishes' },
          { technology: 'Smart Home Technology' },
          { technology: 'Sustainable Design' },
          { technology: 'Mixed-Use Development' },
          { technology: 'Waterfront Location' },
        ],
        features: [
          { feature: '120 residential units with river views' },
          { feature: 'Ground-floor retail and dining establishments' },
          { feature: 'Rooftop amenity deck with grilling stations' },
          { feature: 'State-of-the-art fitness center and yoga studio' },
          { feature: 'Secured parking with EV charging stations' },
        ],
        ctaLink: '#contact',
      },
    })

    console.log('✅ Created: Riverside District')

    // Project 2: Heritage Commons
    const project2 = await payload.create({
      collection: 'projects',
      data: {
        title: 'Heritage Commons',
        slug: 'heritage-commons',
        description:
          'Historic building adaptive reuse project transforming a landmark structure into upscale commercial office space.',
        heroImage: heroImage2.id,
        gallery: [{ image: heroImage2.id }],
        fullDescription: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: "Heritage Commons breathes new life into a beloved historic landmark while preserving its architectural integrity. This adaptive reuse project converts a century-old building into 50,000 square feet of Class A office space, featuring exposed brick, original hardwood floors, and modern amenities.",
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: "The development honors the past while providing contemporary functionality for today's businesses, including tech startups and creative agencies. Every detail has been carefully considered to maintain the building's historic character while meeting modern sustainability standards.",
                  },
                ],
              },
            ],
          },
        },
        technologies: [
          { technology: 'Historic Preservation' },
          { technology: 'Adaptive Reuse' },
          { technology: 'Class A Office Space' },
          { technology: 'LEED Certified' },
          { technology: 'Downtown Location' },
        ],
        features: [
          { feature: 'Original architectural elements preserved and restored' },
          { feature: '50,000 sq ft of flexible office space' },
          { feature: 'Modern HVAC and building systems' },
          { feature: 'High-speed fiber internet infrastructure' },
          { feature: 'On-site parking and bike storage' },
        ],
        ctaLink: '#contact',
      },
    })

    console.log('✅ Created: Heritage Commons')

    // Project 3: Oakmont Estates
    const project3 = await payload.create({
      collection: 'projects',
      data: {
        title: 'Oakmont Estates',
        slug: 'oakmont-estates',
        description:
          'Exclusive single-family residential community featuring custom-designed homes on generous lots with premium amenities.',
        heroImage: heroImage3.id,
        gallery: [{ image: heroImage3.id }],
        fullDescription: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Oakmont Estates offers an unparalleled living experience in a thoughtfully planned residential community. This exclusive development features 45 custom single-family homes on spacious lots, each designed with meticulous attention to detail and quality craftsmanship.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Residents enjoy access to private amenities including a community clubhouse, resort-style pool, and landscaped walking trails, all within a secure, gated environment. The community is located in a highly-rated school district and offers easy access to shopping, dining, and entertainment.',
                  },
                ],
              },
            ],
          },
        },
        technologies: [
          { technology: 'Single-Family Homes' },
          { technology: 'Custom Design' },
          { technology: 'Gated Community' },
          { technology: 'Premium Lots' },
          { technology: 'Suburban Location' },
        ],
        features: [
          { feature: '45 custom-designed homes from 3,200 to 5,500 sq ft' },
          { feature: 'Oversized lots ranging from 0.5 to 1.2 acres' },
          { feature: 'Private community clubhouse and pool complex' },
          { feature: 'Professionally landscaped common areas' },
          { feature: 'Highly-rated school district access' },
        ],
        ctaLink: '#contact',
      },
    })

    console.log('✅ Created: Oakmont Estates')

    console.log('\n🎉 Successfully seeded 3 projects!')
    console.log('View them at: http://localhost:3000')

    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding projects:', error)
    process.exit(1)
  }
}

seed()
