import type { JSX } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App(): JSX.Element {
	return (
		<>
			<Header />
			<Main />
		</>
	);
}

export default App;
