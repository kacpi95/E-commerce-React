import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import productRouter from './src/product/product.routes.js';
import favouriteRouter from './src/favourite/favourite.routes.js';
import authRouter from './src/auth/auth.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  '/product-photos',
  express.static(path.join(__dirname, 'public', 'product-photos')),
);
app.use('/products', productRouter);
app.use('/favourites', favouriteRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
