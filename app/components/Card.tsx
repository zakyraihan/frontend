import { Dispatch, SetStateAction } from "react";
import Button from "./Button";

interface Latihan {
  tanggal: number;
  setTanggal: Dispatch<SetStateAction<number>>;
  bulan: string;
  setBulan: Dispatch<SetStateAction<string>>;
}

const Card: React.FC<Latihan> = ({ tanggal, setTanggal, bulan, setBulan }) => {
  return (
    <>
    <div className="border w-[18rem] h-[22rem] shadow-lg  rounded-xl">
      <div className="bg-red-500 text-white rounded-t-xl p-3 text-center">{bulan}</div>
      <p className="text-[10em] text-center">{tanggal}</p>
      <div className="flex justify-center">
        <Button
          title="clear"
          colorSchema="red"
          variant="solid"
          onClick={() => {
            setBulan('agustus'), 
            setTanggal((prev) => prev - prev)
        }}

        />
      </div>
    </div>
    </>
  );
};

export default Card;
