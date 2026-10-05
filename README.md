# Developer Portfolio

A full-stack developer portfolio and custom admin CMS built to showcase my projects, technical skills, experience, and development process.

The portfolio is designed as both a professional portfolio and a full-stack application demonstrating frontend development, backend architecture, database design, authentication, API development, media management, and deployment.

## Developer

**Eli Rodriguez**  
Full-Stack Web Developer

---

## Project Goals

The portfolio has three primary goals:

1. Introduce me as a developer.
2. Demonstrate my skills through real applications and case studies.
3. Provide recruiters, employers, and potential clients with easy access to my work, résumé, GitHub, live projects, and contact information.

The guiding principle of the project is:

> Show what I can build rather than simply listing what I know.

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS
- React Router
- ESLint

### Backend

- Node.js
- Express
- REST API

### Database

- PostgreSQL

### Authentication

- JWT
- bcrypt

### Media

- Cloudinary

### Development Tools

- Git
- GitHub
- npm
- nodemon

---

## Application Architecture

The project uses a monorepo structure:

```text
my-portfolio/
├── client/
├── server/
├── README.md
└── .gitignore
```

### Client

The `client` directory contains the React application.

The public portfolio will be a single-page scrolling experience containing:

- Hero
- About
- Skills
- Projects
- Resume
- Contact
- Footer

Navigation will use smooth scrolling between sections rather than separate public pages.

Project case studies will open in modal overlays so visitors can explore projects without leaving the main portfolio page.

The admin interface will use protected React Router routes.

### Server

The `server` directory contains the Express REST API.

The backend uses CommonJS and separates the Express application from the server startup process.

Planned backend structure:

```text
server/
├── controllers/
├── db/
├── middleware/
├── routes/
├── services/
├── utils/
├── app.js
└── server.js
```

The backend will manage:

- Admin authentication
- Projects
- Technologies
- Project images
- Project/technology relationships
- Contact messages
- Cloudinary media integration

---

## Database Design

The PostgreSQL database will contain six primary tables:

- `admins`
- `projects`
- `technologies`
- `project_technologies`
- `project_images`
- `contact_messages`

Database implementation begins in Phase 2.

---

## Planned REST API

The application will use a REST API with `/api` as the primary API prefix.

### Authentication

```text
POST /api/auth/login
GET  /api/auth/me
```

### Public Projects

```text
GET /api/projects
GET /api/projects/:slug
```

### Public Technologies

```text
GET /api/technologies
```

### Contact

```text
POST /api/contact
```

### Admin Projects

```text
GET    /api/admin/projects
GET    /api/admin/projects/:id
POST   /api/admin/projects
PATCH  /api/admin/projects/:id
DELETE /api/admin/projects/:id

PUT    /api/admin/projects/:id/technologies
```

### Admin Project Images

```text
POST   /api/admin/projects/:id/images
PATCH  /api/admin/projects/:id/images/:imageId
DELETE /api/admin/projects/:id/images/:imageId
```

### Admin Technologies

```text
GET    /api/admin/technologies
POST   /api/admin/technologies
PATCH  /api/admin/technologies/:id
DELETE /api/admin/technologies/:id
```

### Admin Contact Messages

```text
GET    /api/admin/messages
GET    /api/admin/messages/:id
PATCH  /api/admin/messages/:id
DELETE /api/admin/messages/:id
```

---

## Frontend Architecture

The React application will be organized into public, admin, and shared components.

Planned structure:

