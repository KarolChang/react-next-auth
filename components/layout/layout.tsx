import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function Layout({ children }) {
  const { data: session, status } = useSession()

  return (
    <>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href={`/`}>Index</Link>
        <Link href={`/unprotected`}>Unprotected</Link>
        <Link href={`/protected`}>Protected</Link>
      </div>
      <div>Seesion Data: {session ? session.user?.name : 'NO DATA!!!'}</div>
      <hr />
      <div style={{ marginTop: '20px' }}>{children}</div>
    </>
  )
}
