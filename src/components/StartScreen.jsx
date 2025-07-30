function StartScreen({onStart}) {
    return (
        <div className = "flex flex-col items-center justify-center min-h-screen bg-base-200 px-4">
            <div className = "card shadow-xl bg-base-100 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center p-4 sm:p-10">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Bir Dakika Bir Film
            </h1>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                60 saniyede verilen ipuçlarıyla filmleri tahmin edebilecek misin?
            </p>
            <div className="alert alert-info text-sm sm:text-base mb-4 sm:mb-6" >
                <span>Toplam 10 soru her soru için 60 saniye süren var! </span>
            </div>
            <button onClick={onStart} 
            className = "btn btn-primary btn-md sm:btn-lg w-full hover:scale-105 transition text-sm sm:text-base"
            >
                Başla
            </button>
            </div>
        </div>
    )
}

export default StartScreen;