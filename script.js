const slideRight = document.querySelector('.right');
const slideLeft = document.querySelector('.left');
const slides = document.querySelectorAll('.slide');



slides.forEach(function(element, index) {
  console.log(element, index);
/*
  slides[0].style.transform = `translateX(${index * 0}%)`
  slides[1].style.transform = `translateX(${index * 100}%)`
  slides[2].style.transform = `translateX(${index * 200}%)`
  slides[3].style.transform = `translateX(${index * 300}%)`
*/

element.style.transform = `translateX(${index * 100}%)`
  
})
let activeIndex = 0;
slideLeft.addEventListener('click', function() {
  slides.forEach((element, index) => {

  })
})

//Ovaj koji je 0 -> - 100%
//Ovaj koji je 100% -> 0%
//Ovaj koji je 100% -> 100%








