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
      {/* making sidebar and header common to every component and conditionally rendering it according to login status */}
      {isLoggedIn && path !== "/" && (
        <>
          <Sidebar />
          <Header />
        </>
      )}
      {/* this includes all component */}
      {children}
    </>
  );
};

export default DefaultLayout;
