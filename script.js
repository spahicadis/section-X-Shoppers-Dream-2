const slideRight = document.querySelector('.right');
const slideLeft = document.querySelector('.left');
const slider1 = document.querySelector('.slider-1')
const slider2 = document.querySelector('.slider-2')
const slider3 = document.querySelector('.slider-3')
const slider4 = document.querySelector('.slider-4')

console.log(slideLeft);
console.log(slideRight);
console.log(slider1);
console.log(slider2);
console.log(slider3);
console.log(slider4);

slideRight.addEventListener('click', function() {
  slider2.style.transform="translateX(0%)"
  slider1.style.transform="translateX(-100%)"
})
slideLeft.addEventListener('click', function() {
  slider4.style.transform="translateX(0%)"
  slider1.style.transform="translateX(100%)"
})