"use client";
import { useEffect, useState } from "react";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { Input } from "postcss";

const Home = () => {
  let [count, setCount] = useState(100);
  let [text, setText] = useState("");
  let [change, setChange] = useState(false);
  let [alamat, setAlamat] = useState("");
  useEffect(() => {
    setCount((c) => c - 1);
    console.log("useEffect berjalan");
  }, [text, change, alamat]);
  return (
    <section className="space-y-5">
      <div>{count}</div>
      <InputText
        value={text}
        id="text"
        name="text"
        onChange={(e: any) => {
          setText(e.target.value);
        }}
      />

      <p>{alamat}</p>
      <InputText value={alamat} id="text" name="text" onChange={(e:any) => {
        setAlamat(e.target.value) 
      }}/>

      <Button
        title="ubah count"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setChange(!change);
        }}
      />
    </section>
  );
};

export default Home;
