import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/lib/axiosClient";
import { BookListFilter, BookListResponse } from "../interface";
import { usePagination } from "@/hook/usePagination";

const useBookModule = () => {
  const defaultParams : BookListFilter = {
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
    const{
      params,
      setParams,
      handleFilter,
      handleClear,
      handlePageSize,
      handlePage,
      filterParams
    } = usePagination(defaultParams)

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

  return { useBookList };
};

export default useBookModule;
