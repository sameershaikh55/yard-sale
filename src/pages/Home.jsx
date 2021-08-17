import React from "react";
import Fade from "react-reveal/Fade";

// IMPORTING COMPONENTS
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import ProductList from "../components/ProductList.jsx";
import UnderHeader from "../components/UnderHeader.jsx";
import FilterItems from "../components/FilterItems.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
	return (
		<>
			<Header />
			<Fade>
				<UnderHeader />
				<Hero />
				<ProductList />
				<FilterItems />
				<Footer />
			</Fade>
		</>
	);
};

export default Home;
