// index.js

function evaluateChecklist() {
  const form = document.getElementById('checklist-form');
  const resultElement = document.getElementById('checklist-result');
  let score = 0;

  // Iterate through each checkbox to calculate score
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
          score++;
      }
  });

  // Display result based on score
  if (score === 0) {
      resultElement.textContent = "현재 기억력에 문제가 없어 보입니다. 계속 건강한 생활을 유지하세요!";
  } else if (score <= 2) {
      resultElement.textContent = "조금의 기억력 문제가 느껴질 수 있습니다. 충분한 휴식과 두뇌 자극 활동을 시도해 보세요.";
  } else {
      resultElement.textContent = "기억력에 문제가 있을 수 있습니다. 전문가와 상담을 고려해 보세요.";
  }
}