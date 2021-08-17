import React from "react";
// import { NavLink } from "react-router-dom";

const UnderHeader = ({ setInp }) => {
	return (
		<div className="under_header_cont_upper">
			<div className="under_header_cont">
				<div className="page_container">
					<div className="container-fluid">
						<ul className="list-unstyled mb-0 py-2">
							<li
								onClick={() => setInp("Electronic & Media")}
								className="f14 color1 text-decoration-none fw600 pointer"
							>
								{/* <NavLink className="f14 color1 text-decoration-none fw600" to="/"> */}
								Electronic & Media
								{/* </NavLink> */}
							</li>
							<li
								onClick={() => setInp("Home and Garden")}
								className="f14 color1 text-decoration-none fw600 pointer ms-4 ms-xl-0"
							>
								{/* <NavLink className="f14 color1 text-decoration-none fw600" to="/"> */}
								Home and Garden
								{/* </NavLink> */}
							</li>
							<li
								onClick={() => setInp("Clothing, Shoes & Accessories")}
								className="f14 color1 text-decoration-none fw600 pointer ms-4 ms-xl-0"
							>
								{/* <NavLink className="f14 color1 text-decoration-none fw600" to="/"> */}
								Clothing, Shoes & Accessories
								{/* </NavLink> */}
							</li>
							<li
								onClick={() => setInp("Baby & Kids")}
								className="f14 color1 text-decoration-none fw600 pointer ms-4 ms-xl-0"
							>
								{/* <NavLink className="f14 color1 text-decoration-none fw600" to="/"> */}
								Baby & Kids
								{/* </NavLink> */}
							</li>
							<li
								onClick={() => setInp("Vehicles")}
								className="f14 color1 text-decoration-none fw600 pointer ms-4 ms-xl-0"
							>
								{/* <NavLink className="f14 color1 text-decoration-none fw600" to="/"> */}
								Vehicles
								{/* </NavLink> */}
							</li>
							<li
								onClick={() => setInp("Toys, Games & hobbies")}
								className="f14 color1 text-decoration-none fw600 pointer ms-4 ms-xl-0"
							>
								{/* <NavLink className="f14 color1 text-decoration-none fw600" to="/"> */}
								Toys, Games & hobbies
								{/* </NavLink> */}
							</li>
							<li
								onClick={() => setInp("Sports & Outdoors")}
								className="f14 color1 text-decoration-none fw600 pointer ms-4 ms-xl-0"
							>
								{/* <NavLink className="f14 color1 text-decoration-none fw600" to="/"> */}
								Sports & Outdoors
								{/* </NavLink> */}
							</li>
							<li
								onClick={() => setInp("Cllectible & Art")}
								className="f14 color1 text-decoration-none fw600 pointer ms-4 ms-xl-0"
							>
								{/* <NavLink className="f14 color1 text-decoration-none fw600" to="/"> */}
								Cllectible & Art
								{/* </NavLink> */}
							</li>
							<li
								onClick={() => setInp("Pet Supplies")}
								className="f14 color1 text-decoration-none fw600 pointer ms-4 ms-xl-0"
							>
								{/* <NavLink className="f14 color1 text-decoration-none fw600" to="/"> */}
								Pet Supplies
								{/* </NavLink> */}
							</li>
							<li className="f14 color1 text-decoration-none fw600 pointer ms-4 ms-xl-0">
								{/* <NavLink className="f14 color1 text-decoration-none fw600" to="/"> */}
								More...
								{/* </NavLink> */}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UnderHeader;
