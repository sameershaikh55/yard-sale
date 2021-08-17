import React from "react";

const Hero = () => {
	return (
		<div className="hero_container mt-4">
			<div className="page_container">
				<div className="container-fluid">
					<div className="hero_img d-flex align-items-center">
						{/* INNER TEXT START */}

						<div className="inner_text">
							<h1 className="text-white">
								The simpler way to <br />{" "}
								<span className="fw-bold">buy and sell locally!</span>
							</h1>
							<button className="mt-4 border-0 px-4 py-2">Download App</button>
						</div>

						{/* INNER TEXT END */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
