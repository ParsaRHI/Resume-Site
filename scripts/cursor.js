document.addEventListener('mousemove', e => {
  const c = document.getElementById('cursor');
  c.style.left = e.pageX + 'px';
  c.style.top = e.pageY + 'px';
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