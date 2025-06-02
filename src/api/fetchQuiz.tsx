export async function fetchQuizData() {
  const URL =
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

  return fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch((error) => {
      console.error("퀴즈 데이터를 불러오는 중 오류 발생:", error);
      return [];
    });
}
