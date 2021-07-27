import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

function Login() {
    const [isLoading, setIsLoading] = useState(false)
    let history = useHistory();

    const HandleLogin = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            history.push("/dashboard")
        }, 3000)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="flex-col justify-around hero-content lg:flex-row lg:w-full">
                <div className="text-center lg:text-left">
                    <h1 className="mb-5 text-5xl font-bold">
                        Selamat Datang
                    </h1>
                    <p className="mb-5">
                        Situs pemilihan - tau dah pokoknya disini nanti deskripsi webnya aja.
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Alamat Surel</span>
                            </label>
                            <input type="text" placeholder="contoh@gmail.com" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Kata Sandi</span>
                            </label>
                            <input type="password" placeholder="kata sandi" className="input input-bordered"/>
                        </div>
                        <div className="form-control mt-6">
                            <button className={isLoading ? "btn btn-info loading" : "btn btn-info"}
                                    onClick={HandleLogin}
                                    disabled={isLoading}>Masuk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;