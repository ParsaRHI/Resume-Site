document.addEventListener('mousemove', e => {
  const c = document.getElementById('cursor');
  c.style.left = e.pageX + 'px';
  c.style.top = e.pageY + 'px';
});
const nameElement = document.querySelector('.hero-name');

nameElement.addEventListener('mouseenter', () => {
  nameElement.classList.add('mythic');
});

nameElement.addEventListener('mouseleave', () => {
  nameElement.classList.remove('mythic');
});
