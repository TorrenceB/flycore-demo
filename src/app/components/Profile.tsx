import React, { ChangeEvent, useState } from "react";
import { Edit, Add } from "@mui/icons-material";

import {
	Avatar,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";
import { Properties, Goals, Activity, Reminders } from ".";
import { Customer, Reminder, CustomerLog } from "@/app/types";

interface Props {
	customer: Customer;
	reminders: Reminder[];
	customerLogs: CustomerLog[];
}

const Profile = ({ customer, reminders, customerLogs }: Props) => {
	const [options, setOptions] = useState({
		update: "",
		add: "",
	});

	const bgcolor = "#f3eb5d";
	const color = "#181a27";
	const fontSize = "2rem";
	const width = "10rem";
	const minWidth = "fit-content";

	const firstName: string =
		customer.fields.find((field) => field.id === "1")?.value?.toString() ?? "";
	const lastName: string =
		customer.fields.find((field) => field.id === "2")?.value?.toString() ?? "";

	const firstInitial = firstName.charAt(0);
	const lastInitial = lastName.charAt(0);

	const addNewOptions = ["Reminder", "Activity"];
	const updateProfileOptions = ["Customer Properties", "Goals"];

	const header = (
		<div className="flex flex-col gap-4 p-4">
			<Avatar sx={{ bgcolor, color, fontSize, width: 72, height: 72 }}>
				{firstInitial}
				{lastInitial}
			</Avatar>
			<div className="flex justify-between w-full">
				<h1 className="font-bold text-4xl">
					{firstName} {lastName}
				</h1>

				<div className="flex gap-4">
					<FormControl>
						<InputLabel sx={{ color }}>Update</InputLabel>
						<Select
							value={options.update}
							sx={{ bgcolor, color, width, minWidth }}
							IconComponent={Edit}
							onChange={(event) =>
								setOptions((prevOptions) => ({
									...prevOptions,
									update: event.target.value,
								}))
							}
						>
							{updateProfileOptions.map((option, index) => (
								<MenuItem key={index} value={option}>
									{option}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel sx={{ color }}>Add New</InputLabel>
						<Select
							value={options.add}
							sx={{ bgcolor, color, width, minWidth }}
							IconComponent={Add}
							onChange={(event) =>
								setOptions((prevOptions) => ({
									...prevOptions,
									add: event.target.value,
								}))
							}
						>
							{addNewOptions.map((option, index) => (
								<MenuItem key={index} value={option}>
									{option}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			</div>
		</div>
	);

	return (
		<div className="flex flex-col gap-4 my-12 m-auto w-3/4 h-full p-4">
			<Reminders reminders={reminders} />
			<div className="card">
				{header}
				<Properties fields={customer.fields} />
				<Goals />
				<Activity activity={customerLogs} />
			</div>
		</div>
	);
};

export default Profile;
