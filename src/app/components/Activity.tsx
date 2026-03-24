import React, { useState, useMemo } from "react";

import { MenuItem, TextField } from "@mui/material";
import type { CustomerLog } from "@/app/types";
import { ActivityRow } from ".";

interface Props {
	activity: CustomerLog[];
}

const Activity = ({ activity }: Props) => {
	const [sort, setSort] = useState("None");
	const [filter, setFilter] = useState("All");

	const filters = [
		"All",
		"Emails",
		"Calls",
		"Messages",
		"Notes",
		"Quotes",
		"Reservations",
		"Customer Updates",
	];

	const sortables = [
		"None",
		"Date (Most Recent)",
		"Date (Oldest)",
		"Instructor",
	];

	const handleFilter = (value: string = "") => {
		if (!value) {
			return;
		}

		setFilter(value);
	};
	const handleSort = (value: string = "") => {
		if (!value) {
			return;
		}

		setSort(value);
	};

	const activityLogs = useMemo(() => {
		return (
			activity &&
			activity.length &&
			[...activity]
				.filter((log) => {
					const isAll = filter === "All";
					const isEmail = filter === "Email" && log.type === "email";
					const isCall = filter === "Calls" && log.type === "call";
					const isMessage = filter === "Messages" && log.type === "message";
					const isNote = filter === "Notes" && log.type === "note";
					const isQuote = filter === "Quotes" && log.type === "quote";
					const isReservation =
						filter === "Reservations" && log.type === "reservation";
					const isCustomerUpdate =
						filter === "Customer Updates" && log.type === "customer-update";

					if (isAll) return isAll;

					return (
						isEmail ||
						isCall ||
						isMessage ||
						isNote ||
						isQuote ||
						isReservation ||
						isCustomerUpdate
					);
				})
				.sort((a, b) => {
					if (sort === "Date (Most Recent)") {
						return b.date.getTime() - a.date.getTime();
					}
					if (sort === "Date (Oldest)") {
						return a.date.getTime() - b.date.getTime();
					}
					if (sort === "Instructor") {
						return a.author.localeCompare(b.author);
					}

					return -1;
				})
				.map((log) => {
					return <ActivityRow key={log.id} log={log} />;
				})
		);
	}, [activity, sort, filter]);

	return (
		<div className="card h-180">
			<h1 className="font-bold text-xl">Activity Log</h1>

			<hr className="text-fc-gray" />

			<div className="flex gap-4 p-3 bg-gray-50 rounded-md">
				<TextField
					select
					label="Filter"
					defaultValue="All"
					style={{ width: "15rem" }}
					onChange={(event) => handleFilter(event.target.value)}
				>
					{filters &&
						filters.length &&
						filters.map((label, index) => (
							<MenuItem key={index} value={label}>
								{label}
							</MenuItem>
						))}
				</TextField>

				<TextField
					select
					label="Sort"
					defaultValue="None"
					style={{ width: "15rem" }}
					onChange={(event) => handleSort(event.target.value)}
				>
					{sortables &&
						sortables.length &&
						sortables.map((label, index) => (
							<MenuItem key={index} value={label}>
								{label}
							</MenuItem>
						))}
				</TextField>
			</div>

			<div className="flex flex-col gap-4 overflow-y-auto">
				{activityLogs && activityLogs.length ? (
					activityLogs
				) : (
					<div className="flex flex-col gap-1 p-3 my-2">
						<h2 className="font-bold">No matching logs to see here</h2>
						<p className="opacity-70 text-sm">
							Reset filters above to All or try changing selected filter to see results
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Activity;
