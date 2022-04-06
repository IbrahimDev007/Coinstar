import React, { useState } from "react";

export default function Crud() {
	const [allValues, setAll] = useState({
		name: "",
		email: "",
		number: "",
	});
	// const [joaks, setjoks] = useState('joaks')
	const onSubmitAll = (e) => {
		e.preventDefault();
		console.log(allValues);
	};
	const delatehandaler = (e) => {
		let value = {
			name: "",
			email: "",
			number: "",
		};
		setAll(value);
	};

	return (
		<div>
			<form onSubmit={onSubmitAll}>
				{/* <label>Name:</label>
<input type='text' value={Name} onChange={(e)=>setAll(e.target.value)} placeholder='TypeYourName:'/><br/>
<label>Email:</label>
<input type='email' value={joaks} onChange={(e)=>setjoks(e.target.value)}placeholder='TypeYourEmail'/><br/>
<label>Number:</label>
<input type='text' value={number} onChange={(e)=>setAll(e.target.value)}placeholder='TypeYourNumber'/><br/>
<button type='submit'>Submit</button>
</form> */}
				<label>Name:</label>
				<input
					type="text"
					placeholder="name"
					value={allValues.name}
					name="name"
					onChange={(e) =>
						setAll({ ...allValues, [e.target.name]: e.target.value })
					}
				/>
				<br />

				<label>email:</label>
				<input
					type="email"
					placeholder="email"
					value={allValues.email}
					name="email"
					onChange={(e) =>
						setAll({ ...allValues, [e.target.name]: e.target.value })
					}
				/>
				<br />
				<label>number:</label>
				<input
					type="number"
					placeholder="number"
					value={allValues.number}
					name="number"
					onChange={(e) =>
						setAll({ ...allValues, [e.target.name]: e.target.value })
					}
				/>
				<br />
				<button type="submit">Submit</button>
				<br />
				{/* <input type='text' value={joaks} onChange={(e)=>setjoks(e.target.value)}placeholder='TypeYourEmail'/><br/> */}
        <button type='reset' onClick={delatehandaler}>Delete</button>
      </form>
	
		</div>
	);
}
