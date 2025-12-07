const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// temporary Samu placeholder until we add your sprite
const samu = {
  x: 100,
  y: 200,
  size: 40,
  speed: 2
};

function update() {
  // just moves Samu to the right slowly
  samu.x += samu.speed;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(samu.x, samu.y, samu.size, samu.size);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
