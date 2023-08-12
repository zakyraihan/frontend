"use client"; // gunakan use client karena ada onChange pda komponen
import { useState } from "react";
import Button from "./components/Button";

type Identitas = {
  nama: string;
  sekolah: string;
  umur: number | null;
};

type Hasil = {
  mata_pelajaran: string;
  nilai: number | null;
};

const Home = () => {
  let [message, setMessage] = useState("hai"); // jika string, dengan data awal "hai"
  let [count, setCount] = useState(0); // jika number , dengan data awal 0
  let [isLogin, setIsLogin] = useState(false); // jika booelan, dengan data awal false
  let [profile, setProfile] = useState<Identitas>({
    // jika sebuah object
    nama: "",
    sekolah: "",
    umur: null,
  });

  let [hasil, setHasil] = useState<Hasil[]>([]); // jika sebuah array dengan data awal array kosong

  return (
    <main className="space-y-5">
      <h1>{message}</h1>
      <button onClick={() => setMessage((prev) => prev === 'hai' ? prev += 'shyyrnv' ? prev += 'yang sangat cantik' : 'null' )}>tambah</button>
    </main>
  );
};

export default Home;
