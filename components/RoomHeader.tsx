import type { Room } from "@/types/room";
import StarRating from "@/components/StarRating";

interface RoomHeaderProps {
	room: Room;
}

const RoomHeader = ({ room }: RoomHeaderProps) => (
	<header className="flex flex-col gap-2">
		<h1 className="text-xl font-semibold text-neutral-900 md:text-2xl">{room.title}</h1>
		<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
			<StarRating rating={room.rating} reviewCount={room.reviewCount} />
			<p className="text-sm text-neutral-600">{room.location}</p>
		</div>
	</header>
);

export default RoomHeader;