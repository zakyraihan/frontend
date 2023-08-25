import React from "react";
import { useState } from "react";
import Button from "./Button";
import Kartu from "./Kartu";

type TypeHasil = {
  id: string;
  mata_pelajaran: string;
  nilai: string;
};

const LatihanState = () => {
  let [hasil, setHasil] = useState<TypeHasil>({
    id: "",
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
    // menambahkan kartu mapel dan nilai
    setHasilMap((prev) => {
      return [
        ...prev,
        {
          id: hasil.id,
          mata_pelajaran: hasil.mata_pelajaran,
          nilai: hasil.nilai,
        },
      ];
    });
  };

  const deleteItem = (indexToDelete: any) => {
    // menghapus kartu mapel dan nilai
    const updatedData = [...hasilMap];
    updatedData.splice(indexToDelete, 1);
    setHasilMap(updatedData);
  };

  return (
    <section className="mx-5">
      <div className="pb-10">
        {hasilMap.map((n, index) => (
          <Kartu key={index}>
            <p>mata pelajaran: {n.mata_pelajaran}</p>
            <p>nilai: {n.nilai}</p>
            <div className="">
              <Button
                title="hapus"
                colorSchema="red"
                variant="solid"
                onClick={() => deleteItem(index)}
              />
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
          onMouseEnter={simpanHasil}
        />
      </div>
    </section>
  );
};

export default LatihanState;
