"use client";
import Button from "@/components/Button";
import { Pagination } from "../../components/Pagination";
import { Table, Th, Thead, Tr, Tbody, Td } from "@/components/Tabel";
import { useRouter } from "next/navigation";
import useBookModule from "./lib";

const Book = () => {
  const { useBookList } = useBookModule();
  const { data, isFetching, isError } = useBookList();

  return (
    <>
      <section className="container px-4 mx-auto space-y-5">
        <section className="flex items-center justify-between">
          <Button colorSchema="red" title="Tambah Buku" />
        </section>
        <section>
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
                <Th scope="col">Title</Th>
                <Th scope="col">Author</Th>
                <Th scope="col">Year</Th>
                <Th scope="col">Created At</Th>
                <Th scope="col">Updated At</Th>
                t
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.data.map((item:any, index: any) => (
                  <Tr key={index}>
                    <Td>
                      <input
                        type="checkbox"
                        className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                      />
                    </Td>
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
        </section>
      </section>
    </>
  );
};

export default Book;
