import 'dotenv/config'
import { app } from './app.js'

const port = Number(process.env.PORT ?? 4000)

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`)
})
