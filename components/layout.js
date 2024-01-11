import React from "react";
import { useRouter } from "next/router";

const DefaultLayout = ({ children, isHidden }) => {
  const router = useRouter();

  return <div>{children}</div>;
};

export default DefaultLayout;
