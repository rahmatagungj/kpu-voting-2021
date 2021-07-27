import React from 'react';

function HeaderDashboard() {
    return (
        <div>
            <div className="navbar mb-2 shadow-lg bg-primary text-neutral-content ">
                <div className="flex-1 px-2 lg:flex-none">
                    <a className="text-lg font-bold">
                        KPU
                    </a>
                </div>
                <div className="flex justify-end flex-1 px-2">
                    <div className="flex items-stretch">
                        <div className="dropdown dropdown-end">
                            <div className="avatar">
                                <div className="rounded-full w-10 h-10 m-1">
                                    <img tabIndex="0"
                                         src="https://www.insoft.co.id/wp-content/uploads/2014/05/default-user-image-300x300.png"/>
                                </div>
                            </div>
                            <ul className="shadow menu dropdown-content bg-base-100 rounded w-52 text-black">
                                <li>
                                    <a>Bantuan</a>
                                </li>
                                <li>
                                    <a>Keluar</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderDashboard;