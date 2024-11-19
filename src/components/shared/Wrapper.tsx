import React, { ReactNode } from "react";

const Wrapper: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className="flex flex-col gap-4 px-5">{children}</div>;
};

export default Wrapper;
