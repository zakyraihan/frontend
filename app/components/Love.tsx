import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import ButtonDel from "./LoveButton";

function LoveButton() {
  const [isLoved, setIsLoved] = useState(false);
  const [count, setCount] = useState(0);

  const handleLoveClick = () => {
    setIsLoved(!isLoved);
  };

  return (
    <div className="flex gap-2 items-center">
      <button onClick={handleLoveClick}>
        {isLoved ? (
          <ButtonDel
            className="text-red-500"
            onClick={() => setCount((prev) => prev - 1)}
          />
        ) : (
          <ButtonDel onClick={() => setCount((prev) => prev + 1)} />
        )}
      </button>
      <p>{count}</p>
    </div>
  );
}

export default LoveButton;
