import React from "react";

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
			<UnderHeader />
			<Hero />
			<ProductList />
			<FilterItems />
			<Footer />
		</>
	);
};

export default Home;
