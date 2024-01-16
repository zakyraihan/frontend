"use client";
import Button from "@/components/Button";
import { Drawer } from "@/components/Drawer";
import { ReactQuery } from "@/components/ReactQuery";
import { useRouter } from "next/navigation";
import React from "react";
import Page from "./produk/page";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Page />
    </>
  );
};

export default Home;
