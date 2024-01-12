import React from "react";
import { useRouter } from "next/router";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import { useAuth } from "@/utils/authContext";

const DefaultLayout = ({ children, isHidden }) => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn && (
        <>
          <Sidebar />
          <Header />
        </>
      )}
      {children}
    </>
  );
};

export default DefaultLayout;
