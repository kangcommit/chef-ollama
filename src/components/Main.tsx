import React, { type JSX } from "react";
import { getRecipeFromOllama } from "../ai";
import IngredientsList from "./IngredientsList";
import OllamaRecipe from "./OllamaRecipe";

function Main(): JSX.Element {
	const [ingredients, setIngredients] = React.useState<string[]>([]);

	const [recipe, setRecipe] = React.useState<string>("");

	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	async function getRecipe() {
		setIsLoading((prevLoading) => !prevLoading);
		try {
			const recipeMarkDown = await getRecipeFromOllama(ingredients);
			setRecipe(recipeMarkDown);
		} finally {
			setIsLoading((prevLoading) => !prevLoading);
		}
	}

	function addIngredient(formData: FormData): void {
		const newIngredient = formData.get("ingredient");
		if (typeof newIngredient !== "string") return;
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
	}

	return (
		<main className="bg-[#FAFAF8] min-h-svh px-16">
			<form
				action={addIngredient}
				className="px-16 pt-17 flex flex-row gap-3 justify-center"
			>
				<input
					required
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

			{ingredients.length > 0 && (
				<IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
			)}

			{(isLoading || recipe) && (
				<OllamaRecipe recipe={recipe} isLoading={isLoading} />
			)}
		</main>
	);
}

export default Main;
