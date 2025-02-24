import levels from '../config/levels'
export default function LevelSelect() {
  return (
    <div className="level-select">
      {levels.map(l => (
        <button key={l.id}>{l.level}</button>
      ))}
    </div>
  )
}
