import type { JSX } from "react";
import chefClaudeLogo from "../assets/chef-claude-icon.png";

function Header(): JSX.Element {
	return (
		<header className="flex-row h-28 flex gap-3 items-center justify-center shadow-sm">
			<img src={chefClaudeLogo} alt="Chef Claude" className="w-10.5" />
			<h1 className="text-[#141413] text-[32px]">Chef Claude</h1>
		</header>
	);
}

export default Header;
