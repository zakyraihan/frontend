import React from "react";
import clsx from 'clsx';


interface InputProps {
  isError?: boolean;
  messageError?: string;
}

const InputText: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ messageError, isError = false, ...props }) => {
  return (
    <section>
      <input
        className={clsx(`w-full h-8 border rounded px-2`, {
            "border-red-500 border-2": isError == true,
            "border-gray-500": isError == false
        })}

        {...props}
      />

      {isError ? (
        <p className="text-red-500 font-bold">{messageError}</p>
      ) : (
        <></>
      )}
    </section>
  );
};


export default InputText