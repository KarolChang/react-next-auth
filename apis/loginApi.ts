import axios from 'axios'

//api.dev.maibooking.com/family/member/login

export const loginApi = async () => {
  const res = await axios.post(
    'https://api.dev.maibooking.com/family/member/login',
    {
      platform: 'FAMIAPP',
      platformUuid: 'f2c1112101e85fed5ccd05fa52f253b4'
    }
  )
  return res.data
}
