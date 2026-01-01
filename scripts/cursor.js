document.addEventListener('mousemove', e => {
  const c = document.getElementById('cursor');
  c.style.left = e.clientX + 'px';
  c.style.top = e.clientY + 'px';
});

// Glow on links
const cursor = document.getElementById('cursor');
const links = document.querySelectorAll('.clickable');

links.forEach(link => { // loop over each link
  link.addEventListener('mouseenter', () => {
    // Only glow if link is not "dead"
    if (!link.classList.contains('dead')) {
      cursor.classList.add('glow');
    }
  });

  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('glow');
  });
});
const nameElement = document.querySelector('.hero-name');

nameElement.addEventListener('mouseenter', () => {
  nameElement.classList.remove('mythic');
});

nameElement.addEventListener('mouseleave', () => {
  nameElement.classList.add('mythic');
});
document.addEventListener("click", e => {
  if (!e.target.classList.contains("media-tab")) return;

  const slider = e.target.closest(".media-slider");
  const tabs = slider.querySelectorAll(".media-tab");
  const panels = slider.querySelectorAll(".media-panel");

  tabs.forEach(t => t.classList.remove("active"));
  panels.forEach(p => p.classList.remove("active"));

  e.target.classList.add("active");
  slider.querySelector(`#${e.target.dataset.target}`).classList.add("active");
});





document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".media-slider");

  sliders.forEach(slider => {
    const panels = slider.querySelectorAll(".media-panel");
    const label = slider.querySelector(".slide-label");
    const leftArrow = slider.querySelector(".slider-arrow.left");
    const rightArrow = slider.querySelector(".slider-arrow.right");
    const dotsContainer = slider.querySelector(".slider-dots");

    let currentIndex = 0;

    // Create dots dynamically
    panels.forEach((panel, i) => {
      const dot = document.createElement("div");
      dot.classList.add("slider-dot");
      if (i === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);

      dot.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });

    const dots = dotsContainer.querySelectorAll(".slider-dot");

    function showSlide(index) {
      panels.forEach((p, i) => p.classList.toggle("active", i === index));
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
      label.textContent = panels[index].dataset.label;

      // Highlight C++ code if present
      const code = panels[index].querySelector("code.cpp");
      if (code) hljs.highlightElement(code);
    }

    // Arrows
    leftArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + panels.length) % panels.length;
      showSlide(currentIndex);
    });

    rightArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % panels.length;
      showSlide(currentIndex);
    });
  });
});
