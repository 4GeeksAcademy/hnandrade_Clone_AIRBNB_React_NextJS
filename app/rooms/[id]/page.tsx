"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AmenitiesList from "@/components/AmenitiesList";
import BackLink from "@/components/BackLink";
import BookingCard from "@/components/BookingCard";
import HostInfo from "@/components/HostInfo";
import LoadingSpinner from "@/components/LoadingSpinner";
import Navbar from "@/components/Navbar";
import RoomGallery from "@/components/RoomGallery";
import RoomHeader from "@/components/RoomHeader";
import { rooms } from "@/data/rooms";
import type { Room } from "@/types/room";

const RoomDetailPage = () => {
	const { id } = useParams<{ id: string }>();
	const [room, setRoom] = useState<Room | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setRoom(rooms.find((candidate) => candidate.id === id) ?? null);
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, [id]);

	if (isLoading) {
		return <><Navbar /><main className="px-4"><LoadingSpinner /></main></>;
	}

	if (!room) {
		return (
			<>
				<Navbar />
				<main className="mx-auto max-w-7xl px-4 py-4">
					<BackLink />
					<p className="py-12 text-center text-lg font-semibold text-neutral-800">Habitación no encontrada</p>
				</main>
			</>
		);
	}

	return (
		<>
			<Navbar />
			<main className="mx-auto max-w-7xl px-4 pb-10">
				<BackLink />
				<RoomGallery images={room.images} />
				<div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="space-y-4 md:col-span-2">
						<RoomHeader room={room} />
						<HostInfo host={room.host} />
						<AmenitiesList amenities={room.amenities} />
					</div>
					<BookingCard maxGuests={room.maxGuests} pricePerNight={room.pricePerNight} />
				</div>
			</main>
		</>
	);
};

export default RoomDetailPage;