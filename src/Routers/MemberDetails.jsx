import { Link, useParams } from "react-router";

function MemberDetails() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Member Details</h1>
      <h2>Members ID : {params.id} </h2> <p>Test ID: {params.test}</p>
      <Link to={`/member`}>Member</Link>
    </>
  );
}

export default MemberDetails;
