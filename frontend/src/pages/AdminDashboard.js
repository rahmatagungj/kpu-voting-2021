import React from 'react';
import {dataStat} from "../data/dataStat";
import DashboardAdmin from "../layouts/DashboardAdmin";

function AdminDashboard() {

    const RenderStat = () => {
        return (
            <div className="flex justify-center mb-5 w-full">
                <div className="stats shadow w-full rounded">
                    {
                        dataStat.map(data => (
                            <div className="stat" key={data.key}>
                                <div className="stat-figure text-info">
                                    <div className="avatar">
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
        <DashboardAdmin>
            <RenderStat/>
            Admin
        </DashboardAdmin>
    );
}

export default AdminDashboard;