import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma/client.js';

const JWT_SECRET = process.env.JWT_SECRET;

function signToken(user) {
  return jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '7d',
  });
}

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'The password must have at least 6 characters' });
    }

    const existing = await prisma.user.findUnique({ where: { email } });

    if (existing)
      return res.status(409).json({ message: 'Email already used' });

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashed },
      select: { id: true, email: true },
    });

    const token = signToken(user);

    res.json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Register failed' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid credentials' });

    const token = signToken({ id: user.id, email: user.email });

    res.json({ user: { id: user.id, email: user.email }, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Login failed' });
  }
};
