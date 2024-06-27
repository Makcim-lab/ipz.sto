// Проста анімація на canvas

document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('animationCanvas');
  var ctx = canvas.getContext('2d');
  
  var blockX = 0;
  var blockY = 80;
  var speed = 3; // Швидкість руху блоку
  
  function drawBlock() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FF5733'; // Колір блоку
    ctx.fillRect(blockX, blockY, 100, 50); // Розміри блоку
    blockX += speed;
    if (blockX > canvas.width) {
      blockX = -100; // Повернення блоку в початкову позицію
    }
    requestAnimationFrame(drawBlock);
  }
  
  drawBlock();
});
