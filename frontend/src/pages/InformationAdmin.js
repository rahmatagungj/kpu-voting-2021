import React from "react";
import DashboardAdmin from "../layouts/DashboardAdmin";
import Seo from "../components/Seo";

function InformationAdmin(props) {
  return (
    <DashboardAdmin>
      <Seo title={"Informasi Pengurus"} />
      <div className="container border-t-4 border-primary bg-white p-5 rounded">
        <h3 className="text-base font-bold text-primary">
          Informasi Pemilihan (Admin)
        </h3>
        <hr className="my-5" />
        <div className="mx-auto container flex w-full  px-5">
          <ul className="list-decimal">
            <li>
              Tidak diperkenankan menyebarkan informasi yang terdapat pada
              halaman pengurus kepada pihak luar.
            </li>
          </ul>
        </div>
      </div>
    </DashboardAdmin>
  );
}

export default InformationAdmin;
