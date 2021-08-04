import React, { useState, useContext, useEffect, useRef } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import Seo from "../components/Seo";
import axios from "axios";
import MD5 from "crypto-js/md5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import UserContext from "../contexts/userContext";
import Swal from "sweetalert2";

function Login() {
  const history = useHistory();
  const [userData, setUserData] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [haveSavedUserData, setHaveSavedUserData] = useState(false);

  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const HandleLogin = () => {
    if (haveSavedUserData) {
      setIsLoading(true);
      setIsLoading(false);
      history.push("/dashboard");
    } else {
      setIsLoading(true);
      let emailToLogin = MD5(refEmail.current.value).toString();
      let passwordToLogin = MD5(refPassword.current.value).toString();
      axios
        .get(
          `http://siamik.upmk.ac.id/apijson.php?method=login&secret_key=365rywegf23987439857h&client_key=rahmatagungjulians&email=${emailToLogin}&pwd=${passwordToLogin}`
        )
        .then((response) => {
          if (response.data[0].hasil === "TRUE") {
            localStorage.setItem("userData", JSON.stringify(response.data[0]));
            setUserData(response.data[0]);
            setIsLoading(false);
            history.push("/dashboard");
          } else {
            Swal.fire({
              title: "GAGAL",
              text: "Harap periksa alamat surel dan kata sandi anda.",
              icon: "error",
              confirmButtonText: "Tutup",
              confirmButtonColor: "#014E87",
            });
            setIsLoading(false);
          }
        })
        .catch((e) => {
          Swal.fire({
            title: "OOPS",
            text: "Terjadi kesalahan, harap coba lagi.",
            icon: "warning",
            confirmButtonText: "Tutup",
            confirmButtonColor: "#014E87",
          });
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
    if (savedUserData) {
      setUserData(savedUserData);
      setHaveSavedUserData(true);
    }
    return () => {
      setHaveSavedUserData(false);
    };
  }, []);

  const HandleNewLogin = () => {
    setIsLoading(true);
    localStorage.removeItem("userData");
    setUserData(null);
    setHaveSavedUserData(false);
    setIsLoading(false);
  };

  const RenderNewLogin = () => {
    return (
      <>
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Masuk Mahasiswa
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Harap masuk untuk melanjutkan
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="relative">
            <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
              Alamat Surel
            </label>
            <input
              className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded focus:border-indigo-500"
              type="text"
              placeholder="nim@mhs.upmk.ac.id"
              ref={refEmail}
            />
          </div>
          <div className="mt-8 content-center">
            <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
              Kata Sandi
            </label>
            <input
              className="w-full content-center text-base px-4 py-2 border-b rounded border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              placeholder="masukan kata sandi"
              ref={refPassword}
            />
          </div>
          <div className="flex flex-col">
            <button
              className={
                isLoading
                  ? "btn btn-primary bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus btn-block loading rounded shadow-md"
                  : "btn btn-primary bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus btn-block rounded shadow-md"
              }
              disabled={isLoading}
              onClick={HandleLogin}
            >
              Masuk
            </button>

            <p className="text-sm text-primary mt-5">
              <Link to={"/"} className={"flex items-center"}>
                <MdKeyboardArrowLeft className={"mr-1"} />
                Beranda
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  };

  const RenderOldLogin = () => {
    return (
      <>
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Masuk Mahasiswa
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Anda telah masuk sebelumnya
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="flex flex-col">
            <button
              className={
                isLoading
                  ? "btn h-full bg-primary border-2 border-primary hover:border-primary focus:border-primary text-white hover:bg-primary-focus focus:bg-primary-focus btn-block loading rounded shadow-md"
                  : "btn h-full bg-primary border-2 border-primary hover:border-primary focus:border-primary text-white hover:bg-primary-focus focus:bg-primary-focus btn-block rounded shadow-md"
              }
              disabled={isLoading}
              onClick={HandleLogin}
            >
              Lanjutkan sebagai <br />
              {userData.name}
            </button>
            <button
              className={
                isLoading
                  ? "btn mt-3 h-full bg-white text-secondary border-2 border-secondary hover:text-white focus:text-white hover:border-secondary hover:bg-secondary-focus focus:bg-secondary-focus btn-block loading rounded shadow-md"
                  : "btn mt-3 h-full bg-white border-2 border-secondary text-secondary hover:text-white focus:text-white hover:border-secondary hover:bg-secondary-focus focus:bg-secondary-focus btn-block rounded shadow-md"
              }
              disabled={isLoading}
              onClick={HandleNewLogin}
            >
              Gunakan akun lain
            </button>

            <p className="text-sm text-primary mt-5">
              <Link to={"/"} className={"flex items-center"}>
                <MdKeyboardArrowLeft className={"mr-1"} />
                Beranda
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Seo title={"Masuk Mahasiswa"} />
      <div className="relative min-h-screen flex withBackground">
        <div className="flex sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 md:bg-white bg-primary bg-opacity-25">
          <div className="animated-panel m-5 sm:m-0 md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/6 xl:w-2/6 p-8 md:p-10 lg:p-14 rounded md:rounded-none bg-white shadow-lg z-10">
            <div className="max-w-md w-full space-y-8">
              {haveSavedUserData ? <RenderOldLogin /> : <RenderNewLogin />}
            </div>
          </div>
          <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-primary text-white bg-no-repeat bg-cover relative withBackground">
            <div className="absolute bg-primary opacity-75 inset-0 z-0"></div>
            <div className="w-full  max-w-md z-10 animated-tagline">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Pemilihan Umum Raya
              </div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                Pemilihan Presiden dan Wakil Presiden Badan Eksekutif Mahasiswa
                STKIP Muhammadiyah Kuningan 2021-2022.
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
