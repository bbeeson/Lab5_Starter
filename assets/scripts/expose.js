// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  let imgsound = document.querySelector('.horn-select');
  imgsound.addEventListener('change',soundSelect);

  let b = document.querySelector('.temp');
  b.addEventListener('click', function(){
    alert('hi');
    console.log('hi');
  })
  
}


function soundSelect(){
  const result = document.querySelector('.result');
  result.textContent =  `You like ${event.target.value}`;
}
