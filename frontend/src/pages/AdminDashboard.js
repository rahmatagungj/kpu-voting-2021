import React, { useEffect, useState } from "react";
import DashboardAdmin from "../layouts/DashboardAdmin";
import Seo from "../components/Seo";
import Spinner from "../components/Spinner";
import axios from "axios";
import { apiOptions } from "../data/apiData";
import { Pie, Bar } from "react-chartjs-2";

function getPercentage(countVote, totalVote) {
  const result = (countVote / totalVote) * 100;

  if (!isNaN(result)) {
    return result;
  } else {
    return 0;
  }
}

function AdminDashboard() {
  const [countVoteOne, setCountVoteOne] = useState(0);
  const [countVoteTwo, setCountVoteTwo] = useState(0);
  const [totalVote, setTotalVote] = useState(0);
  const [isLoading, setIsloading] = useState(true);
  const [totalDpt, setTotalDpt] = useState(0);

  const getAllData = async () => {
    setIsloading(true);
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
    setIsloading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const dataChart1 = {
    labels: ["Calon 1", "Calon 2"],
    datasets: [
      {
        label: "# of Votes",
        data: [countVoteOne, countVoteTwo],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const dataChart2 = {
    labels: ["Sudah Memilih", "Belum Memilih"],
    datasets: [
      {
        label: "Total Pemilihan",
        data: [parseInt(totalVote), parseInt(totalDpt) - parseInt(totalVote)],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const dataChart2Options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const RenderStat = () => {
    return (
      <div className="container mx-auto flex pb-0 lg:pb-5 md:flex-row flex-col items-center lg:justify-between">
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mb-5 md:mb-0 lg:mr-2">
          <div className="stat shadow rounded">
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
            <div className="stat-desc flex-wrap">Handika Rahmat Utama</div>
            <div className="stat-desc flex-wrap">Muhammad Abdul Aziz</div>
          </div>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mb-5 md:mb-0 lg:ml-2">
          <div className="stat shadow rounded">
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
    );
  };

  return (
    <DashboardAdmin>
      <Seo title={"Beranda Pengurus"} />
      {isLoading ? <Spinner /> : <RenderStat />}
      {!isLoading && (
        <div className="flex flex-col md:flex-row">
          <div className="container border-t-4 border-primary bg-white p-5 rounded w-full md:max-w-sm mr-0 md:mr-5 my-2">
            <h3 className="text-base font-bold text-primary">
              Statistik Pemilihan
            </h3>
            <hr className="my-5" />
            <div className="mx-auto container flex w-md px-5">
              <Pie data={dataChart1} />
            </div>
          </div>
          <div className="container border-t-4 border-primary bg-white p-5 rounded w-full md:max-w-sm my-5 md:my-2">
            <h3 className="text-base font-bold text-primary">
              Statistik Pemilihan
            </h3>
            <hr className="my-5" />
            <div className="mx-auto container flex w-md px-5">
              <Bar data={dataChart2} options={dataChart2Options} />
            </div>
          </div>
        </div>
      )}
    </DashboardAdmin>
  );
}

export default AdminDashboard;
