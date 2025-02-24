export async function loadLevel(world, level) {
    const res = await fetch(`/assets/levels/${world}-level${level}.json`)
    return res.json()
  }
  