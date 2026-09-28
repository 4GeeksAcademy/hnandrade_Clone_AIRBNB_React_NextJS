"use client";

import { useState } from "react";
import GuestCounter from "@/components/GuestCounter";

interface BookingCardProps {
	pricePerNight: number;
	maxGuests: number;
}

const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
	const [guests, setGuests] = useState(1);
	const formattedPrice = pricePerNight.toLocaleString("es-MX");

	return (
		<aside className="rounded-xl border border-neutral-200 bg-white p-5 shadow-md md:sticky md:top-24 md:self-start">
			<p className="mb-5 text-xl font-semibold text-neutral-900">${formattedPrice} MXN <span className="text-sm font-normal">por noche</span></p>
			<div className="space-y-5">
				<GuestCounter max={maxGuests} min={1} onChange={setGuests} value={guests} />
				<button className="w-full rounded-lg bg-neutral-900 px-4 py-3 font-semibold text-white hover:bg-neutral-700" type="button">
					Reservar
				</button>
			</div>
		</aside>
	);
};

export default BookingCard;