import levels from '../config/levels'
const worlds = Array.from(new Set(levels.map(l => l.world)))
export default function WorldSelector() {
  return (
    <div className="world-selector">
      {worlds.map(w => (
        <button key={w}>{w}</button>
      ))}
    </div>
  )
}
