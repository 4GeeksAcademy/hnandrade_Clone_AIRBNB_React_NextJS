import type { Amenity } from "@/types/amenity";
import AmenityItem from "@/components/AmenityItem";

interface AmenitiesListProps {
	amenities: Amenity[];
}

const AmenitiesList = ({ amenities }: AmenitiesListProps) => (
	<section className="py-5">
		<h2 className="mb-3 text-lg font-semibold text-neutral-900">Lo que ofrece este alojamiento</h2>
		<ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2">
			{amenities.map((amenity) => <AmenityItem amenity={amenity} key={amenity.id} />)}
		</ul>
	</section>
);

export default AmenitiesList;