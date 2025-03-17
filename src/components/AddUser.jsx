import {useState} from 'react';

export default function AddUser() {
  const [newUsername, setNewUsername] = useState('');

  function handleUsernameSubmit(e) {
    e.preventDefault();
		{/*Currently going to the log, will need to change this to be saved into some form of storage*/}
    console.log('Submitted username: ', newUsername);
    setNewUsername('');
  };

  return (
		<>
			<form onSubmit={handleUsernameSubmit}>
				<label>
					<h2> Add new user: </h2>
					<input 
						type="text"
						value={newUsername}
						onChange={(e) => setNewUsername(e.target.value)} 
					/>
				</label>
				<button onClick={handleUsernameSubmit}>Submit</button>
			</form>
		</>
  );
}