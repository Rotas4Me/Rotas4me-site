"use client"
import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGooglePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <>
      <nav className="w-full bg-transparent px-4 py-2 flex items-center justify-between absolute top-0 left-0 z-50">
        <Image src="/logo.png" alt="Rotas For Me" width={140} height={80} className="h-20 w-35" />

        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white font-bold">Início</a>
          <a href="#solution" className="text-white">Solução</a>
          <a href="#price" className="text-white">Planos</a>
          <a href="#initiative" className="text-white">Iniciativa</a>
        </div>

        <button
          onClick={handleGooglePlayClick}
          className="hidden md:flex items-center bg-white rounded px-2 py-1 shadow focus:outline-none"
        >
          <Image
            src="/googlePlay.png"
            alt="Disponível no Google Play"
            width={120}
            height={32}
            className="h-8"
          />
        </button>

        {!mobileMenuOpen && (
          <button
            className="md:hidden flex items-center text-white focus:outline-none z-[1001]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[1000] bg-[#D65E75]/70 backdrop-blur-sm flex flex-col items-center justify-center">
            <button
              className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >
              &times;
            </button>
            <nav className="flex flex-col gap-8 items-center">
              <a href="#" className="text-white text-2xl font-bold" onClick={() => setMobileMenuOpen(false)}>Início</a>
              <a href="#solution" className="text-white text-2xl" onClick={() => setMobileMenuOpen(false)}>Solução</a>
              <a href="#price" className="text-white text-2xl" onClick={() => setMobileMenuOpen(false)}>Planos</a>
              <a href="#initiative" className="text-white text-2xl" onClick={() => setMobileMenuOpen(false)}>Iniciativa</a>
              <button
                onClick={e => { setMobileMenuOpen(false); handleGooglePlayClick(e); }}
                className="flex items-center bg-white rounded px-4 py-2 shadow mt-4"
              >
                <Image
                  src="/googlePlay.png"
                  alt="Disponível no Google Play"
                  width={120}
                  height={32}
                  className="h-8"
                />
              </button>
            </nav>
          </div>
        )}
      </nav>
      {showAlert && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full flex flex-col items-center">
            <span className="text-[#D65E75] text-4xl mb-4">🗺️</span>
            <p className="text-gray-800 text-center mb-6 font-poppins">
              Estamos trabalhando para colocarmos o <b>Rotas4me</b> disponível para download
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="bg-[#D65E75] hover:bg-pink-700 text-white font-bold px-6 py-2 rounded-lg transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 