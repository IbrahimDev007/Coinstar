import React, { useState } from "react";
//component
export default function Form() {
	const [allValues, setAll] = useState({
		name: "",
		email: "",
		pass: "",
		nameerr: "",
		passerr: "",
		emailerr: "",
	});
	const [isloading, setisloading] = useState(false);
	//valide function
	let valide = () => {
		let nameerr = "";
		let passerr = "";
		let emailerr = "";

		if (!allValues?.name) {
			nameerr = "your name invalid";
		}
		if (!allValues?.email?.includes("@")) {
			emailerr = "your Email invalid";
		}
		if (!allValues?.pass?.match(1)) {
			passerr = "your pass invalid";
		}
		if (nameerr || emailerr || passerr) {
			let newValue = {...allValues, nameerr: nameerr, emailerr: emailerr, passerr: passerr };
			setAll(newValue);
			return false;
		}
		return true;
	};
	//Onchange handaler
	const handalChange = (e) => {
		setAll({ ...allValues, [e.target.name]: e.target.value });
	};
	//Onsubmit handaler
	const handalSubmit = (e) => {
		e.preventDefault();

		const NewValide = valide();
		console.log(NewValide);
		if (NewValide) {
			console.log(allValues);
      setAll({...allValues,nameerr: "",
      passerr: "",
      emailerr: "",})
			setisloading(true);
		} else {
			console.log(allValues);
		}
	};

	return (
		<form onSubmit={handalSubmit}>
			<div>
				Name:{" "}
				<input
					placeholder="name"
					type="text"
					name="name"
					value={allValues.name}
					onChange={handalChange}
				/>
				<div>{allValues.nameerr}</div>
				<div>
					Email:{" "}
					<input
						placeholder="email"
						type="text"
						name="email"
						onChange={handalChange}
						value={allValues.email}
					/>
				</div>
				<div>{allValues.emailerr}</div>
				<div>
					password:{" "}
					<input
						placeholder="password"
						type="password"
						name="pass"
						onChange={handalChange}
						value={allValues.pass}
					/>
				</div>
				<div>{allValues.passerr}</div>
			</div>
			<input type="submit" value="Submit" />
		</form>
	);
}
