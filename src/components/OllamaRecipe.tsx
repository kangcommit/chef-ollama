import type { JSX } from "react";
import ReactMarkdown from "react-markdown";

type OllamaRecipeProps = {
	recipe: string;
	isLoading: boolean;
};

function OllamaRecipe({ recipe, isLoading }: OllamaRecipeProps): JSX.Element {
	return isLoading ? (
		<div className="flex items-center justify-center h-48 text-gray-500">
			<div className="text-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#141413] mx-auto mb-4"></div>
				<p>Ollama is cooking up a recipe...</p>
			</div>
		</div>
	) : (
		<section>
			<h2 className="font-semibold text-3xl text-[#141413] mb-6">
				Chef Ollama Recommends:
			</h2>
			<ReactMarkdown>{recipe}</ReactMarkdown>
		</section>
	);
}

export default OllamaRecipe;
