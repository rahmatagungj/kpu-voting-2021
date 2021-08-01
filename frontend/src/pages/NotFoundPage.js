import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function NotFoundPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Seo title="Halaman tidak ditemukan" />
      <div className="min-w-screen min-h-screen bg-primary flex items-center p-5 lg:p-40 overflow-hidden relative">
        <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center">
          <div className="w-full">
            <div className="mb-10 md:mb-20 text-gray-600 font-light">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-primary-focus  mb-10">
                Halaman tidak ditemukan
              </h1>
            </div>
            <div className="mb-0">
              <Link to="/">
                <button className="btn btn-secondary font-bold text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110">
                  Beranda
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
        <div className="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
      </div>
    </div>
  );
}

export default NotFoundPage;
