import React from "react";
import { useState } from "react";
import Button from "./Button";

type nilai = {
    nilai: 80 | 90 | 100
}

type Hasil = {
  mata_pelajaran: string;
  nilai?: number | null;
};

const LatihanState = () => {
  let [hasil, setHasil] = useState<Hasil[]>([
    {
      mata_pelajaran: "matematika",
      nilai: 100,
    },
    {
      mata_pelajaran: "ipa",
      nilai: 90,
    },
    {
      mata_pelajaran: "ips",
      nilai: 90,
    },
  ]);

  return (
    <section className="mx-5 ">
      {hasil.map((n, index) => {
        return (
          <div key={index} className="shadow-md p-3 my-7">
            <p>Nama Mata Pelajaran: {n.mata_pelajaran}</p>
            <p>Nilai: {n.nilai}</p>
          </div>
        );
      })}
      <div className="flex gap-3">
        <Button title="fisika" colorSchema="red" variant="solid" />
        <Button title="kimia" colorSchema="blue" variant="solid" />
        <Button title="matematika" colorSchema="green" variant="solids" />
      </div>
      <div className="flex gap-3 mt-5">
        <Button title="80" colorSchema="reds" variant="outline"/>
        <Button title="90" colorSchema="blue" variant="outline" />
        <Button title="100" colorSchema="green" variant="outline" />
      </div>
      <div className="mt-5 flex gap-3">
        <Button
          title="simpan"
          colorSchema="red"
          variant="solid"
          onClick={() =>
            setHasil((prev) => {
              return [
                ...prev,
                {
                  mata_pelajaran: "mtk",
                  nilai: 20,
                },
              ];
            })
          }
        />
      </div>
    </section>
  );
};

export default LatihanState;
