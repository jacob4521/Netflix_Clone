# Netflix Clone

A fully responsive, feature-rich Netflix clone application built with **React**, **Vite**, and **Firebase**.

## Live Demo

If you want to skip the setup and see the app in action, check out the live hosted version here:  
**[Live Demo: Netflix Clone](https://netflix-clone-rosy-mu.vercel.app/)**

## Features

- **User Authentication:** Sign up, log in, and log out securely using Firebase Authentication.
- **Dynamic Content:** Browse through various categories of movies and TV shows.
- **Responsive Design:** A fully responsive UI that looks great on mobile, tablet, and desktop.
- **Video Player:** Integrated video player to watch selected title trailers.
- **Custom Components:** Modularized and reusable components (`Navbar`, `Footer`, `TitleCards`).

## Tech Stack

- **Frontend:** React.js, Vite
- **Styling:** CSS
- **Backend/Services:** Firebase (Authentication & Database)

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js installed on your machine.
- A Firebase project configured for Authentication and Database.
- A TMDB (The Movie Database) account and API Bearer Token.

### Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the root directory:

`VITE_FIREBASE_API_KEY` - Your Firebase API Key
`VITE_TMDB_BEARER_TOKEN` - Your TMDB API Read Access Token

*Example of a `.env` file:*
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_TMDB_BEARER_TOKEN=your_tmdb_bearer_token_here
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jacob4521/Netflix_Clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Netflix_Clone
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Set up your Firebase configuration in `src/firebase.js` using your credentials.
5. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure

```
Netflix_Clone/
├── public/                 # Public assets
├── src/
│   ├── assets/             # Static assets like images and mock data
│   ├── components/         # Reusable UI components (Navbar, Footer, TitleCards)
│   ├── pages/              # Main pages (Home, Login, Player)
│   ├── App.jsx             # Root application component
│   ├── firebase.js         # Firebase config and setup
│   ├── index.css           # Global CSS styles
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
└── vite.config.js
```

