import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DashboardAdmin from "../layouts/DashboardAdmin";
import moment from "moment";
import "moment/locale/id";
import { apiOptions } from "../data/apiData";
import ExportToExcel from "../components/ExportToExcel";
import { whitelistNimDeveloper } from "../data/whitelistNim";
import Swal from "sweetalert2";
import UserContext from "../contexts/userContext";

function AdminVoteData() {
  const [totalVote, setTotalVote] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [userData, setUserData] = useContext(UserContext);

  const getAllData = async () => {
    setIsloading(true);
    await axios
      .get("https://kpu-stkip.azurewebsites.net/api/vote", apiOptions)
      .then((response) => setTotalVote(response.data.data))
      .catch((e) => setTotalVote("Error"));
    setIsloading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDeleteVote = async (nim) => {
    if (whitelistNimDeveloper.indexOf(userData.nim) > -1) {
      axios
        .delete(
          "https://kpu-stkip.azurewebsites.net/api/vote/" + nim,
          apiOptions
        )
        .then((response) => {
          const newTotalVote = totalVote.filter((vote) => vote.nim !== nim);
          setTotalVote(newTotalVote);
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
    } else {
      Swal.fire({
        title: "GAGAL",
        text: "Anda tidak memiliki izin.",
        icon: "error",
        confirmButtonText: "Tutup",
        confirmButtonColor: "#014E87",
      });
    }
  };

  const RenderLogVote = () => {
    return (
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 rounded">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-secondary">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                  >
                    Nama
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                  >
                    Memilih
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                  >
                    Waktu
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                  >
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isLoading && (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <h3 className="font-medium text-sm ml-4">
                        Memuat data ...
                      </h3>
                    </td>
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                )}
                {totalVote && totalVote < 1 && (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <h3 className="font-medium text-sm ml-4">
                        Tidak ada data
                      </h3>
                    </td>
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                )}
                {totalVote &&
                  totalVote.map((vote) => (
                    <tr key={vote.nim}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {vote.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {vote.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Sudah Memilih
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Calon {vote.vote_to}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {moment(vote.create_date).locale("id").format("LLLL")}{" "}
                        WIB
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href={"#" + vote.nim}
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => handleDeleteVote(vote.nim)}
                        >
                          Hapus
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <DashboardAdmin>
      <ExportToExcel
        data={totalVote}
        fileName="Hasil Pemilihan"
        className="btn btn-primary bg-primary hover:bg-primary-focus focus:bg-primary-focus text-white rounded mb-5"
      />
      <RenderLogVote />
    </DashboardAdmin>
  );
}

export default AdminVoteData;
