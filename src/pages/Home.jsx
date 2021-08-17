import React from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import UnderHeader from "../components/UnderHeader.jsx";

const Home = () => {
	return (
		<>
			<Header />
			<UnderHeader />
			<Hero />
		</>
	);
};

export default Home;
