import React from "react";

import type { Goal } from "@/app/types";

interface Props {
	goal: Goal;
}

const GoalRow = ({ goal }: Props) => {
	return (
		<>
			<div className="grid grid-cols-4 gap-4">
				<div className="flex flex-col gap-2 col-span-3">
					<div className="flex gap-2">
						<b>{goal.title}</b>
					</div>
					<div className="flex">
						<p className="opacity-70">{goal.content}</p>
					</div>
				</div>
				<div className="flex flex-col items-end gap-2">
					<div className="flex items-end gap-2">
						<p>{goal.date.toDateString()}</p>
					</div>
				</div>
			</div>

			<hr className="text-fc-gray" />
		</>
	);
};

export default GoalRow;
