import type { JSX } from "react";

function Main(): JSX.Element {
	return (
		<main>
			<form className="mx-16 mt-17 flex flex-row gap-3 justify-center">
				<input
					type="text"
					name="ingredient"
					placeholder="e.g. oregano"
					aria-label="Add ingredient"
					className="bg-white border border-[#D1D5DB] rounded-md shadow-sm px-3 py-2 text-sm text-[#6B7280] grow min-w-37.5 max-w-100"
				/>
				<button
					type="submit"
					className="rounded-md bg-[#141413] shadow-sm py-2 px-9 font-medium text-sm text-[#FAFAF8]"
				>
					+ Add ingredient
				</button>
			</form>
		</main>
	);
}

export default Main;
