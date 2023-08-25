import React, { ReactNode } from "react";

interface KartuProps {
  children: ReactNode;
}

const Kartu: React.FC<KartuProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ children, ...props }) => {
  return (
    <div className="p-5 shadow-md bg-slate-50 my-5 rounded-md" {...props}>
      <div>{children}</div>
    </div>
  );
};

export default Kartu;
