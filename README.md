# Chef Ollama

A React app that generates recipe suggestions based on ingredients you have using [Ollama](https://github.com/ollama/ollama).

## How It Works

1. Enter the ingredients you have available
2. Click "Generate Recipe"
3. Ollama generates a recipe based on your ingredients

## Requirements

- [Ollama](https://github.com/ollama/ollama) installed and running locally
- Node.js & pnpm

## Getting Started

```bash
# Install dependencies
pnpm install

# Make sure Ollama is running
ollama serve

# Start development server
pnpm dev
```

## Project Structure

```
src/
├── main.tsx       # Entry point
├── App.tsx        # Main app component
├── ai.ts          # Ollama AI integration
├── style.css      # Global styles (Tailwind)
├── components/
│   ├── Header.tsx         # App header
│   ├── IngredientsList.tsx # Ingredients input
│   ├── Main.tsx           # Main content
│   └── OllamaRecipe.tsx   # Recipe display
└── assets/        # Static assets
```

## Tech Stack

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Vite](https://vite.dev/) - Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [Ollama](https://github.com/ollama/ollama) - Local AI model
- [React Markdown](https://github.com/remarkjs/react-markdown) - Render Markdown responses

## Example

**Input:**
```
chicken, garlic, soy sauce, rice
```

**Output:**
```markdown
## Garlic Soy Chicken with Rice

### Ingredients
- 500g chicken breast
- 4 cloves garlic, minced
- 3 tbsp soy sauce
- 1 cup rice
- 1 tbsp sesame oil
- Green onions for garnish

### Instructions
1. Cook rice according to package instructions...
```

## Troubleshooting

### Ollama not connecting?
Make sure Ollama is running:
```bash
ollama serve
```

### Model not found?
Pull the required model:
```bash
ollama pull gemma4:31b-cloud
```

## License

MIT
