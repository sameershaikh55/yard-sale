// IMPORTING PAGES
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</>
	);
}

export default App;
