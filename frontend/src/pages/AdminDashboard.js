import React from 'react';
import HeaderAdminDashboard from "../components/HeaderAdminDashboard";
import dataStat from "../data/dataStat";

function AdminDashboard() {

    const RenderStat = () => {
        return (
            <div className="flex justify-center mb-5">
                <div className="stats shadow w-full">
                    {
                        dataStat.map(data => (
                            <div className="stat" key={data.key}>
                                <div className="stat-figure text-info">
                                    <div className="avatar online">
                                        <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                                            <img src={data.image}
                                                 alt="Avatar Tailwind CSS Component" className="mask mask-squircle"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="stat-value">{data.voted}%</div>
                                <div className="stat-title">{data.name}</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }
    return (
        <div>
            <HeaderAdminDashboard/>
            <div className="m-5">
            <RenderStat/>
            Admin
            </div></div>
    );
}

export default AdminDashboard;