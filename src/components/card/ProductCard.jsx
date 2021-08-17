import React, { useState } from "react";
import card_img from "../../assets/card_img.svg";
import { MdLocationOn } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductCard = () => {
	const [heart, setHeart] = useState(false);

	return (
		<div className="card_container">
			<div className="img_container">
				<img className="w-100" src={card_img} alt="" />
				<div className="heart_cont pointer">
					{(!heart && (
						<FaRegHeart
							onClick={() => setHeart(!heart)}
							fontSize="1.4rem"
							color="#fff"
						/>
					)) || (
						<FaHeart
							color="#FF2424"
							onClick={() => setHeart(!heart)}
							fontSize="1.4rem"
						/>
					)}
				</div>
			</div>
			<div className="card_body">
				<p className="mb-1 d-flex align-items-center f14 color3">
					<MdLocationOn className="me-1 color3" /> Catonsville, MD
				</p>
				<h5 className="name fw600 mb-1 f18">Vendo 4 R 22 Buenas ca</h5>
				<h5 className="price fw600 color2 mb-3 f18">$350</h5>
				<button className="w-100 fw600">Buy Now</button>
			</div>
		</div>
	);
};

export default ProductCard;
