"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src={"/images/logo.png"}
      alt="Logo"
      height={100}
      width={100}
      className="hidden md:block cursor-pointer"
      onClick={() => router.push("/")}
    />
  );
};
export default Logo;
