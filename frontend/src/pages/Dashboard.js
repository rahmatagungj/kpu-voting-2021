import React, {useEffect, useState} from "react";
import DashboardPublic from "../layouts/DashboardPublic";
import Seo from "../components/Seo"
import Spinner from "../components/Spinner"
import axios from 'axios'

function Dashboard() {
    const [activeStatus, setActiveStatus] = useState(1)
    const [firstIsLoading, setFirstIsLoading] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [isVoted, setIsVoted] = useState(false)
    const [candidateVoted, setCandidateVoted] = useState(0)

    const HandleVote = (candidateNumber) => {
        setIsLoading(true)
        const toBeVote = {
            nim: '123',
            name: "Test 1",
            email: "Test1@gmail.com",
            vote_to: parseInt(candidateNumber)
        };

        axios.post('https://kpu-stkip.azurewebsites.net/api/vote', new URLSearchParams(toBeVote))
            .then(response => {
                if (response.data.message === "New vote created!") {
                    console.log("Berhasil")
                    setCandidateVoted(candidateNumber)
                    setIsVoted(true)
                } else {
                    console.log("Gagal")
                }
                setIsLoading(false)
            })
            .catch(error => {
                console.error('There was an error!', error);
                setIsLoading(false)
            });
    }

    useEffect(() => {
        axios.get('https://kpu-stkip.azurewebsites.net/api/vote/123')
            .then(response => {
                if (response.data.data.length > 0) {
                    console.log("Sudah vote ke", response.data.data[0].vote_to)
                    setCandidateVoted(response.data.data[0].vote_to)
                    setIsVoted(true)
                } else {
                    console.log("Belum vote")
                    setIsVoted(false)
                }
                setFirstIsLoading(false)
            })
            .catch((e) => console.error(e));
    }, [])

    const RenderCandidate = ({candidateName, candidateImage, visiMisi, candidateNumber, candidatePersonName}) => {
        return (
            <section className="bg-gray-100 dark:bg-gray-900 lg:flex lg:justify-center mt-5">
                <div className="bg-white dark:bg-gray-800  lg:flex lg:max-w-5xl py-3">
                    <div className="lg:w-2/5">
                        <div className="h-80 bg-cover bg-no-repeat bg-center rounded lg:h-100 bg-indigo-50"
                             style={{backgroundImage: `url(${candidateImage})`}}/>
                    </div>
                    <div className="max-w-xl px-6 py-10 lg:py-0 lg:max-w-5xl lg:w-1/2 relative">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">{candidatePersonName}</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">{visiMisi}</p>

                        <div className="mt-10">
                            <button
                                disabled={isLoading | isVoted}
                                onClick={() => !isLoading && HandleVote(candidateNumber)}
                                className={isLoading ? "btn btn-primary loading px-5 py-2 font-semibold text-gray-100 rounded hover:bg-primary-focus" : "btn btn-primary px-5 py-2 font-semibold text-gray-100 rounded hover:bg-primary-focus"}>Pilih
                                Nomor Urut {candidateName}</button>
                        </div>
                    </div>
                </div>
            </section>
        )

    }

    const RenderBody = () => {
        return (
            <>
                {/*Alert Voted*/}
                {isVoted && (
                    <div className="alert alert-info mb-5 bg-accent rounded">
                        <div className="flex-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff"
                                 className="flex-shrink-0 w-6 h-6 mx-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                            </svg>
                            <label>
                                <h4 className="font-bold text-white">Berhasil Memilih!</h4>
                                <p className="text-sm text-opacity-90 text-white">
                                    Anda sudah memilih pasangan dengan nomor urut {candidateVoted}
                                </p>
                            </label>
                        </div>
                    </div>
                )}
                {/*End Alert Voted*/}

                {/* dashboard */}
                <div className="border-t-4 border-primary bg-white p-5 rounded">
                    <h3 className="text-base font-bold text-primary">Pemilihan Kandidat</h3>
                    <hr className="my-5"/>
                    <div className="mx-auto container flex items-center justify-evenly w-full">
                        <ul className="w-full flex items-center pb-2">
                            <li onClick={() => setActiveStatus(1)}
                                className={activeStatus === 1 ? "py-2 px-4 cursor-pointer bg-primary ease-in duration-150 rounded  text-xs xl:text-sm leading-none text-center text-white shadow-lg" : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-primary"}>
                                Nomor Urut 1
                            </li>
                            <li onClick={() => setActiveStatus(2)}
                                className={activeStatus === 2 ? "py-2 px-4 cursor-pointer bg-primary ease-in duration-150 rounded ml-5  text-xs xl:text-sm leading-none text-center text-white shadow-lg" : "py-2 px-4 cursor-pointer ml-5 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-primary"}>
                                Nomor Urut 2
                            </li>
                        </ul>
                    </div>
                    {activeStatus === 1 && <RenderCandidate
                        candidatePersonName="Handika Rahmat Utama & Muhammad Abdul Aziz"
                        visiMisi="Menjadi wadah yang aspiratif dan visioner guna terciptanya mahasiswa STKIP Muhammadiyah yang unggul dalam Pendidikan, Teknologi dan Kewirausahaan."
                        candidateImage="https://i.ibb.co/GTwgFwH/IMG-5492-removebg-preview.png"
                        candidateName="1"
                        candidateNumber={1}
                    />}
                    {activeStatus === 2 && <RenderCandidate
                        candidatePersonName="Pitradi & Robi Iskandar"
                        visiMisi="Mewujudkan BEM STKIP Muhammadiyah Kuningan sebagai Instansi yang Kreatif, Kritis, dan Intelektual (K2I), dalam pengembangan ilmu dan Teknologi yang berpedoman pada Al-Qur'an dan As-Sunnah dengan watak Tajdid."
                        candidateImage="https://i.ibb.co/yY2PPgw/IMG-2923-removebg-preview.png"
                        candidateName="2"
                        candidateNumber={2}
                    />}
                </div>
            </>
        )
    }

    return (
        <DashboardPublic>
            <Seo title={"Beranda"}/>
            {firstIsLoading ? <Spinner/> : <RenderBody/>}
        </DashboardPublic>
    );
}

export default Dashboard;
