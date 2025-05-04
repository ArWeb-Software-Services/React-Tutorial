import { useTransition } from "react";

function TransitionHook() {
  const [pending, startTransition] = useTransition({});

  const handleButton = () => {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    });
  };
  return (
    <>
      <div>Transition Hook</div>
      <button disabled={pending} onClick={handleButton}>
        Click
      </button>
    </>
  );
}
export default TransitionHook;
