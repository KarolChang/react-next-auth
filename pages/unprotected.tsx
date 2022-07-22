import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function Unprotected() {
  const { data: session, status } = useSession()

  useEffect(() => {
    console.log('[Unprotected] session', session)
  }, [session])

  return <div>Unprotected</div>
}
