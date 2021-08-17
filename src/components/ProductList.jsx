import React from "react";
import ProductCard from "./card/ProductCard";

const ProductList = () => {
	return (
		<div className="product_list_container mt-5">
			<div className="page_container">
				<div className="container-fluid">
					<h2 className="head text-center color1 fw-bolder">
						Find what you need
					</h2>

					{/* PRODUCT LIST START */}
					<div className="product_list mt-4">
						{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
							return (
								<div className="product">
									<ProductCard />
								</div>
							);
						})}
					</div>
					{/* PRODUCT LIST END */}

					<div className="d-flex justify-content-center mt-4">
						<button className="themeBtn border-0 px-4 py-2 text-white rounded-1">
							See More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductList;
