# 🛒 বাজার দর | Bazar Dor

<p align="center">
  <strong>বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর এক নজরে</strong>
  <br />
  চাল, ডাল, তেল, সবজি, মাছ, মাংসসহ প্রয়োজনীয় পণ্যের দাম ও বাজারভিত্তিক তথ্য দেখুন সহজেই।
</p>

<p align="center">
  <a href="https://assignment-7-bazar-dor-bz.vercel.app/"><strong>🌐 Live Demo</strong></a>
  &nbsp; • &nbsp;
  <a href="https://github.com/fuyad254/Assignment-7-Bazar-Dor"><strong>📁 Source Code</strong></a>
</p>

---

## 📌 About The Project

**বাজার দর (Bazar Dor)** is a responsive web application that helps users explore the latest prices of everyday products in Bangladesh. It presents product prices, daily price movements, category-wise listings, and market-level price comparisons in one place.

The application fetches product and category information from the Programming Hero Bazar Dor API. Users can browse products, sort category listings, view detailed price summaries, and access account features.

## ✨ Key Features

- **Daily Price Highlights** — Separate sections for products with rising and falling prices.
- **All Products Listing** — Browse available products with their current prices, units, and price changes.
- **Category-wise Browsing** — Explore products by category and sort them by price (low to high or high to low).
- **Product Details** — View current price, minimum price, maximum price, average price, and market-wise price information.
- **Authentication** — Sign up and sign in with email/password, Google, or GitHub using Better Auth.
- **Protected Pages** — Profile and product detail routes are protected for authenticated users.
- **Live Price Ticker** — A scrolling ticker highlights product price movements.
- **Responsive Interface** — Layouts are designed to work across mobile, tablet, and desktop screens.
- **Loading & Feedback UI** — Loading states and toast notifications improve the user experience.
- **Custom 404 Page** — A friendly not-found page helps users return to the home page.

## 🧰 Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | React framework, App Router, and server-side rendering |
| [React 19](https://react.dev/) | UI development |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling and responsive layouts |
| [Better Auth](https://www.better-auth.com/) | Authentication and social sign-in |
| [MongoDB](https://www.mongodb.com/) | Authentication data storage |
| [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) | Icons |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)
- A MongoDB connection string for authentication features
- Google and GitHub OAuth credentials if you want to enable social sign-in locally

### 1. Clone the repository

```bash
git clone https://github.com/fuyad254/Assignment-7-Bazar-Dor.git
cd Assignment-7-Bazar-Dor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
BETTER_AUTH_DB_URL=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Replace the placeholder values with your own credentials. Configure the corresponding OAuth callback URLs in the Google and GitHub developer consoles for your local and deployed application URLs. Never commit real secrets or credentials to Git.

> Product and category data are requested from the public Bazar Dor API; no API key is currently configured in the application source.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm run start
```

Run ESLint with:

```bash
npm run lint
```

## 🔌 API Reference

The project uses the Programming Hero Bazar Dor API.

**Base URL**

```text
https://openapi.programming-hero.com/api/bazardor
```

| Endpoint | Description |
| --- | --- |
| `/products` | Get all products |
| `/products?category=chal` | Get products filtered by category |
| `/products/1` | Single product endpoint |
| `/categories` | Get all categories |
| `/categories/chal` | Get a single category |

API documentation/source: [Programming Hero – B14-A7-Bazar-Dor](https://github.com/ProgrammingHero1/B14-A7-Bazar-Dor)

## 📂 Project Structure

A simplified overview of the main source folders:

```text
Assignment-7-Bazar-Dor/
├── public/                  # Static public assets
├── src/
│   ├── app/
│   │   ├── api/auth/         # Better Auth API route
│   │   ├── catagory/[sulg]/  # Category page
│   │   ├── lib/              # Authentication setup
│   │   ├── product/[slug]/   # Product details page
│   │   ├── profile/          # User profile page
│   │   ├── sign-in/          # Sign-in page
│   │   ├── sign-up/          # Sign-up page
│   │   ├── layout.tsx        # Root layout
│   │   ├── loading.tsx       # Loading UI
│   │   ├── not-found.tsx     # Custom 404 page
│   │   └── page.tsx          # Home page
│   ├── assets/               # Images and visual assets
│   ├── component/            # Reusable UI components
│   ├── type/                 # TypeScript types
│   └── proxy.ts              # Protected route handling
├── .env.local                # Local environment variables (not committed)
├── package.json
└── README.md
```

## 🌍 Deployment

The application is deployed on **Vercel**.

- **Live Website:** https://assignment-7-bazar-dor-bz.vercel.app/
- **GitHub Repository:** https://github.com/fuyad254/Assignment-7-Bazar-Dor

For your own deployment, import the repository into Vercel, add the required environment variables in the project settings, configure the OAuth callback URLs for the production domain, and deploy.

## 👨‍💻 Author

**Fuyad**

- GitHub: [@fuyad254](https://github.com/fuyad254)
- Project: [Bazar Dor](https://github.com/fuyad254/Assignment-7-Bazar-Dor)

---

<p align="center">
  Made with ❤️ for a better way to explore daily market prices in Bangladesh.
</p>
