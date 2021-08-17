import React from "react";
import { NavLink } from "react-router-dom";
import share1 from "../assets/share1.svg";
import share2 from "../assets/share2.svg";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaPinterestP,
	FaTwitter,
} from "react-icons/fa";

const Footer = () => {
	const data = [
		["Shop", "How it works", "Explore", "Trust & safety", "Safe trade spots"],
		[
			"Sell",
			"Post an item",
			"Auto dealerships",
			"Terms of Service",
			"Privacy Policy",
		],
		["About", "Our story", "Careers", "Press"],
		["Help", "Help center", "Community", "Blog"],
	];

	return (
		<>
			<div className="footer_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12 col-lg-8">
								<div className="row">
									{data.map((prev, i) => {
										return (
											<div
												key={i}
												className={`col-6 col-sm-3 ${i > 1 && "mt-5"}`}
											>
												<ul className="list-unstyled mb-0">
													{prev.map((p, ind) => {
														return (
															<>
																{ind === 0 && (
																	<h6 className="fw600 text-white">{p}</h6>
																)}
																{ind !== 0 && (
																	<li className="mb-2 pointer" key={ind}>
																		<NavLink
																			className="text-white text-decoration-none"
																			to="/"
																		>
																			{p}
																		</NavLink>
																	</li>
																)}
															</>
														);
													})}
												</ul>
											</div>
										);
									})}
								</div>
							</div>
							<div className="col-md-12 col-lg-4 mx-auto mt-5 mt-lg-0 mt- text-center">
								<div className="share_cont">
									<h5 className="text-white mb-3 fw-bold">Get the app</h5>

									<div>
										<a href="">
											<img src={share1} alt="" className="me-3" />
										</a>
										<a href="">
											<img src={share2} alt="" />
										</a>
									</div>

									<div className="mt-3 share_icon_container">
										<a href="">
											<FaFacebookF className="share_icon" />
										</a>
										<a href="">
											<FaTwitter className="share_icon" />
										</a>
										<a href="">
											<FaPinterestP className="share_icon" />
										</a>
										<a href="">
											<FaLinkedinIn className="share_icon" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* COPYRIGHT START */}
			<div className="py-3">
				<h6 className="mb-0 color2 text-center">Copyright ©2021 Yard Sale</h6>
			</div>
			{/* COPYRIGHT END */}
		</>
	);
};

export default Footer;
