import type { Amenity } from "@/types/amenity";

interface AmenityItemProps {
	amenity: Amenity;
}

const AmenityItem = ({ amenity }: AmenityItemProps) => (
	<li className="flex items-center gap-3 py-2 text-sm text-neutral-800">
		<span aria-hidden="true" className="text-xl">{amenity.icon}</span>
		<span>{amenity.label}</span>
	</li>
);

export default AmenityItem;