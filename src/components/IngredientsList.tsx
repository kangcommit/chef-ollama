import type { JSX } from "react";

type IngredientsListProps = {
	ingredients: string[];
	getRecipe: () => void;
};

function IngredientsList({
	ingredients,
	getRecipe,
}: IngredientsListProps): JSX.Element {
	const ingredientsListItems = ingredients.map((ingredient) => (
		<li key={ingredient}> {ingredient}</li>
	));
	return (
		<section className="mt-12 mb-15">
			<h2 className="font-semibold text-3xl text-[#141413] mb-6">
				Ingredients on hand:
			</h2>
			<ul className="list-disc text-lg text-gray-600 leading-7 pl-6 mb-14">
				{ingredientsListItems}
			</ul>
			{ingredients.length > 3 && (
				<div className="rounded-lg bg-[#F0EFEB] shadow-xs  py-7 px-10.5 flex flex-row items-end justify-between">
					<div className="flex flex-col gap-2">
						<h3 className="font-medium text-lg text-[#141413]">
							Ready for a recipe?
						</h3>
						<p className="text-sm text-[#6B7280]">
							Generate a recipe from your list of ingredients.
						</p>
					</div>
					<button
						type="button"
						onClick={getRecipe}
						className="rounded-lg bg-[#D17557] shadow-sm font-medium text-sm text-[#FAFAF8] px-4 py-2 cursor-pointer"
					>
						Get a recipe
					</button>
				</div>
			)}
		</section>
	);
}

export default IngredientsList;
