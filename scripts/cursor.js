document.addEventListener('mousemove', e => {
  const c = document.getElementById('cursor');
  c.style.left = e.pageX + 'px';
  c.style.top = e.pageY + 'px';
});
