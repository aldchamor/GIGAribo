export type Category = {
  id: string;
  title: string;
  icon: string;
  tone: 'categoryBlue' | 'categoryGreen' | 'categoryPeach' | 'categoryPink' | 'categoryLavender' | 'categoryYellow';
};

export type Service = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  price: number;
  provider: string;
  rating: number;
  reviews: number;
  image: 'cleaning' | 'repair';
};

export type ServiceRequest = {
  id: string;
  serviceId: string;
  createdAt: string;
  status: 'Pending checkout' | 'Placed (demo)' | 'Cancelled (demo)';
  checkout?: CheckoutDetails & { total: number };
};

export type CheckoutDetails = {
  scheduledDate: string;
  timeSlot: string;
  paymentMethod: 'Pay after service' | 'Demo card';
  promoCode: 'GIGA10' | null;
};

export type Profile = {
  name: string;
  email: string;
  phone: string;
};

export const categories: Category[] = [
  { id: 'carpentry', title: 'Carpentry', icon: 'tool', tone: 'categoryBlue' },
  { id: 'plumbing', title: 'Plumbing', icon: 'droplet', tone: 'categoryPeach' },
  { id: 'cleaning', title: 'Cleaning', icon: 'wind', tone: 'categoryPink' },
  { id: 'health', title: "Doctor's Visit", icon: 'heart', tone: 'categoryLavender' },
  { id: 'catering', title: 'Catering', icon: 'coffee', tone: 'categoryYellow' },
  { id: 'landscaping', title: 'Landscaping', icon: 'sun', tone: 'categoryGreen' },
];

export const services: Service[] = [
  {
    id: 'roofing',
    title: 'Roofing',
    subtitle: 'Roof repair / installation',
    category: 'carpentry',
    price: 2300,
    provider: 'Bicol Roof Pros',
    rating: 4.9,
    reviews: 38,
    image: 'repair',
  },
  {
    id: 'pipe-repair',
    title: 'Pipe leak repair',
    subtitle: 'Fast plumbing repair',
    category: 'plumbing',
    price: 950,
    provider: 'Naga Pipe Experts',
    rating: 4.8,
    reviews: 26,
    image: 'repair',
  },
  {
    id: 'house-cleaning',
    title: 'House cleaning',
    subtitle: 'Freshen up your home',
    category: 'cleaning',
    price: 690,
    provider: 'Happy Housekeepers',
    rating: 4.9,
    reviews: 51,
    image: 'cleaning',
  },
  {
    id: 'bathroom-cleaning',
    title: 'Bathroom cleaning',
    subtitle: 'Deep clean & sanitize',
    category: 'cleaning',
    price: 710,
    provider: 'Mrs. Pea Cleaning',
    rating: 4.7,
    reviews: 19,
    image: 'cleaning',
  },
  {
    id: 'deep-clean',
    title: 'Deep clean',
    subtitle: 'A detailed home refresh',
    category: 'cleaning',
    price: 890,
    provider: 'Happy Housekeepers',
    rating: 4.8,
    reviews: 33,
    image: 'cleaning',
  },
  {
    id: 'landscaping',
    title: 'Garden care',
    subtitle: 'Lawn & garden maintenance',
    category: 'landscaping',
    price: 1200,
    provider: 'Green Bicol Gardens',
    rating: 4.8,
    reviews: 17,
    image: 'repair',
  },
  {
    id: 'electrical',
    title: 'Home electrical',
    subtitle: 'Installation & repair',
    category: 'carpentry',
    price: 850,
    provider: 'Naga HomeWorks',
    rating: 4.9,
    reviews: 29,
    image: 'repair',
  },
];

export function getService(id: string | undefined) {
  return services.find((service) => service.id === id);
}

export function formatPrice(amount: number) {
  return `₱${amount.toLocaleString('en-PH')}`;
}

export function formatCheckoutPrice(amount: number) {
  return `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}