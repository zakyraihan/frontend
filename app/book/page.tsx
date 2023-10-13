"use client";
import Button from "@/components/Button";
import { Pagination } from "../../components/Pagination";
import { Table, Th, Thead, Tr, Tbody, Td } from "@/components/Tabel";
import useBookModule from "./lib";
import { Drawer } from "@/components/Drawer";
import Filter from "./module/filter";
import useDisClosure from "@/hook/useClosure";
import { useRouter } from "next/navigation";


const Book = () => {
  const { useBookList } = useBookModule();

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

  const { isOpen, onOpen, onClose } = useDisClosure();
  const router = useRouter()

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
      <section className="w-screen h-screen p-10 overflow-auto ">
        <section className="flex items-center justify-between ">
          <Button
            width="sm"
            onClick={onOpen}
            colorSchema="blue"
            title="Filter"
          />
          <Button
            onClick={() => {
              router.push("/tambah");
            }}
            width="sm"
            colorSchema="red"
            title="tambah"
          />
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
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.data.map((item, index) => (
                  <Tr key={index}>
                    <Td>
                      <input
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
