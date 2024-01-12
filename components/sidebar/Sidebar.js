import React, { useState } from "react";
import { Tabs } from "../../assets/data/sideBarTabs";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/authContext";

const Sidebar = () => {
  const router = useRouter();
  const [selectedTab, setTab] = useState("Dashboard");
  const { logout } = useAuth();
  const handleTab = (url, name) => {
    setTab(name);
    if (url) {
      router.push(url);
    }
  };
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="/images/logo.png" className="img-fluid" alt="" />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <ul>
            {Tabs.map((data, i) => {
              return (
                <li
                  className={data.name === selectedTab && "active"}
                  style={{ cursor: "pointer" }}
                  key={i}
                  onClick={() => handleTab(data.url, data.name)}
                >
                  <img
                    src={data.img}
                    className="img-fluid icon"
                    alt={data.name}
                  />
                  {data.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="logout"
          onClick={() => {
            logout();
            router.push("/");
          }}
        >
          <img
            src="/images/logout 1.png"
            className="img-fluid"
            alt="logout-btn"
          />
          <p>LOGOUT</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
