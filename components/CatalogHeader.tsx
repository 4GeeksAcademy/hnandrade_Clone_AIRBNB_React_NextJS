"use client";

import type { SortOrder } from "@/types/sort";

interface CatalogHeaderProps {
	total: number;
	sortOrder: SortOrder;
	onSortChange: (sortOrder: SortOrder) => void;
}

const CatalogHeader = ({ total, sortOrder, onSortChange }: CatalogHeaderProps) => (
	<div className="mb-5 flex items-center justify-between gap-3">
		<h1 className="text-lg font-semibold text-neutral-900">{total} alojamientos</h1>
		<label className="flex items-center gap-2 text-sm text-neutral-700">
			<span className="sr-only">Ordenar por precio</span>
			<select
				aria-label="Ordenar por precio"
				className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm"
				 onChange={(event) => onSortChange(event.target.value as SortOrder)}
				value={sortOrder}
			>
				<option value="asc">Ascendente</option>
				<option value="desc">Descendente</option>
			</select>
		</label>
	</div>
);

export default CatalogHeader;