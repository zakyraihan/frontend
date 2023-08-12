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
  let [message, setMessage] = useState("Halo"); // jika string, dengan data awal "hai"
  let [count, setCount] = useState(0); // jika number , dengan data awal 0
  let [isLogin, setIsLogin] = useState(false); // jika booelan, dengan data awal false
  let [profile, setProfile] = useState<Identitas>({
    // jika sebuah object
    nama: "Ilham Jaya kusuma",
    sekolah: "SMK MADINATULQURAN",
    umur: 17,
  });

  let [hasil, setHasil] = useState<Hasil[]>([
    {
      mata_pelajaran: "matematika",
      nilai: 80,
    },
    {
      mata_pelajaran: "fisika",
      nilai: 90,
    },
    {
      mata_pelajaran: "kimia",
      nilai: 95,
    },
  ]); // jika sebuah array

  return (
    <main className="space-y-5">
      <h1>Hello World</h1>

      <p>message adalah {message}</p>
      <Button title="ubah" />

      <p>Count adalah {count}</p>

      <p> {isLogin ? "Sudah Login" : "Belum Login"}</p>

      <div className="flex flex-col">
        <h5>Nama : {profile.nama}</h5>
        <h5>Sekolah : {profile.sekolah}</h5>
        <h5>Umur : {profile.umur}</h5>
      </div>

      <div>
        <h2>Daftar Nilai</h2>
        {hasil.map((n, index) => (
          <section key={index}>
            <h5>Nama Mata pelajaran : {n.mata_pelajaran} </h5>
            <h5>Nilai : {n.nilai} </h5>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Home;
