document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

const popup = document.getElementById('popup');
window.addEventListener('load', () => popup.style.display = 'block');
document.getElementById('closePopup').addEventListener('click', () => popup.style.display = 'none');

const slides = document.querySelectorAll('#slider img');
let index = 0;
slides[index].classList.add('active');

document.getElementById('next').addEventListener('click', () => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
});
