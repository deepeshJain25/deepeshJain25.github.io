import Image from "next/image";
import Residence from "./residence";
import OwnerManagement from "./owner-management";
import Login from "./login";
import Dashboard from "./dashboard";

export default function Home() {
  return (
    <main className="main">
      <Login />
      {/* <Dashboard /> */}
      {/* <Residence /> */}
      {/* <OwnerManagement /> */}
    </main>
  );
}
