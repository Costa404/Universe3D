import { RouterProvider } from "react-router-dom";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import { Suspense } from "react";
import { useAppRoutes } from "./AppRoutes";

const App = () => {
  const appRoute = useAppRoutes();
  const LoadingFallback = (
    <div>
      <LoadingSpinner />
    </div>
  );

  return (
    <Suspense fallback={LoadingFallback}>
      <RouterProvider router={appRoute} />
    </Suspense>
  );
};

export default App;
