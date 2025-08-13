
import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content">
      <div>
        <div className="text-4xl mb-4">🎬</div>
        <p className="font-bold text-lg">
          Bir Dakika Bir Film <br/>
          <span className="text-sm font-normal">Film bilginizi test edin!</span>
        </p>
        <p className="text-sm opacity-75">
          Open Trivia Database API ile güncel film soruları
        </p>
      </div>
      
             <div className="grid grid-flow-col gap-4 mb-6">
         <a className="link link-hover" href="https://github.com/bgungor1/BirDakikaBirFilm" target="_blank" rel="noopener noreferrer">
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
             <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 1.842-1.339 3.694-4.335 4.951.325.208.625.625.625 1.26 0 .91-.013 1.643-.013 1.866 0 .27.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
           </svg>
         </a>
         <a className="link link-hover" href="https://opentdb.com" target="_blank" rel="noopener noreferrer">
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
           </svg>
         </a>
         <a className="link link-hover" href="mailto:contact@example.com">
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
             <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
             <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
           </svg>
         </a>
       </div>
       
       {/* Newsletter Subscription */}
       <div className="w-full max-w-md mb-6">
         <h6 className="footer-title text-base mb-3">🎯 Yeni Quiz'ler İçin Bildirim Al!</h6>
         <p className="text-sm opacity-75 mb-3">
           Yeni kategoriler ve özellikler eklendiğinde ilk sen haberdar ol!
         </p>
         <div className="join w-full">
           <input
             type="email"
             placeholder="email@example.com"
             className="input input-bordered join-item w-full"
             required
           />
           <button className="btn btn-primary join-item">
             Abone Ol
           </button>
         </div>
         <p className="text-xs opacity-60 mt-2">
           Spam yok, sadece yeni quiz bildirimleri! 📧
         </p>
       </div>
      
      <div className="text-center">
        <p className="text-xs opacity-75">
          © 2025 Bir Dakika Bir Film. Tüm hakları saklıdır.
        </p>
        <p className="text-xs opacity-75 mt-1">
          React + Vite + Tailwind CSS + DaisyUI ile geliştirildi
        </p>
      </div>
    </footer>
  );
}


export default Footer;