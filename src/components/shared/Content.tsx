import React, { ReactNode } from "react";

const Content: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="mt-14 flex-1 flex flex-col gap-4 lg:px-16 translate-all duration-300">
      {children}
    </div>
  );
};

export default Content;
