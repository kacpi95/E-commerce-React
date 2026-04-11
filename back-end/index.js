import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import productRouter from './src/product/product.routes.js';
import favouriteRouter from './src/favourite/favourite.routes.js';
import authRouter from './src/auth/auth.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, 'public');
const productPhotosDir = path.join(publicDir, 'product-photos');
const frontendIndexPath = path.join(publicDir, 'index.html');

app.use('/product-photos', express.static(productPhotosDir));

app.use('/products', productRouter);
app.use('/favourites', favouriteRouter);
app.use('/auth', authRouter);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use(express.static(publicDir));

app.get('*', (req, res) => {
  if (fs.existsSync(frontendIndexPath)) {
    return res.sendFile(frontendIndexPath);
  }

  return res.status(200).json({
    message: 'API is running. Frontend build is missing in back-end/public.',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  if (!fs.existsSync(frontendIndexPath)) {
    console.warn(
      'Frontend build not found in back-end/public/index.html. Run `npm run build` in the repository root before deployment if you want to serve frontend from Express.',
    );
  }
});
