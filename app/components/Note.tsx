import { ReactNode } from "react";

type status = "warning" | "error" | "succes";
interface SectionProps {
  title: string;
  children: ReactNode;
  status: status;
}

const Note: React.FC<SectionProps> = ({ title, status, children }) => {
  return (
    <section className=" border border-red-500 mt-5 rounded-lg  shadow-md mx-5 p-3">
      <div className="border-b border-red-500  py-2 ">
        <h5 className="font-bold text-red-500"> {title}</h5>
      </div>
      <div className="py-3 text-sm">{children}</div>
    </section>
  );
};

export default Note
