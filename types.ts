
export enum ServiceCategory {
  ELECTRICAL = 'Electrical',
  SECURITY = 'Security',
  BIOMETRIC = 'Biometric',
  HR = 'HR Systems',
  PARKING = 'Parking'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon: string;
  image: string;
  longDescription?: string;
  features?: string[];
  ctaText?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  image: string;
}
