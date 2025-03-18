import { useEffect, useState } from "react";
import { setItem, getItem } from "../utils/StorageFunctions";

export default function AddUser() {
  const [uNames, setUName] = useState(() => {
	return getItem("uNames") || [];
  });
	
  const [newUsername, setNewUsername] = useState({
	userName: "",
  });

  
  useEffect(() => {
    setItem("uNames", uNames);
  }, [uNames]);

  function handleUsernameSubmit(e) {
    e.preventDefault();
		{/*Currently going to the log, will need to change this to be saved into some form of storage*/}
	let newUname = createNewUName(newUsername);
	setUName((prevuNames) => [...prevuNames, newUname]);

    //console.log('Submitted username: ', newUsername);
    setNewUsername({
		userName: "",
	});

	console.log(uNames);
  };

  function createNewUName(t) {
		let newUname = {
			Name: t.userName
		}

		return newUname;
  }
  

  return (
		<>
			<form onSubmit={handleUsernameSubmit}>
				<label>
					<h2> Add new user: </h2>
					<input 
						type="text"
						value={newUsername.userName}
						onChange={(e) => setUName(e.target.value)} 
					/>
				</label>
				<button onClick={handleUsernameSubmit}>Submit</button>
			</form>
		</>
  );
}