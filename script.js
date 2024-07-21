const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
console.log(slides);
console.log(leftArrow)
console.log(rightArrow);


slides.forEach(function(element, index) {
  element.style.transform = `translateX(${index * 100}%)`
})


let activeElement = 0;

console.log(activeElement);

leftArrow.addEventListener('click', function() {
  activeElement-=1;
  slides.forEach((element, index) => {
   element.style.transform = `translateX(${(activeElement + index) * 100}%)`;
   //prvi slajd aktiv element 0 + index 1 * 100

   if(activeElement < -3) {
    element.style.transform = `translateX(${index * 100}%)`
    activeElement=0;
   }

    
    
    console.log(`Active element is with index ${activeElement}`);
  })
})
/*
rightArrow.addEventListener('click', function() {
  activeElement-=1;
  slides.forEach((element, index) => {
   element.style.transform = `translateX(${(activeElement + index) * 100}%)`;
   //prvi slajd aktiv element 0 + index 1 * 100

    
    
    console.log(`Active element is with index ${activeElement}`);
  })
})
*/