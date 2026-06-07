import type { JSX } from "react";
import ReactMarkdown from "react-markdown";

type OllamaRecipeProps = {
	recipe: string;
};

function OllamaRecipe({ recipe }: OllamaRecipeProps): JSX.Element {
	return (
		<section>
			<h2 className="font-semibold text-3xl text-[#141413] mb-6">
				Chef Ollama Recommends:
			</h2>
			<ReactMarkdown>{recipe}</ReactMarkdown>
		</section>
	);
}

export default OllamaRecipe;
