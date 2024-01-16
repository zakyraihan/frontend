import { BaseResponsePagination } from "@/lib/axiosClient";

interface Produk {
  id: number;
  nama_produk: string;
  kategori_produk: string;
  harga_produk: number | undefined | string;
  jumlah_produk: number | undefined | string;
  deskripsi_produk: string;
  tahun_pembuatan: number | undefined | string;
}

export interface ProdukListResponse extends BaseResponsePagination {
  data: Produk[];
}

export interface ProdukCreatePayload
  extends Pick<
    Produk,
    | "nama_produk"
    | "harga_produk"
    | "kategori_produk"
    | "tahun_pembuatan"
  > {}

export interface ProdukCreateResponse {
  status: string;
  message: string;
  data?: Produk;
}