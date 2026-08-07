const sounds = {
  hit: new Audio('./assets/sounds/hit.mp3'),
  critical: new Audio('./assets/sounds/critical.mp3'),
  block: new Audio('./assets/sounds/block.mp3'),
  win: new Audio('./assets/sounds/win.mp3'),
  lost: new Audio('./assets/sounds/lost.mp3'),
  draw: new Audio('./assets/sounds/draw.mp3'),
};

export default function playSound(name) {
  const sound = sounds[name];

  if (!sound) return;

  sound.currentTime = 0;
  sound.play().catch((err) => console.error(err));
}
