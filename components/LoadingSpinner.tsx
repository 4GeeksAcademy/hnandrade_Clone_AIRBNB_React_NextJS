interface LoadingSpinnerProps {
	label?: string;
}

const LoadingSpinner = ({ label = "Cargando alojamientos..." }: LoadingSpinnerProps) => (
	<div aria-live="polite" className="flex flex-col items-center justify-center gap-3 py-16" role="status">
		<span aria-hidden="true" className="size-8 animate-spin rounded-full border-4 border-neutral-200 border-t-rose-500" />
		<span className="text-sm text-neutral-600">{label}</span>
	</div>
);

export default LoadingSpinner;