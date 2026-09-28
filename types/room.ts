import type { Amenity } from "@/types/amenity";
import type { Host } from "@/types/host";
import type { Property } from "@/types/property";

export interface Room extends Property {
	host: Host;
	amenities: Amenity[];
	maxGuests: number;
	bedrooms: number;
	beds: number;
	bathrooms: number;
}