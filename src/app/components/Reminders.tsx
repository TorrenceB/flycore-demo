import React from "react";

import { Alert, AlertTitle } from "@mui/material";
import { Reminder } from "../types";

interface Props {
	reminders: Reminder[];
}

const Reminders = ({ reminders }: Props) => {
	return (
		<div className="card">
			<h1 className="font-bold text-xl">Reminders</h1>

			{reminders &&
				reminders.length &&
				reminders.map((reminder) => {
					return (
						<Alert key={reminder.id} severity={reminder.severity} variant="outlined">
							<AlertTitle>{reminder.title}</AlertTitle>
							{reminder.message}
						</Alert>
					);
				})}
		</div>
	);
};

export default Reminders;
