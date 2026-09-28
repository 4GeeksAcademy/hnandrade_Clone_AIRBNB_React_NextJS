interface EmptyStateProps {
	query: string;
}

const EmptyState = ({ query }: EmptyStateProps) => (
	<div className="mx-auto flex max-w-md flex-col items-center gap-2 py-16 text-center">
		<h2 className="text-lg font-semibold text-neutral-900">No encontramos alojamientos</h2>
		<p className="text-sm text-neutral-600">
			{query.trim() ? `Prueba con otra búsqueda en lugar de “${query}”.` : "Prueba con otra categoría."}
		</p>
	</div>
);

export default EmptyState;