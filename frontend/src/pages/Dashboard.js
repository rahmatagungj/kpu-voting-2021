import React, {useState} from "react";
import DashboardPublic from "../layouts/DashboardPublic";

function Dashboard() {
    const [activeStatus, setActiveStatus] = useState(1);

    const RenderCandidate = ({candidateName, candidateImage, visiMisi, candidateNumber}) => {
        return (
            <section className="bg-gray-100 dark:bg-gray-900 lg:flex lg:justify-center mt-5">
                <div className="bg-white dark:bg-gray-800  lg:flex lg:max-w-5xl py-3">
                    <div className="lg:w-2/5">
                        <div className="h-64 bg-cover rounded lg:h-100 bg-indigo-50" style={{backgroundImage: `url(${candidateImage})`}}></div>
                    </div>
                    <div className="max-w-xl px-6 py-10 sm:py-0 lg:max-w-5xl lg:w-1/2 relative">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Kandidat <span className="text-indigo-600 dark:text-indigo-400">{candidateName}</span></h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">{visiMisi}</p>

                        <div className="mt-10">
                            <a href={"#" + candidateNumber}
                               className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-primary rounded hover:bg-primary-focus">Pilih Kandidat {candidateName}</a>
                        </div>
                    </div>
                </div>
            </section>
        )

    }


    return (
        <DashboardPublic>

            {/*Alert*/}
            <div className="alert alert-warning mb-5 bg-warning rounded">
                <div className="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff"
                         className="flex-shrink-0 w-6 h-6 mx-2">
                        <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                    </svg>
                    <label>
                        <h4 className="font-bold text-white">Menunggu!</h4>
                        <p className="text-sm text-opacity-90 text-white">
                           Pemilihan belum dapat dilakukan saat ini, harap menunggu hingga pemungutan suara dibuka.
                        </p>
                    </label>
                </div>
            </div>
            {/*End Alert*/}

            {/* dashboard */}
            <div className="container border-t-4 border-primary bg-white p-5 rounded">
                <h3 className="text-base font-bold text-primary">Pemilihan Kandidat</h3>
                <hr className="my-5"/>
                <div className="mx-auto container flex items-center justify-evenly w-full">
                    <ul className="w-full flex items-center pb-2">
                        <li onClick={() => setActiveStatus(1)} className={activeStatus === 1 ? "py-2 px-4 cursor-pointer bg-primary ease-in duration-150 rounded  text-xs xl:text-sm leading-none text-center text-white shadow-lg" : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-primary"}>
                            Kandidat Satu
                        </li>
                        <li onClick={() => setActiveStatus(2)} className={activeStatus === 2 ? "py-2 px-4 cursor-pointer bg-primary ease-in duration-150 rounded ml-5  text-xs xl:text-sm leading-none text-center text-white shadow-lg" : "py-2 px-4 cursor-pointer ml-5 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-primary"}>
                            Kandidat Dua
                        </li>
                    </ul>
                </div>
                {activeStatus === 1 && <RenderCandidate
                    visiMisi="Menjadi wadah yang aspiratif dan visioner guna terciptanya mahasiswa STKIP Muhammadiyah yang unggul dalam Pendidikan, Teknologi dan Kewirausahaan."
                    candidateImage="https://i.ibb.co/GTwgFwH/IMG-5492-removebg-preview.png"
                    candidateName="Satu"
                    candidateNumber={1}
                />}
                {activeStatus === 2 && <RenderCandidate
                    visiMisi="Mewujudkan BEM STKIP Muhammadiyah Kuningan sebagai Instansi yang Kreatif, Kritis, dan Intelektual (K2I), dalam pengembangan ilmu dan Teknologi yang berpedoman pada Al-Qur'an dan As-Sunnah dengan watak Tajdid."
                    candidateImage="https://i.ibb.co/yY2PPgw/IMG-2923-removebg-preview.png"
                    candidateName="Dua"
                    candidateNumber={2}
                />}
            </div>

        </DashboardPublic>
    );
}

export default Dashboard;
