// Mock API - Gerçek API olmadığında test için kullanılır
import questions from '../data/questions';

// API simülasyonu için gecikme
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API fonksiyonları
export async function getQuestions(page = 0, limit = 10) {
  // API çağrısını simüle et
  await delay(1000);
  
  // Sayfalama simülasyonu
  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  const paginatedQuestions = questions.slice(startIndex, endIndex);
  
  return paginatedQuestions;
}

export async function getQuestion(id) {
  await delay(500);
  
  const question = questions.find(q => q.id === id);
  if (!question) {
    throw new Error('Soru bulunamadı');
  }
  
  return question;
}

export async function getQuestionsCount() {
  await delay(300);
  return questions.length;
} 