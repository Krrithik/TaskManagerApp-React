export default function userDropdown({ userOptions, selectedUser, setSelectedUser}) {
  return (
    <>
      <div className="dropdown-container">
        <label htmlFor="userDropdown">Select User:</label>
        <select
          id="userDropdown"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">-- Select a User --</option>
          {userOptions.map((user) => (
            <option key={user.name} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
