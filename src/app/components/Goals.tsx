import React from "react";

import { Goal } from ".";

import customerGoals from "@/app/data/customer-goals";

const Goals = () => {
	return (
		<div className="card h-180">
			<h1 className="font-bold text-xl">Goals</h1>

			<hr className="text-fc-gray" />

			<div className="flex flex-col gap-4 overflow-y-auto">
				{customerGoals && customerGoals.length ? (
					customerGoals.map((goal) => <Goal key={goal.id} goal={goal} />)
				) : (
					<div className="flex flex-col gap-1 p-3 my-2">
						<h2 className="font-bold">No customer goals to see here</h2>
						<p className="opacity-70 text-sm">
							To create customer goal, select Add New above
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Goals;
