"use client";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  isError?: boolean;
  isEmpty?: boolean;
}

export const Card: React.FC<CardProps> = ({
  isError = false,
  isEmpty = false,
  children,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 w-[14rem]">
      {children}

      {isError && (
        <div className="flex items-center justify-center mt-4">
          <div className="text-lg text-red-500">Ada kesalahan</div>
        </div>
      )}

      {isEmpty && !isError ? (
        <div className="flex items-center justify-center mt-4">
          <div className="text-lg text-gray-500">Data tidak ditemukan</div>
        </div>
      ) : null}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className="text-xl font-bold mb-4">{children}</div>;
};

interface CardBodyProps {
  children: ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <div>{children}</div>;
};
