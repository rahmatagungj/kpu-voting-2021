import React, {useState} from "react";
import DashboardPublic from "../layouts/DashboardPublic";

function Dashboard() {
    const [activeStatus, setActiveStatus] = useState(1);
    return (
        <DashboardPublic>

            {/*Alert*/}
            <div className="alert alert-warning mb-5 bg-warning">
                <div className="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff"
                         className="flex-shrink-0 w-6 h-6 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
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
            <div className="container border-t-4 border-primary bg-white p-3 rounded">
                <h3 className="text-base font-bold text-primary">Pemilihan Kandidat</h3>
                <hr className="my-3"/>
                <div className="mx-auto container flex items-center justify-evenly w-full">
                    <ul className="w-full flex items-center pb-2">
                        <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "py-2 px-4 cursor-pointer bg-primary ease-in duration-150 rounded  text-xs xl:text-sm leading-none text-center text-white shadow-lg" : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-primary"}>
                            Kandidat Satu
                        </li>
                        <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "py-2 px-4 cursor-pointer bg-primary ease-in duration-150 rounded ml-5  text-xs xl:text-sm leading-none text-center text-white shadow-lg" : "py-2 px-4 cursor-pointer ml-5 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-primary"}>
                            Kandidat Dua
                        </li>
                    </ul>
                </div>
                {activeStatus == 1 && <h1>Kandidat 1</h1>}
                {activeStatus == 2 && <h1>Kandidat 2</h1>}
            </div>

            {/*<div className="flex justify-center">*/}
            {/*    <div className="flex flex-col lg:flex-row max-w-6xl">*/}

            {/*        /!* card kandidat 1 *!/*/}
            {/*        <div className="card shadow-sm bordered text-accent-content m-4 rounded">*/}
            {/*            <figure>*/}
            {/*                <img src="https://picsum.photos/id/1005/400/250"/>*/}
            {/*            </figure>*/}
            {/*            <div className="card-body">*/}
            {/*                <h2 className="card-title">Nama Kandidat</h2>*/}
            {/*                <div className="tabs">*/}
            {/*                    <a className="tab tab-bordered tab-active">Visi</a>*/}
            {/*                    <a className="tab tab-bordered">Misi</a>*/}
            {/*                </div>*/}
            {/*                <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit*/}
            {/*                    necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>*/}
            {/*                <div className="card-actions">*/}
            {/*                    <button className="btn btn-primary btn-block rounded text-white">Pilih Kandidat*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        /!* card kandidat1 end *!/*/}

            {/*        /!* card kandidat 2 *!/*/}
            {/*        <div className="card shadow-sm bordered text-accent-content m-4 rounded">*/}
            {/*            <figure>*/}
            {/*                <img src="https://picsum.photos/id/1005/400/250"/>*/}
            {/*            </figure>*/}
            {/*            <div className="card-body">*/}
            {/*                <h2 className="card-title">Nama Kandidat</h2>*/}
            {/*                <div className="tabs">*/}
            {/*                    <a className="tab tab-bordered tab-active">Visi</a>*/}
            {/*                    <a className="tab tab-bordered">Misi</a>*/}
            {/*                </div>*/}
            {/*                <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit*/}
            {/*                    necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>*/}
            {/*                <div className="card-actions">*/}
            {/*                    <button className="btn btn-primary btn-block rounded text-white">Pilih Kandidat*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        /!* card kandidat 2 end *!/*/}

            {/*    </div>*/}
            {/*</div>*/}

        </DashboardPublic>
    );
}

export default Dashboard;
