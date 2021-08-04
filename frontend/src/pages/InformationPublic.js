import React from "react";
import DashboardPublic from "../layouts/DashboardPublic";
import Seo from "../components/Seo";

function InformationPublic() {
  return (
    <DashboardPublic>
      <Seo title={"Informasi"} />
      <div className="container border-t-4 border-primary bg-white p-5 rounded">
        <h3 className="text-base font-bold text-primary">
          Informasi Pemilihan
        </h3>
        <hr className="my-5" />
        <div className="mx-auto container flex w-full  px-5">
          <ul className="list-decimal">
            <li>
              Pemungutan suara dilaksanakan mulai pukul 08.00 sampai dengan
              20.00 WIB.
            </li>
            <li>Pemungutan suara dilakukan secara serentak melalui website.</li>
            <li>
              Pemungutan suara dilakukan dengan ketentuan sebagai berikut:
            </li>
            <ul className="ml-5 list-disc">
              <li>
                Pemilih harus memasukan Alamat Surel dan Kata sandi yang telah
                disediakan di SIAMIK.
              </li>
              <li>
                Pemilihan dapat dilakukan dengan cara memilih salah satu foto
                pasangan calon pada bagian website yang sudah disediakan.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </DashboardPublic>
  );
}

export default InformationPublic;
