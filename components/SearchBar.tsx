"use client";

interface SearchBarProps {
	query?: string;
	onQueryChange?: (query: string) => void;
}

const SearchBar = ({ query, onQueryChange }: SearchBarProps) => (
	<label className="flex w-full items-center gap-3 rounded-full border border-neutral-300 bg-white px-5 py-3 shadow-sm">
		<span aria-hidden="true" className="text-lg text-neutral-500">⌕</span>
		<input
			aria-label="Buscar alojamientos"
			className="min-w-0 flex-1 bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-500"
			onChange={(event) => onQueryChange?.(event.target.value)}
			placeholder="¿A dónde quieres ir?"
			readOnly={!onQueryChange}
			value={query ?? ""}
		/>
	</label>
);

export default SearchBar;