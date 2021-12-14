// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if(req.method==='POST'){
        res.status(200).json({ 
            name: 'Ciro',
            cognome:'Passata',
         })
    }else{
        res.status(500).json({ 
            error: 'Eh Volevi'
         }) 
    }
  }
  
