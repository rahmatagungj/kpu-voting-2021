import React from "react";
import DashboardPublic from "../layouts/DashboardPublic";

function Dashboard() {
    return (
        <DashboardPublic>
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
