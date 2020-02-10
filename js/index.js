// Your code goes here

// create a mouseover listener on fun bus image
// that changes the width of the image and then returns 
// the width back to original size.
let funBusImg = document.getElementById('funbusimg');
console.log(funBusImg);
funBusImg.addEventListener('mouseover', function(event){
  event.target.style.width = "10rem";
  setTimeout(function(){
    event.target.style.width = "100rem";
  }, 500)
}, );



