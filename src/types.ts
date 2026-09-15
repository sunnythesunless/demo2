export type TabType = 'shop-catalog' | 'bulk-rfq' | 'checkout-orders' | 'corporate-account';

export type SubScreen = 'default' | 'tracking' | 'order-success' | 'checkout';

export interface Milestone {
  id: number;
  title: string;
  timestamp: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  badge?: string;
  location?: string;
  flightCode?: string;
  gpsVerified?: boolean;
}

export interface Parcel {
  id: string;
  cartonNumber: string;
  quantity: number;
  description: string;
  weight: number;
  sizes: string;
}

export interface OrderItem {
  id: string;
  title: string;
  subtitle: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image: string;
  badge?: string;
  specs?: string;
  isFree?: boolean;
  originalPrice?: number;
}

export interface CatalogItem {
  id: string;
  name: string;
  category: 'Healthcare' | 'Corporate' | 'Industrial' | 'Security' | 'Culinary';
  description: string;
  minOrder: number;
  retailPrice: number;
  bulkTierPrice: number;
  image: string;
  fabric: string;
  features: string[];
  inStock: boolean;
}

export interface RFQFormData {
  companyName: string;
  procurementOfficer: string;
  workEmail: string;
  contactPhone: string;
  gstin: string;
  segment: string;
  quantity: number;
  sizingSplit: {
    S: number;
    M: number;
    L: number;
    XL: number;
  };
  embroideryEnabled: boolean;
  embroideryLocation: 'Left Chest' | 'Right Sleeve' | 'Back Collar';
  uploadedFile: string;
  dispatchTimeline: 'standard' | 'express';
  fabricNotes: string;
}
