"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import type { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import PriceMarker from "@/components/PriceMarker";
import type { Property } from "@/types/property";

interface PropertyMapProps {
	properties: Property[];
}

const mexicoCenter: LatLngExpression = [23.6345, -102.5528];

const PropertyMap = ({ properties }: PropertyMapProps) => {
	const bounds: LatLngBoundsExpression | undefined = properties.length
		? properties.map(({ coordinates }) => [coordinates.lat, coordinates.lng] as [number, number])
		: undefined;

	return (
		<MapContainer
			bounds={bounds}
			boundsOptions={{ padding: [32, 32] }}
			center={properties.length ? undefined : mexicoCenter}
			className="h-full w-full"
			zoom={properties.length ? undefined : 5}
		>
			<TileLayer
				attribution="&copy; OpenStreetMap contributors"
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{properties.map((property) => <PriceMarker key={property.id} property={property} />)}
		</MapContainer>
	);
};

export default PropertyMap;