import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users.find(user => user.email === email);

  if (!user) return res.status(404).send({ message: 'User not found' });

  // validate it, maybe use bcrypt
  if (user.password !== password) return res.status(401).send({ message: 'Invalid password' });

  return res.status(200).send({ message: 'Login successful' });
};
