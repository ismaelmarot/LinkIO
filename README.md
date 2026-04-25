# LINKIO

![LinkIO Icon](/frontend/public/Linkio-icon.png)

***LinkIO is a desktop link manager application that helps you organize, save and quickly access all your favorite links with a clean and modern interface inspired by Apple design.***

The app enables you to categorize links with tags, add descriptions and notes, search through your collection, and enjoy a seamless experience with dark/light mode support and full bilingual interface (English/Spanish).

[![Version](https://img.shields.io/badge/version-1.0.0-orange?style=for-the-badge)](https://github.com/ismaelmarot/LinkIO/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://github.com/ismaelmarot/LinkIO/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/ismaelmarot/LinkIO?style=for-the-badge)](https://github.com/ismaelmarot/LinkIO/commits/main)

### Frontend Stack

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### Backend Stack

![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white)

### Desktop

![Electron](https://img.shields.io/badge/Electron-41-47848F?style=for-the-badge&logo=electron&logoColor=white)

---

## **Download**

[![Download for macOS](https://img.shields.io/badge/Download-macOS-black?style=for-the-badge&logo=apple)](https://github.com/ismaelmarot/LinkIO/releases)
[![Download for Windows](https://img.shields.io/badge/Download-Windows-0078D4?style=for-the-badge&logo=windows)](https://github.com/ismaelmarot/LinkIO/releases)

---

## What It Does?

- **Link Management**: Save and organize your favorite links with titles, descriptions, and notes
- **Tags & Categories**: Organize links with customizable tags for easy filtering
- **Search & Filter**: Quickly find links with real-time search and tag filtering
- **Visual Previews**: Auto-fetch favicons and screenshots for your links
- **Bilingual Interface**: Full English and Spanish language support
- **Dark/Light Mode**: System-aware theme with manual override options
- **Cross-Platform**: Works on macOS and Windows as a native desktop app

---

## 🛠️ INFRASTRUCTURE & SERVICES

| Service | Badge | Description |
|---------|-------|-------------|
| **Desktop App** | ![Electron](https://img.shields.io/badge/Electron-41-47848F?style=flat) | Cross-platform desktop application (macOS & Windows) |
| **Frontend** | ![React](https://img.shields.io/badge/React-18-61DAFB?style=flat) | React SPA with TypeScript |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=flat) | Express.js backend API |
| **Styling** | ![Styled](https://img.shields.io/badge/styled--components-DB7093?style=flat) | CSS-in-JS styling with styled-components |

---

## 📑 TABLE OF CONTENT

1. [Highlights](#highlights)
2. [Core Features](#core-features)
3. [Technologies Stack](#technologies-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [API Endpoints](#api-endpoints)
8. [Desktop App](#desktop-app)
9. [License](#license)
10. [Contact](#contact)

---

## 🌟 HIGHLIGHTS

- Cross-platform desktop application with Electron
- Beautiful Apple/iOS-inspired minimalist design
- Full bilingual interface (English/Spanish)
- Dark/Light mode with system preference detection
- Real-time link preview with favicon and screenshot fetching
- Tag-based organization and filtering
- Search functionality across all link fields
- Local backend API for data persistence
- No external database dependencies

---

## ✨ CORE FEATURES

| Feature | Description |
|---------|-------------|
| Link Management | Add, edit, and delete links with rich metadata |
| Tags System | Create and assign custom tags to organize links |
| Search | Full-text search across titles, URLs, and descriptions |
| Tag Filtering | Filter links by one or multiple tags |
| Link Previews | Auto-fetch favicon and website screenshots |
| Personal Notes | Add notes and descriptions to each link |
| Theme Support | System-aware dark/light mode |
| Language Support | Toggle between English and Spanish |
| Import/Export | Data persists via local backend API |

---

## 🛠️ TECHNOLOGIES STACK

| Category | Library / Tool | Version |
|----------|----------------|---------|
| Desktop Framework | Electron | ^41.0.0 |
| Frontend UI | React | ^19.0.0 |
| Frontend Language | TypeScript | ^6.0.0 |
| Frontend Build | react-scripts | ^5.0.0 |
| Frontend Styling | styled-components | ^6.0.0 |
| Frontend Icons | react-icons | ^5.0.0 |
| Routing | react-router-dom | ^7.0.0 |
| Backend Framework | Express | ^4.18.0 |
| Backend Language | Node.js | ^22.0.0 |
| Desktop Builder | electron-builder | ^24.0.0 |

---

## 🚀 INSTALLATION

### Prerequisites

- Node.js >= 18
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/ismaelmarot/LinkIO.git
cd LinkIO
```

### 2. Install dependencies

```bash
npm install
cd frontend && npm install
```

### 3. Run development mode

```bash
# Terminal 1: Start backend
cd backend && npm start

# Terminal 2: Start frontend
cd frontend && npm start

# Or run with Electron
npm run dev
```

### 4. Build desktop application

```bash
# Build for current platform
npm run dist

# Build for macOS
npm run dist:mac

# Build for Windows
npm run dist:win
```

---

## ⚙️ USAGE

### Getting Started

1. **Launch the backend** by running `npm start` in the backend folder
2. **Launch the frontend** by running `npm start` in the frontend folder
3. **Start adding links** by clicking the "Add" button
4. **Organize with tags** by creating custom tags for your links
5. **Search and filter** using the search bar and tag filters
6. **Change language** in Settings to switch between English and Spanish

### Features Overview

- **Home**: View all your saved links in a card grid layout
- **Add Link**: Add new links with auto-fetched previews
- **Link Detail**: View full link information with edit/delete options
- **Settings**: Configure appearance (light/dark/system) and language

---

## 📂 PROJECT STRUCTURE

```
LINKIO
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── App.tsx        # Root component
│   │   │   └── i18n.tsx       # Internationalization
│   │   ├── components/        # Reusable UI components
│   │   │   ├── HomeView/
│   │   │   ├── AddView/
│   │   │   ├── EditLinkView/
│   │   │   ├── LinkDetailView/
│   │   │   ├── ConfigView/
│   │   │   ├── LinkCard/
│   │   │   ├── SearchBar/
│   │   │   ├── BottomNav/
│   │   │   └── Header/
│   │   ├── hooks/             # Custom React hooks
│   │   ├── constants/          # Icons and constants
│   │   ├── interface/          # TypeScript interfaces
│   │   └── styles/             # Global styles and themes
│   ├── public/
│   │   └── Linkio-icon.png    # App icon
│   └── package.json
│
├── backend/                     # Express backend
│   ├── routes/                 # API routes
│   │   └── links.routes.js    # Links CRUD
│   ├── db/
│   │   └── database.js        # SQLite connection
│   ├── screenshot.js           # Screenshot service
│   └── index.js               # Express app entry
│
├── electron/                    # Electron main process
│   ├── main.js                # Main process
│   └── preload.js             # Preload script
│
├── dist/                        # Built applications
├── README.md
├── LICENSE
└── package.json
```

---

## 🔌 API ENDPOINTS

### Links

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/links | List all links |
| POST | /api/links | Create new link |
| GET | /api/links/:id | Get link by ID |
| PUT | /api/links/:id | Update link |
| DELETE | /api/links/:id | Delete link |
| GET | /api/links/screenshot | Get screenshot for URL |

---

## 💾 DATABASE SCHEMA

### Link

```json
{
  "id": "INTEGER PRIMARY KEY",
  "url": "TEXT",
  "title": "TEXT",
  "subtitle": "TEXT",
  "description": "TEXT",
  "note": "TEXT",
  "imageUrl": "TEXT",
  "iconUrl": "TEXT",
  "tags": "TEXT (JSON array)",
  "createdAt": "DATETIME",
  "updatedAt": "DATETIME"
}
```

---

## 🖥️ DESKTOP APP

### Downloads

| Platform | File | Status |
|----------|------|--------|
| macOS | LinkIO-1.0.0.dmg | Available |
| Windows | LinkIO Setup 1.0.0.exe | Available |

### Building from Source

```bash
# Install dependencies
npm install

# Build for macOS
npm run dist:mac

# Build for Windows
npm run dist:win

# Build for current platform
npm run dist
```

The built installers will be located in the `dist/` directory.

---

## 📄 LICENSE

This project is licensed under the MIT License - see the [LICENSE](/ismaelmarot/LinkIO/blob/main/LICENSE) file for details.

---

## 📬 CONTACT

Open to collaboration, feedback, and new opportunities.

[![GitHub](https://img.shields.io/badge/GitHub-ismaelmarot-181717?style=for-the-badge&logo=github)](https://github.com/ismaelmarot)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ismael--marot-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ismael-marot)
[![Portfolio](https://img.shields.io/badge/Portfolio-ismaelmarot-FF7139?style=for-the-badge&logo=google-chrome)](https://ismaelmarot.github.io)