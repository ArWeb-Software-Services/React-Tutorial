function AddUser({ setUser }) {
  return (
    <div>
      <h1>AddUser</h1>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        placeholder="Add user"
      />
      <hr />
    </div>
  );
}
export default AddUser;
