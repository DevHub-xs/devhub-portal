# DevHub Portal

An Angular 17+ Identity Provider (IDP) application built with standalone components, Tailwind CSS, and Angular Material.

## Features

- **Angular 17+ with Standalone Components**: Modern Angular architecture without NgModules
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Angular Material**: Material Design components for Angular
- **Lazy Loading**: Route-based code splitting for optimal performance
- **Feature-based Architecture**: Organized folder structure with core, shared, and feature modules
- **Responsive Design**: Mobile-first responsive layouts
- **Authentication Pages**: Login and Register pages with form validation
- **Dashboard Layout**: Modern dashboard with sidebar navigation
- **User Profile**: Comprehensive user profile management

## Project Structure

```
src/
├── app/
│   ├── core/                    # Core functionality
│   │   ├── guards/              # Route guards
│   │   ├── interceptors/        # HTTP interceptors
│   │   └── services/            # Core services
│   ├── shared/                  # Shared resources
│   │   ├── components/          # Reusable components (sidebar, etc.)
│   │   ├── directives/          # Custom directives
│   │   └── pipes/               # Custom pipes
│   ├── features/                # Feature modules
│   │   ├── auth/                # Authentication (login, register)
│   │   ├── dashboard/           # Dashboard with sidebar
│   │   ├── home/                # Landing page
│   │   └── profile/             # User profile
│   ├── app.component.ts         # Root component
│   ├── app.routes.ts            # Application routes
│   └── app.config.ts            # Application configuration
└── ...
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/DevHub-xs/devhub-portal.git
cd devhub-portal
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

Run unit tests:
```bash
npm test
```

Run end-to-end tests:
```bash
npm run e2e
```

## Routes

- `/home` - Landing page with application overview
- `/auth/login` - User login page
- `/auth/register` - User registration page
- `/dashboard` - Main dashboard with sidebar navigation
- `/profile` - User profile management

## Technologies Used

- **Angular 17+**: Progressive web application framework
- **TypeScript**: Typed superset of JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Angular Material**: Material Design component library
- **RxJS**: Reactive programming library
- **SCSS**: CSS preprocessor

## License

This project is licensed under the MIT License.
