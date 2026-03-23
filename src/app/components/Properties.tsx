import React from "react";

import type { Field } from "@/app/types";

interface Props {
	fields: Field[];
}

const Properties = ({ fields }: Props) => {
	return (
		<div className="card">
			<h1 className="font-bold text-xl">Properties</h1>

			<hr className="text-fc-gray" />

			<div className="grid grid-cols-4 gap-4">
				{fields.map((field) => {
					return (
						<div key={field.id}>
							<p className="font-bold text-sm">{field.label}</p>
							<p>{field.value}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Properties;
