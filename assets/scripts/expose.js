// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  let imgsound = document.querySelector('.horn-select');
  imgsound.addEventListener('change', function(){
    const result = document.querySelector('.result');
    //result.textContent =  `You like ${event.target.value}`;
    alert('hi');})
  
}

/*
function soundSelect(){
  const result = document.querySelector('.result');
  result.textContent =  `You like ${event.target.value}`;
}
*/