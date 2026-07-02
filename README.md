# 🛒 Grocery Store — Full-Stack E-Commerce App

A full-stack grocery e-commerce web application where users can browse products by category, add items to their cart, checkout with card payments, and track their orders. Admins have full control over the product catalog through a dedicated dashboard.

## ✨ Features

### 👤 User Side
- **Authentication** — Secure sign in / sign up powered by **Clerk**.
- **Hero Section** — Eye-catching landing section right after the header.
- **Why Choose Us** — A dedicated section with **6 highlight cards** explaining why customers should shop with us.
- **Product Categories** — Browse products organized into categories:
  - 🍎 Fruits
  - 🥦 Vegetables
  - 🥩 Meat
  - 🧃 Juices
  - 🥐 Pastries
- **Popular Products Section** — Highlighted best-selling products.
- **Quick Add to Cart** — Clicking the cart icon on any product opens a quick view with:
  - Product image & description
  - Price
  - Quantity selector
  - Category the product belongs to
  - This same logic/component is reused across **all** products in the app.
- **Cart / My Orders Page** — A page where users can review everything they've added to the cart along with the **total price**.
- **Checkout & Payments** — Secure card payments handled via **Stripe**.
- **Toast Notifications** — Instant feedback (add to cart, checkout success/errors, etc.) using **react-hot-toast**.

### 🛠️ Admin Side
- Admin role is verified through **Clerk**, and payments/products are managed via **Stripe**.
- Admins can:
  - ➕ Add new products
  - ✏️ Edit existing products
  - 🗑️ Delete products
- Full control over categories and inventory shown to users.

## 🧰 Tech Stack

| Purpose            | Technology         |
|---------------------|---------------------|
| Framework           | Next.js / React     |
| Authentication      | Clerk               |
| Payments            | Stripe              |
| Notifications       | react-hot-toast     |
| Styling             | Tailwind CSS        |
| UI Components       | HyperUI             |

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/grocery-store.git
cd grocery-store
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Database (if applicable)
DATABASE_URL=your_database_url

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run the development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure (Example)

```
grocery-store/
├── app/
│   ├── (auth)/
│   ├── (admin)/
│   ├── cart/
│   ├── products/
│   └── layout.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── WhyChooseUs.tsx
│   ├── CategorySection.tsx
│   ├── ProductCard.tsx
│   └── ProductQuickView.tsx
├── lib/
├── public/
├── styles/
└── .env.local
```

## 🗺️ Roadmap / Possible Improvements
- Order history & tracking status
- Product reviews & ratings
- Wishlist feature
- Discount codes / coupons
- Email notifications after checkout

## 📄 License

This project is open for personal and educational use. Feel free to fork and customize it.

---

Made with ❤️ using Next.js, Clerk, Stripe & Tailwind CSS.
