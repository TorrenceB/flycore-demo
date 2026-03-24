import React from "react";

import { Header, Manage, Properties, Goals, Activity, Reminders } from ".";
import { Customer, Reminder, CustomerLog } from "@/app/types";

interface Props {
	customer: Customer;
	reminders: Reminder[];
	customerLogs: CustomerLog[];
}

const Profile = ({ customer, reminders, customerLogs }: Props) => {
	const firstName: string =
		customer.fields.find((field) => field.id === "1")?.value?.toString() ?? "";
	const lastName: string =
		customer.fields.find((field) => field.id === "2")?.value?.toString() ?? "";

	return (
		<div className="flex flex-col gap-4 my-12 m-auto w-3/4 h-full p-4">
			<Reminders reminders={reminders} />
			<div className="card">
				<Header firstName={firstName} lastName={lastName} />
				<Manage />
				<Properties fields={customer.fields} />
				<Goals />
				<Activity activity={customerLogs} />
			</div>
		</div>
	);
};

export default Profile;
