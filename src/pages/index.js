import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  router.push('/loading')
  return null
}
