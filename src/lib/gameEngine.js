export default function gameEngine(canvas) {
    const ctx = canvas.getContext('2d')
    canvas.width = 800
    canvas.height = 600
    let x = 0
    function update() {
      x = (x + 2) % canvas.width
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'white'
      ctx.fillRect(x, 300, 50, 50)
    }
    function loop() {
      update()
      draw()
      requestAnimationFrame(loop)
    }
    loop()
  }
  