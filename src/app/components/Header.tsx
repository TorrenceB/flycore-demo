import React from "react";

import { Avatar, Divider, Stack } from "@mui/material";
import {
	ChatBubbleOutline,
	EmailOutlined,
	SmsOutlined,
	DescriptionOutlined,
	FileUploadOutlined,
} from "@mui/icons-material";

interface Props {
	firstName: string;
	lastName: string;
}

const Header = ({ firstName, lastName }: Props) => {
	const bgcolor = "#f3eb5d";
	const color = "#181a27";
	const fontSize = "2.5rem";

	const firstInitial = firstName.charAt(0);
	const lastInitial = lastName.charAt(0);

	return (
		<div className="grid grid-cols-2 gap-2 p-4 items-end bg-gray-50 rounded-md">
			<div className="flex flex-col gap-6">
				<Avatar sx={{ bgcolor, color, fontSize, width: 82, height: 82 }}>
					{firstInitial}
					{lastInitial}
				</Avatar>
				<h1 className="font-bold text-4xl">
					{firstName} {lastName}
				</h1>

				<Stack
					direction="row"
					spacing={3}
					divider={<Divider orientation="vertical" flexItem />}
				>
					<ChatBubbleOutline sx={{ cursor: "pointer" }} />
					<EmailOutlined sx={{ cursor: "pointer" }} />
					<SmsOutlined sx={{ cursor: "pointer" }} />
					<DescriptionOutlined sx={{ cursor: "pointer" }} />
					<FileUploadOutlined sx={{ cursor: "pointer" }} />
				</Stack>
			</div>
		</div>
	);
};

export default Header;
