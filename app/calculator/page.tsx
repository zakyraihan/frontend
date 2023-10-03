"use client";
import React, { useEffect, useState } from "react";
import InputText from "./InputText";
import Button from "./Button";
import { Input } from "postcss";

const Home = () => {
  let [input, setInput] = useState("");
  let [result, setResult] = useState("0");

  useEffect(() => {
    calculate();
  }, [input]);

  const handleClick = (e: any) => {
    const clickedValue = e.target.name;
    let newInput = input;

    if (clickedValue === "=") {
      try {
        setResult(eval(newInput).toString());
      } catch (err) {
        setResult("");
      }
    } else if (clickedValue === "c") {
      setInput("");
      setResult("");
    } else if (clickedValue === "DEL") {
      newInput = newInput.slice(0, -1);
      setInput(newInput);
    } else if (clickedValue === "x") {
      newInput += "*"; // Mengganti 'x' dengan operator perkalian '*'
      setInput(newInput);
    } else if (clickedValue === "/") {
      newInput += "/"; // Menambahkan operator pembagian '/'
      setInput(newInput);
    } else if (clickedValue === ",") {
      newInput += "."; // Menambahkan operator perkomaan '.' ( menggunakan titik (!koma) )'
      setInput(newInput);
    } else {
      newInput += clickedValue;
      setInput(newInput);
    }
  };

  const clear = () => {
    setInput("");
    setResult("0");
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (err) {
      setResult("");
    }
  };

  const handleKeydown = (e: any) => {
    if (e.key === "Enter") {
      calculate();
    } else if (e.key == "Backspace") {
      backspace();
    }
  };

  return (
    <div className="mt-[5rem]">
      <div className="bg-slate-200 rounded-xl shadow-2xl md:w-[37rem] mx-auto flex md:p-3 p-3  flex-col">
        <div className="my-4 flex justify-between">
           <p className="text-2xl font-bold text-slate-500">CASIO</p>
           <p className="text-md font-bold text-slate-500">made with 💕</p>
        </div>
        <div className="md:w-[35rem] bg-white rounded-md">
          <InputText
            value={input === "" ? "0" : input}
            onKeyDown={handleKeydown}
          />
          <div className="mt-3 flex mr-5 justify-end ">
            <p className="p-2 text-2xl">{input === "" ? 0 : result}</p>
          </div>
        </div>
        <div className="grid  grid-cols-4 gap-4 mt-10">
          <Button
            name="7"
            title="7"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name="8"
            title="8"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name="9"
            title="9"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            title="DEL"
            colorSchema="red"
            variant="solid"
            onClick={backspace}
          />
          <Button
            name="4"
            title="4"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name="5"
            title="5"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name="6"
            title="6"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name="+"
            title="+"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name="1"
            title="1"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name="2"
            title="2"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name="3"
            title="3"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name="-"
            title="-"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            className="row-span-2 text-white bg-red-500 rounded-lg"
            name="c"
            title="c"
            colorSchema="red"
            variant="solid"
            onClick={clear}
          />
          <Button
            name="0"
            title="0"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name="x"
            title="x"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name="/"
            title="/"
            colorSchema="blue"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            name=","
            title=","
            colorSchema="oren"
            variant="solid"
            onClick={handleClick}
          />
          <Button
            className="col-span-2 bg-red-500 text-white rounded-lg"
            name="="
            title="="
            colorSchema="blue"
            variant="solid"
            onClick={calculate}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
