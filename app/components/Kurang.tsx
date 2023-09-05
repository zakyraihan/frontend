import React, { FC } from "react";
import { Dispatch, SetStateAction } from "react";
import Button from "./Button";

interface KurangProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const Kurang: FC<KurangProps> = ({ count, setCount }) => {
  return (
    <div>
      <p className="text-red-500">{count}</p>
      <Button
        title="kurang"
        colorSchema="red"
        variant="solid"
        onClick={() => setCount((prev) => prev - 1)}
      />
    </div>
  );
};

export default Kurang;
