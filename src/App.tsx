import { useState } from "react";
import { Route } from "wouter";
import { Headline } from "./components/Headline";
import { Main } from "./views/Main";
import { User } from "./views/User";
import "./styles.scss";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Headline>
				<Route path="/" component={Main} />
				<Route path="/:id" component={User} />
			</Headline>
		</div>
	);
}

export default App;
