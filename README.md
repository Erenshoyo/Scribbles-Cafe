# ☕ Scribbles Cafe

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)

**Scribbles Cafe** is a modern, responsive personal blogging interface built with React. It features a clean UI for reading articles, a bookmarking system, read-time tracking, and interactive modals for immersive reading.

## ✨ Features

- **Dynamic Content:** Blog posts are fetched dynamically from a local JSON data source.
- **Interactive Modals:** Click on any blog title or "See More" to open a full-screen dialog with a gradient cover image and scrollable content.
- **Bookmarking System:** Users can bookmark posts to a sticky sidebar reading list.
- **Read Tracker:** Tracks the number of blogs read and removes them from bookmarks automatically upon completion.
- **Responsive Design:** Fully responsive layout using **Tailwind CSS** and **DaisyUI**.
- **Sticky Navbar:** Glassmorphism-style navigation bar with social media integration.

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Component Library:** DaisyUI
- **Icons:** React Icons (Feather/Ionicons)
- **Data:** Local JSON (Simulated API)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Erenshoyo/scribbles-cafe.git
   cd scribbles-cafe
   npm install
   npm run dev

### Project Structure

```text
src/
├── assets/            # Static assets
├── components/
│   ├── Blog/          # Single Blog Card & Modal Logic
│   ├── Blogs/         # Main Grid Container & Data Fetching
│   ├── Navbar/        # Top Navigation & Social Links
│   ├── Footer/        # Simple Footer
├── App.jsx            # Main Layout (Sidebar & State Management)
├── index.css          # Tailwind & DaisyUI imports

public/
└── blogs.json         # Mock Data for blog posts


