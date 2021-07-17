import cookie from  'cookie'
import {API_URL} from '@/config/index'

export default async ( req , res ) => {
  console.log(req.body)
  if(req.method === 'POST') {
    //Destruir Cookie
    res.setHeader('Set-Cookie', cookie.serialize(
      'token', 
      '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        expires: new Date(0),
        sameSite: 'strict',
        path: '/'
      }
    )
  )
    
  res.status(200).json({message: 'Success'})

  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} not allowed`})
  }
}