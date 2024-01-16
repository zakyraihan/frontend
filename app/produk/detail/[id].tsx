import React from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import useProdukModule from "../lib";

const DetailProduk = () => {
  const router = useRouter();
  const { useDetailProduk } = useProdukModule();
  const { data, isLoading, isError } = useDetailProduk(router.query.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Error fetching data</p>;
  }

  const { nama_produk, harga_produk, deskripsi_produk, tahun_pembuatan } = data;

  return (
    <div>
      <h1>{nama_produk}</h1>
      <Image
        src={"/assets/Image_not_available.png"}
        alt=""
        width={250}
        height={250}
      />
      <p>{deskripsi_produk}</p>
      <p>
        <span>Rp</span> {harga_produk}
      </p>
      <p>Tahun Pembuatan: {tahun_pembuatan}</p>
    </div>
  );
};

export default DetailProduk;
