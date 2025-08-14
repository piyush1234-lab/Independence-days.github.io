const typewriter = document.getElementById("typewriter");
const text = typewriter.innerHTML;  // Save the full original text (with <br>)
typewriter.innerHTML = "";          // Clear it to start typing

const speed = 50; // typing speed (ms per character)
let i = 0;        // current character position
let isTag = false; // are we inside an HTML tag?
let currentText = ''; // text typed so far

function type() {
  if (i < text.length) {
    let char = text.charAt(i);  // get current character

    if (char === '<') isTag = true;    // starting a tag like <br>
    if (char === '>') isTag = false;   // ending the tag

    currentText += char; // add this character to output

    typewriter.innerHTML = currentText; // update what's shown on screen

    i++; // move to next character let delay;
if (isTag) {
  delay = 0;
} else {
  delay = speed;
}
setTimeout(type, delay);
    // Delay only if NOT inside a tag
    } else {
    // After all typing is done, show the button
    document.getElementById("btn1").style.animation = "fade 1s linear forwards";
  }
}

type(); // Start typing effect
  
   function startplane(){
   
  const plane = document.getElementById('pl1');
  plane.style.animation = "fly 2.6s ease-out forwards";
  const pl2 = document.getElementById('pl2');
  setTimeout(()=> {
      pl2.style.animation="fly1 2s ease-out forwards";
  },10000);
  document.getElementById('btn1').style.animation="fade1 .1s linear forwards";
  document.getElementById("typewriter").style.animation="fade1 .1s linear forwards";

  // Start image reveal after delay
  setTimeout(() => {
    document.getElementById('image').classList.add('reveal');
  }, 500);
setTimeout(() => {
    document.getElementById('image1').classList.add('reveal1');
  }, 10250);

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
function playA1() {
    const a1 = document.getElementById("a1");
    a1.volume = 1;
    a1.play().catch(() => {
        // Autoplay blocked — wait for first click/touch
        document.addEventListener("click", playA1Once, { once: true });
        document.addEventListener("touchstart", playA1Once, { once: true });
    });
}

function playA1Once() {
    const a1 = document.getElementById("a1");
    a1.volume = 1;
    a1.play();
}

function playA2() {
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    const a3 = document.getElementById('a3');

    // Prepare a3 for autoplay later
    a3.play().then(() => {
        a3.pause();
        a3.currentTime = 0;
    }).catch(() => {});

    // Fade out a1
    let fadeA1 = setInterval(() => {
        a1.volume = Math.max(0, a1.volume - 0.5);
        if (a1.volume <= 0) {
            a1.pause();
            clearInterval(fadeA1);

            // Start a2 after a1 fully stops
            a2.volume = 1;
            a2.play();

            // After 10 seconds of a2 playing → fade it out and start a3
            setTimeout(() => {
                let fadeA2 = setInterval(() => {
                    a2.volume = Math.max(0, a2.volume - 0.05);
                    if (a2.volume <= 0) {
                        a2.pause();
                        clearInterval(fadeA2);

                        // Start a3
                        a3.volume = 1;
                        a3.play();
                    }
                }, 5000);
            }, 8800);
        }
    }, 30);
}
function pauseAll() {
    document.getElementById("a1").pause();
    document.getElementById("a2").pause();
    document.getElementById("a3").pause();
}

function resumeLastPlaying() {
    // Optional: resume where it left off
}

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        pauseAll();
    }
});