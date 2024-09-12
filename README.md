# FundedFutures

**Notice: Product development has been temporarily suspended due to unforeseen circumstances. We appreciate your interest and support.**


## Your Gateway to Tomorrow's Tech Giants

FundedFutures is an innovative job platform connecting ambitious tech professionals with well-funded startups, providing real-time access to ground-floor opportunities at the next wave of tech innovators.



## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [variables)
- [Contributing](#contributing)
- [License](#license)

## Overview

FundedFutures aims to revolutionize tech recruitment by bridging the gap between emerging startups and top-tier talent. Our platform leverages real-time data on startup funding to provide users with unique insights and opportunities in the tech job market.

### Vision

Connecting ambitious talent with the next wave of tech innovators.

### Mission

To foster innovation and growth in the tech ecosystem by providing unparalleled access to opportunities at tomorrow's tech giants.

## Features

- Real-time job listings from funded startups
- User authentication and profiles
- Advanced job search and filtering
- Company profiles with funding history
- Web scraping for up-to-date startup and job data

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Authentication**: NextAuth.js
- **Databases**: 
  - Supabase (job listings, company data)
  - MongoDB (user profiles)
- **Web Scraping**: Puppeteer
- **Deployment**: [Specify your deployment platform, e.g., Vercel]

## Getting Started

1. Clone the repository:
git clone https://github.com/your-username/fundedfutures.git cd fundedfutures

2. Install dependencies:
npm install

3. Set up environment variables ( [Environment Variables](#environment-variables) section)

4. Run the development server:
npm run dev

Open http://localhost:3000 in your browser to see the application.

## Project Structure


fundedfu── app├── jobs/
│      └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── JobCard.tsx
│   ├── JobFilters.tsx
│   ├── JobList.tsx
│   └── Layout.tsx
├── lib/
│   ├── auth.ts
│   └── database.ts
├── pages/
│   └── api/
│       ├── auth/
│       │   └── [...nextauth].ts
│       └── register.ts
├── public/
├── styles/
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json

## Environment Variables
Create a .env.local file in the root directory with the following variables:

MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_api_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

## Contributing
We welcome contributions to FundedFutures! Please read our Contributing Guidelines for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed underMIT License](LICENSE).

## FundedFutures is currently in development. We're excited about its potential to transform the tech job market and welcome feedback and contributions from the community!
