import React, { useState, useEffect } from "react";
import Seo from "../components/Seo";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiOptions } from "../data/apiData";
import "./bgBlue.css";
import moment from "moment";

function getPercentage(countVote, totalVote) {
  const result = (countVote / totalVote) * 100;

  if (!isNaN(result)) {
    return result.toFixed(1);
  } else {
    return 0;
  }
}

const QuickCount = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFullLoaded, setIsFullLoaded] = useState(false);
  const [countVoteOne, setCountVoteOne] = useState(null);
  const [countVoteTwo, setCountVoteTwo] = useState(null);
  const [totalVote, setTotalVote] = useState(0);
  const [totalDpt, setTotalDpt] = useState(0);

  const getAllData = async () => {
    await axios
      .get("https://kpu-stkip.azurewebsites.net/api/vote/", apiOptions)
      .then((response) => {
        setTotalVote(response.data.data.length);
      })
      .catch((e) => setTotalVote(0));
    await axios
      .get(
        "http://siamik.upmk.ac.id/apijson.php?method=dpt&secret_key=365rywegf23987439857h&client_key=rahmatagungjulians"
      )
      .then((response) => {
        setTotalDpt(response.data.length);
      })
      .catch((e) => setTotalVote(0));
    await axios
      .get("https://kpu-stkip.azurewebsites.net/api/vote/count/1", apiOptions)
      .then((response) => setCountVoteOne(response.data.message))
      .catch((e) => setCountVoteOne(0));
    await axios
      .get("https://kpu-stkip.azurewebsites.net/api/vote/count/2", apiOptions)
      .then((response) => setCountVoteTwo(response.data.message))
      .catch((e) => setCountVoteTwo(0));
    setIsLoading(false);
  };

  const HandleGetResult = () => {
    setIsLoading(true);
    getAllData();
  };

  useEffect(() => {
    if (countVoteOne !== null && countVoteTwo !== null) {
      setIsFullLoaded(true);
    }
  }, [countVoteOne, countVoteTwo, totalVote, totalDpt]);

  return (
    <div>
      <Seo title={"Hasil Pemilihan Sementara"} />

      <div class="flex flex-col min-h-screen ">
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

        {/* end navbar  */}

        <main class="flex-grow">
          {/* Hero */}
          {!isFullLoaded && (
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="https://i.ibb.co/fHZ3FjF/politician-giving-his-speech-to-public-min.png"
                  />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Hasil Pemilihan Sementara
                  </h2>
                  <p className="mb-8 leading-relaxed">
                    Rekapitulasi Hasil Pemilihan Sementara presiden mahasiswa
                    BEM STKIP Muhammadiyah Kuningan, 2021.
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={HandleGetResult}
                      disabled={isLoading}
                      className={
                        isLoading
                          ? "btn btn-primary bg-primary hover:bg-primary-focus focus:bg-primary-focus inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg loading"
                          : "btn btn-primary bg-primary hover:bg-primary-focus focus:bg-primary-focus inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
                      }
                    >
                      Lihat
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}
          {/* End Hero */}

          {/* Result  */}
          {isFullLoaded && (
            <>
              <div className="container mx-auto flex px-5 pt-10 pb-0 md:flex-row flex-col">
                <h2 className="title-font sm:text-2xl text-xl font-bold text-gray-900">
                  Hasil Pemilihan Sementara
                </h2>
              </div>
              <div className="container mx-auto px-5 pt-8 ">
                <div className="alert alert-info text-white bg-info font-bold">
                  <div className="flex-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 mx-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      ></path>
                    </svg>
                    <label>
                      Data pada {moment(new Date()).locale("id").format("LLLL")}{" "}
                      WIB
                    </label>
                  </div>
                </div>
              </div>
              <div className="container mx-auto flex px-5 pt-10 pb-0 lg:pb-10 md:flex-row flex-col items-center lg:justify-between">
                <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mb-5 md:mb-0">
                  <div className="stat shadow rounded bg-white">
                    <div className="stat-figure text-info">
                      <div className="avatar">
                        <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                          <img
                            src="https://i.ibb.co/GTwgFwH/IMG-5492-removebg-preview.png"
                            alt="Avatar Tailwind CSS Component"
                            className="mask mask-squircle"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="stat-value">
                      {getPercentage(countVoteOne, totalVote).toString()}%
                    </div>
                    <div className="stat-title">{countVoteOne} Suara</div>
                    <div className="stat-desc flex-wrap">
                      Handika Rahmat Utama
                    </div>
                    <div className="stat-desc flex-wrap">
                      Muhammad Abdul Aziz
                    </div>
                  </div>
                </div>
                <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mb-5 md:mb-0">
                  <div className="stat shadow rounded bg-white">
                    <div className="stat-figure text-info">
                      <div className="avatar">
                        <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                          <img
                            src="https://i.ibb.co/yY2PPgw/IMG-2923-removebg-preview.png"
                            alt="Avatar Tailwind CSS Component"
                            className="mask mask-squircle"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="stat-value">
                      {getPercentage(countVoteTwo, totalVote).toString()}%
                    </div>
                    <div className="stat-title">{countVoteTwo} Suara</div>
                    <div className="stat-desc flex-wrap">Pitradi</div>
                    <div className="stat-desc flex-wrap">Robi Iskandar</div>
                  </div>
                </div>
              </div>
              <div className="container mx-auto flex px-5 md:flex-row flex-col items-center lg:justify-around">
                <div className="stat shadow rounded bg-white">
                  <div className="stat-figure text-primary">
                    <div className="avatar">
                      <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                        <img
                          src="https://i.ibb.co/f9GfR01/vote-box.png"
                          alt="tota vote"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="stat-value">
                    {totalVote}/{totalDpt.toLocaleString()}
                  </div>
                  <div className="stat-title">Jumlah suara</div>
                  <div className="stat-desc">
                    <progress
                      value={getPercentage(totalVote, totalDpt)}
                      max={totalDpt}
                      className="progress progress-secondary"
                    ></progress>
                  </div>
                </div>
              </div>
              <div className="container mx-auto flex px-5 pt-6 lg:pt-10 pb-10 md:flex-row flex-col">
                <div className="container border-t-4 border-primary bg-white p-5 rounded">
                  <h3 className="text-base font-bold text-primary">
                    Informasi
                  </h3>
                  <hr className="my-5" />
                  <div className="mx-auto container flex w-full  px-5">
                    <ul className="list-decimal">
                      <li>
                        Data yang ditampilkan adalah data terbaru dari sistem
                        pendataan.
                      </li>
                      <li>
                        Data yang ditampilkan bukan merupakan hasil resmi
                        penghitungan perolehan suara, penetapan hasil
                        rekapitulasi penghitungan perolehan suara dilakukan
                        secara terpisah.
                      </li>
                      <li>
                        Apabila terdapat perbedaan data yang terbaca oleh Sistem
                        pendataan dengan data yang tertulis, akan dilakukan
                        koreksi pada Sistem Web.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* End Result */}
        </main>

        {/* Footer */}
        <footer className="relative mt-16 bg-primary fixed bottom-0">
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
        </footer>
        {/* End Footer */}
      </div>
    </div>
  );
};

export default QuickCount;
