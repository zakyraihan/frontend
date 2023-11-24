"use client";
import Button from "@/components/Button";
import { Pagination } from "../../components/Pagination";
import { Table, Th, Thead, Tr, Tbody, Td } from "@/components/Tabel";
import useBookModule from "./lib";
import { Drawer } from "@/components/Drawer";

import { useRouter } from "next/navigation";
import { DeleteButton, EditButton } from "@/components/ButtonAction";
import Swal from "sweetalert2";
import { useConfirmDelete } from "@/hook/useConfirmDelete";
import useDisClosure from "@/hook/useClosure";
import { useConfirmDeleteBulk } from "@/hook/useConfirmBulkDelete";
import Filter from "./module/filter";
import { useMemo, useState } from "react";

const Book = () => {
  const { useBookList, useDeleteBook, useDeleteBulkBook } = useBookModule();
  const [deletePayload, setDeletePayload] = useState<number[]>([]);
  const { mutate, isLoading } = useDeleteBook();
  const { mutate: mutateDeleteBulk, isLoading: isLoadingDeleteBulk } =
    useDeleteBulkBook();
  const handleDelete = useConfirmDelete({
    onSubmit: (id) => {
      mutate(id);
    },
  });
  const handleDeleteBulk = useConfirmDeleteBulk({
    onSubmit: (payload) => {
      console.log("payload", payload);
      mutateDeleteBulk(
        { data: payload },
        {
          onSuccess: () => {
            setDeletePayload([]);
          },
        }
      );
    },
  });
  const router = useRouter();

  const {
    data,
    isFetching,
    isError,
    params,
    setParams,
    handleFilter,
    handleClear,
    handlePageSize,
    handlePage,
  } = useBookList();

  const checked = useMemo(() => {
    if (!data) {
      return { isAllCheced: false };
    }
    const isAllChecked = data.data.every((n) => deletePayload.includes(n.id));
    return { isAllCheced: isAllChecked };
  }, [deletePayload, data]);

  const { isOpen, onOpen, onClose } = useDisClosure();

  return (
    <>
      <Drawer
        onClose={onClose}
        onClear={handleClear}
        onSubmit={handleFilter}
        title="Filter Buku"
        isOpen={isOpen}
      >
        <Filter params={params} setParams={setParams} />
      </Drawer>
      <section className=" p-10 overflow-auto ">
        <section className="flex items-center justify-between ">
          <div className="flex gap-4">
            <Button
              width="sm"
              onClick={onOpen}
              colorSchema="blue"
              title="Filter"
            />
            <Button
              width="sm"
              onClick={() => {
                handleDeleteBulk(deletePayload);
              }}
              isLoading={isLoadingDeleteBulk}
              colorSchema="red"
              isDisabled={deletePayload.length === 0}
              title="Hapus "
            />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                router.push("/book/tambah");
              }}
              width="sm"
              colorSchema="red"
              title="tambah"
            />
            <Button
              onClick={() => {
                router.push("/book/tambah-bulk");
              }}
              width="sm"
              colorSchema="green"
              title="tambah bulk"
            />
          </div>
        </section>

        <section className="h-full w-full mt-5 ">
          <Table
            isFetching={isFetching}
            isEmpty={data?.data?.length === 0}
            isError={isError}
          >
            <Thead>
              <Tr>
                <Th scope="col">
                  <div className="flex items-center gap-x-3">
                    <input
                      checked={checked.isAllCheced}
                      onChange={() => {
                        if (checked.isAllCheced) {
                          setDeletePayload([]);
                        } else {
                          setDeletePayload((state) => {
                            if (!data) {
                              return [];
                            }

                            const selected: number[] = Array.from(
                              new Set([
                                ...state,
                                ...data?.data?.map((n) => Number(n.id)),
                              ])
                            );

                            return [...selected];
                          });
                        }
                      }}
                      type="checkbox"
                      className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                    />
                  </div>
                </Th>
                <Th scope="col">No</Th>
                <Th scope="col">Title</Th>
                <Th scope="col">Author</Th>
                <Th scope="col">Year</Th>
                <Th scope="col">Created At</Th>
                <Th scope="col">Updated At</Th>
                <Th scope="col">Aksi</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.data.map((item, index) => (
                  <Tr key={index}>
                    <Td>
                      <input
                        checked={deletePayload.includes(item.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setDeletePayload((state) => [...state, item.id]);
                          } else {
                            const filtered = deletePayload.filter(
                              (n) => n !== item.id
                            );
                            setDeletePayload(filtered);
                          }
                        }}
                        type="checkbox"
                        className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                      />
                    </Td>
                    <Td>{(params.page - 1) * params.pageSize + index + 1}</Td>
                    <Td>
                      <span>{item.title}</span>
                    </Td>
                    <Td>
                      <span>{item.author}</span>
                    </Td>
                    <Td>
                      <span>{item.year}</span>
                    </Td>
                    <Td>
                      <span>{item.created_at}</span>
                    </Td>
                    <Td>
                      <span>{item.updated_at}</span>
                    </Td>
                    <Td>
                      <span className="flex items-center space-x-2">
                        <DeleteButton
                          isLoading={isLoading}
                          onClick={() => {
                            handleDelete(item.id || 0);
                          }}
                        />
                        <EditButton
                          onClick={() => {
                            router.push(`book/${item.id}/edit`);
                          }}
                        />
                      </span>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>

          <Pagination
            page={params.page}
            pageSize={params.pageSize}
            handlePageSize={handlePageSize}
            handlePage={handlePage}
            pagination={data?.pagination}
          />
        </section>
      </section>
    </>
  );
};

export default Book;
