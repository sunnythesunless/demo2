import { Milestone, Parcel, OrderItem, CatalogItem } from '../types';

export const EVERBRIGHT_LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1XQUgzj1Bh6jLPFu5JQ7ADonIqNqhTzdXb-qu_vtrcdhfaQkfHbSWckTM_h2Wpr-QGHsNJXGvrJN5MTJ6wzYlQbi7O_n2fSp2ZX-KzdA4Vp8jWDQFmZa7POpCw0N5lGi94m4-Bb-DU2qryeJRRtOPX5lT3jU872yt7adBMndhLfla4JON71WT1q0CcKQQrHU1MSu_gui81ttM5enkx9rEQ0MImQ2VGex5t1FhPxtMX3_lFlW6P2Da_kJvg';

export const USER_AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuChEThh5wwNNgHz9ImQ2QOhM6orvNrxjq6NOcnat6yPqmWnhH93xsvBEVzYUgYh8oaNPWTE7HWXQBIrZfHcLW9tmNMgsqlrG_L8mqMDV6JdvR6XdIrhJi01PJWMbpRUeuibHpsaX3ZZkBuUvNUqYmDr49SzX_tcSnMU3ezYTej6of9b52t5SJs7R2bqn78B402zeKUZbOaZR8_fmw278Ue9MQMD1_psJ_nmcq428wY8muuqdAgjw_7v';

export const SCRUBS_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1sikmwQ7oGHgFdeMza6a0RiFut25DiZUUWi30dmI3XVZye0KcvEG0MlVI2IqvS-DxjstjJLEato-YKrLtZqBH9FihuaPFqcB-Cpb4ParF53XZ7sORRaCvHngkq_gdpY9xZAcNvZo8OvHVIKH5RUjY5T_2kPgsiVUcQjiB_obLnR5dHhfdem0eHUkoV_PpgOB1pt51ULwLfkA_3IZtDykrblDtJDJJx93x9HHYU05pMeMFLHui566Z';

export const EMBROIDERY_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaU4xjax5wL6z8pn_Fdov7dbWT9bTwQPzsVDG-xGphXS4TFBUCZJBOs6zR8NsWvefdNvaiSmUYtTrbQLH3zQnteRbC0j3FKDpkF6Ar32LOylghO1twKaaryT3MX6YVnWERgAZLmpYkn5kfDFUZN_k7SYjvzHEByOzQOsvFfMLixY6nNeE0TBVMoVyyPYF5-UPGtPTqQDg35AnWiWcAL0EtlauNlo_0S60qI4uij5gsvRQRhyzFu6ZR';

export const BLUEPRINT_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK9h3ao4lOZ4za7LmqtUC5BBVeXB-YGhh47VYxjMNv4ylJ5pxzhnoMRin5H5ReFzj8jcpkb2h7M0OqCpw1bIpRF26P43eMieXPGqYBCRTLPconyH2Uq6FB5NZWpBwuGVbIrTzDNzBtSYvBGhbDUxtHS0SSRkG4ct1UAry2YgSQyU8WPhNjCdVN-I4_0lVoBZX-T-0O091G2XZWwIXbsaxP_PpfCEpWjS4pXzTobXc8QnssBgj_oROH';

export const CONSIGNMENT_MILESTONES: Milestone[] = [
  {
    id: 1,
    title: 'Order Placed & Advance Confirmed',
    timestamp: 'Mar 30, 11:42 AM',
    description: 'GST PO Verified (#PO-77291) • Payment Gate Cleared',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Artwork & Custom Embroidery QC',
    timestamp: 'Mar 31, 02:15 PM',
    description: 'Left Chest & Sleeve Digitized Seal Approved by Client',
    badge: 'Digital Proof Signed',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Production & Industrial Packaging',
    timestamp: 'Apr 01, 05:30 PM',
    description: 'Everbright Textile Hub 4, Surat • Box Seal #99281',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Shipped via BlueDart Cargo',
    timestamp: 'Today, 09:10 AM',
    description: 'Bhiwandi Sorting Center ➔ En route Mumbai Central Gateway',
    location: 'Mumbai Central Air Cargo Gateway Hub #04. Bagged for secondary sorting.',
    flightCode: 'Express Freight #BD-449',
    gpsVerified: true,
    status: 'active',
  },
  {
    id: 5,
    title: 'Delivered to Customer Premises',
    timestamp: 'Est. Apr 05, 02:00 PM',
    description: 'Signature verification required at Gate 3 Receiving Dock',
    status: 'upcoming',
  },
];

