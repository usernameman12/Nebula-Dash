import levels from '../config/levels'
import { useRouter } from 'next/router'

export default function LevelSelect() {
  const router = useRouter()
  return (
    <div className="level-select">
      {levels.map(l => (
        <button key={l.id} onClick={() => router.push(`/game?world=${l.world.replace(/\s+/g, '').toLowerCase()}&level=${l.level}`)}>
          {l.world} - Level {l.level}
        </button>
      ))}
    </div>
  )
}
