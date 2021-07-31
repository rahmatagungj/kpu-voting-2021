import React, {useState, useContext} from 'react';
import "./Login.css"
import {useHistory} from "react-router-dom"
import Seo from "../components/Seo"
import axios from "axios"
import MD5 from "crypto-js/md5";
import {Link} from "react-router-dom"
import {MdKeyboardArrowLeft} from "react-icons/md";
import UserContext from "../contexts/userContext";
import Swal from 'sweetalert2'

function Login() {
    const history = useHistory()
    const [userData, setUserData] = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const HandleLogin = () => {
        setIsLoading(true)
        let emailToLogin = MD5(email).toString()
        let passwordToLogin = MD5(password).toString()
        axios.get(`http://siamik.upmk.ac.id/apijson.php?method=login&secret_key=365rywegf23987439857h&client_key=rahmatagungjulians&email=${emailToLogin}&pwd=${passwordToLogin}`)
            .then(response => {
                if (response.data[0].hasil === "TRUE") {
                    setUserData(response.data[0])
                    setIsLoading(false)
                    history.push("/dashboard")
                } else {
                    Swal.fire({
                        title: 'GAGAL',
                        text: 'Harap periksa alamat surel dan kata sandi anda.',
                        icon: 'error',
                        confirmButtonText: 'Tutup'
                    })
                    setIsLoading(false)
                }
            })
            .catch((e) => {
                Swal.fire({
                    title: 'OOPS',
                    text: 'Terjadi kesalahan pada sistem, harap hubungi pengembang.',
                    icon: 'warning',
                    confirmButtonText: 'Tutup'
                })
                setIsLoading(false)
            });
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
                            <p> 191223045@mhs.upmk.ac.id : 45967805</p>
                            <p> 204223032@mhs.upmk.ac.id : 66841987</p>
                            <form className="mt-8 space-y-6">
                                <div className="relative">
                                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Alamat
                                        Surel</label>
                                    <input
                                        className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded focus:border-indigo-500"
                                        type="" placeholder="nim@mhs.upmk.ac.id"
                                        onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="mt-8 content-center">
                                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                        Kata Sandi
                                    </label>
                                    <input
                                        className="w-full content-center text-base px-4 py-2 border-b rounded border-gray-300 focus:outline-none focus:border-indigo-500"
                                        type="" placeholder="masukan kata sandi"
                                        onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="flex flex-col">
                                    <button type="submit"
                                            className={isLoading ? "btn btn-primary btn-block loading rounded shadow-md" : "btn btn-primary btn-block rounded shadow-md"}
                                            disabled={isLoading}
                                            onClick={() => HandleLogin()}>
                                        Masuk
                                    </button>

                                    <p className="text-sm text-primary mt-5">
                                        <Link to={"/"} className={"flex items-center"}><MdKeyboardArrowLeft
                                            className={"mr-1"}/>Beranda</Link>
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
                            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">Pemilihan presiden
                                mahasiswa BEM STKIP Muhammadiyah Kuningan, 2021.
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