import Image from 'next/image';

const Footer = () => (
  <footer className="w-full bg-white border-t border-gray-200 py-6 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-center md:text-left">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Image src="/App Icon.png" alt="Rotas4Me Logo" width={80} height={80} className="h-20 w-20" />
        <div className="flex flex-col leading-tight mt-2 sm:mt-0">
          <span className="font-bold text-base text-gray-800 font-poppins tracking-widest">ROTAS</span>
          <span className="text-gray-500 text-xs font-poppins tracking-widest">FOR ME</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4 md:mt-0">
        <a href="https://www.instagram.com/rotas4me/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-800 hover:text-pink-500 transition">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/rotas4me" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-800 hover:text-blue-700 transition font-bold text-lg" style={{fontFamily: 'Arial'}}>in</a>
        <a href="https://github.com/Rotas4Me" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-800 hover:text-gray-900 transition">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer; 