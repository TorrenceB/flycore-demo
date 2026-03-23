import React from "react";
import { useRouter } from "next/router";
import { customers, reminders, customerLogs } from "@/app/data";

import { Profile } from "@/app/components";

const Customer = () => {
	const router = useRouter();
	const customer = customers.find((customer) => customer.id === router.query.id);

	return (
		<>
			{customer ? (
				<Profile
					customer={customer}
					reminders={reminders}
					customerLogs={customerLogs}
				/>
			) : (
				<div>User Not found: {router.query.id} </div>
			)}
		</>
	);
};

export default Customer;
