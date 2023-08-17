"use client"; // gunakan use client karena ada onChange pda komponen
import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import InputText from "./components/InputText";

export type Identitas = {
  nama: string;
  sekolah: string;
  umur: number | null;
};

export type Hasil = {
  mata_pelajaran: string;
  nilai: number | null;
};

const Home = () => {
  let [tanggal, setTanggal] = useState(0);
  let [bulan, setBulan] = useState("Agustus");

  return (
    <main className="space-y-5 p-5">
      <h1>Latihan</h1>
      <Card
        bulan={bulan}
        tanggal={tanggal}
        setTanggal={setTanggal}
        setBulan={setBulan}
      />
      <div className="flex gap-3">
      <Button
        onClick={() => {
          setTanggal((c) => c + 1);
        }}
        colorSchema="blue"
        variant="solid"
        title="tambah"
      />
      <Button
      isDisabled={tanggal === 0 ? true : false}
        onClick={() => {
          setTanggal((c) => c != 0 ? c - 1 : c);
        }}
        colorSchema="red"
        variant="solid"
        title="kurang"
      />
      </div>
      <InputText
        id="bulan"
        name={"bulan"}
        value={bulan}
        onChange={(e) => {
          setBulan(e.target.value);
        }}
      />
    </main>
  );
};

export default Home;

