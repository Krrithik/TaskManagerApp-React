import {useState} from 'react';

export default function AddTask() {
	const [newTaskData, setNewTaskData] = useState({
			task: '',
			dueDate: '',
			priority: '',
		});
	
	const handleTaskChange = (event) => {
		const {name, value} = event.target;
		setNewTaskData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};
	
	const handleTaskSubmit = (event) => {
		event.preventDefault();
		{/* Currently going to the log, will need to change this to be saved into some form of storage*/}
		console.log('Task data submitted: ', newTaskData);
	}
	
	return (
		<>
      <h2>Add new task</h2>
      <form onSubmit={handleTaskSubmit}>
        <label>
          <p>Task Details:</p>
          <input type="text" name="task" value={newTaskData.task} onChange={handleTaskChange}/>
        </label>
        <label>
          <p>Task Due Date:</p>
          <input type="text" name="dueDate" value={newTaskData.dueDate} onChange={handleTaskChange}/>
        </label>
        <label>
          <p>Task Priority Level:</p>
          <input type="text" name="priority" value={newTaskData.priority} onChange={handleTaskChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
	);
};