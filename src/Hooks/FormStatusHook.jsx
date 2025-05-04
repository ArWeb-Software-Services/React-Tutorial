import { useFormStatus } from "react-dom";

function FormStatusHook() {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 4000));
    console.log("Form submitted!");
  };

  function CustomerForm() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <>
        <input type="text" placeholder="Enter your name" />
        <br />
        <input type="password" placeholder="Enter your password" />
        <br />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </>
    );
  }

  return (
    <>
      <h1>Form Status hook</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </>
  );
}

export default FormStatusHook;
