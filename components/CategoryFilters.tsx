import type { CategoryOption } from "@/types/category";
import CategoryChip from "@/components/CategoryChip";

interface CategoryFiltersProps {
	categories: CategoryOption[];
	activeCategory: string;
	onCategoryChange: (category: string) => void;
}

const CategoryFilters = ({ categories, activeCategory, onCategoryChange }: CategoryFiltersProps) => (
	<nav aria-label="Categorías" className="border-b border-neutral-200 bg-white px-4">
		<div className="flex flex-nowrap gap-6 overflow-x-auto">
			{categories.map((category) => (
				<CategoryChip
					active={category.id === activeCategory}
					category={category}
					key={category.id}
					onSelect={onCategoryChange}
				/>
			))}
		</div>
	</nav>
);

export default CategoryFilters;