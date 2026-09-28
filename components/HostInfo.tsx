import type { Host } from "@/types/host";

interface HostInfoProps {
	host: Host;
}

const HostInfo = ({ host }: HostInfoProps) => (
	<section className="flex items-center gap-3 border-b border-neutral-200 py-5">
		<div aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-neutral-200 font-semibold text-neutral-700">
			{host.name.charAt(0).toUpperCase()}
		</div>
		<div>
			<p className="text-sm font-medium text-neutral-900">Anfitrión: {host.name}</p>
			<p className="text-sm text-neutral-500">{host.yearsHosting} años como anfitrión</p>
		</div>
	</section>
);

export default HostInfo;