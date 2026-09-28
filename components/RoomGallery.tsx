"use client";

import { useState } from "react";

interface RoomGalleryProps {
	images: string[];
}

const RoomGallery = ({ images }: RoomGalleryProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const imageCount = images.length;
	const currentPhoto = images[currentIndex] ?? `Foto ${currentIndex + 1}`;
	const move = (direction: -1 | 1) => {
		setCurrentIndex((index) => imageCount ? (index + direction + imageCount) % imageCount : 0);
	};

	return (
		<div className="relative mx-auto w-full overflow-hidden md:max-w-3xl md:rounded-xl">
			<div className="grid aspect-[4/3] w-full place-items-center bg-neutral-200 text-neutral-600">
				<span>{currentPhoto}</span>
			</div>
			<button aria-label="Anterior" className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl shadow" onClick={() => move(-1)} type="button">‹</button>
			<button aria-label="Siguiente" className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl shadow" onClick={() => move(1)} type="button">›</button>
			<span aria-live="polite" className="absolute bottom-3 right-3 rounded-md bg-neutral-900/75 px-2 py-1 text-xs text-white">
				{imageCount ? currentIndex + 1 : 0} / {imageCount}
			</span>
		</div>
	);
};

export default RoomGallery;