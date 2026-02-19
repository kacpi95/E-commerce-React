const express = require('express');
const cors = require('cors');
const path = require('path');
const productRouter = require('./src/product/product.routes').default;
const favouriteRouter = require('./src/favourite/favourite.routes').default;
const authRouter = require('./src/auth/auth.routes').default;

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  '/product-photos',
  express.static(path.join(__dirname, 'public', 'product-photos')),
);
app.use('/products', productRouter);
app.use('/favourites', favouriteRouter);
app.use('/auth', authRouter);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
