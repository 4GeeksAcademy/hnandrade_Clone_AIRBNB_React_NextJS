export interface Property {
	id: string;
	title: string;
	location: string;
	pricePerNight: number;
	rating: number;
	reviewCount: number;
	category: string;
	images: string[];
	coordinates: { lat: number; lng: number };
}