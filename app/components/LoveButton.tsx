import React from "react";
import { FaRegHeart } from "react-icons/fa";

interface Props {
  isDisable?: boolean;
}

const ButtonDel: React.FC<
  Props & React.InputHTMLAttributes<HTMLInputElement>
> = ({ isDisable, ...props }) => {
  return <FaRegHeart size={30} {...props} />;
};

export default ButtonDel;
