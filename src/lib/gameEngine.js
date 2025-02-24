import { loadLevel } from './levelLoader'

export default async function gameEngine(canvas, levelId) {
  const ctx = canvas.getContext('2d')
  canvas.width = 640
  canvas.height = 320

  const level = await loadLevel(levelId)
  const tileSize = level.tileSize
  const player = { x: level.playerStart.x, y: level.playerStart.y, width: tileSize, height: tileSize, vx: 0, vy: 0 }
  const gravity = 0.5

  function isColliding(x, y) {
    const tx = Math.floor(x / tileSize)
    const ty = Math.floor(y / tileSize)
    return level.tilemap[ty] && level.tilemap[ty][tx] === '#'
  }

  function update() {
    player.vy += gravity
    if (!isColliding(player.x, player.y + player.vy)) {
      player.y += player.vy
    } else {
      player.vy = 0
    }

    if (!isColliding(player.x + player.vx, player.y)) {
      player.x += player.vx
    } else {
      player.vx = 0
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let y = 0; y < level.tilemap.length; y++) {
      for (let x = 0; x < level.tilemap[y].length; x++) {
        if (level.tilemap[y][x] === '#') {
          ctx.fillStyle = 'gray'
          ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize)
        } else if (level.tilemap[y][x] === 'E') {
          ctx.fillStyle = 'red'
          ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize)
        }
      }
    }
    ctx.fillStyle = 'blue'
    ctx.fillRect(player.x, player.y, tileSize, tileSize)
  }

  function gameLoop() {
    update()
    draw()
    requestAnimationFrame(gameLoop)
  }

  gameLoop()
}
