import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Autocomplete from "react-autocomplete";

const Header = ({ inp, setInp }) => {
	// STICKY FUNCTIONS START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".header_container");
		if (header !== null) {
			header.classList.toggle("sticky", window.scrollY > 1);
			header.classList.toggle("shadow-sm", window.scrollY > 1);
		}
	});
	// STICKY FUNCTIONS END

	return (
		<div className="header_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
						<div className="d-flex justify-content-between align-items-center">
							<div>
								<img src={logo} alt="" />
							</div>

							<div className="d-none d-lg-block inp_container position-relative ms-4">
								<div className="d-flex">
									<Autocomplete
										className="input"
										getItemValue={(item) => item.label}
										items={[
											{ label: "Electronic & Media" },
											{ label: "Home and Garden" },
											{ label: "Clothing, Shoes & Accessories" },
											{ label: "Baby & Kids" },
											{ label: "Vehicles" },
											{ label: "Toys, Games & hobbies" },
											{ label: "Sports & Outdoors" },
											{ label: "Cllectible & Art" },
											{ label: "Pet Supplies" },
										]}
										shouldItemRender={(item, value) =>
											item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
										}
										renderItem={(item, isHighlighted) => (
											<div
												style={{
													background: isHighlighted ? "lightgray" : "white",
												}}
											>
												{item.label}
											</div>
										)}
										value={inp}
										onChange={(e) => setInp(e.target.value)}
										onSelect={(val) => setInp(val)}
										inputProps={{ placeholder: "Find service" }}
									/>
									{/* <input
										type="text"
										placeholder="Find service"
										className="py-1 f14"
										value={inp}
										onChange={(e) => setInp(e.target.value)}
									/> */}
									<button className="px-3 border-0 themeBtn text-white">
										Search
									</button>
								</div>
								<HiOutlineSearch className="search_icon" />
							</div>
						</div>
						<div className="d-none d-lg-block">
							<ul className="d-flex list-unstyled mb-0">
								<li className="ps-3 pointer">
									<NavLink
										className="color1 text-decoration-none color1"
										to="/"
									>
										About <IoIosArrowDown className="ms-1" />
									</NavLink>
								</li>
								<li className="ps-3 pointer activeSidebar">
									<NavLink
										className="color1 text-decoration-none color1"
										to="/"
									>
										Help
									</NavLink>
								</li>
								<li className="ps-3 pointer">
									<NavLink
										className="color1 text-decoration-none color1"
										to="/"
									>
										Log in
									</NavLink>
								</li>
								<li className="ps-3 pointer">
									<NavLink
										className="color1 text-decoration-none color1"
										to="/"
									>
										Favorites
									</NavLink>
								</li>
							</ul>
						</div>

						{/* HAMBURGER START */}
						<div className="d-block d-lg-none">
							<GiHamburgerMenu fontSize="1.5rem" />
						</div>
						{/* HAMBURGER END */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
