import React, {useState, useEffect} from 'react';
import axios from "axios";
import DashboardAdmin from "../layouts/DashboardAdmin";
import moment from 'moment'
import 'moment/locale/id';
import {apiOptions} from "../data/apiData"

function AdminVoteData() {
    const [totalVote, setTotalVote] = useState(null)
    const [isLoading, setIsloading] = useState(false)
    const [canShowVote, setCanShowVote] = useState(true)

    const getAllData = async () => {
        setIsloading(true)
        await axios.get('https://kpu-stkip.azurewebsites.net/api/vote',apiOptions)
            .then(response => setTotalVote(response.data.data))
            .catch((e) => setTotalVote("Error"));
        setIsloading(false)
    }

    useEffect(() => {
        getAllData()
    }, [])

    const handleDeleteVote = async (nim) => {
        axios.delete('https://kpu-stkip.azurewebsites.net/api/vote/' + nim,apiOptions)
            .then(response => {
                const newTotalVote = totalVote.filter(vote => vote.nim !== nim)
                setTotalVote(newTotalVote);
            })
            .catch((e) => console.log(e));
    }

    const RenderLogVote = () => {
        return (
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 rounded">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-secondary">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                                >
                                    Nama
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                                >
                                    Status
                                </th>
                                {canShowVote && (
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                                    >
                                        Memilih
                                    </th>
                                )}
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                                >
                                    Waktu
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {isLoading &&
                            <div className="py-4 px-6">
                                <h3 className="font-medium text-sm ml-4">Memuat data ...</h3>
                            </div>
                            }
                            {totalVote && totalVote.map((vote) => (
                                <tr key={vote.nim}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{vote.name}</div>
                                                <div className="text-sm text-gray-500">{vote.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Sudah Memilih
                      </span>
                                    </td>
                                    {canShowVote && (
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Calon {vote.vote_to}</td>

                                    )}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{moment(vote.create_date).locale('id').format('LLLL')} WIB</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href={"#" + vote.nim} className="text-indigo-600 hover:text-indigo-900"
                                           onClick={() => handleDeleteVote(vote.nim)}>
                                            Hapus
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <DashboardAdmin>
            <RenderLogVote/>
        </DashboardAdmin>
    );
}

export default AdminVoteData;