import { lazy, Suspense, useState } from "react";
const User = lazy(() => import("./LazyLoadingTest"));
function LazyLoading() {
  const [load, setLoad] = useState(false);
  return (
    <>
      <h1>LazyLoading</h1>
      {load ? (
        <Suspense fallback={<h3>Loading</h3>}>
          <LazyLoading />
        </Suspense>
      ) : null}
      <button onClick={() => setLoad(true)}>Load</button>
    </>
  );
}

export default LazyLoading;
