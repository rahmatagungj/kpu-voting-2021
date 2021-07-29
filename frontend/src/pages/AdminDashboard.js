import React, {useEffect, useState} from 'react';
import DashboardAdmin from "../layouts/DashboardAdmin";
import Seo from "../components/Seo"
import axios from "axios"

const people = [
    {
        nim: '1234',
        name: 'Rahmat Agung Julians',
        date: "29-07-2021",
        email: 'rahmatagungj@example.com'
        },
    // More people...
]

function AdminDashboard() {
    const [countVoteOne, setCountVoteOne] = useState(0)
    const [countVoteTwo, setCountVoteTwo] = useState(0)
    const [isLoading, setIsloading] = useState(false)

    const getAllData = async () => {
        setIsloading(true)
        await axios.get('https://kpu-stkip.azurewebsites.net/api/vote/count/1')
            .then(response => setCountVoteOne(response.data.message))
            .catch((e) => setCountVoteOne("Error"));
        await axios.get('https://kpu-stkip.azurewebsites.net/api/vote/count/2')
            .then(response => setCountVoteTwo(response.data.message))
            .catch((e) => setCountVoteTwo("Error"));
        setIsloading(false)
    }

    useEffect(() => {
        getAllData()
    }, [])


    const RenderStat = () => {
        return (
            <div className="flex justify-center mb-5 w-full">
                <div className="stats shadow w-full rounded">
                    <div className="stat">
                        <div className="stat-figure text-info">
                            <div className="avatar">
                                <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                                    <img src="https://i.ibb.co/GTwgFwH/IMG-5492-removebg-preview.png"
                                         alt="Avatar Tailwind CSS Component" className="mask mask-squircle"/>
                                </div>
                            </div>
                        </div>
                        <div
                            className="stat-value">{isLoading ? "0 " :countVoteOne} %
                        </div>
                        <div className="stat-title">{isLoading ? "0 " : countVoteOne} Suara</div>
                        <div className="stat-desc">Handika Rahmat Utama & Muhammad Abdul Aziz</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-info">
                            <div className="avatar">
                                <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                                    <img src="https://i.ibb.co/yY2PPgw/IMG-2923-removebg-preview.png"
                                         alt="Avatar Tailwind CSS Component" className="mask mask-squircle"/>
                                </div>
                            </div>
                        </div>
                        <div
                            className="stat-value">{isLoading ? "0 " : countVoteTwo} %
                        </div>
                        <div className="stat-title">{isLoading ? "0 " : countVoteTwo} Suara</div>
                        <div className="stat-desc">Pitradi & Robi Iskandar</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <DashboardAdmin>
            <Seo title={"Beranda Pengurus"}/>
            <RenderStat/>
        </DashboardAdmin>
    );
}

export default AdminDashboard;