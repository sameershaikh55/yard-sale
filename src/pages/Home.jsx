import React, { useState } from "react";
import Fade from "react-reveal/Fade";

// IMPORTING COMPONENTS
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import ProductList from "../components/ProductList.jsx";
import UnderHeader from "../components/UnderHeader.jsx";
import FilterItems from "../components/FilterItems.jsx";
import Footer from "../components/Footer.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useHooks } from "../Hooks/useHooks";

const Home = () => {
	const { isOpen, OnClick } = useHooks();
	const [inp, setInp] = useState();

	return (
		<>
			<Header isOpen={isOpen} ClickEvent={OnClick} inp={inp} setInp={setInp} />
			<Sidebar inp={inp} setInp={setInp} ClickEvent={OnClick} isOpen={isOpen} />
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
