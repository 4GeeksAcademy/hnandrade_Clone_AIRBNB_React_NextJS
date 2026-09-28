import Link from "next/link";

const BackLink = () => (
	<Link className="inline-flex items-center gap-2 py-3 text-sm text-neutral-800 focus-visible:outline-2 focus-visible:outline-rose-500" href="/catalog">
		<span aria-hidden="true">←</span>
		<span>Volver al catálogo</span>
	</Link>
);

export default BackLink;