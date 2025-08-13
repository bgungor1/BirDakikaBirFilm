import React from 'react';

function Navbar({ onStartQuiz }) {
  // Sonuçları sıfırla
  const clearResults = () => {
    if (confirm('Tüm quiz sonuçlarını silmek istediğinizden emin misiniz? Bu işlem geri alınamaz!')) {
      localStorage.removeItem('quizResults');
      showResults(); // Listeyi yenile
    }
  };

  // Sonuçları göster
  const showResults = () => {
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    const container = document.getElementById('results-container');
    
    if (results.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8">
          <div class="text-6xl mb-4">📝</div>
          <p class="text-lg font-semibold mb-2">Henüz quiz sonucunuz yok</p>
          <p class="text-base-content/70">İlk quiz'inizi tamamlayın ve sonuçlarınızı burada görün!</p>
        </div>
      `;
      return;
    }
    
    // Skora göre sırala (en yüksek skor üstte)
    const sortedResults = results.sort((a, b) => {
      // Önce skor yüzdesine göre sırala
      const scoreDiff = b.percentage - a.percentage;
      if (scoreDiff !== 0) return scoreDiff;
      
      // Skor yüzdesi aynıysa, doğru sayısına göre sırala
      const correctDiff = b.score - a.score;
      if (correctDiff !== 0) return correctDiff;
      
      // Doğru sayısı da aynıysa, tarihe göre sırala (en yeni üstte)
      return new Date(b.date) - new Date(a.date);
    });
    
    container.innerHTML = `
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th class="text-center">🏆 Sıra</th>
              <th class="text-center">📊 Sonuç</th>
              <th class="text-center">📅 Tarih</th>
              <th class="text-center">⏰ Saat</th>
              <th class="text-center">📈 Yüzde</th>
            </tr>
          </thead>
          <tbody>
            ${sortedResults.map((result, index) => `
              <tr class="hover">
                <td class="text-center font-bold">
                  ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                </td>
                <td class="text-center">
                  <span class="badge badge-lg ${result.percentage >= 80 ? 'badge-success' : result.percentage >= 60 ? 'badge-warning' : 'badge-error'}">
                    ${result.score}/${result.total}
                  </span>
                </td>
                <td class="text-center">${result.date}</td>
                <td class="text-center">${result.time}</td>
                <td class="text-center font-bold ${result.percentage >= 80 ? 'text-success' : result.percentage >= 60 ? 'text-warning' : 'text-error'}">
                  %${result.percentage}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  };

  return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Ana Sayfa</a></li>
        <li>
              <a>Quiz</a>
          <ul className="p-2">
                <li><a>Film Quiz</a></li>
                <li><button onClick={() => {
                  document.getElementById('results_modal').showModal();
                  setTimeout(showResults, 100); // Modal açıldıktan sonra sonuçları göster
                }} className="btn btn-ghost btn-sm">Sonuçlar</button></li>
          </ul>
        </li>
            <li><button onClick={() => document.getElementById('about_modal').showModal()} className="btn btn-ghost">Hakkında</button></li>
      </ul>
    </div>
        <a className="btn btn-ghost text-xl">🎬 Bir Dakika Bir Film</a>
  </div>
      
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
          <li><a>Ana Sayfa</a></li>
      <li>
        <details>
                <summary>Quiz</summary>
          <ul className="p-2">
                  <li><a>Film Quiz</a></li>
                  <li><button onClick={() => {
                    document.getElementById('results_modal').showModal();
                    setTimeout(showResults, 100); // Modal açıldıktan sonra sonuçları göster
                  }} className="btn btn-ghost btn-sm">Sonuçlar</button></li>
          </ul>
        </details>
      </li>
          <li><button onClick={() => document.getElementById('about_modal').showModal()} className="btn btn-ghost">Hakkında</button></li>
    </ul>
  </div>
      
  <div className="navbar-end">
        <button onClick={onStartQuiz} className="btn btn-primary">
          Quiz Başlat
        </button>
      </div>
      
      {/* Hakkında Modal */}
      <dialog id="about_modal" className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-2xl mb-4 text-center">🎬 Bir Dakika Bir Film</h3>
          
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">Film Bilginizi Test Edin!</p>
              <p className="text-base-content/70">
                Modern web teknolojileri ile geliştirilmiş, interaktif film quiz uygulaması.
              </p>
            </div>
            
            <div className="divider"></div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3">✨ Özellikler</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <strong>60 Saniye Timer:</strong> Her soru için süre sınırı
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <strong>Gerçek Film Soruları:</strong> Open Trivia Database API
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <strong>Dark/Light Tema:</strong> Kullanıcı tercihi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <strong>Responsive Tasarım:</strong> Mobil ve masaüstü uyumlu
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <strong>Progress Bar:</strong> Quiz ilerleme takibi
                </li>
              </ul>
            </div>
            
            <div className="divider"></div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3">🛠️ Teknolojiler</h4>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary">React 19</span>
                <span className="badge badge-secondary">Vite</span>
                <span className="badge badge-accent">Tailwind CSS</span>
                <span className="badge badge-info">DaisyUI</span>
                <span className="badge badge-success">Open Trivia API</span>
              </div>
            </div>
            
            <div className="divider"></div>
            
            <div className="text-center">
              <p className="text-sm text-base-content/70 mb-2">
                Her quiz'de farklı sorular, her seferinde yeni deneyim!
              </p>
              <p className="text-xs opacity-75">
                © 2025 Bir Dakika Bir Film
              </p>
            </div>
          </div>
          
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Kapat</button>
            </form>
          </div>
        </div>
        
        {/* Modal backdrop */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      
      {/* Sonuçlar Modal */}
      <dialog id="results_modal" className="modal">
        <div className="modal-box max-w-4xl">
          <h3 className="font-bold text-2xl mb-4 text-center">🏆 Quiz Sonuçları</h3>
          
          <div className="space-y-4">
            <div className="text-center mb-6">
              <p className="text-base-content/70">
                Tüm quiz sonuçlarınızı buradan takip edebilirsiniz.
              </p>
            </div>
            
            <div id="results-container">
              {/* Sonuçlar JavaScript ile doldurulacak */}
            </div>
            
            <div className="divider"></div>
            
            <div className="text-center space-y-3">
              <p className="text-sm text-base-content/70">
                Sonuçlarınız localStorage'da saklanmaktadır.
              </p>
              
              <div className="flex justify-center gap-2">
                <button 
                  onClick={clearResults}
                  className="btn btn-error btn-sm"
                >
                  🗑️ Tüm Sonuçları Sıfırla
                </button>
              </div>
            </div>
          </div>
          
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Kapat</button>
            </form>
  </div>
</div>
        
        {/* Modal backdrop */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Navbar;

