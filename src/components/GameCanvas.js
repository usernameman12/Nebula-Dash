import { useEffect, useRef } from 'react'
import gameEngine from '../lib/gameEngine'
export default function GameCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    gameEngine(canvas)
  }, [])
  return <canvas ref={canvasRef} className="game-canvas"></canvas>
}
