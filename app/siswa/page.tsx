"use client";
import Button from "@/components/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Use 'next/router' instead of 'next/navigation'
import React, { useEffect } from "react";
import useAuthModule from "../auth/lib/auth_service";
import Spinner from "@/components/Spinner";
import { signOut } from "next-auth/react";

const HalamanSiswa = () => {
  const router = useRouter();
  const { useProfile } = useAuthModule();
  const { data: profile, isFetching } = useProfile();
  const { data: session, status } = useSession();

  //   useEffect(() => {
  //     if (!session) {
  //       router.push("/auth/login");
  //     }
  //   }, [session, router]);

  //   if (isFetching) {
  //     return (
  //       <div className="flex justify-center items-center">
  //         <Spinner />
  //       </div>
  //     );
  //   }

  return (
    <div>
      {/* {JSON.stringify(session)} */}
      <>
        <p>ini adalah halaman siswa</p>
        <p>halo {session?.user.name}</p>
        <Button
          title="Log out"
          colorSchema="blue"
          width="40"
          onClick={() => {
            signOut({ redirect: false });
            router.push("/auth/login");
          }}
        />
      </>
    </div>
  );
};

export default HalamanSiswa;
