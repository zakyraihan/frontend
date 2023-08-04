import React from "react";
import Latihan from "./components/Latihan";
import Button from "./components/Button";
import Card from "./components/Card";

const Home = () => {
  return (
    <div>
    <Latihan name="muhammd reza" userName="reza" age={20} isVerified={false} />
    <Latihan name="shirin kirani faisal" userName="shirin" age={15} isVerified={true} />
    <Button title="simpan" isDisabled={false}/>
    <Button title="cancel" isDisabled={true}/>
    <Card title="sayembara" subtitle="dikota magelang" >
      <div className="p-3">
       <Latihan name="muhammad zaky raihan" userName="zaky" age={17} isVerified={true} />
       </div>
    </Card>
    </div>
  );
}

export default Home;
