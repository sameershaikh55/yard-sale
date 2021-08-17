import React from "react";

const FilterItems = () => {
	const data = [
		["Atlanta, GA", "Austin, TX", "Baltimore, MD", "Boston, MA", "Chicago, IL"],
		[
			"Cleveland, OH",
			"Columbus, OH",
			"Dallas, TX",
			"Denver, CO",
			"Detroit, MI",
		],
		[
			"Houston, TX",
			"Las Vegas, NV",
			"Los Angeles, CA",
			"Miami, FL",
			"Nashville, TN",
		],
		[
			"New York, NY",
			"Orlando, FL",
			"Philadelphia, PA",
			"Pittsburgh, PA",
			"Phoenix, AZ",
		],
		[
			"Portland, OR",
			"Salt Lake City, UT",
			"San Diego, CA",
			"San Francisco, CA",
			"See more...",
		],
	];

	return (
		<div className="filter_container pt-2 pb-4 mt-5">
			<div className="page_container">
				<div className="container-fluid">
					<h3 className="text-center fw600 py-4 color1">
						Filter items by citie
					</h3>

					<div className="filter_list_container">
						{data.map((prev, i) => {
							return (
								<div key={i} className="cont">
									<ul className="list-unstyled mb-0">
										{prev.map((p, ind) => {
											return (
												<li className="mb-2 pointer fw500" key={ind}>
													{p}
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterItems;
