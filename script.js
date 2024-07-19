const slideRight = document.querySelector('.right');
const slideLeft = document.querySelector('.left');
const slides = document.querySelectorAll('.slide');


slides.forEach(function(e, index) {
  console.log(e, index);
  slides[0].style.transform = `translateX(${index * 0}%)`
  slides[1].style.transform = `translateX(${index * 100}%)`
  slides[2].style.transform = `translateX(${index * 200}%)`
  slides[3].style.transform = `translateX(${index * 300}%)`
} 
  
)


