import React from 'react';

function HeaderDashboard() {
    return (
        <div className="navbar mb-2 shadow-lg bg-primary text-neutral-content">
            <div className="flex-1 px-2 mx-2">
                <span className="text-lg font-bold">
                    KPU ADMIN
                  </span>
            </div>
            <div className="flex-none hidden px-2 mx-2 lg:flex">
                <div className="flex items-stretch">
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Beranda
                    </a>
                    <a className="btn btn-ghost btn-sm rounded-btn"> Pengaturan

                    </a>
                </div>
            </div>
            <div className="flex-none">
                <div className="avatar">
                    <div className="rounded-full w-10 h-10 m-1">
                        <img
                            src="https://www.insoft.co.id/wp-content/uploads/2014/05/default-user-image-300x300.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderDashboard;