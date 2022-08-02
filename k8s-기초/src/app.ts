import express, { Request, Response } from "express";

const app = express(); 

const sendData = "hello world! 수정본2";

app.get("/", (req: Request, res: Response) => {
  res.send(sendData);
});

app.get('/error', (req, res) => {
  process.exit(1)
})

app.listen(8082);