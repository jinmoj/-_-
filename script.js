function evaluateChecklist() {
  let count = 0;
  for (let i = 1; i <= 14; i++) {
      if (document.getElementById('q' + i).checked) {
          count++;
      }
  }

  const resultDiv = document.getElementById('checklist-result');
  if (count >= 6) {
      resultDiv.innerHTML = "6개 이상 '예'로 체크되었습니다. 치매 조기 검진을 받으세요!";
      resultDiv.style.color = "#e74c3c"; 
  } else {
      resultDiv.innerHTML = "치매 조기 검진이 필요하지 않습니다.";
      resultDiv.style.color = "#2ecc71"; 
  }
}

// 카드 맞추기 게임 코드
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let shuffledCards = [...cardValues, ...cardValues];  
shuffledCards = shuffledCards.sort(() => Math.random() - 0.5);  

let flippedCards = [];
let matchedCards = [];
let moves = 0;

const gameBoard = document.getElementById('gameBoard');
shuffledCards.forEach((value, index) => {
const card = document.createElement('div');
card.classList.add('card');
card.setAttribute('data-index', index);
card.dataset.value = value;
card.addEventListener('click', flipCard);
gameBoard.appendChild(card);
});

function flipCard(event) {
const clickedCard = event.target;

if (flippedCards.length === 2 || clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
  return;
}

clickedCard.classList.add('flipped');
clickedCard.textContent = clickedCard.dataset.value;
flippedCards.push(clickedCard);

if (flippedCards.length === 2) {
  moves++;
  setTimeout(() => checkMatch(), 1000);
}
}

function checkMatch() {
if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
  flippedCards[0].classList.add('matched');
  flippedCards[1].classList.add('matched');
  matchedCards.push(flippedCards[0], flippedCards[1]);
  flippedCards = [];
  
  if (matchedCards.length === shuffledCards.length) {
    setTimeout(() => displayMessage('게임 종료!'), 500);
  }
} else {
  flippedCards[0].classList.remove('flipped');
  flippedCards[1].classList.remove('flipped');
  flippedCards[0].textContent = '';
  flippedCards[1].textContent = '';
  flippedCards = [];
}
}

function displayMessage(message) {
const messageDiv = document.getElementById('message');
messageDiv.textContent = message;
}

window.addEventListener('scroll', function () {
  for (let i = 1; i <= 14; i++) {
      const label = document.getElementById('q' + i).parentElement;
      const rect = label.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
          label.style.opacity = '1';
          label.style.transform = 'translateY(0)';
      } else {
          label.style.opacity = '0';
          label.style.transform = 'translateY(20px)';
      }
  }
});

//취미 스크롤
document.addEventListener("scroll", () => {
  const hobbyItems = document.querySelectorAll(".hobby-item");
  const triggerBottom = window.innerHeight * 0.8;

  hobbyItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("visible");
    } else {
      item.classList.remove("visible");
    }
  });
});


// 네비게이션 바
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.pageYOffset - 60,
              behavior: 'smooth'
          });
      }
  });
});

//음식 목록
document.addEventListener("scroll", () => {
  const foodItems = document.querySelectorAll(".food-item");
  const triggerBottom = window.innerHeight * 0.8;

  foodItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("visible");
    } else {
      item.classList.remove("visible");
    }
  });
});
