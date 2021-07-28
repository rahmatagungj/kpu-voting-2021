import React from "react";
import Seo from "../components/Seo";

function Home() {
  return (
    <div>
      <Seo title={"Pemilihan Umum Raya - STKIP Muhammadiyah Kuningan 2021"}/>
      {/* navbar */}
      <div class="navbar shadow-lg bg-primary text-neutral-content flex items-center justify-between sticky top-0 z-50">
        <div class="px-2 mx-2 navbar-start">
          <span class="text-lg font-bold">KPU 2021</span>
        </div>
        <div class="navbar-center hidden px-2 mx-2 lg:flex">
          <div class="flex items-stretch">
            <a class="btn btn-ghost btn-sm rounded-btn">Beranda</a>
            <a class="btn btn-ghost btn-sm rounded-btn">Tentang</a>
            <a class="btn btn-ghost btn-sm rounded-btn">Video Profil</a>
            <a class="btn btn-ghost btn-sm rounded-btn">Linimasa</a>
          </div>
        </div>
      </div>
      {/* navbar end */}

      {/* hero */}

      <div className="hero min-h-screen bg-primary">
        <div className="hero-overlay bg-cover opacity-40" style={{ backgroundImage: "url(https://i.ibb.co/Pwc98xp/6386-min.jpg)" }}></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-7xl font-bold">PEMILWA STKIP 2021</h1>
            <p className="mb-12 text-xl">Pemilihan Umum Mahasiswa Sekolah Tinggi Keguruan dan Ilmu Pendidikan Kuningan.</p>
            {/* form */}
            <div className="form-control">
              <div className="relative flex">
                <h2 className="text-lg font-bold">Cek status DPT:</h2>
                <input type="text" placeholder="NIM" class="w-full pr-16 input input-primary input-bordered" />
                <button className="absolute right-0 top-0 rounded-l-none btn btn-primary">go</button>
              </div>
            </div>
            {/* form end */}

            {/* button */}
            <button class="btn btn-primary m-4">Daftar Capesma</button>
            <button class="btn btn-primary m-4">E-Voting</button>
            {/* button end */}
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* about */}
      <div className="flex justify-center items-center">
        <div class="mockup-window bg-primary max-w-5xl">
          <div class="flex flex-col justify-center px-4 py-16 bg-base-300">
            <h1 className="text-3xl font-bold">
              Pemilwa itu apa, <i>sih?</i>
            </h1>
            <p className="text-1xl font-medium">
              Pemilwa adalah kegiatan pemilihan presiden mahasiswa BEM KM STKIP dan Dewan Perwakilan Mahasiswa Unsur Partai (DPM-UP) sebagai wujud demokrasi di kampus Sekolah Tinggi Keguruan dan Ilmu Pendidikan Kuningan.
            </p>
          </div>
        </div>
      </div>
      {/* about end */}

      {/* video */}
      <div className="flex justify-center items-center my-40">
        <div class="mockup-window bg-primary max-w-5xl">
          <div class="flex flex-col justify-center px-4 py-16 bg-base-300">
            <h1 className="text-3xl font-bold">ini video ya</h1>
            <p className="text-1xl font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      {/* video end */}

      {/* timeline */}

      {/* timeline end */}
    </div>
  );
}

export default Home;
