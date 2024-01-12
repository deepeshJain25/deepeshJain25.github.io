import React from "react";
import { useRouter } from "next/router";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import { useAuth } from "@/utils/authContext";

const DefaultLayout = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      {isLoggedIn && path !== "/" && (
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
