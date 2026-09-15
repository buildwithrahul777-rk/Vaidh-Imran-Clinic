export interface ClinicInfo {
  name: string;
  category: string;
  fullAddress: string;
  streetAddress: string;
  landmark: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  plusCode: string;
  phone: string;
  displayPhone: string;
  website: string;
  rating: number;
  reviewCount: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: 'stethoscope' | 'leaf' | 'shield' | 'heart-handshake' | 'compass';
  overview: string;
  discussionTopics: string[];
  approachPoints: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface PrivacyPoint {
  title: string;
  description: string;
}
