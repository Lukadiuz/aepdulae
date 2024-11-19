import React, { ReactNode } from "react";

const WrapperContent: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="rounded-2xl bg-white p-3 text-gray-600 dark:bg-neutral-100 min-w-64 overflow-x-auto">
      {children}
    </div>
  );
};

export default WrapperContent;
