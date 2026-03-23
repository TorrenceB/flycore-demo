import React from "react";

import type { CustomerLog } from "@/app/types";
import { MoreHoriz } from "@mui/icons-material";

interface Props {
	log: CustomerLog;
}

const ActivityRow = ({ log }: Props) => {
	return (
		<>
			<div className="grid grid-cols-4 gap-4">
				<div className="flex flex-col gap-2 col-span-3">
					<div className="flex gap-2">
						<b>{log.title}</b> - <p className="opacity-70">{log.author}</p>
					</div>
					<div className="flex">
						<p className="opacity-70">{log.message}</p>
					</div>
				</div>
				<div className="flex flex-col items-end gap-2">
					<div className="flex items-end gap-2">
						<p>{log.date.toDateString()}</p>
						<MoreHoriz />
					</div>
				</div>
			</div>

			<hr className="text-fc-gray" />
		</>
	);
};

export default ActivityRow;
