// "use client";
// import { useState } from "react";
// import Button from "./components/Button";
// import Tambah from "./components/Tambah";
// import Kurang from "./components/Kurang";
// import LatihanState from "./components/LatihanState";
// import Card from "./components/Card";

// gunakan use client karena ada onChange pda komponen
// import { useState } from "react";
// import Button from "./components/Button";
// import { profile } from "console";
// import { stringify } from "querystring";
// import arr from "./utils/data";
// import LatihanState from "./components/LatihanState";
// import App from "./components/Test";
// import Card from "./components/Card";
// import ButtonDel from "./components/LoveButton";
// import LoveButton from "./components/Love";

// type identitas = {
//   nama: string;
//   sekolah: string;
//   umur: number | null;
//   alamat?: string;
// };

// type Hasil = {
//   mata_pelajaran: string;
//   nilai?: number | null;
// };

// const Home = () => {
//   let [message, setMessage] = useState("hello");
//   let [count, setCount] = useState(0);
//   let [islogin, setIsLogin] = useState(false);
//   let [profile, setProfile] = useState<identitas>({
//     nama: "hilmi",
//     sekolah: "smk mq",
//     umur: 12,
//   }); // object
//   let [hasil, setHasil] = useState<Hasil[]>([
//     {
//       mata_pelajaran: "matematika",
//       nilai: 100,
//     },
//     {
//       mata_pelajaran: "ipa",
//       nilai: 900,
//     },
//     {
//       mata_pelajaran: "ips",
//       nilai: 90,
//     },
//   ]);

//   let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   return (
//     <div className="space-y-5">
//       <div className="my-5">
//         <LatihanState />
//       </div>

//       {/* <div className="bg-slate-100 px-4 py-5">
//         <h1>Daftar Hasil Siswa</h1>
//         {hasil.map((nbu, index) => {
//           return (
//             <section key={index} className=" flex flex-col ">
//               <div className="my-5 gap-2 flex md:flex-row flex-col ">
//                 <div className="bg-red-500 rounded-md p-2 w-[20rem] text-white">
//                   <h1>mata_pelajaran: {n.mata_pelajaran}</h1>
//                 </div>
//                 <div className="bg-blue-500 text-white p-2 w-[20rem] rounded-md">
//                   <h1>nilai: {n.nilai}</h1>
//                 </div>
//               </div>
//             </section>
//           );
//         })}
//         <div className="flex gap-2">
//           <Button
//             title="tambah mata_pelajaran"
//             colorSchema="blue"
//             variant="solid"
//             onClick={() =>
//               setHasil((prev) => {
//                 return [
//                   ...prev,
//                   {
//                     mata_pelajaran: "fullstack development",
//                     nilai: 100,
//                   },
//                 ];
//               })
//             }
//           />
//           <Button
//             title="kurang mata_pelajaran"
//             colorSchema="red"
//             variant="solid"
//             onClick={() =>
//               setHasil((prev) => {
//                 prev.pop();
//                 return [...prev];
//               })
//             }
//           />
//         </div>
//       </div>
//       <p>
//         nama adalah {profile.nama} sekolah di {profile.sekolah} umur saya{" "}
//         {profile.umur} alamat di {profile.alamat || "-"}
//       </p>
//       <div className="flex gap-2">
//         <Button
//           title="tambah alamat"
//           colorSchema="red"
//           variant="solid"
//           onClick={() =>
//             setProfile((prev) => {
//               return {
//                 ...prev,
//                 nama: "hilmi muhammad",
//                 alamat: "jakarta",
//               };
//             })
//           }
//         />
//         <Button
//           title="kembali ke default"
//           colorSchema={islogin ? "red" : "blue"}
//           variant="solid"
//           onClick={() =>
//             setProfile((prev) => {
//               return {
//                 nama: "hilmi",
//                 sekolah: "smk mq",
//                 umur: 12,
//               };
//             })
//           }
//         />
//         <Button
//           title="edit"
//           colorSchema="red"
//           variant="solid"
//           onClick={() =>
//             setProfile((prev) => {
//               return {
//                 ...prev,
//                 alamat: "bekasi",
//               };
//             })
//           }
//         />
//       </div>
//       <h1>{islogin ? "sudah login" : "belum login"}</h1>
//       <div className="flex gap-5">
//         <Button
//           title="login"
//           colorSchema="blue"
//           variant="solid"
//           onClick={() => setIsLogin(true)}
//         />
//         <Button
//           title="logout"
//           colorSchema="red"
//           variant="solid"
//           onClick={() => setIsLogin(false)}
//         />
//         <Button
//           title={islogin ? "sign out" : "sign in"}
//           colorSchema={islogin ? "red" : "blue"}
//           variant="solid"
//           onClick={() => {
//             setIsLogin(!islogin);
//           }}
//         />
//       </div>

//       <h1>{message}</h1>
//       <div className="flex gap-5">
//         <Button
//           title="ihsan"
//           variant="solid"
//           colorSchema="red"
//           onClick={() => setMessage("hello ihsan")}
//         />
//         <Button
//           title="hilmi"
//           variant="solid"
//           colorSchema="blue"
//           onClick={() => setMessage("hello hilmi")}
//         />
//       </div>

//       <h1>{count}</h1>
//       <div className="flex gap-5">
//         <Button
//           title="tambah"
//           colorSchema="blue"
//           variant="solid"
//           onClick={() => setCount((prev) => (prev < 10 ? prev + 1 : prev))}
//         />
//         <Button
//           isDisabled={count === 0 ? true : false}
//           title="kurang"
//           colorSchema="red"
//           variant="solid"
//           onClick={() => setCount((prev) => (prev != 0 ? prev - 1 : prev))}
//         />
//       </div>

//       <Button
//         title="reset"
//         colorSchema="red"
//         variant="solid"
//         onClick={() => {
//           setMessage("hello"), setCount((prev) => prev - prev);
//         }}
//       />
//     </div> */}
//     </div>
//   );
// };

// export default Home;
"use client"; // gunakan use client karena ada onChange pda komponen
import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import InputText from "./components/InputText";
import LatihanState from "./components/LatihanState";
import Calculator from "./components/Calculator";

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
  <Calculator />
  // let [tanggal, setTanggal] = useState(0);
  // let [bulan, setBulan] = useState("Agustus");

  // return (
  //   <main className="space-y-5 m-5">
  //     <LatihanState />
  //     <h1>Latihan</h1>
  //     <Card
  //       bulan={bulan}
  //       tanggal={tanggal}
  //       setTanggal={setTanggal}
  //       setBulan={setBulan}
  //     />
  //     <div className="flex gap-3">
  //       <Button
  //         onClick={() => {
  //           setTanggal((c) => (c < 31 ? c + 1 : c));
  //         }}
  //         colorSchema="blue"
  //         title="tambah"
  //         variant="solid"
  //       />
  //       <Button
  //         onClick={() => {
  //           setTanggal((c) => (c != 0 ? c - 1 : c));
  //         }}
  //         colorSchema="red"
  //         title="kurang"
  //         variant="solid"
  //       />
  //     </div>
  //     <InputText
  //       id="bulan"
  //       name={"bulan"}
  //       value={bulan}
  //       onChange={(e) => {
  //         setBulan(e.target.value);
  //       }}
  //     />    
  //   </main>
  // );
};

export default Home;
