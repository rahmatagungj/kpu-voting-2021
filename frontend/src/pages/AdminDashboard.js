import React, { useEffect, useState } from "react";
import DashboardAdmin from "../layouts/DashboardAdmin";
import Seo from "../components/Seo";
import Spinner from "../components/Spinner";
import axios from "axios";
import { apiOptions } from "../data/apiData";
import { Pie, Bar } from "react-chartjs-2";
import { dataDpt } from "../data/dataDpt";

function getPercentage(countVote, totalVote) {
  const result = (countVote / totalVote) * 100;

  if (!isNaN(result)) {
    return result.toFixed(1);
  } else {
    return 0;
  }
}

function AdminDashboard() {
  const [countVoteOne, setCountVoteOne] = useState(0);
  const [countVoteTwo, setCountVoteTwo] = useState(0);
  const [totalVote, setTotalVote] = useState(0);
  const [isLoading, setIsloading] = useState(true);
  const [dataVote, setDataVote] = useState(null);
  const [ptik, setPtik] = useState(null);
  const [pjkr, setPjkr] = useState(null);
  const [pmtk, setPmtk] = useState(null);
  const [pgpaud, setPgpaud] = useState(null);
  const [pbsd, setPbsd] = useState(null);
  const [pgsd, setPgsd] = useState(null);
  const totalDpt = dataDpt.length;

  const getAllData = async () => {
    setIsloading(true);
    await axios
      .get("https://kpu-stkip.azurewebsites.net/api/vote/", apiOptions)
      .then((response) => {
        setDataVote(response.data.data);
        setTotalVote(response.data.data.length);
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
        label: "Total",
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
      <>
        <h2 className="text-xl font-bold my-2">HASIL PEMILIHAN</h2>
        <div className="container mx-auto flex pb-0 lg:pb-5 md:flex-row flex-col items-center lg:justify-between">
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mb-5 md:mb-0 lg:mr-2">
            <div className="stat shadow rounded">
              <div className="stat-figure text-info">
                <div className="avatar">
                  <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                    <img
                      src="https://i.ibb.co/GTwgFwH/IMG-5492-removebg-preview.png"
                      alt="Calon 1"
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
                      alt="Calon 2"
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
      </>
    );
  };

  const isStudy = (identity) => {
    return dataVote.filter((vote) => vote.nim.includes(identity));
  };

  useEffect(() => {
    if (dataVote) {
      setPtik(isStudy(1223));
      setPjkr(isStudy(2223));
      setPmtk(isStudy(3223));
      setPgpaud(isStudy(4223));
      setPbsd(isStudy(5223));
      setPgsd(isStudy(6223));
    }
  }, [dataVote]);

  useEffect(() => {
    getAllData();
  }, []);

  const RenderStudy = ({ title, variable }) => {
    return (
      <>
        <h2 className="text-xl font-bold my-2">{title}</h2>
        <div className="container mx-auto flex pb-0 lg:pb-5 md:flex-row flex-col items-center lg:justify-between">
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mb-5 md:mb-0 lg:mr-2">
            <div className="stat shadow rounded my-1">
              <div className="stat-value">
                {getPercentage(variable.length, totalVote).toString()}%
              </div>
              <div className="stat-title">{variable.length} Suara</div>
            </div>
          </div>
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mb-5 md:mb-0">
            <div className="stat shadow rounded my-1">
              <div className="stat-value">
                {getPercentage(
                  variable.filter((vote) => vote.vote_to === 1).length,
                  variable.length
                ).toString()}
                %
              </div>
              <div className="stat-title">
                {variable
                  .filter((vote) => vote.vote_to === 1)
                  .length.toString()}{" "}
                Memilih Nomor 1
              </div>
            </div>
          </div>
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mb-5 md:mb-0 lg:ml-2">
            <div className="stat shadow rounded my-1">
              <div className="stat-value">
                {getPercentage(
                  variable.filter((vote) => vote.vote_to === 2).length,
                  variable.length
                ).toString()}
                %
              </div>
              <div className="stat-title">
                {variable
                  .filter((vote) => vote.vote_to === 2)
                  .length.toString()}{" "}
                Memilih Nomor 2
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <DashboardAdmin>
      <Seo title={"Beranda Pengurus"} />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <RenderStat />
          <RenderStudy title="PTIK" variable={ptik} />
          <RenderStudy title="PJKR" variable={pjkr} />
          <RenderStudy title="PMTK" variable={pmtk} />
          <RenderStudy title="PGPAUD" variable={pgpaud} />
          <RenderStudy title="PBSD" variable={pbsd} />
          <RenderStudy title="PGSD" variable={pgsd} />
        </>
      )}
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
