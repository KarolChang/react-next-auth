import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from 'next-auth/react'

export async function middleware(request: NextRequest) {
  // 如果戶由通往 /protected
  if (request.nextUrl.pathname.startsWith('/protected')) {
    const requestForNextAuth = {
      headers: {
        cookie: request.headers.get('cookie')
      }
    }
    const session = await getSession({ req: requestForNextAuth })
    console.log('[middleware] session', session)
    if (!session) {
      return NextResponse.redirect(new URL('/error', request.url))
    }
  }
}
