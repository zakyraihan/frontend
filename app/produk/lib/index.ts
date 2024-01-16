import { isError, useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "@/lib/axiosClient";

import { ProdukCreatePayload, ProdukListResponse } from "../interface";
import Swal from "sweetalert2";
import axios from "axios";

const useProdukModule = () => {
  const getProdukList = async (): Promise<ProdukListResponse> => {
    try {
      console.log("Fetching produk list...");
      const response = await axiosClient.get("/produk/list");
      console.log("Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching produk list:", error);
      throw error;
    }
  };
  const useProdukList = () => {
    const { data, isFetching, isLoading, isError } = useQuery(
      ["/produk/list"],
      () => getProdukList(),
      {
        keepPreviousData: true,

        select: (response) => response,
      }
    );

    return { data, isFetching, isLoading, isError };
  };


  const useCreateBook = () => {
    const { mutate, isLoading } = useMutation(
      (payload: ProdukCreatePayload) => {
        return axiosClient.post("/produk/create", payload);
      },
      {
        onSuccess: (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        onError: (error) => {
          alert("terjadi Kesalahan");
        },
      }
    );
    return { mutate, isLoading };
  };

  return { useProdukList, useCreateBook };
};

export default useProdukModule;
