const sprite = document.querySelector(".sprite");

const frames = [
  [0, 0],   [16, 0],  [32, 0],
  [0, 16],  [16, 16], [32, 16],
  [0, 32],  [16, 32]
];

let i = 0;

setInterval(() => {
  const [x, y] = frames[i];
  sprite.style.backgroundPosition = `-${x}px -${y}px`;
  i = (i + 1) % frames.length;
}, 120);
