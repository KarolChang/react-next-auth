import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // id 才是填入 signIn 的第一個參數
      id: 'credentials',
      name: 'my-provider',
      credentials: {
        phone: { label: 'Phone number', type: 'text' }
      },
      authorize: async (credentials, req) => {
        console.log('authorize!!!', credentials)
        //  checking if there is account with these credentials
        //  status OK
        const status = true
        if (status) {
          //  collect account data
          const user = {
            phone: credentials.phone,
            uuid: 'b20abc6d-d7e6-494f-905c-068678e9db17',
            name: '卡羅',
            // phone: '0912345678',
            email: 'karol567@gmail.com',
            gender: 3,
            birthday: '2022-02-03',
            isAgreedTermOfUse: true,
            createdAt: 1656929555200
          }
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user
      console.log('session', session)
      return session
    }
  },
  pages: {
    signIn: '/signin',
    signOut: '/',
    error: '/error'
  },
  debug: true
}

export default NextAuth(authOptions)
