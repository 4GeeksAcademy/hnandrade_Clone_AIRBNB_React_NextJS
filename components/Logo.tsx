import Link from "next/link";

const Logo = () => (
	<Link
		aria-label="Airbnb Clone, inicio"
		className="inline-flex items-center gap-2 text-xl font-bold text-rose-500 md:text-2xl"
		href="/"
	>
		<span aria-hidden="true">⌂</span>
		<span>airbnb</span>
	</Link>
);

export default Logo;