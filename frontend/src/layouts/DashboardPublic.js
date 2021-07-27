import React from 'react';
import {MdExitToApp, MdHelp, MdInfo, MdPeople} from "react-icons/md";
import {Link} from "react-router-dom";

function DashboardPublic(props) {

    return (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <div id="modal-help" className="modal">
                <div className="modal-box">
                    <p>informasi taro sini</p>
                    <div className="modal-action">
                        <a href="#" className="btn">Tutup</a>
                    </div>
                </div>
            </div>
            <div className="shadow-lg bg-base-200 drawer drawer-mobile h-screen">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
                <div className="flex flex-col drawer-content">
                    <header
                        className="bg-base-200 w-full h-16 z-40 flex items-center justify-between sticky top-0 z-50 shadow-sm sm:shadow-none p-2">
                        <div className="block lg:hidden ml-6">
                            <label htmlFor="my-drawer-2"
                                   className="cursor-pointer flex p-2 items-center rounded-full text-gray-400 hover:text-gray-700 bg-white shadow text-md drawer-button lg:hidden">
                                <svg width="20" height="20" className="text-gray-400 hover:text-gray-700"
                                     fill="currentColor"
                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </label>
                        </div>
                        <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                            <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
                                <a href={"#modal-help"}>
                                    <button
                                        className="flex p-1 items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-lg">
                                        <MdHelp size={30}/>
                                    </button>
                                </a>
                                <span className="w-1 h-8 rounded-lg bg-gray-200"/>
                                <div className="dropdown dropdown-end">
                                    <button className="flex items-center text-gray-500 dark:text-white text-md"
                                            tabIndex={0}>
                                        Rahmat Agung Julians
                                        <svg width="20" height="20" className="ml-2 text-gray-400" fill="currentColor"
                                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                    <ul className="shadow menu dropdown-content bg-base-100 rounded w-52 text-black">
                                        <li className="text-red-700">
                                            <Link to="/login"><MdExitToApp className="mr-3"/>Keluar</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="p-5">
                        {props.children}
                    </div>
                </div>
                <div className="border-r-2 drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"/>
                    <div className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <div className="flex items-center justify-start pt-6 ml-8">
                            <p className="font-bold dark:text-white text-xl">
                                KPU
                            </p>
                        </div>
                        <nav className="mt-6 border-t-2 border-fuchsia-600">
                            <div>
                                <Link
                                    className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start"
                                    to="/dashboard"><MdPeople size={20}/>
                                    <span className="mx-2 text-sm font-normal">Pemilihan</span>
                                </Link>
                                <Link
                                    className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start"
                                    to="/dashboard/information"><MdInfo size={20}/>
                                    <span className="mx-2 text-sm font-normal">Informasi Pemilihan</span>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DashboardPublic;