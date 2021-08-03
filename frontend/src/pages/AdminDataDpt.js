import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardAdmin from "../layouts/DashboardAdmin";
import "moment/locale/id";
import Spinner from "../components/Spinner";
import ExportToExcel from "../components/ExportToExcel";

function AdminDataDpt() {
  const [totalDpt, setTotalDpt] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const getAllData = async () => {
    setIsloading(true);
    await axios
      .get(
        "http://siamik.upmk.ac.id/apijson.php?method=dpt&secret_key=365rywegf23987439857h&client_key=rahmatagungjulians"
      )
      .then((response) => setTotalDpt(response.data))
      .catch((e) => setTotalDpt(e));
    setIsloading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

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
                    Nim
                  </th>
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
                    Jenis Kelamin
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                  >
                    Prodi
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                  >
                    Angkatan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {totalDpt &&
                  totalDpt.map((vote) => (
                    <tr key={vote.nim}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {vote.nim}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {vote.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {vote.gender}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {vote.prodi}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {vote.angkatan}
                          </div>
                        </div>
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
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ExportToExcel
            data={totalDpt}
            fileName="Daftar DPT"
            className="btn btn-primary bg-primary hover:bg-primary-focus focus:bg-primary-focus text-white rounded mb-5"
          />
          <RenderLogVote />
        </>
      )}
    </DashboardAdmin>
  );
}

export default AdminDataDpt;
