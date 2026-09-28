import type { Property } from "@/types/property";
import PropertyCard from "@/components/PropertyCard";

interface PropertyGridProps {
	properties: Property[];
	columns?: 2;
}

const gridColumns = {
	default: "md:grid-cols-2 lg:grid-cols-3",
	2: "md:grid-cols-2",
} as const;

const PropertyGrid = ({ properties, columns }: PropertyGridProps) => {
	const columnClass = columns === 2 ? gridColumns[2] : gridColumns.default;

	return (
		<div className={`grid grid-cols-1 gap-x-6 gap-y-8 ${columnClass}`}>
			{properties.map((property) => <PropertyCard key={property.id} property={property} />)}
		</div>
	);
};

export default PropertyGrid;