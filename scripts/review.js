const reviewKey = 'reviewCount';

let reviewCount = parseInt(localStorage.getItem(reviewKey), 10) || 0;

reviewCount += 1;

localStorage.setItem(reviewKey, reviewCount);

const reviewCountElement = document.getElementById('review-count');
reviewCountElement.textContent = `${reviewCount}.`;