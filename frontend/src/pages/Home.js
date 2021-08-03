import React, { useState } from "react";
import Seo from "../components/Seo";
import { Link, useHistory } from "react-router-dom";
import { dataTimeline } from "../data/dataTimeline";
import { FaSignInAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import "./Home.css";
import "./bgBlue.css";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [nimDpt, setNimDpt] = useState(null);

  const history = useHistory();

  const HandleCheckDpt = async () => {
    setIsloading(true);
    await axios
      .get(
        "http://siamik.upmk.ac.id/apijson.php?method=dpt&secret_key=365rywegf23987439857h&client_key=rahmatagungjulians"
      )
      .then((response) => {
        let foundedDpt = response.data.filter((dpt) => dpt.nim === nimDpt);
        if (foundedDpt.length > 0) {
          Swal.fire({
            showDenyButton: true,
            title: "TERDAFTAR",
            icon: "info",
            confirmButtonText: "Masuk",
            confirmButtonColor: "#014E87",
            denyButtonText: "Tutup",
            denyButtonColor: "#3d4451",
          }).then((result) => {
            if (result.isConfirmed) {
              history.push("/login");
            }
          });
        } else {
          Swal.fire({
            title: "TIDAK TERDAFTAR",
            icon: "error",
            confirmButtonText: "Tutup",
            confirmButtonColor: "#014E87",
          });
        }
      })
      .catch((e) =>
        Swal.fire({
          title: "OOPS",
          text: "Terjadi kesalahan, harap coba lagi.",
          icon: "error",
          confirmButtonText: "Tutup",
          confirmButtonColor: "#014E87",
        })
      );
    setIsloading(false);
  };

  return (
    <div>
      <Seo title={"STKIP Muhammadiyah Kuningan 2021"} />

      {/* navbar */}
      <div className="bg-primary">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link
              to="/"
              aria-label="PEMIRA"
              title="PEMIRA"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                PEMIRA
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="#timeline"
                  aria-label="toTimeline"
                  title="toTimeline"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Linimasa
                </a>
              </li>
              <li>
                <Link
                  to="/quickcount"
                  aria-label="toTimeline"
                  title="toTimeline"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Hasil Pemilihan Sementara
                </Link>
              </li>
            </ul>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-accent hover:bg-accent-focus focus:shadow-outline focus:outline-none"
                  aria-label="Masuk"
                  title="Masuk"
                >
                  <FaSignInAlt className={"mr-3"} /> Masuk
                </Link>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="#ffffff"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="#ffffff"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="#ffffff"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            PEMIRA
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <a
                            href="#timeline"
                            aria-label="toTimeline"
                            title="toTimeline"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primary-focus"
                          >
                            Linimasa
                          </a>
                        </li>
                        <li>
                          <Link
                            to="/quickcount"
                            aria-label="toTimeline"
                            title="toTimeline"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primary-focus"
                          >
                            Hasil Pemilihan Sementara
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/login"
                            className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full  shadow-md bg-accent hover:bg-accent-focus focus:shadow-outline focus:outline-none"
                            aria-label="masuk"
                            title="masuk"
                          >
                            Masuk
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* hero */}

      <div className="relative">
        <img
          src="https://i.ibb.co/Pwc98xp/6386-min.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt="bg-private"
        />
        <div className="relative bg-opacity-75 bg-primary">
          <svg
            viewBox="0 0 1160 163"
            className="absolute inset-x-0 bottom-0 text-white"
            transform="translate(0.5,0.5)"
          >
            <path
              fill="#E0E7FF"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Pemilihan Umum Raya
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  Pemilihan presiden mahasiswa BEM STKIP Muhammadiyah Kuningan,
                  2021.
                </p>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Cek Status DPT
                  </h3>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="nim"
                      className="inline-block mb-1 font-medium"
                    >
                      Nomor Induk Mahasiswa
                    </label>
                    <input
                      placeholder="Masukan NIM disini ..."
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-primary-focus focus:outline-none focus:shadow-outline"
                      id="nim"
                      name="nim"
                      onChange={(e) => setNimDpt(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      onClick={() => HandleCheckDpt()}
                      disabled={isLoading}
                      type="submit"
                      className={
                        isLoading
                          ? "btn border-0 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-secondary hover:bg-secondary-focus focus:shadow-outline focus:outline-none loading"
                          : "btn border-0 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-secondary hover:bg-secondary-focus focus:shadow-outline focus:outline-none"
                      }
                    >
                      Cek
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Hanya DPT terdaftar yang dapat melakukan pemilihan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hero end */}

      {/* about */}
      <div className="flex justify-center items-center py-10 px-10 my-5">
        <div className="mockup-window bg-base-300 max-w-2xl md:max-w-3xl shadow-md">
          <div className="flex flex-col justify-center px-4 py-5 bg-info">
            <h1 className="text-3xl font-bold text-white mb-3">
              Pemira itu apa, <i>sih?</i>
            </h1>
            <p className="text-1xl font-medium text-white">
              Pemilihan Umum Raya adalah kegiatan pemilihan presiden mahasiswa
              BEM STKIP Muhammadiyah Kuningan sebagai salah satu perwujudan
              demokrasi Mahasiswa STKIP Muhammadiyah Kuningan.
            </p>
          </div>
        </div>
      </div>
      {/* about end */}

      {/* timeline */}
      <div
        id={"timeline"}
        className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 mt-10"
      >
        <div className="max-w-lg text-center sm:mx-auto">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative text-primary">LINIMASA</span>
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Pemilihan umum raya 2021 STKIP Muhammadiyah Kuningan.
          </p>
        </div>
      </div>
      <div className="relative px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg viewBox="0 0 88 88" className="max-w-screen-xl text-indigo-100">
            <circle fill="#ebefff" cx="44" cy="44" r="15.5" />
          </svg>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Mapping data Timeline to Layout */}
          {dataTimeline.map((timeline, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
            >
              <div className="p-5">
                <p className="mb-2 font-bold flex items-center">
                  <MdDateRange className={"mr-1"} />
                  {timeline.date}
                </p>
                <p className="text-sm leading-5 text-gray-900">
                  {timeline.details}
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-primary-focus group-hover:scale-x-100" />
            </div>
          ))}
          {/* End Mapping */}
        </div>
      </div>
      {/* timeline end */}

      <div className="relative mt-16 bg-primary">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-primary-focus"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="#014D87"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex justify-between  pb-10 flex-row items-center">
            <p className="text-sm text-gray-100">
              © 2021 - Rahmat Agung Julians
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="https://www.instagram.com/rahmatagungj"
                target="_blank"
                rel={"noopener nofollow noreferrer"}
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="#ffffff" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
