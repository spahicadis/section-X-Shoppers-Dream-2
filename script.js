const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
console.log(slides);
console.log(leftArrow)
console.log(rightArrow);


slides.forEach((element, index) => {
  element.style.transform = `translateX(${index * 100}%)`
})

let activeElement = 0;

console.log(activeElement);
leftArrow.addEventListener('click', function() {
  activeElement-=3
  slides.forEach((element, index) => {
    element.style.transform = `translateX(${(activeElement + index) * 100}%)`;

    if(activeElement < -3) {
      activeElement+=4
      element.style.transform = `translateX(${(activeElement + index) * 100}%)`;
    } 
  
   console.log(`${activeElement}, ${index}`)
  })
})

rightArrow.addEventListener('click', function() {
  activeElement-=1;
  slides.forEach((element, index) => {
   element.style.transform = `translateX(${(activeElement + index) * 100}%)`;
   

   if(activeElement < -3) {
    element.style.transform = `translateX(${index * 100}%)`
    activeElement=0;
   }

   console.log(`${activeElement}, ${index}`)
  })
})