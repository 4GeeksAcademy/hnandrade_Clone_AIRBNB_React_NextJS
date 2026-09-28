"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";
import DateRangePicker from "@/components/DateRangePicker";
import GuestCounter from "@/components/GuestCounter";
import PriceSummary from "@/components/PriceSummary";
import { getNights } from "@/utils/booking";
import { formatPrice } from "@/utils/format";

interface BookingCardProps {
	pricePerNight: number;
	maxGuests: number;
}

const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
	const [guests, setGuests] = useState(1);
	const [range, setRange] = useState<DateRange | undefined>(undefined);
	const nights = getNights(range?.from, range?.to);

	return (
		<aside className="rounded-xl border border-neutral-200 bg-white p-5 shadow-md md:sticky md:top-24 md:self-start">
			<p className="mb-5 text-xl font-semibold text-neutral-900">${formatPrice(pricePerNight)} MXN <span className="text-sm font-normal">por noche</span></p>
			<div className="space-y-5">
				<DateRangePicker onChange={setRange} range={range} />
				<GuestCounter max={maxGuests} min={1} onChange={setGuests} value={guests} />
				<button className="w-full rounded-lg bg-neutral-900 px-4 py-3 font-semibold text-white hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50" disabled={nights === 0} type="button">
					Reservar
				</button>
				<PriceSummary nights={nights} pricePerNight={pricePerNight} />
			</div>
		</aside>
	);
};

export default BookingCard;