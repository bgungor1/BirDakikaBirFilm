function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 shadow-xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
        <h2 className="text-xl font-semibold mb-2">Sorular Yükleniyor...</h2>
        <p className="text-base-content/70">Lütfen bekleyin</p>
      </div>
    </div>
  );
}

export default LoadingScreen; 