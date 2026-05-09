import React from "react";

const ErrorBoundaryTest = ({ error, resetErrorBoundary }) => {
  return (
    <div
      role="alert"
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
        
        {/* Error Icon */}
        <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-red-100">
          <span className="text-3xl">⚠️</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Oops!
        </h1>

        {/* Message */}
        <p className="text-gray-500 mb-5">
          Something went wrong in the application.
        </p>

        {/* Error Box */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 overflow-auto">
          <pre className="text-sm text-red-600 whitespace-pre-wrap">
            {error?.message}
          </pre>
        </div>

        {/* Button */}
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundaryTest;