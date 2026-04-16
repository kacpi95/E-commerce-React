# Clothiq – Fullstack E-commerce Clothing Store

**React · React Router · Node.js · Express · Prisma · MySQL · JWT**

A full-stack e-commerce application where users can browse clothing categories, view product details, manage favourites, and use a client-side shopping cart.

The project focuses on clean component architecture, reusable UI elements, consistent global styling, and a structured backend powered by Prisma ORM and MySQL. Authentication is implemented with JWT, enabling account features such as favourites persistence.

---

## Live Demo

https://clothiq-dem.pl

⚠️ Note: The backend is hosted on Render (free tier), so the first request may take a few seconds due to cold start.

---

## Features

### Product Browsing

- Browse products by:
  - Gender (Women / Men / Children)
  - Category
  - Subcategory
- Product detail pages with:
  - Multiple photos
  - Description
  - Maintenance information
- Pagination support
- Bestseller section on main page

---

### Shopping Cart

- Add products to cart
- Remove individual products from cart
- Cart stored in localStorage
- Automatic total price calculation
- Currency switch (PLN / USD)
- Delivery cost logic with free shipping threshold
- Cart summary panel

---

### Authentication (JWT)

- Register & login pages
- JWT token stored in localStorage
- Persistent session after refresh (token-based)
- /auth/me endpoint to verify logged-in user
- Conditional UI in header (login/register vs email/logout)

---

### Favourites

- Add products to favourites
- Remove favourites
- Backend persistence (Prisma + MySQL)
- Favourite list page
- Auth-protected API requests (Bearer token)

---

### UI & UX

- Fully responsive layout (desktop & mobile)
- Sticky top navigation
- Mobile-optimized header layout
- Hero section with dynamic image per gender
- CSS Modules with global design tokens
- Reusable components:
  - Product
  - Products Grid
  - Accordion
  - Breadcrumbs
  - Pagination
  - CartSummary
  - FavouriteProduct
  - ExpandableMenu

---

## Screenshots

### Authentication

<p align="center">
  <img src="screenshots/login.png" alt="Login screen" width="280" />
  <img src="screenshots/register.png" alt="Register screen" width="280" />
</p>

### Dashboard

<p align="center">
  <img src="screenshots/home.png" alt="Home dashboard" width="560" />
</p>

### Favorites, Subcategory & Bag

<p align="center">
  <img src="screenshots/favorite.png" alt="Favorites screen" width="250" />
  <img src="screenshots/subcategory.png" alt="Subcategory screen" width="250" />
  <img src="screenshots/bag.png" alt="Bag screen" width="250" />
</p>

---

## Tech Stack

### Frontend

- React 18
- React Router v6 (Data Router)
- Context API
- CSS Modules
- LocalStorage (cart persistence)

### Backend

- Node.js
- Express
- Prisma ORM
- MySQL
- JWT
- bcrypt
- dotenv
- CORS

---

## Deployment

- Frontend hosted on Hostinger (static build)
- Backend API hosted on Render
- Database hosted on Render (MySQL)

The application uses a split deployment architecture:

- Frontend (Hostinger) communicates with backend API (Render)
- Images are served statically from the backend

---

## Architecture Overview

- REST API built with Express
- JWT authentication flow:
  - POST /auth/register
  - POST /auth/login
  - GET /auth/me
- Prisma ORM for database access
- Relational data modeling (Products, Photos, Favourites)
- Frontend data fetching via React Router loaders
- Context API for global state management (cart & currency)

---

## Project Structure

```bash
back-end/
  prisma/
    schema.prisma
    seed.js
  src/
    product/
    favourite/
    auth/
    constants/
  public/
    product-photos/
  index.js

front-end/
  src/
    components/
    views/
    api/
    contexts/
    constants/
    styles/
  main.jsx
```

## Installation

### 1. Clone repository

```bash
git clone https://github.com/kacpi95/ecommerce-platform-fullstack.git
cd ecommerce-platform-fullstack
```

### 2. Backend configuration

**Create a `.env` file inside `back-end/` directory:**

```bash
DATABASE_URL="mysql://user:password@localhost:3306/ecommerceclothesdb"
PORT=3000
JWT_SECRET='your_secret_key'

```

### 3. Install dependencies

```bash
npm install
```

### 4. Run migrations & seed database

```bash
npx prisma migrate reset
```

### 5. Start backend

```bash
npm run dev
```

**Backend runs at:**

http://localhost:3000

### 6. Frontend configuration

```bash
cd front-end
npm install
npm run dev
```

**Frontend runs at:**

http://localhost:5173

---

## Database

- Products stored in MySQL
- Relations:
  - Product → Photos (1:n)
  - Product → Favourites (1:n)
- Images served statically from:

```bash
  back-end/public/product-photos
```

---

## Styling Approach

- Global design tokens:
  - colors
  - border radius
  - spacing
  - container width
- CSS Modules for local scope
- Responsive breakpoints
- Clean flex/grid layout
- Theme-ready color system (easy to reskin)

---

## What I Learned

- Building a fullstack e-commerce architecture
- Designing relational database models with Prisma
- Structuring Express controllers and services
- Implementing JWT authentication (register/login/me)
- Handling frontend-backend integration
- Managing state with Context API
- Implementing client-side cart logic
- Building reusable and scalable component systems
- Debugging routing & loader issues in React Router
- Responsive UI architecture

---

## Future Improvements

- User accounts with order history
- Checkout flow after cart
- Payment integration (Stripe / PayU)
- Admin panel for managing products
- Quantity handling instead of duplicate cart items
- Server-side cart persistence (instead of localStorage)
- Product reviews and ratings
- Filtering by price range
- Performance optimization & lazy loading
- Automated tests (frontend & backend)
