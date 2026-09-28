interface StarRatingProps {
	rating: number;
	reviewCount?: number;
}

const StarRating = ({ rating, reviewCount }: StarRatingProps) => (
	<span className="inline-flex items-center gap-1 text-[13px] text-neutral-800">
		<span aria-hidden="true">★</span>
		<span>
			{rating.toFixed(1)}
			{reviewCount !== undefined ? ` · ${reviewCount} reseñas` : ""}
		</span>
	</span>
);

export default StarRating;