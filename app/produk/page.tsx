"use client";
import { Card, CardBody } from "@/components/Card";
import LandingPage from "@/components/landing-page/LandingPage";
import React from "react";
import NavigationBar from "@/components/landing-page/NavigationBar";
import useBookModule from "./lib";
import useProdukModule from "./lib";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosAdd, IoMdRemoveCircle } from "react-icons/io";
import Link from "next/link";
import { FastForward, Trash } from "@phosphor-icons/react";
import { IoStarSharp, IoTerminalSharp } from "react-icons/io5";

const Page = () => {
  const { useProdukList } = useProdukModule();
  const { data, isFetching, isError } = useProdukList();
  const router = useRouter();

  return (
    <>
      <LandingPage />
      <section className="mt-20 flex justify-center my-36">
        <Card
          isFetching={isFetching}
          isEmpty={data?.data?.length === 0}
          isError={isError}
        >
          {data &&
            data.data.map((item, index) => (
              <div className="">
                <div className="text-slate-200 hover:text-red-500 transition-all flex justify-end">
                  <Trash />
                </div>
                <Link key={index} href={`/produk/detail/${item.id}`}>
                  <div className=" shadow-md w-[12.5rem] p-4">
                    <div className="flex justify-center">
                      <div className="">
                        <Image
                          src={"/assets/ip.jpeg"}
                          alt=""
                          width={250}
                          height={250}
                        />
                      </div>
                    </div>
                    <h1 className="text-sm">{item.nama_produk}</h1>
                    <div className="mt-3">
                      <p className="font-normal text-orange-500">
                        <span className="text-orange-500">Rp</span>
                        {item.harga_produk}
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center">
                        <div className="text-yellow-300 flex text-sm">
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                        </div>
                        <p className="text-sm">{item.jumlah_produk}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </Card>
      </section>
      <button
        className="text-2xl fixed right-5 bottom-5 p-4 bg-green-400 text-white rounded-full "
        onClick={() => {
          router.push("/produk/tambah");
        }}
      >
        <IoIosAdd />
      </button>
    </>
  );
};

export default Page;
