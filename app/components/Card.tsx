import { Dispatch, SetStateAction } from "react";
import { tanggal, bulan } from "../page";
import Button from "./Button";

interface Latihan {
  tanggal: number;
  setTanggal: Dispatch<SetStateAction<number>>;
}

interface Latihan {
  bulan: string;
  setBulan: Dispatch<SetStateAction<string>>;
}

const Card: React.FC<Latihan> = ({ tanggal, setTanggal, bulan, setBulan }) => {
  return (
    <div className="border w-[20rem] h-[24rem] shadow-lg p-5">
      <div className="bg-red-500 text-white p-3 text-center">{bulan}</div>
      <p className="text-[10em] text-center">{tanggal}</p>
      <div className="flex justify-center">
        <Button
          title="clear"
          colorSchema="red"
          onClick={() => {setBulan('agustus'), setTanggal((prev) => prev - prev)}}

        />
      </div>
    </div>
  );
};

export default Card;
