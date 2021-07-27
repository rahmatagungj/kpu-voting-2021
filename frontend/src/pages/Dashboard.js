import React from "react";
import DashboardPublic from "../layouts/DashboardPublic";

function Dashboard() {
    return (
        <DashboardPublic>

            {/*Alert*/}
            <div className="alert alert-error">
                <div className="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ff5722"
                         className="w-6 h-6 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                    </svg>
                    <label>Pemilihan belum dapat dilakukan saat ini!</label>
                </div>
            </div>
            {/*End Alert*/}

            {/* dashboard */}
            <h2 className="text-2xl font-bold my-4">Silahkan Pilih Kandidat</h2>

            <div className="flex justify-center">
                <div className="flex flex-col lg:flex-row max-w-6xl">

                    {/* card kandidat 1 */}
                    <div className="card shadow-sm bordered text-accent-content m-4 rounded">
                        <figure>
                            <img src="https://picsum.photos/id/1005/400/250"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Nama Kandidat</h2>
                            <div className="tabs">
                                <a className="tab tab-bordered tab-active">Visi</a>
                                <a className="tab tab-bordered">Misi</a>
                            </div>
                            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
                                necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block rounded text-white">Pilih Kandidat
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* card kandidat1 end */}

                    {/* card kandidat 2 */}
                    <div className="card shadow-sm bordered text-accent-content m-4 rounded">
                        <figure>
                            <img src="https://picsum.photos/id/1005/400/250"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Nama Kandidat</h2>
                            <div className="tabs">
                                <a className="tab tab-bordered tab-active">Visi</a>
                                <a className="tab tab-bordered">Misi</a>
                            </div>
                            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
                                necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block rounded text-white">Pilih Kandidat
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* card kandidat 2 end */}

                </div>
            </div>

        </DashboardPublic>
    );
}

export default Dashboard;
