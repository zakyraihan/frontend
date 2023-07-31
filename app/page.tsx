import React from "react";
import Latihan from "./components/Latihan";
import Button from "./components/Button";
import Card from "./components/Card";

const Home = () => {

  return (
    <div className="container">
    <Latihan name="muhammad zaky raihan" userName="zaky" age={17} isVerified={true} />
    <Latihan name="muhammd reza" userName="reza" age={20} isVerified={false} />
    <Latihan name="shirin kirani faisal" userName="shirin" age={15} isVerified={true} />
    {/* <Card nama="Ini Card">
      <p>saya belajar children</p>
    </Card> */}
    <Button title="simpan" isDisabled={false}/>
    <Button title="cancel" isDisabled={true}/>
    </div>
  );
}

export default Home;
