import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import gameEngine from '../lib/gameEngine'

export default function Game() {
  const router = useRouter()
  const canvasRef = useRef(null)

  useEffect(() => {
    if (router.query.world && router.query.level && canvasRef.current) {
      gameEngine(canvasRef.current, router.query.world, router.query.level)
    }
  }, [router.query.world, router.query.level])

  return <canvas ref={canvasRef} className="game-canvas"></canvas>
}
