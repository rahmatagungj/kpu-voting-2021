import React from "react";
import HeaderDashboard from "../components/HeaderDashboard";

function Dashboard() {
  return (
    <div>
      <HeaderDashboard />

      <h1 className="text-3xl font-bold">Silahkan Pilih Kandidat</h1>

      {/* dashboard */}
      <div className="flex flex-col lg:flex-row m-4">
        {/* card kandidat 1 */}
        <div className="card shadow-sm bg-accent text-accent-content">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Nama Kandidat</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions">
              <button className="btn btn-primary text-white">Pilih Kandidat</button>
            </div>
          </div>
        </div>
        {/* card kandidat1 end */}

        {/* card kandidat 2 */}
        <div className="card shadow-sm bg-accent text-accent-content">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Nama Kandidat</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions">
              <button className="btn btn-primary text-white">Pilih Kandidat</button>
            </div>
          </div>
        </div>
        {/* card kandidat 2 end */}

        {/* card kandidat 3 */}
        <div className="card shadow-sm bg-accent text-accent-content">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Nama Kandidat</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions">
              <button className="btn btn-primary text-white">Pilih Kandidat</button>
            </div>
          </div>
        </div>
        {/* card kandidat 3 end */}
      </div>
      {/* dashboard end */}
    </div>
  );
}

export default Dashboard;
