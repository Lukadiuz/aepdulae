import React, { ReactNode } from "react";

const Main: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="text-gray-50 h-screen overflow-auto bg-neutral-100 p-4 sm:ml-64 flex gap-2 flex-col lg:flex-row translate-all duration-300 dark:bg-gray-800">
      {children}
    </div>
  );
};

export default Main;
