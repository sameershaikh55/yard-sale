import React from "react";
import bannerP from "../assets/bannerP.svg";

const Hero = () => {
	return (
		<div className="hero_container mt-4">
			<div className="page_container">
				<div className="container-fluid px-0 px-md-2">
					<div className="hero_img d-flex align-items-center">
						{/* INNER TEXT START */}
						<div className="row mx-0">
							<div className="width_set col-12 col-md-6 col-lg-12 pe-0 mt-4 mt-md-0">
								<div className="inner_text">
									<h1 className="text-white">
										The simpler way to <br />{" "}
										<span className="fw-bold">buy and sell locally!</span>
									</h1>
									<button className="mt-2 mt-md-4 border-0 px-4 py-2">
										Download App
									</button>
								</div>
							</div>

							<div className="col-10 col-sm-8 mx-auto col-md-6 img_none align-self-end ps-0 mt-3 mt-md-0">
								<img className="w-100" src={bannerP} alt="" />
							</div>
						</div>

						{/* INNER TEXT END */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
