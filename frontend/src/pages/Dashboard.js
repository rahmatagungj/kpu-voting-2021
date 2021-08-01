import React, { useEffect, useState, useContext } from "react";
import DashboardPublic from "../layouts/DashboardPublic";
import Seo from "../components/Seo";
import Spinner from "../components/Spinner";
import axios from "axios";
import UserContext from "../contexts/userContext";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/id";
import { apiOptions } from "../data/apiData";
import { log10 } from "chart.js/helpers";

function Dashboard() {
  const [activeStatus, setActiveStatus] = useState(1);
  const [firstIsLoading, setFirstIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isVoted, setIsVoted] = useState(false);
  const [userData, setUserData] = useContext(UserContext);
  const [userVoteData, setUserVoteData] = useState(null);
  const [canVote, setCanVote] = useState(false);

  const getVoteData = async () => {
    await axios
      .get(
        `https://kpu-stkip.azurewebsites.net/api/vote/${userData.nim}`,
        apiOptions
      )
      .then((response) => {
        if (response.data.data.length > 0) {
          setUserVoteData(response.data.data[0]);
          setIsVoted(true);
        } else {
          setIsVoted(false);
        }
        setFirstIsLoading(false);
      })
      .catch((e) =>
        Swal.fire({
          title: "OOPS",
          text: "Terjadi kesalahan, harap coba lagi.",
          icon: "warning",
          confirmButtonText: "Tutup",
          confirmButtonColor: "#014E87",
        })
      );
  };

  const HandleVote = async (candidateNumber) => {
    setIsLoading(true);
    const toBeVote = {
      nim: userData.nim,
      name: userData.name,
      email: userData.email,
      vote_to: parseInt(candidateNumber),
    };

    await axios
      .post(
        "https://kpu-stkip.azurewebsites.net/api/vote",
        new URLSearchParams(toBeVote),
        apiOptions
      )
      .then((response) => {
        if (response.data.message === "New vote created!") {
          Swal.fire({
            title: "BERHASIL",
            text: `Anda berhasil memilih calon dengan nomor urut ${candidateNumber}`,
            icon: "success",
            confirmButtonText: "Tutup",
            confirmButtonColor: "#014E87",
          });
          getVoteData();
        } else {
          Swal.fire({
            title: "GAGAL",
            text: `Anda gagal memilih calon dengan nomor urut ${candidateNumber}, harap coba lagi.`,
            icon: "error",
            confirmButtonText: "Tutup",
            confirmButtonColor: "#014E87",
          });
        }
        setIsLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          title: "OOPS",
          text: "Terjadi kesalahan, harap coba lagi.",
          icon: "warning",
          confirmButtonText: "Tutup",
          confirmButtonColor: "#014E87",
        });
        setIsLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get("http://pemira.upmk.ac.id/.config.json")
      .then((res) => {
        setCanVote(res.data.canVote);
        getVoteData();
      })
      .catch((error) => {
        Swal.fire({
          title: "OOPS",
          text: "Terjadi kesalahan, harap coba lagi.",
          icon: "warning",
          confirmButtonText: "Tutup",
          confirmButtonColor: "#014E87",
        });
      });
  }, []);

  const RenderCandidate = ({
    candidateName,
    candidateImage,
    visiMisi,
    candidateNumber,
    candidatePersonName,
  }) => {
    return (
      <section className="bg-gray-100 dark:bg-gray-900 lg:flex lg:justify-center mt-5">
        <div className="bg-white dark:bg-gray-800  lg:flex lg:max-w-5xl py-3">
          <div className="lg:w-2/5">
            <div
              className="h-80 bg-cover bg-no-repeat bg-center rounded lg:h-100 bg-indigo-50"
              style={{ backgroundImage: `url(${candidateImage})` }}
            />
          </div>
          <div className="max-w-xl px-6 py-10 lg:py-0 lg:max-w-5xl lg:w-1/2 relative">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              {candidatePersonName}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">{visiMisi}</p>

            <div className="mt-10">
              {canVote ? (
                <button
                  disabled={isLoading | isVoted}
                  onClick={() => !isLoading && HandleVote(candidateNumber)}
                  className={
                    isLoading
                      ? "btn btn-primary loading px-5 py-2 font-semibold text-gray-100 rounded hover:bg-primary-focus"
                      : "btn btn-primary px-5 py-2 font-semibold text-gray-100 rounded hover:bg-primary-focus"
                  }
                >
                  Pilih Nomor Urut {candidateName}
                </button>
              ) : (
                <div className="alert alert-warning">
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
                      />
                    </svg>
                    <label>Tidak dapat melakukan pemilihan saat ini.</label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const RenderLogVote = () => {
    return (
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mb-5">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 rounded">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-secondary">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                  >
                    Informasi Pemilihan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-wrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {userVoteData.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {userVoteData.email}
                        </div>
                        <div className="text-sm text-gray-500">
                          Memilih nomor urut {userVoteData.vote_to} pada{" "}
                          {moment(userVoteData.create_date)
                            .locale("id")
                            .format("LLLL")}{" "}
                          WIB
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const RenderBody = () => {
    return (
      <>
        {/* Notification if use is voted */}
        {userVoteData && <RenderLogVote />}
        {/* end notification for voted */}

        {/* dashboard */}
        <div className="border-t-4 border-primary bg-white p-5 rounded">
          <h3 className="text-base font-bold text-primary">
            Pemilihan Kandidat
          </h3>
          <hr className="my-5" />
          <div className="mx-auto container flex items-center justify-evenly w-full">
            <ul className="w-full flex items-center pb-2">
              <li
                onClick={() => setActiveStatus(1)}
                className={
                  activeStatus === 1
                    ? "py-2 px-4 cursor-pointer bg-primary ease-in duration-150 rounded  text-xs xl:text-sm leading-none text-center text-white shadow-lg"
                    : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-primary"
                }
              >
                Nomor Urut 1
              </li>
              <li
                onClick={() => setActiveStatus(2)}
                className={
                  activeStatus === 2
                    ? "py-2 px-4 cursor-pointer bg-primary ease-in duration-150 rounded ml-5  text-xs xl:text-sm leading-none text-center text-white shadow-lg"
                    : "py-2 px-4 cursor-pointer ml-5 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-primary"
                }
              >
                Nomor Urut 2
              </li>
            </ul>
          </div>
          {activeStatus === 1 && (
            <RenderCandidate
              candidatePersonName="Handika Rahmat Utama & Muhammad Abdul Aziz"
              visiMisi="Menjadi wadah yang aspiratif dan visioner guna terciptanya mahasiswa STKIP Muhammadiyah yang unggul dalam Pendidikan, Teknologi dan Kewirausahaan."
              candidateImage="https://i.ibb.co/GTwgFwH/IMG-5492-removebg-preview.png"
              candidateName="1"
              candidateNumber={1}
            />
          )}
          {activeStatus === 2 && (
            <RenderCandidate
              candidatePersonName="Pitradi & Robi Iskandar"
              visiMisi="Mewujudkan BEM STKIP Muhammadiyah Kuningan sebagai Instansi yang Kreatif, Kritis, dan Intelektual (K2I), dalam pengembangan ilmu dan Teknologi yang berpedoman pada Al-Qur'an dan As-Sunnah dengan watak Tajdid."
              candidateImage="https://i.ibb.co/yY2PPgw/IMG-2923-removebg-preview.png"
              candidateName="2"
              candidateNumber={2}
            />
          )}
        </div>
      </>
    );
  };

  return (
    <DashboardPublic>
      <Seo title={"Beranda"} />
      {firstIsLoading ? <Spinner /> : <RenderBody />}
    </DashboardPublic>
  );
}

export default Dashboard;
