const UserMenu = () => (
	<div className="flex items-center gap-2">
		<button
			aria-label="Idioma y región"
			className="hidden size-10 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 md:inline-flex"
			type="button"
		>
			<svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="9" />
				<path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
			</svg>
		</button>
		<button
			aria-label="Menú de usuario"
			className="flex h-10 items-center gap-3 rounded-full border border-neutral-300 bg-white px-3 text-neutral-700 shadow-sm hover:shadow-md"
			type="button"
		>
			<svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
				<path d="M4 6h16M4 12h16M4 18h16" />
			</svg>
			<span className="grid size-7 place-items-center rounded-full bg-neutral-500 text-xs text-white">●</span>
		</button>
	</div>
);

export default UserMenu;