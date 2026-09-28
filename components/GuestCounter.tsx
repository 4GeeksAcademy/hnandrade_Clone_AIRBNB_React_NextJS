"use client";

interface GuestCounterProps {
	value: number;
	min: number;
	max: number;
	onChange: (value: number) => void;
}

const GuestCounter = ({ value, min, max, onChange }: GuestCounterProps) => (
	<div>
		<p className="mb-2 text-sm font-medium text-neutral-800">Huéspedes</p>
		<div className="flex items-center justify-between">
			<button aria-label="Reducir huéspedes" className="grid size-10 place-items-center rounded-full border border-neutral-300 text-lg disabled:opacity-40" disabled={value <= min} onClick={() => onChange(Math.max(min, value - 1))} type="button">−</button>
			<output aria-live="polite" className="min-w-8 text-center text-sm font-medium">{value}</output>
			<button aria-label="Aumentar huéspedes" className="grid size-10 place-items-center rounded-full border border-neutral-300 text-lg disabled:opacity-40" disabled={value >= max} onClick={() => onChange(Math.min(max, value + 1))} type="button">+</button>
		</div>
	</div>
);

export default GuestCounter;