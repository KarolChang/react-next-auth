import { signIn } from 'next-auth/react'
import { Button } from '@chakra-ui/react'

export default function SignIn() {
  return (
    <div>
      登入方式
      <br />
      <Button
        colorScheme="blue"
        onClick={() =>
          signIn('credentials', {
            phone: '111',
            callbackUrl: '/'
          })
        }
      >
        全家登入
      </Button>
    </div>
  )
}
