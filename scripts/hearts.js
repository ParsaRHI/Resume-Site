const hearts = document.querySelectorAll('.heart');


// Add 'animate' class to start waving/flashing after 5s
setTimeout(() => {
  hearts.forEach((heart, i) => {
    heart.classList.add('animate');
    // Optional: stagger the start for wave effect
    heart.style.animationDelay = `${i * 0.1}s`;
  });
}, 5000);

// Kill heart on click
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    if (heart.classList.contains('dead')) return;

    spawnExplosion(heart);
    heart.classList.add('dead');
    checkAllDead();
  });
});

// Flash hearts and revive after all dead
function checkAllDead() {
  const deadCount = Array.from(hearts).filter(h => h.classList.contains('dead')).length;
  if (deadCount !== hearts.length) return; // not all dead yet

  let flashes = 0;
  const maxFlashes = 6;
  const flashInterval = setInterval(() => {
    hearts.forEach(h => h.classList.toggle('flash'));
    flashes++;
    if (flashes >= maxFlashes) {
      clearInterval(flashInterval);
      hearts.forEach(h => h.classList.remove('dead', 'flash')); // revive all hearts
    }
  }, 300); // 300ms per flash
}






const gap = 4; // px
const heartWidth = 32; // px

function resizeHearts() {
  const container = document.querySelector('.hearts');
  const containerWidth = container.getBoundingClientRect().width;

  // calculate how many hearts fit
  const maxHearts = Math.floor((containerWidth + gap) / (heartWidth + gap));

  hearts.forEach((heart, index) => {
    heart.style.display = index < maxHearts ? 'flex' : 'none';
  });
}

// Initial calculation after DOM is loaded
window.addEventListener('load', resizeHearts);

// Update dynamically on resize
window.addEventListener('resize', resizeHearts);
function spawnExplosion(heart) {
  const rect = heart.getBoundingClientRect();
  const parentRect = heart.parentElement.getBoundingClientRect();

  const size = rect.width * 1.6;

  const explosion = document.createElement("div");
  explosion.className = "heart-explosion";

  explosion.style.width = size + "px";
  explosion.style.height = size + "px";

  // position relative to hearts container
  explosion.style.left =
    rect.left - parentRect.left + rect.width / 2 + "px";

  explosion.style.top =
    rect.top - parentRect.top + rect.height / 2 + "px";

  explosion.style.transform = "translate(-50%, -50%)";

  heart.parentElement.appendChild(explosion);

  setTimeout(() => {
    explosion.remove();
  }, 500);
}
