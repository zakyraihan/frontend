import { useState, useEffect } from "react";
import useDisClosure from "./useClosure";

const useDebounce = () => {
  const [keyword, setKeyword] = useState("");
  const { isOpen, onOpen, onClose } = useDisClosure();
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(keyword);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);
};

export default useDebounce;
