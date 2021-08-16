import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";

const Header = () => {
	return (
		<div className="header_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
						<div className="d-flex justify-content-between align-items-center">
							<div>
								<img src={logo} alt="" />
							</div>
							<div className="inp_container position-relative ms-3">
								<div className="d-flex">
									<input
										type="text"
										placeholder="Find service"
										className="py-1"
									/>
									<button className="px-3 border-0 themeBtn text-white">
										Search
									</button>
								</div>
								<HiOutlineSearch className="search_icon" />
							</div>
						</div>
						<div>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