```text
client/src/
├── assets/
├── components/
│   ├── public/
│   ├── admin/
│   └── shared/
├── context/
├── hooks/
├── pages/
│   └── admin/
├── services/
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

### Public Portfolio

The public portfolio will remain primarily on:

```text
/
```

Planned section IDs:

```text
#home
#about
#skills
#projects
#resume
#contact
```

The navbar will eventually include:

- Sticky navigation
- Smooth scrolling
- Active section highlighting
- Responsive mobile navigation

### Project Case Studies

Project cards will open large modal case studies rather than navigating visitors away from the portfolio.

Case studies can contain:

- Project title
- Cover image
- Overview
- Problem
- Solution
- Features
- Challenges
- Lessons learned
- Technology stack
- Screenshot gallery
- GitHub link
- Live application link
- Project status
- Project type

### Admin Routes

Planned protected admin routes include:

```text
/admin/login
/admin
/admin/projects
/admin/projects/new
/admin/projects/:id/edit
/admin/technologies
/admin/messages
/admin/messages/:id
```

---

## Featured Projects

The initial portfolio will showcase the following projects.

### VinoVault 2.0

Full-stack wine collection and tasting journal application built with React, Django REST Framework, and PostgreSQL.

### You Party – I Pour

Client-oriented mobile bartending service application built with React, Node.js, Express, and PostgreSQL.

### JavaScript Snake Game

Browser-based Snake game built with vanilla JavaScript, HTML, and CSS.

The game will eventually be playable directly from the portfolio while preserving the original vanilla JavaScript implementation.

### Developer Portfolio

This portfolio will itself become a case study demonstrating:

- React architecture
- Express API development
- PostgreSQL database design
- Authentication
- CMS development
- Cloudinary integration
- Responsive design
- Accessibility
- Testing
- Deployment

---

## Admin CMS

The application will include a custom protected admin CMS.

The admin will eventually be able to:

- Sign in securely
- View an admin dashboard
- Create projects
- Edit projects
- Delete projects
- Publish and unpublish projects
- Feature and unfeature projects
- Reorder projects
- Manage project type and status
- Manage project case-study content
- Manage GitHub and live application URLs
- Manage technologies
- Associate technologies with projects
- Upload project images
- Delete project images
- Select project cover images
- Manage image captions
- Manage image alt text
- Reorder project images
- View contact messages
- Mark messages read or unread
- Delete messages
- Log out

There will be no public registration system. Authentication exists specifically for the portfolio administrator.

---

## Security Goals

The application will eventually include:

- Password hashing with bcrypt
- JWT authentication
- Protected admin endpoints
- Environment variables
- Parameterized PostgreSQL queries
- CORS configuration
- Request validation
- Request size limits
- Rate limiting where appropriate
- Secure error responses
- Contact form spam protection

Sensitive environment files will never be committed to Git.

---

## Visual Direction

The portfolio will use a dark-first visual design with a professional, modern, and slightly technical appearance.

### General Style

- Dark charcoal/navy backgrounds
- Warm amber/gold accent color
- Warm white primary text
- Muted gray secondary text
- Clean typography
- Strong spacing
- Responsive layouts
- Minimal and intentional animation

The design should feel professional and personal without becoming overly corporate or resembling a neon hacker-style portfolio.

### Interaction

Planned interactions include:

- Subtle section entrance animations
- Project card hover effects
- Sticky navbar behavior
- Active section highlighting
- Modal fade/scale transitions
- Responsive mobile navigation

Animations should remain restrained and should never distract from the project content.

---

## Development Roadmap

- [x] Phase 0 — Planning & Architecture
- [x] Phase 1 — Repository & Project Setup
- [x] Phase 2 — PostgreSQL Database
- [ ] Phase 3 — Express Foundation
- [ ] Phase 4 — Admin Authentication
- [ ] Phase 5 — Technologies API
- [ ] Phase 6 — Projects API
- [ ] Phase 7 — Project Images & Cloudinary
- [ ] Phase 8 — Contact Messages API
- [ ] Phase 9 — React Foundation
- [ ] Phase 10 — Public Portfolio Shell
- [ ] Phase 11 — Skills & Projects Integration
- [ ] Phase 12 — Project Case Study Modal
- [ ] Phase 13 — Resume & Contact
- [ ] Phase 14 — Admin CMS Foundation
- [ ] Phase 15 — Project Management CMS
- [ ] Phase 16 — Technologies, Images & Messages CMS
- [ ] Phase 17 — Snake Game Integration
- [ ] Phase 18 — Testing, Polish & Deployment

---

## Development Workflow

Each development phase follows the same process:

```text
BUILD
  ↓
TEST
  ↓
FIX
  ↓
CONFIRM
  ↓
UPDATE README
  ↓
GIT STATUS
  ↓
GIT ADD
  ↓
GIT COMMIT
  ↓
GIT PUSH
  ↓
NEXT PHASE
```

A phase is not considered complete until its work has been tested, documented, committed, and pushed.

---

# Phase 1 — Repository & Project Setup ✅

Phase 1 established the initial development environment and application foundation.

## Repository Setup

Completed:

- [x] Created the `my-portfolio` project directory
- [x] Initialized Git
- [x] Confirmed the `main` branch
- [x] Added repository-wide `.gitignore`
- [x] Created initial project documentation

Current root structure:

```text
my-portfolio/
├── client/
├── server/
├── README.md
└── .gitignore
```

---

## React Client Setup

Completed:

- [x] Created React application with Vite
- [x] Selected JavaScript
- [x] Selected ESLint
- [x] Installed client dependencies
- [x] Removed default Vite starter assets
- [x] Removed default Vite starter styling
- [x] Created minimal portfolio starter content
- [x] Created initial React directory structure
- [x] Verified ESLint
- [x] Verified Vite development server
- [x] Verified browser rendering
- [x] Verified production build

Current starter page displays:

```text
Eli Rodriguez
Full-Stack Web Developer
```

### Current React Structure

```text
client/src/
├── assets/
├── components/
│   ├── admin/
│   ├── public/
│   └── shared/
├── context/
├── hooks/
├── pages/
│   └── admin/
├── services/
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

