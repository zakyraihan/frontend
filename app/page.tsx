"use client"
import React, { use, useState } from "react";

type Identitas = {
  nama:string
  sekolah:string
  umur: number | null
}

type Hasil = {
  mata_pelajaran: string
  nilai: number | null
}

const Home = () => {
  let [message, setMessage] = useState('Hai @shyyrnv') // jika string, dengan data awal "hai"
  let [count, setCount] = useState(0) // jika string, dengan data awal "hai"
  let [isLogin, setIsLogin] = useState(true) // jika booelan, dengan data awal false
  let [profile, setprofile] = useState<Identitas>({
    nama: 'zaky raihan',
    sekolah: 'smk mq',
    umur: 17
  }) // jika sebuah object
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
  ]); // jika sebuah array dengan data awal array kosong

  return (
    <div className="space-y-5">
      <h1>message adalah : {message}</h1>
      <button onClick={() => setMessage((pesan) => pesan === 'Hai @shyyrnv' ? 'Selamat Pagi' : 'Hai @shyyrnv')} className="border-2 border-red bg-red-500 text-white p-2">ubah message</button>

      <h1>count adalah : {count}</h1>
      <div className="flex gap-5">
      <button onClick={() => setCount((prev) => prev < 10 ? prev + 1 : prev)} className="border-2 border-red bg-red-500 text-white p-2">tambah</button>
      <button onClick={() => setCount((prev) => prev > 0 ? prev - 1 : prev)} className="border-2 border-red bg-red-500 text-white p-2">kurang</button>
      </div>

      <h1>isLogin? {isLogin? 'sudah login' : 'belum login'}</h1>

      <div className="flex flex-col">
          <h1>nama : {profile.nama}</h1>
          <h1>sekolah : {profile.sekolah}</h1>
          <h1>umur : {profile.umur}</h1>
      </div>
      <button  onClick={() => {
          setprofile((prevProfile) => {
            return {
              ...prevProfile, nama: "Ilham Maulana Fikri", sekolah: 'smp madinatul quran'
            };
          });
        }}  className="border-2 border-red bg-red-500 text-white p-2">Ubah Nama</button>

      <div>
        <h2>daftar nilai</h2>
        {hasil.map((n, index) => (
            <div key={index}>
              <h5>mata pelajaran : {n.mata_pelajaran}</h5>
              <h5>nilai : {n.nilai}</h5>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
