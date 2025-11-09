# DevHub Portal

> Modern Angular 17+ Developer Portal with authentication, dashboard, and profile management.

[![Angular](https://img.shields.io/badge/Angular-17.3-red?logo=angular)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?logo=tailwindcss)](https://tailwindcss.com)

**Professional Internal Developer Portal frontend built with Angular standalone components, Tailwind CSS, and Angular Material.**

---

## ✨ Features

- 🚀 **Angular 17+** with standalone components architecture
- 🎨 **Tailwind CSS** for modern, responsive UI
- 🔐 **JWT Authentication** with login/register flows
- 📊 **Dashboard** with sidebar navigation
- 👤 **User Profile** management
- ⚡ **Lazy Loading** for optimal performance
- 🎯 **Feature-based** modular architecture

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Visit `http://localhost:4200`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/app/
├── core/          # Guards, interceptors, core services
├── shared/        # Reusable components, directives, pipes
└── features/      # Feature modules (auth, dashboard, profile)
```

## 🛠️ Tech Stack

- **Framework:** Angular 17+ (Standalone Components)
- **Styling:** Tailwind CSS + Angular Material
- **Language:** TypeScript 5.x
- **State:** RxJS
- **HTTP:** HttpClient with interceptors

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server at `localhost:4200` |
| `npm run build` | Production build |
| `npm test` | Run unit tests |
| `npm run watch` | Build with watch mode |

## 🔐 Authentication

Integrated JWT authentication with:
- Login/Register pages
- Route guards
- HTTP interceptors
- Token management

## 📄 License

**Copyright © 2024-2025 Pedro Accarini. All Rights Reserved.**

This is proprietary software. See [LICENSE](./LICENSE) for details.

## 👤 Author

**Pedro Accarini**
- Email: paccarini.bar@outlook.com

---

Built with ❤️ using Angular
