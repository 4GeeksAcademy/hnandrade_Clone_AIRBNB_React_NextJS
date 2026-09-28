"use client";

import dynamic from "next/dynamic";
import MapPlaceholder from "@/components/MapPlaceholder";
import type { Property } from "@/types/property";

interface CatalogMapProps {
	properties: Property[];
}

const PropertyMap = dynamic(() => import("@/components/PropertyMap"), {
	ssr: false,
	loading: () => <MapPlaceholder />,
});

const CatalogMap = ({ properties }: CatalogMapProps) => <PropertyMap properties={properties} />;

export default CatalogMap;