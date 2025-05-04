function DefaultProps({ username = "Sam", email = "a@gmail.com" }) {
  return (
    <>
      <h1>User: {username}</h1>
      <h1>Email: {email}</h1>
    </>
  );
}

export default DefaultProps;
