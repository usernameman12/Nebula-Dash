import { useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingScreen from '../components/LoadingScreen'
export default function Loading() {
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/game')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return <LoadingScreen />
}
