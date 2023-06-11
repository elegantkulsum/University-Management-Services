import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

     app.use(cors())
//parser
app.use(express.json()) //amader je reqest ta asbe express,json er maddome sei data ke parser korte cai
app.use(express.urlencoded({ extended: true })) // jodi url encoded thake tahoel amra true korbo

//testing
app.get('/', (req: Request, res: Response:any) => {
  // res.status(200).json({
  //   "name":"kulsum"
  // })
  res.send('Testing! Working Successfully')
})

export default app
