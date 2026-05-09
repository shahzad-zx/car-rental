import React, { lazy, Suspense, useState } from "react";
// import Dashboard from './Dashboard'

const Dashboard = lazy(() => import("./Dashboard"));
const LazyLoading = () => {
  const [isPermitted, setIsPermitted] = useState(false);
  return (
    <div>
      <button
        className="p-4 text-lg font-bold text-yellow-700 border-2"
        onClick={() => setIsPermitted(!isPermitted)}
      >
        Lazy Loading Component
      </button>
      <Suspense
        fallback={
          <h2 className="text-green-400 text-3xl"> Loading Lazy Component</h2>
        }
      >
        {isPermitted && <Dashboard />}
      </Suspense>
    </div>
  );
};

export default LazyLoading;
