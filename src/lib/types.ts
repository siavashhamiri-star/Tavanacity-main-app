export interface Carpet {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  vendorId: string;
  consignment?: boolean;
}

export interface Vendor {
  id: string;
  name: string;
  location: string;
  bio: string;
  specialties?: string[];
  userId: string;
  avatarUrl: string;
  isVerified?: boolean;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  vendorId: string;
  userId: string;
  reviewerName: string;
  reviewerImage?: string;
  createdAt?: any;
}
