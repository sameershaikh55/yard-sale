import React, { useState } from "react";
import Fade from "react-reveal/Fade";

// IMPORTING COMPONENTS
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import ProductList from "../components/ProductList.jsx";
import UnderHeader from "../components/UnderHeader.jsx";
import FilterItems from "../components/FilterItems.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
	// const [cat, setCat] = useState();
	const [inp, setInp] = useState();
	// console.log(cat);
	// console.log(inp);

	return (
		<>
			<Header inp={inp} setInp={setInp} />
			<Fade>
				<UnderHeader setInp={setInp} />
				<Hero />
				<ProductList />
				<FilterItems />
				<Footer />
			</Fade>
		</>
	);
};

export default Home;
