export interface IProperty {
  id: number;
  coverPhoto: {
    id: number;
    url: string;
  };
  price: number;
  rentFrequency: string;
  rooms: number;
  title: string;
  baths: number;
  area: number;
  agency: {
    logo: {
      id: number;
      url: string;
    };
  };
  isVerified: boolean;
  externalID: string;
  description: string;
  type: string;
  purpose: string;
  furnishingStatus: string;
  photos: { id: number; title: string; url: string }[];
  amenities: { amenities: { text: string }[] }[];
}

export interface IFilter {
  items: { name: string; value: string }[];
  placeholder: string;
  queryName: string;
}

export interface ILocation {
  id: number;
  name: string;
  externalID: string;
}
