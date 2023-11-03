import { useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "@/lib/axiosClient";
import { BookListFilter, BookListResponse } from "../interface";
import { ChangeEvent, useState } from "react";
import { BookCreatePayload } from "../interface";
import Swal from "sweetalert2";

const useBookModule = () => {
  const defaultParams = {
    title: "",
    author: "",
    from_year: "",
    to_year: "",
    page: 1,
    pageSize: 10,
  };

  const getBookList = async (
    params: BookListFilter
  ): Promise<BookListResponse> => {
    return axiosClient.get("/book/list", { params }).then((res) => res.data);
  };
  const useBookList = () => {
    let [params, setParams] = useState<BookListFilter>(defaultParams);
    let [filterParams, setFilterParams] =
      useState<BookListFilter>(defaultParams);

    const handleFilter = () => {
      setFilterParams(() => {
        return {
          ...params,
          page: 1,
        };
      });
      setParams((prevParams) => {
        return {
          ...prevParams,
          page: 1,
        };
      });
    };

    const handleClear = () => {
      setFilterParams(defaultParams);
      setParams(defaultParams);
    };

    const handlePageSize = (e: ChangeEvent<any>) => {
      setParams((params) => ({ ...params, pageSize: e.target.value }));
      setFilterParams((params) => ({ ...params, pageSize: e.target.value }));
    };
    const handlePage = (page: number) => {
      setParams((params) => ({ ...params, page: page }));
      setFilterParams((params) => ({ ...params, page: page }));
    };

    const { data, isFetching, isLoading, isError } = useQuery(
      ["/book/list", [filterParams]],
      () => getBookList(filterParams),
      {
        keepPreviousData: true,

        select: (response) => response,
      }
    );

    return {
      data,
      isFetching,
      isLoading,
      isError,
      params,
      setParams,
      handlePageSize,
      handlePage,
      handleFilter,
      handleClear,
    };
  };

  const createBook = (
    payload: BookCreatePayload
  ): Promise<BookListResponse> => {
    return axiosClient.post("/book/create").then((res) => res.data);
  };

  const useCreateBook = () => {
    const { mutate, isLoading } = useMutation(
      (payload: BookCreatePayload) => createBook(payload),
      {
        onSuccess: () => {},
        onError: () => {},
        onSettled: () => {},
      }
    );
    return { mutate, isLoading };
  };

  return { useBookList, useCreateBook };
};

export default useBookModule;
