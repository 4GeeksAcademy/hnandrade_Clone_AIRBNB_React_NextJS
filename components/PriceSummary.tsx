import { formatPrice } from "@/utils/format";
import { getTotal } from "@/utils/booking";

interface PriceSummaryProps {
	pricePerNight: number;
	nights: number;
}

const PriceSummary = ({ pricePerNight, nights }: PriceSummaryProps) => (
	nights > 0 ? (
		<div className="space-y-3 text-sm">
			<p className="flex justify-between gap-3 text-neutral-700">
				<span>${formatPrice(pricePerNight)} × {nights} {nights === 1 ? "noche" : "noches"}</span>
				<span>${formatPrice(getTotal(pricePerNight, nights))}</span>
			</p>
			<p className="flex justify-between border-t border-neutral-200 pt-4 font-semibold text-neutral-900">
				<span>Total</span>
				<span>${formatPrice(getTotal(pricePerNight, nights))}</span>
			</p>
		</div>
	) : <p className="text-sm text-neutral-500">Selecciona tus fechas para ver el total</p>
);

export default PriceSummary;