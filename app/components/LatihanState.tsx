import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import Kartu from "./Kartu";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import LoveButton from "./Love";

type TypeHasil = {
  id: number;
  mata_pelajaran: string;
  nilai: string;
};

const LatihanState = () => {
  let [count, setCount] = useState(0);
  let [hasil, setHasil] = useState<TypeHasil>({
    id: count,
    mata_pelajaran: "",
    nilai: "",
  });
  let [hasilMap, setHasilMap] = useState<TypeHasil[]>([]);

  const fisika = () => {
    setHasil((prev) => {
      return {
        ...prev,
        mata_pelajaran: "fisika",
      };
    });
  };

  const kimia = () => {
    setHasil((prev) => {
      return {
        ...prev,
        mata_pelajaran: "kimia",
      };
    });
  };

  const matematika = () => {
    setHasil((prev) => {
      return {
        ...prev,
        mata_pelajaran: "matematika",
      };
    });
  };

  const nilai70 = () => {
    setHasil((prev) => {
      return {
        ...prev,
        nilai: "70",
      };
    });
  };

  const nilai80 = () => {
    setHasil((prev) => {
      return {
        ...prev,
        nilai: "80",
      };
    });
  };

  const nilai90 = () => {
    setHasil((prev) => {
      return {
        ...prev,
        nilai: "90",
      };
    });
  };

  const nilai100 = () => {
    setHasil((prev) => {
      return {
        ...prev,
        nilai: "100",
      };
    });
  };

  const simpanHasil = () => {
    setHasilMap((prev) => {
      setCount(count + 1); // Increment count
      return [
        ...prev,
        {
          id: count, // Gunakan count sebagai id
          mata_pelajaran: hasil.mata_pelajaran,
          nilai: hasil.nilai,
        },
      ];
    });

    setHasil((prev) => {
      return {
        ...prev,
        mata_pelajaran: "",
        nilai: "",
      };
    });
  };

  const deleteItem = (indexToDelete: number) => {
    setHasilMap((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className="mx-5">
      <div className="pb-10">
        {hasilMap.map((n, index) => (
          <Kartu key={index}>
            <div className="flex justify-between items-center">
              <div className="">
                <p>ID: {n.id}</p>
                <hr />
                <p>Mata pelajaran: {n.mata_pelajaran}</p>
                <p>Nilai: {n.nilai}</p>
              </div>
              <div className="flex gap-3">
                <div className="border p-3 shadow-lg rounded-full">
                  <Button
                    className="bg-red-500 rounded-full text-white px-5 py-2"
                    title="hapus"
                    colorSchema="red"
                    variant="solid"
                    onClick={() => deleteItem(index)}
                  />
                </div>
                <LoveButton />
              </div>
            </div>
          </Kartu>
        ))}
      </div>

      <div className="flex gap-3">
        <Button
          title="fisika"
          isDisabled={hasil.mata_pelajaran === "fisika"}
          colorSchema="red"
          variant="solid"
          onClick={fisika}
        />
        <Button
          title="kimia"
          isDisabled={hasil.mata_pelajaran === "kimia"}
          colorSchema="blue"
          variant="solid"
          onClick={kimia}
        />
        <Button
          title="matematika"
          isDisabled={hasil.mata_pelajaran === "matematika"}
          colorSchema="green"
          variant="solids"
          onClick={matematika}
        />
      </div>
      <div className="flex gap-3 mt-5">
        <Button
          title="70"
          colorSchema="blue"
          variant="outline"
          isDisabled={hasil.nilai === "70"}
          onClick={nilai70}
        />
        <Button
          title="80"
          colorSchema="reds"
          variant="outline"
          isDisabled={hasil.nilai === "80"}
          onClick={nilai80}
        />
        <Button
          title="90"
          colorSchema="blue"
          variant="outline"
          isDisabled={hasil.nilai === "90"}
          onClick={nilai90}
        />
        <Button
          title="100"
          colorSchema="green"
          variant="outline"
          isDisabled={hasil.nilai === "100"}
          onClick={nilai100}
        />
      </div>
      <div className="mt-5 flex gap-3">
        <Button
          title="simpan"
          isDisabled={hasil.mata_pelajaran === "" || hasil.nilai === ""}
          colorSchema="red"
          variant="solid"
          onClick={simpanHasil}
        />
      </div>
    </section>
  );
};

export default LatihanState;
