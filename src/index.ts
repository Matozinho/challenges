require('dotenv').config();
import express, { Request, Response } from 'express';
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

app.get('/', (_: Request, res: Response) => {
  console.log('Hello World!');

  return res.status(200).send({ message: 'Hello World!' });
});

const thrower = (err: unknown): void => {
  throw err;
};

const throwToGlobal = (err: unknown): NodeJS.Immediate => setImmediate(() => thrower(err));

process.on('unhandledRejection', throwToGlobal);
