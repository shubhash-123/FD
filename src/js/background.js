function createBlockAnimation() {
  const block = document.createElement('div');
  block.className = 'block-animation';
  block.style.left = Math.random() * window.innerWidth + 'px';
  block.style.top = Math.random() * window.innerHeight + 'px';
  document.querySelector('.blockchain-bg').appendChild(block);
  
  setTimeout(() => {
    block.remove();
  }, 6000);
}

setInterval(createBlockAnimation, 2000);

document.addEventListener('DOMContentLoaded', () => {
  const bg = document.createElement('div');
  bg.className = 'blockchain-bg';
  document.body.appendChild(bg);
  
  for(let i = 0; i < 5; i++) {
    createBlockAnimation();
  }
});