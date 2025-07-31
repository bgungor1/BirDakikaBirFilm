function ErrorScreen({ error, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 shadow-xl p-8 text-center max-w-md">
        <div className="text-error text-6xl mb-4">⚠️</div>
        <h2 className="text-xl font-semibold mb-2 text-error">Hata Oluştu!</h2>
        <p className="text-base-content/70 mb-4">
          Sorular yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        {error && (
          <details className="mb-4">
            <summary className="cursor-pointer text-sm text-base-content/60">
              Hata Detayları
            </summary>
            <p className="text-xs text-error mt-2">{error.message}</p>
          </details>
        )}
        <button 
          onClick={onRetry} 
          className="btn btn-primary"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}

export default ErrorScreen; 