import React from "react";

import { Avatar } from "@mui/material";

interface Props {
	firstName: string;
	lastName: string;
}

const Header = ({ firstName, lastName }: Props) => {
	const bgcolor = "#f3eb5d";
	const color = "#181a27";
	const fontSize = "2rem";

	const firstInitial = firstName.charAt(0);
	const lastInitial = lastName.charAt(0);

	return (
		<div className="grid grid-cols-2 gap-4 p-4 items-end bg-gray-50 rounded-md">
			<div className="flex flex-col gap-2">
				<Avatar sx={{ bgcolor, color, fontSize, width: 72, height: 72 }}>
					{firstInitial}
					{lastInitial}
				</Avatar>
				<h1 className="font-bold text-4xl">
					{firstName} {lastName}
				</h1>
			</div>
		</div>
	);
};

export default Header;
