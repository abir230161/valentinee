const text = `
My love ❤️

Distance may keep us apart today,
but it can never touch what we feel.

Every heartbeat of mine
whispers your name…

Happy Valentine’s Day 💕
`;

let i = 0;
const speed = 50;
const letter = document.getElementById("letter");
const music = document.getElementById("bgMusic");
const btn = document.getElementById("playBtn");
const proposal = document.getElementById("proposal");

/* Play */
btn.onclick = () => {
  music.play();
  btn.style.display = "none";
  typeWriter();
  hearts();
  startSlideshow();

  setTimeout(() => {
    proposal.classList.remove("hidden");
  }, 15000);
};



/* Typing */
function typeWriter() {
  if (i < text.length) {
    letter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/* Hearts */
function hearts() {
  setInterval(() => {
    const h = document.createElement("span");
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.querySelector(".hearts").appendChild(h);
    setTimeout(() => h.remove(), 7000);
  }, 300);
}

/* Slideshow */
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow img");

function startSlideshow() {
  setInterval(() => {
    slides.forEach(img => img.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }, 3000);
}

/* Accept */
function accept() {
  proposal.innerHTML = "<h1>I knew it 😭❤️</h1><p>Forever us ♾️</p>";
}
