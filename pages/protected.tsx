import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function Protected() {
  const { data: session, status } = useSession()

  useEffect(() => {
    console.log('[protected] session', session)
  }, [session])

  return <div>Protected</div>
}
