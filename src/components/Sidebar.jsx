import React from "react";
import Autocomplete from "react-autocomplete";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.png";

const Sidebar = ({ inp, setInp, isOpen, ClickEvent }) => {
	return (
		<div
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<div className="logo">
				<NavLink to="/">{/* <img src={logo} alt="logo" /> */}</NavLink>
			</div>

			<ul className="list-unstyled mb-0">
				<li onClick={ClickEvent} className="ps-3 pointer mb-2">
					<NavLink className="color1 text-decoration-none color1" to="/">
						About <IoIosArrowDown className="ms-1" />
					</NavLink>
				</li>
				<li onClick={ClickEvent} className="ps-3 pointer mb-2 activeSidebar">
					<NavLink className="color1 text-decoration-none color1" to="/">
						Help
					</NavLink>
				</li>
				<li onClick={ClickEvent} className="ps-3 pointer mb-2">
					<NavLink className="color1 text-decoration-none color1" to="/">
						Log in
					</NavLink>
				</li>
				<li onClick={ClickEvent} className="ps-3 pointer mb-2">
					<NavLink className="color1 text-decoration-none color1" to="/">
						Favorites
					</NavLink>
				</li>
			</ul>

			<div className="container-fluid px-3 mt-4">
				<div className="inp_container position-relative">
					<div className="d-flex w-100 me-0">
						<div className="pe-0">
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
						</div>
						<button className="border-0 px-4 themeBtn text-white">
							Search
						</button>
					</div>
					<HiOutlineSearch className="search_icon" />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
