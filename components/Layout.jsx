import { useRouter } from "next/router";
import { useTasks } from "../context/TasksContext";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="px-28 py-10 h-5/6">{children}</main>
    </div>
  );
};

export default Layout