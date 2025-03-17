import {useState, useEffect} from 'react'

export default function SelectUser() {
  const [selectedUser, setUser] = useState('');

	/* This array will be changed for grabbing local storage */
	const userOptions = [
		{value:'userA', label:'userA'},
		{value:'userB', label:'userB'}
	];

	return (
		<>
			<select 
				value={selectedUser}
				onChange={(e) => setUser(e.target.value)}
			>
				<option value="" disabled>Select a user</option>
				{userOptions.map((c) => (
					<option key={c.value} value={c.value}>
						{c.label}
					</option>
				))}
			</select>
		</>
	);
}