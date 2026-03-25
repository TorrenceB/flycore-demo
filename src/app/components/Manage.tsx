import React from "react";

import { Button } from "@mui/material";
import {
	NotificationsOutlined,
	InfoOutlined,
	EmojiEventsOutlined,
	PersonOutlined,
} from "@mui/icons-material";

const Manage = () => {
	const bgcolor = "#f3eb5d";
	const color = "#181a27";
	const width = "100%";
	const height = "3rem";
	const minWidth = "fit-content";
	const justifyContent = "start";

	const buttons = [
		{
			id: "1",
			label: "Reminders",
			icon: <NotificationsOutlined />,
		},
		{
			id: "2",
			label: "Properties",
			icon: <PersonOutlined />,
		},
		{
			id: "3",
			label: "Goals",
			icon: <EmojiEventsOutlined />,
		},
		{
			id: "4",
			label: "Activities",
			icon: <InfoOutlined />,
		},
	];

	return (
		<div className="card">
			<h1 className="font-bold text-xl">Manage</h1>

			<hr className="text-fc-gray" />

			<div className="grid grid-cols-6 grid-flow-row gap-3 h-full">
				{buttons.map((button) => (
					<Button
						key={button.id}
						startIcon={button.icon}
						sx={{ bgcolor, color, width, height, minWidth, justifyContent }}
					>
						{button.label}
					</Button>
				))}
			</div>
		</div>
	);
};

export default Manage;
