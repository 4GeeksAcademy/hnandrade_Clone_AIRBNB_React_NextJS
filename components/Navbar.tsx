import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import UserMenu from "@/components/UserMenu";

interface NavbarProps {
	query?: string;
	onQueryChange?: (query: string) => void;
}

const Navbar = ({ query, onQueryChange }: NavbarProps) => {
	return (
		<header className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-neutral-100 bg-white px-4 py-3 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-6">
			<Logo />
			<div className="justify-self-end md:col-start-3 md:row-start-1">
				<UserMenu />
			</div>
			<div className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1">
				<SearchBar query={query} onQueryChange={onQueryChange} />
			</div>
		</header>
	);
};

export default Navbar;