export const ORDER_PARCELS: Parcel[] = [
  {
    id: 'C1',
    cartonNumber: 'Carton #EB-01',
    quantity: 60,
    description: 'Navy Blue Scrub Sets (30 M, 30 L) • Left Emblem',
    weight: 25.0,
    sizes: '30 M, 30 L',
  },
  {
    id: 'C2',
    cartonNumber: 'Carton #EB-02',
    quantity: 40,
    description: 'Navy Blue Scrub Sets (20 S, 20 XL) • Left Emblem',
    weight: 17.5,
    sizes: '20 S, 20 XL',
  },
];

export const CURRENT_ORDER_ITEMS: OrderItem[] = [
  {
    id: 'item-1',
    title: 'Medical Pro Anti-Microbial Scrubs',
    subtitle: 'Navy Blue • Multi-Pocket Tailored',
    quantity: 100,
    unitPrice: 720,
    totalPrice: 72000,
    image: SCRUBS_IMAGE_URL,
    badge: '2 Packs (100 Sets Total)',
  },
  {
    id: 'item-2',
    title: 'Custom Chest Embroidery (Apex Cross)',
    subtitle: 'Left Chest • Vector DST File Verified',
    quantity: 100,
    unitPrice: 0,
    totalPrice: 0,
    originalPrice: 3500,
    image: EMBROIDERY_IMAGE_URL,
    badge: '100 Pcs Applied',
    isFree: true,
  },
];

export const CATALOG_PRODUCTS: CatalogItem[] = [
  {
    id: 'cat-1',
    name: 'Medical Pro Anti-Microbial Scrub Set',
    category: 'Healthcare',
    description: 'Silver-ion infused 4-way stretch fabric with anti-static and fluid barrier coating. Autoclave resistant.',
    minOrder: 50,
    retailPrice: 1000,
    bulkTierPrice: 720,
    image: SCRUBS_IMAGE_URL,
    fabric: '72% Poly / 21% Rayon / 7% Spandex (220 GSM)',
    features: ['Fluid Repellent', 'Anti-Microbial', '9-Pocket Utility', 'Fade Resistant'],
    inStock: true,
  },
  {
    id: 'cat-2',
    name: 'Executive Tailored Oxford Blazer & Shirt Set',
    category: 'Corporate',
    description: 'Wrinkle-resistant pinpoint Oxford with structured Italian wool-blend blazer for corporate teams.',
    minOrder: 25,
    retailPrice: 2400,
    bulkTierPrice: 1650,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    fabric: '65% Combed Cotton / 35% Poly Oxford (190 GSM)',
    features: ['Easy-Iron Finish', 'Breathable Weave', 'Reinforced Collar', 'Dual Vent'],
    inStock: true,
  },
  {
    id: 'cat-3',
    name: 'EN ISO 20471 High-Vis Industrial Boiler Suit',
    category: 'Industrial',
    description: 'Heavy duty 300 GSM drill with 3M Scotchlite reflective bands and flame-retardant industrial wash finish.',
    minOrder: 30,
    retailPrice: 1850,
    bulkTierPrice: 1290,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    fabric: '100% Cotton Drill with Proban FR finish (300 GSM)',
    features: ['EN ISO 20471', 'Triple Needle Stitch', 'Knee Pad Pockets', 'Arc Flash Safe'],
    inStock: true,
  },
  {
    id: 'cat-4',
    name: 'Master Chef Double-Breasted CoolVent Tunic',
    category: 'Culinary',
    description: 'Lightweight poly-cotton with moisture-wicking back mesh panels and reversible hand-rolled cloth buttons.',
    minOrder: 40,
    retailPrice: 1200,
    bulkTierPrice: 840,
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
    fabric: '60% Cotton / 40% Polyester Twill (180 GSM)',
    features: ['CoolVent Back', 'Thermometer Pocket', 'Stain Release', 'Double Breasted'],
    inStock: true,
  },
  {
    id: 'cat-5',
    name: 'Tactical Ripstop Patrol Combat Uniform',
    category: 'Security',
    description: 'Teflon-treated ripstop combat trouser and epaulette shirt combo designed for round-the-clock facility security.',
    minOrder: 50,
    retailPrice: 1650,
    bulkTierPrice: 1150,
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80',
    fabric: '65% Polyester / 35% Cotton Ripstop (240 GSM)',
    features: ['Teflon Coated', 'Gusseted Crotch', 'Badge Tab Holders', 'Cargo Storage'],
    inStock: true,
  },
];
