import React from 'react';
import DashboardPublic from "../layouts/DashboardPublic";
import Seo from "../components/Seo"

function InformationPublic() {
    return (
        <DashboardPublic>
            <Seo title={"Informasi"}/>
            <div className="container border-t-4 border-primary bg-white p-5 rounded">
                <h3 className="text-base font-bold text-primary">Informasi Pemilihan</h3>
                <hr className="my-5"/>
                <div className="mx-auto container flex items-center justify-evenly w-full">
                    konten taroh sini cok
                </div>
            </div>
        </DashboardPublic>
    );
}

export default InformationPublic;