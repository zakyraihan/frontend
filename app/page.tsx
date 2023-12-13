"use client";
import Button from "@/components/Button";
import { Drawer } from "@/components/Drawer";
import { ReactQuery } from "@/components/ReactQuery";
import { useRouter } from "next/navigation";
import React from "react";
import Page from "./uas/page";
import { Card, CardBody, CardHeader } from "@/components/Card";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Page />
      <div>
        {/* Example usage of the Card component */}
        <Card>
          {/* Example usage of the CardHeader component inside the Card */}
          <CardHeader>Data Header</CardHeader>

          {/* Example usage of the CardBody component inside the Card */}
          <CardBody>
            <p>This is the body content of the card.</p>
          </CardBody>
        </Card>

        {/* Your other page content goes here */}
      </div>
    </>
  );
};

export default Home;
