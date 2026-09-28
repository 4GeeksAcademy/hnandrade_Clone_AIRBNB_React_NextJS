"use client";

import type { CategoryOption } from "@/types/category";

interface CategoryChipProps {
	category: CategoryOption;
	active: boolean;
	onSelect: (category: string) => void;
}

const CategoryChip = ({ category, active, onSelect }: CategoryChipProps) => (
	<button
		aria-pressed={active}
		className={`flex shrink-0 flex-col items-center gap-2 border-b-2 px-2 py-3 text-xs ${active ? "border-neutral-800 text-neutral-900" : "border-transparent text-neutral-500 hover:text-neutral-800"}`}
		onClick={() => onSelect(category.id)}
		type="button"
	>
		<span aria-hidden="true" className="text-2xl">{category.icon}</span>
		<span className="whitespace-nowrap">{category.label}</span>
	</button>
);

export default CategoryChip;