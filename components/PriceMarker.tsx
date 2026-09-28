"use client";

import Link from "next/link";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import type { Property } from "@/types/property";

interface PriceMarkerProps {
	property: Property;
}

const PriceMarker = ({ property }: PriceMarkerProps) => {
	const price = property.pricePerNight.toLocaleString("es-MX");
	const icon = L.divIcon({
		className: "",
		html: `<span class="rounded-full bg-white px-2 py-1 text-xs font-semibold shadow-md border border-neutral-300">$${price}</span>`,
		iconSize: [96, 28],
		iconAnchor: [48, 14],
	});

	return (
		<Marker icon={icon} position={[property.coordinates.lat, property.coordinates.lng]}>
			<Popup>
				<div className="space-y-1">
					<h2 className="font-semibold">{property.title}</h2>
					<p>${price} MXN por noche</p>
					<Link className="font-medium text-rose-600 underline" href={`/rooms/${property.id}`}>
						Ver alojamiento
					</Link>
				</div>
			</Popup>
		</Marker>
	);
};

export default PriceMarker;