import {API_URL} from '@/config/index'

export default async ( req , res ) => {
    if(req.method === 'POST') {
        const { identifier, password } = req.body

        const strapiRes = await fetch(`${API_URL}/auth/local`, {
            method: 'POST',
            headers : {
                'Content-type': 'aplication/json'
            },
            body : JSON.stringify({
                identifier,
                password
            })

        })

        res.status(200).json({})

    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: `Method ${req.method} not allowed`})
    }
}