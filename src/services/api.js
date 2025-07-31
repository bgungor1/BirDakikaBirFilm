// Open Trivia Database API endpoint'leri
const API_BASE_URL = 'https://opentdb.com/api.php';
const CATEGORY_FILM = 11; // Film kategorisi

// HTML entity'leri decode et
function decodeHtmlEntities(text) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

// API'den gelen veriyi projemizin formatına dönüştür
function transformApiData(apiData) {
  if (!apiData.results || apiData.response_code !== 0) {
    throw new Error(`API verisi geçersiz: ${apiData.response_code}`);
  }

  return apiData.results.map((item) => {
    // Tüm seçenekleri birleştir ve karıştır
    const allOptions = [item.correct_answer, ...item.incorrect_answers];
    const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);

    return {
      question: decodeHtmlEntities(item.question),
      options: shuffledOptions.map(option => decodeHtmlEntities(option)),
      answer: decodeHtmlEntities(item.correct_answer),
      difficulty: item.difficulty,
      category: item.category
    };
  });
}

// Soru verilerini API'den çek
export async function getQuestions(limit = 10) {
  try {
    const url = `${API_BASE_URL}?amount=${limit}&category=${CATEGORY_FILM}&type=multiple`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const apiData = await response.json();
    const transformedData = transformApiData(apiData);
    return transformedData;
  } catch (error) {
    console.error('Sorular yüklenirken hata oluştu:', error);
    throw error;
  }
}

// Tek bir soru getir (Open Trivia API tek soru desteği yok, bu yüzden tüm soruları çekip filtreliyoruz)
export async function getQuestion(id) {
  try {
    const questions = await getQuestions(50); // Daha fazla soru çek
    const question = questions[id];
    
    if (!question) {
      throw new Error('Soru bulunamadı');
    }
    
    return question;
  } catch (error) {
    console.error('Soru yüklenirken hata oluştu:', error);
    throw error;
  }
}

// Toplam soru sayısını getir (Open Trivia API'de sabit sayı)
export async function getQuestionsCount() {
  // Open Trivia API'de film kategorisinde yaklaşık 100+ soru var
  return 100;
} 