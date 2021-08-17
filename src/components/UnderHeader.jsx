import React from "react";
import { NavLink } from "react-router-dom";

const UnderHeader = () => {
	// STICKY FUNCTIONS START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".under_header_cont");
		if (header !== null) {
			header.classList.toggle("sticky", window.scrollY > 1);
		}
	});
	// STICKY FUNCTIONS END

	return (
		<div className="under_header_cont">
			<div className="page_container">
				<div className="container-fluid">
					<ul className="d-flex justify-content-between list-unstyled mb-0 py-2">
						<li>
							<NavLink className="f14 color1 text-decoration-none fw600" to="/">
								Electronic & Media
							</NavLink>
						</li>
						<li>
							<NavLink className="f14 color1 text-decoration-none fw600" to="/">
								Home and Garden
							</NavLink>
						</li>
						<li>
							<NavLink className="f14 color1 text-decoration-none fw600" to="/">
								Clothing, Shoes & Accessories
							</NavLink>
						</li>
						<li>
							<NavLink className="f14 color1 text-decoration-none fw600" to="/">
								Baby & Kids
							</NavLink>
						</li>
						<li>
							<NavLink className="f14 color1 text-decoration-none fw600" to="/">
								Vehicles
							</NavLink>
						</li>
						<li>
							<NavLink className="f14 color1 text-decoration-none fw600" to="/">
								Toys, Games & hobbies
							</NavLink>
						</li>
						<li>
							<NavLink className="f14 color1 text-decoration-none fw600" to="/">
								Sports & Outdoors
							</NavLink>
						</li>
						<li>
							<NavLink className="f14 color1 text-decoration-none fw600" to="/">
								Cllectible & Art
							</NavLink>
						</li>
						<li>
							<NavLink className="f14 color1 text-decoration-none fw600" to="/">
								Pet Supplies
							</NavLink>
						</li>
						<li>
							<NavLink className="f14 color1 text-decoration-none fw600" to="/">
								More...
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default UnderHeader;
