import { useState } from 'react';

export default function AddUser({ onUserAdded }) {
	const [name, setNewUsername] = useState('');
	const [role, setNewRole] = useState('');

	function handleUserSubmit(e) {
		e.preventDefault();
		if (!name || !role) return;

		onUserAdded({ name: name, role: role });
		setNewRole('');
		setNewUsername('');
	};

	return (
		<>
			<div className="user-form-section">
				<h3>Add New User</h3>
				<form onSubmit={handleUserSubmit}>
					<div className="form-group">
						<label>Name:</label>
						<input
							type="text"
							value={name}
							onChange={(e) =>
								setNewUsername(e.target.value)
							}
							required
						/>
					</div>
					<div className="form-group">
						<label>Role:</label>
						<input
							type="text"
							value={role}
							onChange={(e) =>
								setNewRole(e.target.value)
							}
							required
						/>
					</div>
					<button type="submit">Add User</button>
				</form>
			</div>
		</>
	);
}