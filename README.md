# Modern Blog Platform

A full-featured, modern blog platform built with Next.js, featuring authentication, real-time interactions, and a beautiful user interface.

## Description

This is a sophisticated blog platform that combines the power of Next.js with modern web technologies to deliver a seamless blogging experience. The platform supports user authentication, blog post management, categories, comments, and more. It features a responsive design with dark/light mode support and real-time interactions.

## Tech Stack

- **Frontend Framework**: Next.js 13+ (App Router)
- **Styling**: CSS Modules
- **Database**: MongoDB with Prisma ORM
- **Authentication**: NextAuth.js with Firebase
- **State Management**: React Context API

## Features

- 🔐 User Authentication (Email/Password, OAuth)
- 📝 Blog Post Creation and Management
- 🏷️ Category Management
- 💬 Comment System
- 🌓 Dark/Light Mode Toggle
- 📱 Responsive Design
- 🔍 SEO Optimized
- 📊 View Counter
- 🎨 Modern UI/UX
- 🔄 Real-time Updates

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- MongoDB database
- Firebase project (for authentication)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blog.git
cd blog
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="your_mongodb_connection_string"
FIREBASE="your_firebase_api_key"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"
```

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                 # Next.js 13 app directory
│   ├── api/            # API routes
│   ├── blog/           # Blog post pages
│   ├── login/          # Authentication pages
│   └── write/          # Post creation/editing
├── components/         # Reusable React components
│   ├── authLinks/      # Authentication components
│   ├── card/          # Blog post cards
│   ├── comments/      # Comment system
│   ├── menu/          # Navigation menu
│   └── themeToggle/   # Dark/light mode toggle
├── context/           # React Context providers
├── posts/             # Blog post data
└── utils/             # Utility functions
```

## API Documentation

The application uses Next.js API routes for backend functionality. Key endpoints include:

- `/api/auth/*` - Authentication endpoints (NextAuth.js)
- `/api/posts` - Blog post management
- `/api/comments` - Comment system
- `/api/categories` - Category management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