Individual components will be created during their appropriate development phases rather than creating unused placeholder files.

---

## Express Server Setup

Completed:

- [x] Initialized Node project
- [x] Installed Express
- [x] Installed nodemon
- [x] Installed dotenv
- [x] Added development start script
- [x] Added production start script
- [x] Created `app.js`
- [x] Created `server.js`
- [x] Separated Express configuration from server startup
- [x] Added JSON request parsing
- [x] Added initial API endpoint
- [x] Created backend directory structure
- [x] Added environment configuration
- [x] Verified development server
- [x] Verified production start command
- [x] Verified API response in browser

Current backend structure:

```text
server/
├── controllers/
├── db/
├── middleware/
├── routes/
├── services/
├── utils/
├── app.js
├── server.js
├── .env.example
├── package.json
└── package-lock.json
```

Empty backend directories currently use `.gitkeep` files so the planned architecture can be tracked by Git.

---

## Current Development Ports

```text
React / Vite: http://localhost:5173
Express API:  http://localhost:3000
```

Because development is being performed through WSL, Vite currently needs to be started with:

```bash
npm run dev -- --host
```

to expose the development server to the Windows browser.

---

## Current API

### GET `/`

The initial Express endpoint verifies that the backend server is operational.

Response:

```json
{
  "message": "Developer Portfolio API"
}
```

A dedicated `/api/health` endpoint will be introduced when the Express API foundation is built in Phase 3.

---

## Environment Variables

Current server environment configuration:

```env
PORT=3000
```

The development environment file is located at:

```text
server/.env
```

An example environment file is tracked at:

```text
server/.env.example
```

The real `.env` file is excluded from Git.

Future environment configuration will include values for:

```text
DATABASE_URL
JWT_SECRET
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
CLIENT_URL
```

These will be introduced only when their corresponding application features are implemented.

---

## Git Ignore Verification

The repository was verified to ignore:

```text
server/.env
server/node_modules/
client/node_modules/
client/dist/
```

The safe environment template remains trackable:

```text
server/.env.example
```

---

## Phase 1 Testing

All Phase 1 verification checks passed.

```text
React ESLint        ✅ PASS
React build         ✅ PASS
React dev server    ✅ PASS
Browser rendering   ✅ PASS
Express dev server  ✅ PASS
Express npm start   ✅ PASS
Express API         ✅ PASS
```

The React production build completed successfully.

The Express API was successfully tested using both:

```bash
npm run dev
```

and:

```bash
npm start
```

---

## Dependency Audit Note

During Phase 1, `npm audit` reported three high-severity advisories through the nodemon development dependency chain:

```text
nodemon
  ↓
chokidar
  ↓
braces
```

The suggested forced remediation would downgrade nodemon and introduce a breaking dependency change.

For that reason:

```bash
npm audit fix --force
```

was not applied.

The advisory currently affects the development tooling dependency chain rather than the production Express runtime and can be reevaluated as dependencies are updated.

---

## Phase 1 Result

**Phase 1 — Repository & Project Setup is complete.**

The project now has:

- A functioning React/Vite frontend
- A functioning Node/Express backend
- ESLint configuration
- Development and production server commands
- Environment variable support
- Protected environment files
- Initial frontend architecture
- Initial backend architecture
- Successful React production build
- Successful Express API test
- Git repository foundation
- Project documentation

---

## Current Status

### Phase 0 — Planning & Architecture

**Complete ✅**

### Phase 1 — Repository & Project Setup

**Complete ✅**

### Phase 2 — PostgreSQL Database

**Next**

Phase 2 will introduce the PostgreSQL database and implement the six-table database schema defined during planning.



## Phase 2 — PostgreSQL Database ✅

Phase 2 established the PostgreSQL data layer for the developer portfolio.

### Database Setup

A dedicated PostgreSQL database and application user were created:

- Database: `my_portfolio`
- Application user: `my_portfolio_user`
- Database connection is configured through the `DATABASE_URL` environment variable.
- The Node.js backend connects to PostgreSQL using the `pg` package and a shared connection pool.

### Database Connection

The backend database connection is managed through:

```text
server/db/pool.js