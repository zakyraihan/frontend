"use client";
import React, { Dispatch, FC, SetStateAction } from "react";
import Button from "./Button";

interface TambahProps {
  count: number;
  setCount: Dispatch<SetStateAction<any>>;
}

const Tambah: FC<TambahProps> = ({ count, setCount }) => {
  return (
    <div>
      <p className="text-red-500">{count}</p>
      <Button
        title="tambah"
        colorSchema="blue"
        variant="solid"
        onClick={() => setCount((prev: number) => prev + 1)}
      />
    </div>
  );
};

export default Tambah;
