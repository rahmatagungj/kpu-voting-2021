import React, { useState } from "react";
import { dataStat } from "../data/dataStat";
import Seo from "../components/Seo";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import "./bgBlue.css";

function HomeEnd() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Seo title="STKIP Muhammadiyah Kuningan" />
      <div className="h-screen flex flex-col">
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
                    href="#result"
                    aria-label="toTimeline"
                    title="toTimeline"
                    className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-accent hover:bg-accent-focus focus:shadow-outline focus:outline-none"
                  >
                    Hasil Pemilihan
                  </a>
                </li>
              </ul>
              {/* <ul className="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <Link
                    to="/admin"
                    className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-accent hover:bg-accent-focus focus:shadow-outline focus:outline-none"
                    aria-label="Masuk"
                    title="Masuk"
                  >
                    <FaSignInAlt className={"mr-3"} /> Masuk Pengurus
                  </Link>
                </li>
              </ul> */}
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
                              href="#result"
                              aria-label="toTimeline"
                              title="toTimeline"
                              className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full  shadow-md bg-accent hover:bg-accent-focus focus:shadow-outline focus:outline-none"
                            >
                              Hasil Pemilihan
                            </a>
                          </li>
                          {/* <li>
                            <Link
                              to="/admin"
                              className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full  shadow-md bg-accent hover:bg-accent-focus focus:shadow-outline focus:outline-none"
                              aria-label="masuk"
                              title="masuk"
                            >
                              Masuk Pengurus
                            </Link>
                          </li> */}
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://i.ibb.co/Pwc98xp/6386-min.jpg"
            className="absolute inset-0 object-cover w-full h-full"
            alt="bg-private"
          />
          <section className="relative text-gray-400 bg-primary bg-opacity-75 body-font">
            <div className="px-10 mx-auto">
              <div className="pt-10 md:pt-20 pb-5">
                <Flip bottom>
                  <p className="text-white font-bold text-5xl flex flex-col items-center mt-10">
                    <span>Pemilihan Umum Raya</span>
                  </p>
                </Flip>
                <p className="text-white text-lg flex flex-col items-center py-5">
                  <Slide bottom>
                    Pemilihan Presiden dan Wakil Presiden Badan Eksekutif
                    Mahasiswa STKIP Muhammadiyah Kuningan 2021-2022.
                  </Slide>
                  <Slide bottom>
                    <div className="mt-5 w-full md:w-1/4 inline-flex items-center bg-white leading-none text-black rounded-full p-2 shadow text-teal text-sm">
                      <span className="inline-flex bg-info text-white rounded-full h-6 px-3 justify-center items-center">
                        Informasi
                      </span>
                      <span className="inline-flex px-2 text-gray-700">
                        Pemilihan sudah berakhir.
                      </span>
                    </div>
                  </Slide>
                </p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#E0E7FF"
                fillOpacity="1"
                d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </section>
        </div>

        <div style={{ backgroundColor: "#e0e7ff" }}>
          <section id="result" className="flex flex-col justify-center">
            <div className="flex flex-col items-start px-5 pb-20 mx-auto lg:items-center md:flex-row lg:px-28">
              <Zoom>
                <div className="w-full mb-10 lg:w-7/8 lg:max-w-lg md:w-1/2 bg-white shadow hover:shadow-xl rounded-lg">
                  <img
                    className="object-cover object-center"
                    alt="hero"
                    src="http://pemira.upmk.ac.id/winner.png"
                  />
                </div>
              </Zoom>
              <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
                <Fade bottom>
                  <h1 className="text-2xl font-bold tracking-tighter text-left text-primary lg:text-5xl title-font">
                    {" "}
                    Pasangan Terpilih
                  </h1>
                </Fade>
                <Fade bottom>
                  <h3 className="font-bold tracking-tighter text-left text-gray-600 lg:text-l my-7 lg:my-5 w-full lg:w-4/5 title-font">
                    Presiden dan Wakil Presiden Badan Eksekutif Mahasiswa STKIP
                    Muhammadiyah Kuningan.
                  </h3>
                </Fade>
                <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
                  <div className="flex flex-col items-start p-4 mb-2 lg:mb-6 text-left md:w-1/2 md:mb-0">
                    <Fade bottom>
                      <div className="flex-grow">
                        <h2 className="mb-3 text-xl font-medium tracking-tighter text-gray-600 title-font">
                          {" "}
                          Handika Rahmat Utama
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          Pendidikan Bahasa dan Sastra Sunda <br /> Semester 6
                        </p>
                      </div>
                    </Fade>
                  </div>
                  <div className="flex flex-col items-start p-4 mb-2 lg:mb-6 text-left md:w-1/2 md:mb-0">
                    <Fade bottom>
                      <div className="flex-grow">
                        <h2 className="mb-3 text-xl font-medium tracking-tighter text-gray-600 title-font">
                          {" "}
                          Muhammad Abdul Aziz
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          Pendidikan Jasmani Kesehatan dan Rekreasi <br />
                          Semester 6
                        </p>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-gray-400 body-font my-5 bg-transparent">
            <div className="container px-5 pb-20 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <Slide bottom>
                  <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-primary">
                    Hasil Pemilihan
                  </h1>
                </Slide>
                <Slide bottom>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-700">
                    Rekapitulasi Hasil Pemilihan Presiden dan Wakil Presiden
                    Badan Eksekutif Mahasiswa STKIP Muhammadiyah Kuningan
                    2021-2022.
                  </p>
                </Slide>
              </div>
              <div className="flex flex-wrap -m-4 text-center">
                {dataStat.map((stat) => (
                  <Pulse key={stat.title}>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                      <div className="px-4 py-6 rounded-lg bg-white shadow-lg hover:shadow-xl">
                        <h2 className="title-font font-medium text-3xl text-black">
                          {stat.value.toLocaleString()}
                        </h2>
                        <p className="leading-relaxed">{stat.title}</p>
                      </div>
                    </div>
                  </Pulse>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="flex-grow" />

        <div className="relative bg-primary">
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
                © 2021 -{" "}
                <a
                  href="https://www.instagram.com/rahmatagungj"
                  target="_blank"
                  rel={"noopener nofollow noreferrer"}
                >
                  Rahmat Agung Julians
                </a>
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
    </>
  );
}

export default HomeEnd;
