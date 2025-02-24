const gameConfig = {
    worlds: ['Celestial City', 'Mystic Grove'],
    levelsPerWorld: 20
  }
  
  const levels = []
  gameConfig.worlds.forEach(world => {
    for (let i = 1; i <= gameConfig.levelsPerWorld; i++) {
      levels.push({
        id: world.replace(/\s+/g, '').toLowerCase() + '-level' + i,
        world,
        level: i
      })
    }
  })
  
  export default levels
  