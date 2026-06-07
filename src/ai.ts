import { Ollama } from "ollama";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const ollama = new Ollama();

export async function getRecipeFromOllama(
	ingredientsArr: string[],
): Promise<string> {
	const ingredientsString = ingredientsArr.join(", ");

	const response = await ollama.chat({
		model: "gemma4:31b-cloud",
		messages: [
			{ role: "system", content: SYSTEM_PROMPT },
			{
				role: "user",
				content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
			},
		],
	});

	return response.message.content;
}
