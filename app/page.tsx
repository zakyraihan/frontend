"use client"; // gunakan use client karena ada onChange pda komponen
import { useState } from "react";
import Button from "./components/Button";

const Home = () => {
  let [message, setMessage] = useState("hello");

  return (
    <div className="space-y-5">
      <h1>{message}</h1>
      <Button
        title="ihsan"
        variant="solid"
        colorSchema="blue"
        onClick={() => setMessage('hello ihsan')}
      />
      <Button
        title="hilmi"
        variant="solid"
        colorSchema="blue"
        onClick={() => setMessage('hello hilmi')}
      />
    </div>
  );
};

export default Home;
