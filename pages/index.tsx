import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { signIn, signOut } from 'next-auth/react'
import { Button } from '@chakra-ui/react'

export default function Home() {
  const { data: session, status } = useSession()

  useEffect(() => {
    console.log('[index] session', session)
  }, [session])

  return (
    <div className="p-5">
      <Button colorScheme="green" onClick={() => signIn()}>
        Sign In
      </Button>
      <Button colorScheme="green" onClick={() => signOut()} ml={5}>
        Sign Out
      </Button>
    </div>
  )
}
