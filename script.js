const text = "This text will be typed one character at a time, no matter how long!";
  const speed = 50; // milliseconds per character
  let i = 0;

  function type() {
    if (i < text.length) {
      typewriter.innerHTML = typewriter.innerHTML + text.charAt(i);
      i++;
      setTimeout(type, speed);
 } else {
    // Show the button after typing is complete
    document.getElementById("btn1").style.animation = "fade 1s linear forwards";
  }
  }

  type(); // start typing
  
   function startplane(){
   
  const plane = document.getElementById('plane');
  plane.style.animation = "fly 2.8s ease-out forwards";
  document.getElementById('btn1').style.animation="fade1 .1s linear forwards";
  document.getElementById("typewriter").style.animation="fade1 .1s linear forwards";

  // Start image reveal after delay
  setTimeout(() => {
    document.getElementById('image').classList.add('reveal');
  }, 500);

  // Trigger chakras by adding a class or inline animation
  document.getElementById('cw1').style.animation = "enterc1 1s 2s ease-out forwards";
  document.getElementById('cw2').style.animation = "enterc2 1s 2.1s ease-out forwards";
  document.getElementById('cw3').style.animation = "enterc3 1s 2s ease-out forwards";
  document.getElementById('cw4').style.animation = "enterc4 1s 2.1s ease-out forwards";

  // Start "Happy Independence Day" text slide
  document.getElementById('t1').style.animation = "slide1 1.5s 3s linear forwards";
}

function tou(){
       btn1.style.background = "linear-gradient(green, #ffffffff, orange)";
}
function touend(){
    btn1.style.background = "rgba(255,255,255,0.2)";
}