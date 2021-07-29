import React, {useState} from 'react';
import "./Login.css"
import {useHistory} from "react-router-dom"
import Seo from "../components/Seo"
import {Link} from "react-router-dom"
import { MdKeyboardArrowLeft } from "react-icons/md";

function Login(props) {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const HandleLogin = () => {
        setIsLoading(true)
        setTimeout(() => {
            history.push("/dashboard")
        },1000)
    }

    return (
        <>
            <Seo title={"Masuk"}/>
        <div className="relative min-h-screen flex withBackground">
            <div
                className="flex sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 md:bg-white bg-primary bg-opacity-25">
                <div
                    className="m-5 sm:m-0 md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/6 xl:w-2/6 p-8 md:p-10 lg:p-14 rounded md:rounded-none bg-white shadow-lg z-10">

                    <div className="max-w-md w-full space-y-8">
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                Masuk
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">Harap masuk untuk melanjutkan</p>
                        </div>
                        <form className="mt-8 space-y-6">
                            <div className="relative">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                                <input
                                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded focus:border-indigo-500"
                                    type="" placeholder="email@mhs.upmk.ac.id"/>
                            </div>
                            <div className="mt-8 content-center">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </label>
                                <input
                                    className="w-full content-center text-base px-4 py-2 border-b rounded border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type="" placeholder="masukan kata sandi"/>
                            </div>
                            <div className="flex flex-col">
                                <button type="submit"
                                        className={isLoading ? "btn btn-primary btn-block loading rounded shadow-md" : "btn btn-primary btn-block rounded shadow-md"}
                                        disabled={isLoading}
                                onClick={HandleLogin}>
                                    Masuk
                                </button>

                                <p className="text-sm text-primary mt-5">
                                    <Link to={"/"} className={"flex items-center"}><MdKeyboardArrowLeft className={"mr-1"}/>Beranda</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div
                    className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-primary text-white bg-no-repeat bg-cover relative withBackground">
                    <div className="absolute bg-primary opacity-75 inset-0 z-0"></div>
                    <div className="w-full  max-w-md z-10">
                        <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Pemilihan Umum Raya
                        </div>
                        <div className="sm:text-sm xl:text-md text-gray-200 font-normal">Pemilihan presiden mahasiswa BEM STKIP Muhammadiyah Kuningan, 2021.
                        </div>
                    </div>
                </div>
                <ul className="circles z-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Login;