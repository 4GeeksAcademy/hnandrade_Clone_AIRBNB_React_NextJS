import Link from "next/link";
import type { Property } from "@/types/property";
import StarRating from "@/components/StarRating";
import { formatPrice } from "@/utils/format";

interface PropertyCardProps {
	property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => (
	<Link className="group block min-w-0 text-neutral-800" href={`/rooms/${property.id}`}>
		<div className="relative grid aspect-[4/3] w-full place-items-center overflow-hidden rounded-xl bg-neutral-200 text-sm text-neutral-500">
			<span>{property.images[0] ?? "Foto 1"}</span>
		</div>
		<div className="mt-3 flex items-start justify-between gap-3">
			<div className="min-w-0">
				<h2 className="truncate text-sm font-semibold">{property.title}</h2>
				<p className="mt-1 truncate text-sm text-neutral-500">{property.location}</p>
				<p className="mt-1 text-sm">
					<span className="font-semibold">${formatPrice(property.pricePerNight)} MXN</span> por noche
				</p>
			</div>
			<StarRating rating={property.rating} />
		</div>
	</Link>
);

export default PropertyCard;