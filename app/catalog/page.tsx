"use client";

import { useState } from "react";
import CatalogHeader from "@/components/CatalogHeader";
import CatalogMap from "@/components/CatalogMap";
import Navbar from "@/components/Navbar";
import PropertyGrid from "@/components/PropertyGrid";
import { rooms } from "@/data/rooms";
import type { SortOrder } from "@/types/sort";

const CatalogPage = () => {
	const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
	const sortedRooms = [...rooms].sort((first, second) => (
		sortOrder === "asc"
			? first.pricePerNight - second.pricePerNight
			: second.pricePerNight - first.pricePerNight
	));

	return (
		<>
			<Navbar />
			<main className="grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-2">
				<section className="min-w-0">
					<CatalogHeader onSortChange={setSortOrder} sortOrder={sortOrder} total={sortedRooms.length} />
					<PropertyGrid columns={2} properties={sortedRooms} />
				</section>
				<div className="relative z-0 h-64 overflow-hidden rounded-xl md:sticky md:top-24 md:self-start md:h-[calc(100vh-6rem)] md:rounded-2xl">
					<CatalogMap properties={sortedRooms} />
				</div>
			</main>
		</>
	);
};

export default CatalogPage;