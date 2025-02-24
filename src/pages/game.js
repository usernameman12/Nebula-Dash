import GameCanvas from '../components/GameCanvas'
import LevelSelect from '../components/LevelSelect'
import WorldSelector from '../components/WorldSelector'
import UI from '../components/UI'
export default function Game() {
  return (
    <>
      <WorldSelector />
      <LevelSelect />
      <GameCanvas />
      <UI />
    </>
  )
}
