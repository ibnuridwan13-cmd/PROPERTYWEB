# 182 PROPERTY - API Contracts

## Overview
Website bisnis properti & interior 182 PROPERTY untuk keluarga Indonesia.

## Mock Data Location
`/app/frontend/src/data/mock.js` - Contains:
- heroSlides
- propertyCategories
- promoData
- howItWorks
- testimonials
- socialProof
- beforeAfter
- teamMembers
- faqData
- serviceAreas
- contactInfo
- trustBadges

## Backend API Endpoints

### 1. Lead Capture (Contact Form)
**POST** `/api/leads`
- Purpose: Store lead submissions from contact form
- Request Body:
```json
{
  "name": "string",
  "whatsapp": "string",
  "category": "string"
}
```
- Response:
```json
{
  "id": "string",
  "name": "string",
  "whatsapp": "string",
  "category": "string",
  "created_at": "datetime",
  "status": "new"
}
```

### 2. Get All Leads (Admin)
**GET** `/api/leads`
- Purpose: Retrieve all leads for admin
- Response: Array of lead objects

### 3. Promo Data (Optional - for dynamic updates)
**GET** `/api/promo`
- Purpose: Get current promo data
- Response: Promo object

**PUT** `/api/promo` (Admin)
- Purpose: Update promo data

## MongoDB Collections
- `leads` - Store form submissions
- `promos` - Store promo data (optional)

## Frontend Integration
- LeadCaptureSection.jsx will POST to `/api/leads`
- On success: redirect to WhatsApp + show toast
- On error: show error toast
