import React, { useContext } from "react";
import {
  MdExitToApp,
  MdHelp,
  MdInfo,
  MdPeople,
  MdInsertChart,
  MdInsertDriveFile,
} from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../contexts/userContext";

function DashboardAdmin(props) {
  const [userData, setUserData] = useContext(UserContext);

  const history = useHistory();

  const HandleLogout = () => {
    setUserData(null);
    history.push("/admin");
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="shadow-lg bg-base-200 drawer drawer-mobile h-screen">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <header className="bg-primary w-full h-13 z-40 flex items-center justify-between sticky top-0 z-50 shadow-sm sm:shadow-none p-2">
            <div className="block lg:hidden ml-3">
              <label
                htmlFor="my-drawer-2"
                className="cursor-pointer flex p-2 items-center rounded-full text-gray-400 hover:text-gray-700 text-md drawer-button lg:hidden"
              >
                <svg
                  width="22"
                  height="22"
                  className="text-gray-400 hover:text-gray-700"
                  fill="#ffffff"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </label>
            </div>
            <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
              <div className="relative p-2 flex items-center w-full space-x-4 justify-end">
                <div className="dropdown dropdown-end">
                  <button
                    className="flex items-center text-white dark:text-white text-sm"
                    tabIndex={0}
                  >
                    {userData ? userData.name : ""}
                    <svg
                      width="20"
                      height="20"
                      className="ml-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
                    </svg>
                  </button>
                  <ul className="shadow menu dropdown-content bg-base-100 rounded w-52 text-black">
                    <li className="text-black-700">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=6285721208155&text=Halo,%20saya%20membutuhkan%20bantuan%20dengan%20situs%20KPU%20STKIP%20Muhammadiyah%20Kuningan"
                      >
                        <MdHelp className="mr-3" /> Bantuan
                      </a>
                    </li>
                    <li className="text-red-700">
                      <a href="#logout" onClick={HandleLogout}>
                        <MdExitToApp className="mr-3" />
                        Keluar
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="p-5 overflow-x-hidden">{props.children}</div>
        </div>
        <div className="border-r-2 drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay" />
          <div className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
            <div className="flex justify-start pt-6 ml-8 flex-col">
              <p className="font-bold dark:text-white text-xl">
                Komisi Pemilihan Umum Mahasiswa
              </p>
              <p className="font-bold dark:text-white text-xs mt-2">
                STKIP Muhammadiyah Kuningan
              </p>
            </div>
            <nav className="mt-6 border-t-2 border-fuchsia-600">
              <div>
                <Link
                  className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start"
                  to="/admin/dashboard"
                >
                  <MdInsertChart size={20} />
                  <span className="mx-2 text-sm font-normal">
                    Hasil Pemilihan
                  </span>
                </Link>
                <Link
                  className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start"
                  to="/admin/dashboard/data"
                >
                  <MdPeople size={20} />
                  <span className="mx-2 text-sm font-normal">
                    Data Pemilihan
                  </span>
                </Link>
                <Link
                  className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start"
                  to="/admin/dashboard/dpt"
                >
                  <MdInsertDriveFile size={20} />
                  <span className="mx-2 text-sm font-normal">Data DPT</span>
                </Link>
                <Link
                  className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start"
                  to="/admin/dashboard/information"
                >
                  <MdInfo size={20} />
                  <span className="mx-2 text-sm font-normal">
                    Informasi Admin
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardAdmin;
