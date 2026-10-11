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
- [x] Phase 3 — Express Foundation
- [x] Phase 4 — Admin Authentication
- [x] Phase 5 — Technologies API
- [x] Phase 6 — Projects API
- [x] Phase 7 — Project Images & Cloudinary
- [x] Phase 8 — Contact Messages API
- [x] Phase 9 — React Foundation
- [x] Phase 10 — Public Portfolio Shell
- [x] Phase 11 — Skills & Projects Integration
- [x] Phase 12 — Project Case Study Modal
- [x] Phase 13 — Resume & Contact
- [x] Phase 14 — Admin CMS Foundation
- [x] Phase 15 — Project Management CMS
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

**Complete ✅**

### Phase 3 — Express Foundation

**Complete ✅**

### Phase 4 — Admin Authentication

**Complete ✅**

### Phase 5 — Technologies API

**Complete ✅**

### Phase 6 — Projects API

**Complete ✅**

### Phase 7 — Project Images & Cloudinary

**Complete ✅**

### Phase 8 — Contact Messages API

**Complete ✅**

### Phase 9 — React Foundation

**Complete ✅**

### Phase 10 — Public Portfolio Shell

**Complete ✅**

### Phase 11 — Skills & Projects Integration

**Complete ✅**

### Phase 12 — Project Case Study Modal

**Complete ✅**

### Phase 13 — Resume & Contact

**Complete ✅**

### Phase 14 — Admin CMS Foundation

**Complete ✅**

### Phase 15 — Project Management CMS

**Complete ✅**

The Admin CMS now includes complete project-management functionality backed by the protected Express API and PostgreSQL database.

The application now includes:

- Protected administrator project listing
- Create project workflow
- Edit project workflow
- Delete project workflow with confirmation
- Project detail loading by ID
- Project title and slug management
- Short description management
- Complete case-study content management
- Project type management
- Controlled project status selection
- GitHub URL management
- Live URL management
- Display order management
- Publish / unpublish controls
- Feature / unfeature controls
- Technology assignment and reassignment
- Existing technology selections restored during editing
- Project changes persisted to PostgreSQL
- Responsive project-management interface
- Responsive create/edit project form
- Desktop CMS testing
- Mobile CMS testing
- Full CRUD workflow testing with a temporary project
- Successful ESLint validation
- Successful Vite production build validation

Project status is managed through the following controlled options:

- In Development
- Completed
- Maintained
- Archived

Project status, public visibility, and portfolio emphasis remain separate concerns:

- `status` describes the development state of the project
- `published` determines whether the project is publicly visible
- `featured` determines whether the project receives featured emphasis

The protected project-detail endpoint now also returns the technologies assigned to a project, allowing the Admin CMS to restore existing technology selections when editing.

**Next:** Phase 16 — Technologies, Images & Messages CMS


Current backend capabilities include:

- PostgreSQL database architecture
- Six-table relational schema
- Seeded technology data
- PostgreSQL connection pooling
- Express REST API foundation
- Central `/api` router
- CORS configuration
- HTTP request logging
- JSON request parsing
- API and database health checks
- JSON 404 handling
- Centralized Express error handling
- Secure administrator creation
- bcrypt password hashing and verification
- JWT authentication
- Protected-route middleware
- Authenticated administrator lookup
- Public technologies API
- Protected administrator technologies API
- Technology creation
- Partial technology updates
- Technology deletion
- Technology validation
- PostgreSQL duplicate-name conflict handling
- Public projects API
- Published-project filtering
- Public project lookup by slug
- Protected administrator projects API
- Project creation
- Partial project updates
- Project deletion
- Project publishing and unpublishing
- Featured-project management
- Project display ordering
- Required project-field validation
- PostgreSQL duplicate-slug conflict handling
- Project-to-technology relationship management
- Transaction-safe technology assignment and replacement
- Public contact message submission
- Contact input normalization and validation
- Contact email format validation
- Contact message persistence in PostgreSQL
- Administrator contact message retrieval
- Individual administrator message retrieval
- Read/unread message management
- Administrator message deletion
- JWT-protected message management

Current API endpoints:

```text
GET  /api
GET  /api/health

POST /api/auth/login
GET  /api/auth/me

GET  /api/technologies

GET    /api/admin/technologies
POST   /api/admin/technologies
PATCH  /api/admin/technologies/:id
DELETE /api/admin/technologies/:id

GET /api/projects
GET /api/projects/:slug

GET    /api/admin/projects
GET    /api/admin/projects/:id
POST   /api/admin/projects
PATCH  /api/admin/projects/:id
DELETE /api/admin/projects/:id
PUT    /api/admin/projects/:id/technologies

POST /api/contact

GET    /api/admin/messages
GET    /api/admin/messages/:id
PATCH  /api/admin/messages/:id
DELETE /api/admin/messages/:id
```

---

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
```

The connection pool uses the private `DATABASE_URL` stored in:

```text
server/.env
```

A safe placeholder is documented in:

```text
server/.env.example
```

The real database credentials are never committed to Git.

### Database Schema

The database schema is defined in:

```text
server/db/schema.sql
```

The portfolio uses six primary tables:

```text
admins
projects
technologies
project_technologies
project_images
contact_messages
```

### `admins`

Stores administrator accounts used to access the protected portfolio CMS.

Important fields include:

```text
id
username
email
password_hash
created_at
updated_at
```

Both `username` and `email` are unique.

Only password hashes are stored in the database.

### `projects`

Stores portfolio project and case-study content.

Important fields include:

```text
id
title
slug
short_description
description
problem
solution
features
challenges
lessons_learned
project_type
status
github_url
live_url
featured
published
display_order
created_at
updated_at
```

The `slug` field is unique and will support public project lookup.

### `technologies`

Stores technologies displayed throughout the portfolio.

Important fields include:

```text
id
name
category
icon_url
display_order
created_at
```

Technology names are unique.

### `project_technologies`

Provides the many-to-many relationship between projects and technologies.

```text
project_id
technology_id
```

The two columns form a composite primary key.

Both foreign keys use `ON DELETE CASCADE`.

### `project_images`

Stores metadata for project screenshots and other project media.

Important fields include:

```text
id
project_id
image_url
public_id
alt_text
caption
is_cover
display_order
created_at
```

Cloudinary will store the actual media files in a later phase.

PostgreSQL stores the associated URL, Cloudinary public ID, accessibility text, caption, cover-image state, and display order.

Deleting a project automatically removes its associated image records through `ON DELETE CASCADE`.

### `contact_messages`

Stores messages submitted through the public portfolio contact form.

Important fields include:

```text
id
name
email
subject
message
is_read
created_at
```

Messages default to unread.

### Technology Seed Data

Initial technology data is stored in:

```text
server/db/seed.sql
```

The initial technology catalog contains:

```text
Languages
- JavaScript
- Python

Frontend
- React
- HTML
- CSS

Backend
- Node.js
- Express
- Django
- Django REST Framework

Database
- PostgreSQL

Tools
- Git
- GitHub
```

The seed uses:

```sql
ON CONFLICT (name) DO NOTHING;
```

This allows the seed file to be run repeatedly without creating duplicate technology records.

A total of 12 initial technologies were successfully seeded.

### Relational Testing

Phase 2 database testing verified:

- All six tables were created successfully
- PostgreSQL connectivity through Node.js works
- 12 technology records were seeded
- Re-running the technology seed does not create duplicates
- Projects can be associated with technologies
- Duplicate project/technology relationships are rejected
- Project images can reference projects
- Deleting a project cascades to related technology relationships
- Deleting a project cascades to related image records

Temporary relational test records were removed after testing.

At the end of Phase 2:

```text
projects               0
project_images         0
project_technologies   0
technologies          12
```

### Phase 2 Result

**Phase 2 — PostgreSQL Database is complete.**

The application now has a normalized relational database capable of supporting:

- Administrator authentication
- Portfolio projects
- Technology categorization
- Project technology stacks
- Project image galleries
- Contact messages

This database foundation is used by the Express API beginning in Phase 3.

---

## Phase 3 — Express Foundation ✅

Phase 3 established the shared Express infrastructure that supports the portfolio REST API.

### Express Application Structure

The backend separates server startup, application configuration, routing, controllers, middleware, and database access.

The Phase 3 backend structure includes:

```text
server/
├── controllers/
│   └── healthController.js
├── db/
│   ├── pool.js
│   ├── schema.sql
│   └── seed.sql
├── middleware/
│   ├── errorHandler.js
│   └── notFound.js
├── routes/
│   ├── health.js
│   └── index.js
├── app.js
└── server.js
```

Authentication-specific files are introduced in Phase 4.

### Server Entry Point

`server/server.js`:

- Loads environment variables using `dotenv`
- Imports the configured Express application
- Uses the `PORT` environment variable
- Falls back to port `3000`
- Listens on `0.0.0.0`

Binding Express to:

```text
0.0.0.0
```

allows the backend running inside WSL to be reached from the Windows browser during local development.

### Express Application

`server/app.js` configures shared middleware and API routing.

The application uses:

- `cors`
- `morgan`
- `express.json()`
- Central `/api` routing
- JSON 404 middleware
- Centralized error handling

### API Base Route

The central API router is mounted at:

```text
/api
```

Request:

```text
GET /api
```

Response:

```json
{
  "message": "Developer Portfolio API"
}
```

### CORS

CORS is configured using:

```text
CLIENT_URL
```

During local development:

```text
CLIENT_URL=http://localhost:5173
```

This allows the React frontend to communicate with the Express API while preventing unrestricted browser origins.

### HTTP Logging

Morgan provides HTTP request logging during development.

Example requests appear in the server terminal with information such as:

```text
GET /api/health 200
POST /api/auth/login 200
```

### JSON Request Parsing

Express uses:

```js
express.json()
```

to parse incoming JSON request bodies.

This supports endpoints such as administrator login and future CMS operations.

### Health Endpoint

The backend exposes:

```text
GET /api/health
```

The health controller performs a PostgreSQL query:

```sql
SELECT 1
```

A successful response is:

```json
{
  "status": "ok",
  "api": "online",
  "database": "connected"
}
```

This verifies both the Express API and PostgreSQL connection.

### JSON 404 Handling

Unknown routes return a consistent JSON response:

```json
{
  "error": "Route not found."
}
```

This replaces Express's default HTML 404 response.

The behavior was verified for:

```text
GET /
GET /api/does-not-exist
```

### Centralized Error Handling

The application includes:

```text
server/middleware/errorHandler.js
```

Unhandled controller errors can be passed to the middleware using:

```js
next(error);
```

The middleware then returns a consistent JSON error response.

A temporary test endpoint was used during Phase 3 to verify the `500` error path and was removed after testing.

### Frontend-to-Backend Integration

A temporary React integration test verified the complete development path:

```text
React
  ↓
HTTP request
  ↓
Express
  ↓
Health controller
  ↓
PostgreSQL
  ↓
JSON response
  ↓
React
```

The React application successfully displayed:

```text
API: online | Database: connected
```

after fetching the Express health endpoint.

The temporary frontend integration code was removed after verification.

### WSL Development Networking

During development, Express initially worked inside WSL but could not be reached through the Windows browser.

The server was updated to listen on:

```text
0.0.0.0
```

This successfully exposed the Express development server to the Windows host.

### Environment Variables

By the end of Phase 3, the backend uses:

```text
PORT
DATABASE_URL
CLIENT_URL
```

Private values are stored in:

```text
server/.env
```

Safe placeholders are documented in:

```text
server/.env.example
```

### Phase 3 Verification

Phase 3 testing confirmed:

- Express development server starts successfully
- Express production server starts successfully
- CORS headers are returned correctly
- Morgan logs incoming requests
- JSON request parsing is configured
- `GET /api` returns the API response
- `GET /api/health` returns `200 OK`
- PostgreSQL health query succeeds
- Unknown routes return JSON `404` responses
- Centralized `500` error handling works
- React can communicate with Express
- Express can communicate with PostgreSQL
- Windows browser can reach the WSL Express server
- Temporary test routes were removed
- Temporary React integration code was removed
- Client ESLint passes
- Client production build succeeds

### Phase 3 Result

**Phase 3 — Express Foundation is complete.**

The portfolio now has a stable Express API foundation with routing, middleware, database connectivity, health monitoring, error handling, and frontend communication.

This foundation is used by the authentication system introduced in Phase 4.

---

## Phase 4 — Admin Authentication ✅

Phase 4 adds secure administrator authentication for the portfolio CMS.

There is no public registration endpoint.

Administrator accounts are created locally through a setup script and stored in PostgreSQL using bcrypt password hashes.

### Authentication Dependencies

The Express server uses:

```text
bcrypt
jsonwebtoken
```

`bcrypt` handles password hashing and password verification.

`jsonwebtoken` handles JSON Web Token creation and verification.

### Environment Configuration

Authentication requires a private JWT signing secret:

```env
JWT_SECRET=replace_with_secure_random_secret
```

The real secret is stored only in:

```text
server/.env
```

The `.env` file is excluded from Git.

The safe placeholder is documented in:

```text
server/.env.example
```

No real JWT secret is stored in the repository.

### Initial Administrator Creation

The initial administrator is created using:

```text
server/scripts/createAdmin.js
```

The script:

- Requires a username and email
- Prompts locally for a password
- Requires a minimum password length
- Checks for an existing username or email
- Hashes the password using bcrypt
- Uses parameterized PostgreSQL queries
- Stores only the bcrypt password hash
- Returns only safe administrator information
- Rejects duplicate administrator accounts

Administrator credentials are not stored in:

```text
server/db/seed.sql
```

The initial administrator was successfully created. The setup script includes duplicate-account protection by checking for an existing username or email before insertion.

### Authentication Routes

The authentication router provides:

```text
POST /api/auth/login
GET  /api/auth/me
```

There is intentionally no public registration route.

### POST `/api/auth/login`

The login endpoint accepts administrator credentials.

Authentication flow:

```text
Username + password
        ↓
Find administrator in PostgreSQL
        ↓
bcrypt.compare()
        ↓
Credentials valid
        ↓
jwt.sign()
        ↓
JWT returned
```

A successful response has the following structure:

```json
{
  "token": "<jwt>",
  "admin": {
    "id": 1,
    "username": "<username>",
    "email": "<email>"
  }
}
```

The administrator password and `password_hash` are never returned.

Unknown usernames and incorrect passwords intentionally produce the same response:

```json
{
  "error": "Invalid username or password."
}
```

This prevents the authentication endpoint from revealing whether a particular administrator username exists.

JWTs currently expire after:

```text
1 hour
```

### JWT Verification Middleware

Protected routes use:

```text
server/middleware/verifyToken.js
```

Clients authenticate using:

```text
Authorization: Bearer <token>
```

The middleware:

1. Reads the `Authorization` header
2. Verifies the `Bearer` format
3. Extracts the JWT
4. Verifies the token using `JWT_SECRET`
5. Attaches the decoded JWT payload to `req.admin`
6. Passes control to the protected controller

Missing authentication returns:

```json
{
  "error": "Authentication required."
}
```

Invalid or expired JWTs return:

```json
{
  "error": "Invalid or expired token."
}
```

This middleware will be reused by future protected CMS endpoints.

### GET `/api/auth/me`

The `/api/auth/me` endpoint verifies the administrator's JWT and retrieves the current administrator record from PostgreSQL.

Flow:

```text
GET /api/auth/me
        ↓
Authorization: Bearer <token>
        ↓
verifyToken
        ↓
jwt.verify()
        ↓
req.admin.id
        ↓
PostgreSQL
        ↓
Current administrator
```

The database query returns only:

```text
id
username
email
created_at
updated_at
```

The password hash is never returned.

Querying PostgreSQL instead of returning only the JWT payload ensures the endpoint represents the current administrator record stored in the database.

### Phase 4 Verification

Authentication testing confirmed:

- Missing login credentials return `400 Bad Request`
- Empty passwords return `400 Bad Request`
- Unknown administrator usernames return `401 Unauthorized`
- Incorrect passwords return `401 Unauthorized`
- Unknown usernames and incorrect passwords use the same error response
- Correct credentials return `200 OK`
- bcrypt successfully verifies the stored password hash
- Successful login generates a signed JWT
- Login responses never expose `password_hash`
- Missing authorization headers return `401 Unauthorized`
- Empty Bearer tokens return `401 Unauthorized`
- Invalid JWTs return `401 Unauthorized`
- Valid JWTs successfully pass `verifyToken`
- Valid JWTs can access `/api/auth/me`
- `/api/auth/me` retrieves the administrator from PostgreSQL
- Protected responses never expose `password_hash`
- Initial administrator creation succeeds
- The administrator creation script checks for an existing username or email before inserting a new administrator

### Authentication Architecture

The completed authentication flow is:

```text
Admin credentials
      ↓
POST /api/auth/login
      ↓
PostgreSQL administrator lookup
      ↓
bcrypt.compare()
      ↓
JWT generation
      ↓
Bearer token
      ↓
verifyToken
      ↓
JWT verification
      ↓
PostgreSQL administrator lookup
      ↓
Protected administrator response
```

### Phase 4 Result

**Phase 4 — Admin Authentication is complete.**

The portfolio backend can now:

- Securely store administrator passwords
- Authenticate an administrator
- Issue signed JWTs
- Reject invalid credentials
- Protect private API routes
- Identify the currently authenticated administrator
- Safely retrieve administrator information from PostgreSQL

Future admin CMS endpoints can now use `verifyToken` to restrict access to authenticated administrators.

The backend is ready for:

**Phase 5 — Technologies API**

---

## Phase 5 — Technologies API

Phase 5 introduces the portfolio's technologies API.

Technologies represent the languages, frameworks, databases, and development tools displayed throughout the portfolio and associated with individual projects.

The API provides:

```text
Public technology access
        +
Protected administrator CRUD operations
```

The existing JWT authentication system from Phase 4 protects all administrator technology-management endpoints.

### Technology Routes

Public:

```text
GET /api/technologies
```

Protected administrator routes:

```text
GET    /api/admin/technologies
POST   /api/admin/technologies
PATCH  /api/admin/technologies/:id
DELETE /api/admin/technologies/:id
```

All `/api/admin/technologies` routes require:

```text
Authorization: Bearer <token>
```

### Public Technologies API

The public endpoint:

```text
GET /api/technologies
```

retrieves technologies from PostgreSQL.

The response includes:

```text
id
name
category
icon_url
display_order
created_at
```

Technologies are ordered using:

```sql
ORDER BY display_order ASC, name ASC
```

This endpoint will eventually provide technology data to the public Skills and Projects sections of the React portfolio.

The public endpoint does not require authentication.

### Administrator Technologies API

Administrator technology routes are handled through:

```text
server/routes/adminTechnologies.js
```

The router applies:

```js
router.use(verifyToken);
```

before the CRUD routes.

This means every route mounted under:

```text
/api/admin/technologies
```

requires a valid administrator JWT.

The protected flow is:

```text
Admin request
      ↓
/api/admin/technologies
      ↓
verifyToken
      ↓
Technology controller
      ↓
PostgreSQL
      ↓
JSON response
```

### GET `/api/admin/technologies`

Authenticated administrators can retrieve the technology collection through:

```text
GET /api/admin/technologies
```

Without a JWT, the endpoint returns:

```text
401 Unauthorized
```

With a valid JWT, the endpoint returns:

```text
200 OK
```

and the technology collection stored in PostgreSQL.

The public and administrator GET routes reuse the same technology retrieval controller because they currently return the same technology data.

### POST `/api/admin/technologies`

Authenticated administrators can create technologies using:

```text
POST /api/admin/technologies
```

A technology can contain:

```json
{
  "name": "Example Technology",
  "category": "Backend",
  "icon_url": null,
  "display_order": 5
}
```

The required fields are:

```text
name
category
```

If either required field is missing, the API returns:

```text
400 Bad Request
```

A successful insert returns:

```text
201 Created
```

Technology names are protected by the database `UNIQUE` constraint.

PostgreSQL unique-constraint violations use error code:

```text
23505
```

The controller translates this database error into:

```text
409 Conflict
```

with:

```json
{
  "error": "A technology with that name already exists."
}
```

This keeps PostgreSQL as the final authority for technology-name uniqueness while providing the client with a meaningful HTTP response.

### PATCH `/api/admin/technologies/:id`

Authenticated administrators can partially update a technology using:

```text
PATCH /api/admin/technologies/:id
```

Supported fields are:

```text
name
category
icon_url
display_order
```

At least one supported field must be supplied.

An empty update request returns:

```text
400 Bad Request
```

with:

```json
{
  "error": "At least one field is required."
}
```

The update query preserves fields that were not supplied in the request.

A successful partial update returns:

```text
200 OK
```

If the technology does not exist:

```text
404 Not Found
```

is returned.

Attempting to rename a technology to an existing technology name triggers the PostgreSQL unique constraint and returns:

```text
409 Conflict
```

### DELETE `/api/admin/technologies/:id`

Authenticated administrators can delete technologies using:

```text
DELETE /api/admin/technologies/:id
```

If the technology does not exist, the endpoint returns:

```text
404 Not Found
```

A successful deletion returns:

```text
200 OK
```

along with the deleted technology.

### Phase 5 Verification

Technology API testing confirmed:

- Public technology requests return `200 OK`
- The public endpoint returns all 12 seeded technologies
- Public technology access does not require authentication
- Administrator technology routes reject missing JWTs with `401 Unauthorized`
- Valid administrator JWTs can access protected technology routes
- Expired JWTs are rejected with `401 Unauthorized`
- Missing required create fields return `400 Bad Request`
- Valid technology creation returns `201 Created`
- New technologies are persisted to PostgreSQL
- Duplicate technology names return `409 Conflict`
- Empty PATCH requests return `400 Bad Request`
- Partial technology updates return `200 OK`
- Partial updates preserve fields that were not changed
- Updating a nonexistent technology returns `404 Not Found`
- Duplicate technology names during updates return `409 Conflict`
- Deleting a nonexistent technology returns `404 Not Found`
- Valid technology deletion returns `200 OK`
- Deleted technologies are removed from PostgreSQL
- Temporary CRUD test data was removed after testing
- The database returned to the original 12 seeded technologies
- `/api` continues to return `200 OK`
- `/api/health` continues to report both the API and PostgreSQL as operational

### Technologies API Architecture

The completed Phase 5 flow is:

```text
PUBLIC

React portfolio
      ↓
GET /api/technologies
      ↓
Technology controller
      ↓
PostgreSQL
      ↓
Technology collection


ADMIN

Administrator
      ↓
JWT
      ↓
/api/admin/technologies
      ↓
verifyToken
      ↓
Technology controller
      ↓
Parameterized SQL
      ↓
PostgreSQL
      ↓
CRUD response
```

### Phase 5 Result

**Phase 5 — Technologies API is complete.**

The portfolio backend can now:

- Publicly expose portfolio technologies
- Protect technology-management endpoints
- Create technologies
- Partially update technologies
- Delete technologies
- Validate required technology data
- Detect duplicate technology names
- Return appropriate HTTP status codes
- Persist technology changes to PostgreSQL
- Reuse the Phase 4 JWT middleware for CMS resources
- Server JavaScript syntax checks pass
- React client lint and production build pass


---

## Phase 6 — Projects API

Phase 6 introduces the portfolio's projects API.

Projects represent the portfolio case studies displayed to public visitors and managed through the protected administrator CMS.

The API provides:

```text
Public access to published projects
        +
Protected administrator CRUD operations
        +
Project-to-technology relationship management
```

The existing JWT authentication system protects all administrator project-management endpoints.

### Project Routes

Public:

```text
GET /api/projects
GET /api/projects/:slug
```

Protected administrator routes:

```text
GET    /api/admin/projects
GET    /api/admin/projects/:id
POST   /api/admin/projects
PATCH  /api/admin/projects/:id
DELETE /api/admin/projects/:id
PUT    /api/admin/projects/:id/technologies
```

All `/api/admin/projects` routes require:

```text
Authorization: Bearer <token>
```

### Public Projects API

The public projects collection:

```text
GET /api/projects
```

returns only projects where:

```text
published = TRUE
```

Projects are ordered using:

```sql
ORDER BY display_order ASC, created_at DESC
```

The public single-project endpoint:

```text
GET /api/projects/:slug
```

retrieves a published project using its unique slug.

Unpublished projects are intentionally hidden from both public project endpoints.

Attempting to retrieve an unpublished or nonexistent project through the public slug endpoint returns:

```text
404 Not Found
```

### Administrator Projects API

Administrator project routes are handled through:

```text
server/routes/adminProjects.js
```

The router applies the existing JWT authentication middleware so project-management operations require an authenticated administrator.

Unlike the public API, administrator project queries include both published and unpublished projects.

This allows project case studies to be created and edited as drafts before they become visible on the public portfolio.

### Project Creation

Administrators can create projects using:

```text
POST /api/admin/projects
```

Required fields are:

```text
title
slug
short_description
```

These requirements match the PostgreSQL `projects` table constraints.

Optional project data includes:

```text
description
problem
solution
features
challenges
lessons_learned
project_type
status
github_url
live_url
featured
published
display_order
```

Successful project creation returns:

```text
201 Created
```

Missing required fields return:

```text
400 Bad Request
```

Project slugs are unique.

Attempting to create another project with an existing slug returns:

```text
409 Conflict
```

### Project Updates

Administrators can partially update projects using:

```text
PATCH /api/admin/projects/:id
```

Only supplied project fields are modified.

Supported updates include project content, status, URLs, display order, featured state, and publication state.

An empty update returns:

```text
400 Bad Request
```

Updating a nonexistent project returns:

```text
404 Not Found
```

Attempting to update a project to a slug already used by another project returns:

```text
409 Conflict
```

The `updated_at` timestamp is refreshed whenever a project is successfully updated.

### Project Publishing

Projects can exist as unpublished drafts:

```text
published = false
```

Draft projects remain accessible to authenticated administrators but are excluded from the public API.

Changing a project to:

```text
published = true
```

immediately makes it available through:

```text
GET /api/projects
GET /api/projects/:slug
```

This provides the publication workflow needed by the future administrator CMS.

### Project Deletion

Administrators can delete projects using:

```text
DELETE /api/admin/projects/:id
```

Deleting a nonexistent project returns:

```text
404 Not Found
```

Successful deletion returns:

```text
200 OK
```

along with basic information about the deleted project.

The PostgreSQL schema uses cascading foreign keys so related project data can be safely removed when a project is deleted.

### Project Technologies

Projects and technologies use the existing many-to-many relationship:

```text
projects
    ↓
project_technologies
    ↓
technologies
```

Administrators can replace a project's complete technology set using:

```text
PUT /api/admin/projects/:id/technologies
```

The request body uses:

```json
{
  "technology_ids": [1, 3, 6]
}
```

`technology_ids` must be an array containing valid positive integer technology IDs.

Duplicate IDs are removed before database operations are performed.

The endpoint uses a PostgreSQL transaction to keep relationship updates consistent.

Before replacing relationships, the API verifies:

```text
The project exists
        +
Every requested technology exists
```

If a technology ID is invalid, the request returns:

```text
400 Bad Request
```

and existing project-technology relationships remain unchanged.

If the project does not exist, the request returns:

```text
404 Not Found
```

Sending:

```json
{
  "technology_ids": []
}
```

is valid and removes all technology associations from the project.

### Phase 6 Verification

Projects API testing confirmed:

- Public project collection requests return `200 OK`
- Only published projects are exposed publicly
- Unpublished projects remain hidden from the public collection
- Public slug lookup returns `404 Not Found` for unpublished projects
- Published projects can be retrieved by slug
- Administrator project routes reject missing JWTs with `401 Unauthorized`
- Valid administrator JWTs can access project-management routes
- Administrator queries include unpublished drafts
- Missing required create fields return `400 Bad Request`
- Valid project creation returns `201 Created`
- New projects are persisted to PostgreSQL
- Duplicate project slugs during creation return `409 Conflict`
- Empty PATCH requests return `400 Bad Request`
- Partial project updates return `200 OK`
- Project publication changes are immediately reflected by the public API
- Updating a nonexistent project returns `404 Not Found`
- Duplicate project slugs during updates return `409 Conflict`
- Deleting a nonexistent project returns `404 Not Found`
- Valid project deletion returns `200 OK`
- Deleted projects can no longer be retrieved
- Project technology assignment returns `200 OK`
- Technology assignments use replacement semantics
- Invalid technology IDs return `400 Bad Request`
- Failed technology assignment does not destroy existing relationships
- Assigning technologies to a nonexistent project returns `404 Not Found`
- An empty technology array successfully clears all project technologies
- Temporary Phase 6 test projects were removed after testing
- The projects table returned to its clean pre-test state
- Server JavaScript syntax checks pass
- React client ESLint passes
- React client production build passes

### Projects API Architecture

The completed Phase 6 flow is:

```text
PUBLIC

React portfolio
      ↓
GET /api/projects
GET /api/projects/:slug
      ↓
Project controller
      ↓
Published-project filtering
      ↓
PostgreSQL
      ↓
Public project data


ADMIN

Administrator
      ↓
JWT
      ↓
/api/admin/projects
      ↓
verifyToken
      ↓
Project controller
      ↓
Parameterized SQL
      ↓
PostgreSQL
      ↓
Project CRUD


PROJECT TECHNOLOGIES

Administrator
      ↓
JWT
      ↓
PUT /api/admin/projects/:id/technologies
      ↓
Validate project
      ↓
Validate technology IDs
      ↓
PostgreSQL transaction
      ↓
project_technologies
      ↓
Updated technology set
```

### Phase 6 Result

**Phase 6 — Projects API is complete.**

The portfolio backend can now:

- Publicly expose published portfolio projects
- Keep draft projects private
- Retrieve public projects by slug
- Protect project-management endpoints
- Create portfolio projects
- Partially update project case studies
- Publish and unpublish projects
- Feature projects
- Control project display order
- Delete projects
- Validate required project data
- Detect duplicate project slugs
- Associate technologies with projects
- Replace project technology sets transactionally
- Safely reject invalid project-technology relationships
- Return appropriate HTTP status codes
- Persist project changes to PostgreSQL
- Reuse the existing JWT middleware for project CMS resources
- Pass server JavaScript syntax verification
- Pass React ESLint verification
- Pass the React production build

The backend is ready for:

---

## Phase 7 — Project Images & Cloudinary

Phase 7 introduces project image management and Cloudinary integration.

Portfolio projects can now include cover images and ordered screenshot galleries while image metadata is stored relationally in PostgreSQL.

The image-management flow combines:

```text
Cloudinary image storage
        +
PostgreSQL image metadata
        +
Protected administrator image management
        +
Public project image responses
```

### Cloudinary Integration

Cloudinary is used to store portfolio project images outside the application server.

Cloudinary configuration is managed through:

```text
server/config/cloudinary.js
```

Private Cloudinary credentials are stored in:

```text
server/.env
```

Safe placeholders are documented in:

```text
server/.env.example
```

The application uses the dedicated Cloudinary folder:

```text
my-portfolio/projects
```

Cloudinary upload and deletion operations are handled through:

```text
server/services/cloudinaryService.js
```

The service supports:

- Uploading project images from memory
- Returning Cloudinary image metadata
- Deleting Cloudinary assets using their `public_id`

### Image Upload Middleware

Project image uploads are processed using Multer.

Upload middleware is defined in:

```text
server/middleware/upload.js
```

Uploads use in-memory storage so image buffers can be streamed directly to Cloudinary without creating permanent files on the application server.

Accepted image formats are:

```text
JPEG
PNG
WebP
```

The maximum image size is:

```text
10 MB
```

Invalid file types return:

```text
400 Bad Request
```

Files larger than the configured limit return:

```text
413 Payload Too Large
```

Multer upload errors are handled by the centralized Express error middleware.

### Project Image Database Metadata

Image metadata is stored in the existing:

```text
project_images
```

table.

Each image can store:

```text
project_id
image_url
public_id
alt_text
caption
is_cover
display_order
created_at
```

`image_url` stores the Cloudinary delivery URL.

`public_id` stores the Cloudinary asset identifier used for server-side asset deletion.

### Cover Image Constraint

Each project can have at most one image marked as its cover.

The database enforces this rule using a PostgreSQL partial unique index:

```sql
CREATE UNIQUE INDEX unique_project_cover_image
ON project_images (project_id)
WHERE is_cover = TRUE;
```

The API also manages cover replacement transactionally.

When an administrator promotes an image to cover:

```text
Current cover
      ↓
is_cover = FALSE
      ↓
Selected image
      ↓
is_cover = TRUE
```

This prevents multiple cover images from remaining assigned to the same project.

### Protected Project Image Routes

Project image management is nested beneath administrator projects.

Protected routes:

```text
POST   /api/admin/projects/:id/images
PATCH  /api/admin/projects/:id/images/:imageId
DELETE /api/admin/projects/:id/images/:imageId
```

All project image routes require:

```text
Authorization: Bearer <token>
```

The existing JWT middleware protects the image-management router.

### Project Image Creation

Administrators can upload project images using:

```text
POST /api/admin/projects/:id/images
```

The request uses multipart form data with the image field:

```text
image
```

Optional metadata includes:

```text
alt_text
caption
is_cover
display_order
```

Before uploading an image, the API verifies that the target project exists.

`display_order` must be a non-negative integer.

After Cloudinary successfully stores the asset, PostgreSQL stores the corresponding image metadata.

If the database operation fails after the Cloudinary upload, the newly uploaded Cloudinary asset is deleted to prevent an orphaned file.

### Project Image Updates

Administrators can update image metadata using:

```text
PATCH /api/admin/projects/:id/images/:imageId
```

Supported fields are:

```text
alt_text
caption
is_cover
display_order
```

Updates verify that the image belongs to the requested project.

An empty request containing no valid fields returns:

```text
400 Bad Request
```

Invalid display-order values also return:

```text
400 Bad Request
```

Attempting to update an image that does not belong to the project returns:

```text
404 Not Found
```

Promoting an image to cover automatically removes the previous project's cover designation inside the same PostgreSQL transaction.

### Project Image Deletion

Administrators can delete project images using:

```text
DELETE /api/admin/projects/:id/images/:imageId
```

Image deletion removes both:

```text
Cloudinary asset
        +
PostgreSQL project_images row
```

The image is first located using both its image ID and project ID.

If the image does not exist for that project, the endpoint returns:

```text
404 Not Found
```

### Administrator Project Image Data

The protected administrator project endpoint:

```text
GET /api/admin/projects/:id
```

includes an ordered:

```text
images[]
```

array.

This allows the future administrator CMS to retrieve image data for both published and unpublished projects.

Administrator image data includes:

```text
id
image_url
public_id
alt_text
caption
is_cover
display_order
created_at
```

Including `public_id` is intentional on the protected administrator API because it represents server-managed Cloudinary asset metadata.

### Public Project Cover Images

The public project collection:

```text
GET /api/projects
```

now includes a project's cover image through:

```text
cover_image
```

The public cover object contains:

```text
id
image_url
alt_text
caption
```

Projects without a cover image return:

```json
"cover_image": null
```

Cloudinary `public_id` values are intentionally excluded from public API responses.

### Public Project Image Galleries

The public single-project endpoint:

```text
GET /api/projects/:slug
```

now includes:

```text
images[]
```

for the published project's screenshot gallery.

Public gallery image data contains:

```text
id
image_url
alt_text
caption
is_cover
display_order
```

Images are ordered using:

```sql
ORDER BY
  is_cover DESC,
  display_order ASC,
  id ASC
```

This places the cover image first and then respects administrator-defined image ordering.

Projects without images return:

```json
"images": []
```

Cloudinary `public_id` values are not exposed publicly.

### Project Deletion and Cloudinary Cleanup

Deleting an entire project now cleans up its Cloudinary assets before deleting the PostgreSQL project record.

The project deletion flow is:

```text
Administrator deletes project
        ↓
Load project image public IDs
        ↓
Delete Cloudinary assets
        ↓
Delete project
        ↓
PostgreSQL ON DELETE CASCADE
        ↓
Remove project_images rows
```

Cloudinary and PostgreSQL are separate systems and therefore cannot share a single database transaction.

The current deletion strategy removes Cloudinary assets before deleting the project record so normal project deletion does not leave project images orphaned in Cloudinary.

### Phase 7 Verification

Project image and Cloudinary testing confirmed:

- Cloudinary credentials load successfully from the private environment configuration
- Cloudinary API connectivity succeeds
- Project images upload successfully to the dedicated Cloudinary folder
- Uploaded image metadata is persisted to PostgreSQL
- Cover-image replacement leaves exactly one project cover
- Promoting an existing image to cover demotes the previous cover
- Image metadata updates return `200 OK`
- Empty image PATCH requests return `400 Bad Request`
- Negative `display_order` values return `400 Bad Request`
- Updating a nonexistent project image returns `404 Not Found`
- Individual image deletion returns `200 OK`
- Deleted image rows are removed from PostgreSQL
- Deleted image assets are removed from Cloudinary
- Repeated deletion of a removed image returns `404 Not Found`
- Invalid image file types return `400 Bad Request`
- Images larger than 10 MB return `413 Payload Too Large`
- Public project collections return `cover_image`
- Projects without cover images return `cover_image: null`
- Public project details return ordered `images[]`
- Projects without images return an empty `images[]` array
- Public project responses do not expose Cloudinary `public_id`
- Protected administrator project details include image-management data
- Administrator project image data includes Cloudinary `public_id`
- Deleting a project removes its associated Cloudinary assets
- PostgreSQL cascade deletion removes associated project image rows
- Temporary Phase 7 projects and image assets were removed after testing
- Core API regression tests return `200 OK`
- Database health checks remain successful
- Authentication regression tests pass
- Protected routes continue rejecting missing JWTs with `401 Unauthorized`
- Server JavaScript syntax checks pass
- `git diff --check` passes
- React client ESLint passes
- React client production build passes

### Project Image Architecture

The completed Phase 7 flow is:

```text
ADMIN IMAGE UPLOAD

Administrator
      ↓
JWT
      ↓
Multer
      ↓
File validation
      ↓
Memory buffer
      ↓
Cloudinary
      ↓
PostgreSQL transaction
      ↓
project_images


PUBLIC PROJECT COLLECTION

React portfolio
      ↓
GET /api/projects
      ↓
Published projects
      ↓
Cover image lookup
      ↓
cover_image


PUBLIC PROJECT CASE STUDY

React portfolio
      ↓
GET /api/projects/:slug
      ↓
Published project
      ↓
Ordered project_images
      ↓
images[]


PROJECT DELETION

Administrator
      ↓
JWT
      ↓
DELETE project
      ↓
Cloudinary asset cleanup
      ↓
PostgreSQL project deletion
      ↓
ON DELETE CASCADE
      ↓
Image metadata cleanup
```

### Phase 7 Result

**Phase 7 — Project Images & Cloudinary is complete.**

The portfolio backend can now:

- Upload project images to Cloudinary
- Validate image formats and upload sizes
- Store project image metadata in PostgreSQL
- Assign image alt text and captions
- Control image display order
- Maintain a single cover image per project
- Update project image metadata
- Delete individual project images
- Remove deleted image assets from Cloudinary
- Expose cover images through the public project collection
- Expose ordered galleries through public project details
- Keep Cloudinary `public_id` metadata out of public responses
- Provide complete image-management data to the protected administrator API
- Clean Cloudinary assets when entire projects are deleted
- Preserve PostgreSQL relational cleanup through cascading foreign keys
- Reuse the existing JWT authentication system for image management
- Handle Multer errors through centralized Express error handling
- Pass backend regression testing
- Pass React ESLint verification
- Pass the React production build

The backend is ready for:

**Phase 8 — Contact Messages API**

---

## Phase 8 — Contact Messages API

Phase 8 introduces the portfolio contact-message system.

Visitors can now submit messages through a public API endpoint, while authenticated administrators can securely retrieve, review, update, and delete submitted messages.

The contact-message flow combines:

```text
Public contact submission
        +
Input normalization and validation
        +
PostgreSQL message storage
        +
Protected administrator message management
```

### Contact Message Database Storage

Contact messages are stored in the existing:

```text
contact_messages
```

table.

Each contact message stores:

```text
id
name
email
subject
message
is_read
created_at
```

The required database fields are:

```text
name
email
message
```

The `subject` field is optional.

New messages default to:

```text
is_read = false
```

This allows the future administrator CMS to distinguish between unread messages and messages that have already been reviewed.

The existing database limits are:

```text
name       VARCHAR(100)
email      VARCHAR(255)
subject    VARCHAR(200)
message    TEXT
```

Application-level validation prevents normal requests from exceeding these limits before PostgreSQL processes the insert.

### Public Contact Route

Portfolio visitors can submit contact messages using:

```text
POST /api/contact
```

This route is intentionally public because visitors do not need an account or administrator authentication to contact the portfolio owner.

A contact request can contain:

```json
{
  "name": "Example User",
  "email": "user@example.com",
  "subject": "Portfolio Project Inquiry",
  "message": "I would like to discuss building a web application."
}
```

The following fields are required:

```text
name
email
message
```

The following field is optional:

```text
subject
```

Successful contact submissions return:

```text
201 Created
```

### Contact Message Creation

Public message creation is handled by:

```text
server/controllers/contactMessageController.js
```

Before inserting a message, the controller normalizes the incoming string values.

Leading and trailing whitespace is removed from:

```text
name
email
subject
message
```

For example:

```text
"   Trimmed Test   "
```

is stored as:

```text
"Trimmed Test"
```

An empty or whitespace-only optional subject is normalized to:

```text
null
```

After validation succeeds, the message is inserted into PostgreSQL and returned with its generated ID, unread state, and creation timestamp.

### Contact Message Validation

Public contact submissions are validated before reaching the normal PostgreSQL insertion flow.

Required fields cannot be missing or contain only whitespace.

Missing or empty required values return:

```text
400 Bad Request
```

with:

```json
{
  "error": "Name, email, and message are required."
}
```

Email addresses are checked using application-level format validation.

Invalid email addresses return:

```text
400 Bad Request
```

with:

```json
{
  "error": "Please provide a valid email address."
}
```

Application validation also mirrors the PostgreSQL length constraints.

Maximum lengths are:

```text
name       100 characters
email      255 characters
subject    200 characters
```

Values exceeding those limits return:

```text
400 Bad Request
```

before a database constraint error is required.

The `message` column uses PostgreSQL `TEXT`, so Phase 8 does not introduce a separate message-length limit.

### Protected Administrator Message Routes

Contact-message management is available through protected administrator routes.

Protected routes:

```text
GET    /api/admin/messages
GET    /api/admin/messages/:id
PATCH  /api/admin/messages/:id
DELETE /api/admin/messages/:id
```

All administrator message routes require:

```text
Authorization: Bearer <token>
```

The existing JWT authentication middleware protects the administrator message router.

Requests without authentication return:

```text
401 Unauthorized
```

This keeps submitted visitor information unavailable through the public API.

### Administrator Message Collection

Administrators can retrieve all contact messages using:

```text
GET /api/admin/messages
```

The collection includes:

```text
id
name
email
subject
message
is_read
created_at
```

Messages are ordered using:

```sql
ORDER BY created_at DESC
```

This places the newest contact submissions first.

Both read and unread messages are returned so the future administrator CMS can display and manage the complete inbox.

If no messages exist, the endpoint returns:

```json
[]
```

### Individual Message Retrieval

Administrators can retrieve an individual contact message using:

```text
GET /api/admin/messages/:id
```

The route validates the message ID before querying PostgreSQL.

The ID must be a positive integer.

Invalid IDs such as:

```text
/api/admin/messages/abc
```

return:

```text
400 Bad Request
```

If the ID is valid but no corresponding contact message exists, the endpoint returns:

```text
404 Not Found
```

This prevents malformed identifiers from reaching PostgreSQL as invalid integer queries.

### Read and Unread Message Updates

Administrators can update the read state of a message using:

```text
PATCH /api/admin/messages/:id
```

To mark a message as read:

```json
{
  "is_read": true
}
```

To return a message to unread:

```json
{
  "is_read": false
}
```

The API requires `is_read` to be an actual JSON boolean.

For example:

```json
{
  "is_read": "true"
}
```

is rejected because the value is a string rather than a boolean.

Invalid `is_read` values return:

```text
400 Bad Request
```

Successful updates return:

```text
200 OK
```

along with the updated contact message.

### Contact Message Deletion

Administrators can permanently delete contact messages using:

```text
DELETE /api/admin/messages/:id
```

The message ID is validated before PostgreSQL is queried.

Successful deletion returns:

```text
200 OK
```

along with the deleted contact-message data.

If the requested message does not exist, the endpoint returns:

```text
404 Not Found
```

Attempting to delete the same message again therefore also returns:

```text
404 Not Found
```

Contact-message deletion does not require external asset cleanup because messages are stored entirely in PostgreSQL.

### Phase 8 Verification

Contact-message testing confirmed:

- Public contact submissions return `201 Created`
- Submitted messages are persisted to PostgreSQL
- New messages default to `is_read: false`
- Missing required fields return `400 Bad Request`
- Whitespace-only required fields return `400 Bad Request`
- Leading and trailing whitespace is removed before persistence
- Invalid email addresses return `400 Bad Request`
- Names longer than 100 characters return `400 Bad Request`
- Protected administrator message routes reject missing JWTs with `401 Unauthorized`
- Authenticated administrators can retrieve all contact messages
- Contact messages are returned newest first
- Authenticated administrators can retrieve individual contact messages
- Invalid contact-message IDs return `400 Bad Request`
- Nonexistent contact messages return `404 Not Found`
- Contact messages can be marked as read
- Contact messages can be returned to unread
- Non-boolean `is_read` values return `400 Bad Request`
- Contact messages can be deleted
- Repeated deletion of a removed message returns `404 Not Found`
- Temporary Phase 8 contact messages were removed after testing
- The administrator message collection returns an empty array after cleanup
- Core API regression tests return `200 OK`
- Database health checks remain successful
- All 12 seeded technologies remain available
- Public project retrieval continues to return `200 OK`
- Authentication regression tests pass
- Protected routes continue rejecting missing JWTs with `401 Unauthorized`
- Server JavaScript syntax checks pass
- `git diff --check` passes
- React client ESLint passes
- React client production build passes

### Contact Message Architecture

The completed Phase 8 flow is:

```text
PUBLIC CONTACT SUBMISSION

Portfolio visitor
      ↓
POST /api/contact
      ↓
Input normalization
      ↓
Required-field validation
      ↓
Email validation
      ↓
Length validation
      ↓
PostgreSQL
      ↓
contact_messages
      ↓
201 Created


ADMIN MESSAGE COLLECTION

Administrator
      ↓
JWT
      ↓
GET /api/admin/messages
      ↓
contact_messages
      ↓
Newest first
      ↓
Admin inbox


ADMIN MESSAGE REVIEW

Administrator
      ↓
JWT
      ↓
GET /api/admin/messages/:id
      ↓
Individual message
      ↓
PATCH is_read
      ↓
Read / unread state


ADMIN MESSAGE DELETION

Administrator
      ↓
JWT
      ↓
DELETE /api/admin/messages/:id
      ↓
PostgreSQL
      ↓
Message removed
```

### Phase 8 Result

**Phase 8 — Contact Messages API is complete.**

The portfolio backend can now:

- Accept public contact-form submissions
- Normalize visitor contact data
- Validate required contact fields
- Validate email formatting
- Enforce database-compatible input lengths
- Store contact messages in PostgreSQL
- Default new messages to unread
- Retrieve all messages through the protected administrator API
- Order administrator messages newest first
- Retrieve individual contact messages
- Validate contact-message identifiers
- Mark messages as read
- Return messages to unread
- Delete contact messages
- Protect visitor message data with JWT-authenticated administrator routes
- Handle invalid and nonexistent messages cleanly
- Pass backend regression testing
- Pass React ESLint verification
- Pass the React production build

With Phases 1–8 complete, the portfolio backend foundation is ready to support the React application.

The project is ready for:

**Phase 9 — React Foundation**

---


## Phase 9 — React Foundation

Phase 9 established the React frontend architecture required for both the public developer portfolio and the protected administrator CMS.

The goal of this phase was not to build the final visual portfolio experience yet. Instead, it created the routing, shared layouts, API communication layer, authentication state management, protected-route system, environment configuration, and responsive CSS foundation that the remaining frontend phases will build upon.

---

### React Router

React Router was added to provide client-side routing throughout the application.

The application now separates the public portfolio from the administrator CMS while keeping both within the same React application.

Current routes include:

```text
/

/admin/login

/admin
/admin/projects
/admin/projects/new
/admin/projects/:id/edit
/admin/technologies
/admin/messages
/admin/messages/:id
```

The public route is rendered through the public application layout.

Administrator CMS routes are nested beneath the `/admin` route structure and protected through authentication middleware on the frontend.

The `/admin/login` route intentionally remains outside the protected administrator layout so unauthenticated administrators can access the login page.

---

### Frontend Project Structure

The React application now has a clearer separation between pages, reusable components, authentication state, hooks, and API services.

The frontend structure includes:

```text
src/
├── components/
│   └── shared/
│       ├── AdminLayout.jsx
│       ├── ProtectedRoute.jsx
│       └── PublicLayout.jsx
│
├── context/
│   ├── AuthContext.js
│   └── AuthProvider.jsx
│
├── hooks/
│   └── useAuth.js
│
├── pages/
│   ├── Home.jsx
│   └── admin/
│       ├── AdminDashboard.jsx
│       ├── AdminLogin.jsx
│       ├── AdminMessageDetails.jsx
│       ├── AdminMessages.jsx
│       ├── AdminProjectForm.jsx
│       ├── AdminProjects.jsx
│       └── AdminTechnologies.jsx
│
├── services/
│   ├── api.js
│   └── authService.js
│
├── App.jsx
├── index.css
└── main.jsx
```

This structure provides the foundation for expanding the public portfolio and CMS without placing application logic directly inside the root React components.

---

### Shared Layouts

Reusable layout components were created for the two primary areas of the application:

```text
PublicLayout
AdminLayout
```

`PublicLayout` provides the shared wrapper for public-facing portfolio pages.

`AdminLayout` provides the shared wrapper for authenticated CMS pages and currently contains the administrator logout control.

Both layouts use React Router's `Outlet` to render their nested routes.

This architecture allows navigation, headers, sidebars, footers, and other shared UI elements to be added later without duplicating them across individual pages.

---

### Frontend Environment Configuration

The React application now uses an environment variable to determine the Express API base URL:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

A local `.env` file provides the development configuration and remains excluded from Git.

A safe `.env.example` file documents the required frontend environment configuration without storing private environment values in the repository.

The client `.gitignore` was updated to ignore environment files while allowing `.env.example` to remain tracked.

---

### Centralized API Service

A reusable API request utility was created in:

```text
src/services/api.js
```

The utility centralizes communication between React and the Express REST API.

Requests use the configured:

```text
VITE_API_BASE_URL
```

with a development fallback to:

```text
http://localhost:3000/api
```

This prevents individual React components from repeatedly defining the backend API base URL and provides a shared location for future request behavior.

The request flow is now:

```text
React Component
      ↓
API Service
      ↓
Express REST API
      ↓
Controller / Database Layer
      ↓
PostgreSQL
```

---

### React-to-Express Integration

Frontend-to-backend communication was verified using the existing API health endpoint:

```text
GET /api/health
```

The React client successfully received:

```text
status: ok
```

from the Express API.

Because the health endpoint also verifies database connectivity, this confirmed the complete development communication path:

```text
React
   ↓
Express
   ↓
PostgreSQL
```

During integration testing, the active Vite development server was running on port `5174`.

The Express CORS configuration was updated to allow the active client origin, resolving the initial browser CORS rejection.

---

### Authentication Service

Administrator authentication requests are centralized in:

```text
src/services/authService.js
```

The authentication service currently provides frontend access to:

```text
POST /api/auth/login
GET  /api/auth/me
```

`loginAdmin()` submits administrator credentials to the Express authentication API.

`getCurrentAdmin()` sends the stored JWT using the Bearer authentication scheme to verify an existing administrator session.

Authentication API logic therefore remains separate from individual React page components.

---

### Authentication Context

Global administrator authentication state was established using React Context.

The authentication system is separated into:

```text
AuthContext.js
AuthProvider.jsx
useAuth.js
```

`AuthContext` defines the shared authentication context.

`AuthProvider` manages:

```text
admin
loading
login()
logout()
```

The provider wraps the React application so authentication state is available throughout the administrator CMS.

The context and provider were intentionally separated into different files to remain compatible with React Fast Refresh and the project's ESLint configuration.

---

### useAuth Hook

A reusable authentication hook was created:

```text
src/hooks/useAuth.js
```

Components can access authentication state with:

```text
useAuth()
```

instead of importing and consuming `AuthContext` directly.

The hook also verifies that it is being used within `AuthProvider`.

This provides a consistent interface for future administrator components that need access to the authenticated administrator, login state, or logout behavior.

---

### Administrator Login

The administrator login page is now connected to the real Express authentication API.

The login flow is:

```text
Administrator submits credentials
            ↓
POST /api/auth/login
            ↓
Express validates credentials
            ↓
JWT + administrator returned
            ↓
AuthProvider login()
            ↓
JWT stored in localStorage
            ↓
Administrator state populated
            ↓
Navigate to /admin
```

Successful authentication redirects the administrator to the CMS dashboard.

Invalid credentials are handled by the frontend without granting access to protected routes.

The password itself is never stored by the React application.

---

### Protected Administrator Routes

A reusable `ProtectedRoute` component was created to guard the CMS.

Protected routes include:

```text
/admin
/admin/projects
/admin/projects/new
/admin/projects/:id/edit
/admin/technologies
/admin/messages
/admin/messages/:id
```

When an unauthenticated user attempts to access a protected route:

```text
/admin/*
    ↓
ProtectedRoute
    ↓
No authenticated administrator
    ↓
/admin/login
```

The login page remains publicly reachable at:

```text
/admin/login
```

This protection was verified against the administrator dashboard, projects, technologies, and messages routes.

---

### JWT Session Persistence

Administrator sessions now survive browser refreshes.

When the React application starts, `AuthProvider` checks for the stored administrator JWT.

If a token exists:

```text
Stored JWT
    ↓
AuthProvider
    ↓
GET /api/auth/me
    ↓
Express verifies JWT
    ↓
Administrator returned
    ↓
Authentication state restored
```

During this restoration process, protected routes wait for authentication verification to finish before determining whether the administrator should be allowed access.

Session restoration was successfully tested by refreshing an authenticated administrator route and confirming that the requested CMS page remained accessible.

---

### Invalid or Expired Authentication

If the stored token cannot be authenticated through:

```text
GET /api/auth/me
```

the frontend:

```text
removes adminToken
      ↓
clears administrator state
      ↓
ProtectedRoute denies CMS access
```

This prevents an invalid or expired locally stored token from maintaining frontend administrator access.

---

### Administrator Logout

Logout functionality was added to the shared administrator layout.

Logging out:

```text
removes adminToken from localStorage
            ↓
clears administrator state
            ↓
redirects to /admin/login
            ↓
ProtectedRoute blocks /admin/*
```

Logout behavior was tested successfully.

After logging out, manually navigating back to `/admin/projects` correctly redirected to `/admin/login`.

---

### Initial Administrator Pages

Placeholder pages now establish the routing targets for the future CMS.

The administrator frontend currently includes:

```text
Admin Dashboard
Admin Login
Projects
New Project
Edit Project
Technologies
Messages
Message Details
```

These pages intentionally contain minimal UI during Phase 9.

Their full CMS interfaces and backend integrations will be developed during later administrator phases.

---

### Public Portfolio Foundation

The root route:

```text
/
```

currently provides the initial public portfolio entry point.

The public application remains intentionally minimal during Phase 9.

The full public portfolio shell—including navigation, hero content, About, Skills, Projects, Resume, Contact, responsive navigation, and section behavior—begins in Phase 10.

---

### Responsive Styling Foundation

The default Vite starter styling was replaced with a minimal global styling foundation.

The application now includes:

- global `box-sizing`
- zeroed body margin
- minimum viewport dimensions
- full-height root and layout containers
- responsive content widths
- responsive page spacing
- normalized form-control typography
- responsive image behavior
- smooth scrolling
- system font stack
- dark portfolio background
- warm-white primary text

The initial visual foundation uses:

```text
Background: #0D1117
Text:       #F5F5F5
```

This establishes the base for the complete portfolio design system beginning in Phase 10.

---

### Phase 9 Route Verification

The public and administrator route structure was manually tested.

Public:

```text
/ → Home
```

Logged out:

```text
/admin/login        → Admin Login
/admin              → redirect to /admin/login
/admin/projects     → redirect to /admin/login
/admin/technologies → redirect to /admin/login
/admin/messages     → redirect to /admin/login
```

Authenticated:

```text
/admin                       → Admin Dashboard
/admin/projects              → Projects
/admin/projects/new          → Project Form
/admin/projects/1/edit       → Project Form
/admin/technologies          → Technologies
/admin/messages              → Messages
/admin/messages/1            → Message Details
```

All routes behaved as intended.

---

### Phase 9 Authentication Verification

The complete authentication lifecycle was manually verified:

```text
Login
  ↓
JWT stored
  ↓
Protected routes accessible
  ↓
Browser refresh
  ↓
Session restored
  ↓
Logout
  ↓
JWT removed
  ↓
Protected routes blocked
```

All authentication behaviors passed.

---

### Phase 9 Code Quality Verification

Frontend linting completed successfully:

```bash
npm run lint
```

Production compilation also completed successfully:

```bash
npm run build
```

The final production build completed with:

```text
40 modules transformed
✓ built successfully
```

The build produced the expected HTML, CSS, and JavaScript assets without errors.

---

### Phase 9 Result

Phase 9 successfully established the frontend application foundation.

The portfolio now has:

- a structured React application
- React Router
- separate public and administrator layouts
- centralized API communication
- environment-based backend configuration
- verified React-to-Express communication
- global administrator authentication state
- reusable authentication utilities
- real administrator login
- JWT persistence
- protected CMS routes
- administrator logout
- initial public and CMS page structure
- responsive global CSS foundations
- successful linting and production builds

With the frontend architecture established, development can now move from application infrastructure into the actual public portfolio experience.

**Phase 9 — React Foundation: Complete**

---

## Phase 10 — Public Portfolio Shell

Phase 10 established the complete public-facing visual shell for the developer portfolio.

The portfolio now functions as a polished, responsive single-page experience with section-based navigation, a consistent dark visual system, responsive layouts, and active navigation state tracking.

### Public Portfolio Structure

The public homepage is organized into the following sections:

```text
Home
↓
About
↓
Skills
↓
Projects
↓
Resume
↓
Contact
↓
Footer
```

Each section uses a unique `id` so the primary navigation can smoothly scroll between sections.

### Navigation

A responsive sticky navigation bar was implemented with links to:

- Home
- About
- Skills
- Projects
- Resume
- Contact

Desktop navigation remains pinned to the top of the viewport while scrolling.

Mobile navigation uses a hamburger menu that:

- Opens and closes the navigation menu
- Transitions into an X while open
- Closes when a navigation link is selected
- Closes when the ER brand link is selected
- Supports all public section links

Smooth scrolling is enabled globally.

### Active Section Navigation

The navigation tracks the currently active portfolio section while the user moves through the page.

Active navigation links receive the portfolio's amber/gold accent color and underline treatment.

The active state supports:

- Desktop scrolling
- Mobile scrolling
- Direct navigation-link selection
- Responsive viewport behavior
- Final Contact-section detection near the bottom of the page

Selecting a navigation link also immediately updates the active section state, providing consistent feedback during smooth scrolling.

### Hero Section

The Hero section introduces the portfolio with:

- Full-Stack Web Developer heading
- Developer name
- Short technical introduction
- View My Work CTA
- Contact Me CTA
- Custom developer code-card visual

The code-card visual presents a stylized developer object containing:

- Name
- Full-stack focus
- Web application focus

The Hero uses a responsive two-column layout on larger screens and collapses into a single-column layout on smaller screens.

### About Section

The About section introduces the developer's professional approach and transition into software development.

It includes a visual full-stack development flow:

```text
Frontend → Backend → Database
```

The section highlights eight core technologies:

- JavaScript
- React
- Node.js
- Express
- Python
- Django
- PostgreSQL
- Git

The About section uses a two-column desktop layout and collapses into a single-column mobile layout.

### Skills Section

The Skills section provides a categorized overview of the current technical toolkit.

Categories include:

#### Languages
- JavaScript
- Python

#### Frontend
- React
- HTML
- CSS

#### Backend
- Node.js
- Express
- Django
- Django REST Framework

#### Database
- PostgreSQL

#### Tools
- Git
- GitHub

These twelve technologies match the initial technology records seeded into PostgreSQL.

The current Phase 10 implementation uses frontend data to establish the final visual presentation.

Database-driven technology rendering will be implemented in Phase 11.

The Skills layout uses:

- Five categorized skill cards
- Three-column composition for the primary desktop row
- Centered secondary desktop row
- Two-column tablet layout
- Single-column mobile layout
- Responsive technology badges
- Hover interactions

### Projects Section

The Projects section establishes the visual presentation for portfolio project cards.

Three initial project placeholders are represented:

1. VinoVault 2.0
2. You Party – I Pour
3. JavaScript Snake

Each project card contains:

- Project type
- Project title
- Short description
- Technology badges
- View Case Study control
- Temporary project visual

Desktop displays the three project cards in a three-column layout.

Mobile displays the project cards in a single vertical column.

The current project information is temporary frontend data used to establish the UI.

Real project data and project cover images will be loaded from the API in Phase 11.

The View Case Study controls are intentionally inactive during Phase 10.

Interactive project case-study modals will be implemented in Phase 12.

### Resume Section

The Resume section provides a concise professional overview without placing the entire résumé directly on the homepage.

The section currently highlights:

1. Full-Stack Web Development
2. 13 Years of Pharmacy Experience
3. Current Focus on Production-Ready Applications

A Get In Touch CTA links directly to the Contact section.

The final résumé asset and résumé-specific functionality will be added in Phase 13.

### Contact Section

The Contact section establishes the visual shell for future visitor communication.

The form currently contains:

- Name
- Email
- Subject
- Message
- Send Message button

The section also communicates availability for:

- Development opportunities
- Freelance projects
- Client work

The form is intentionally non-submitting during Phase 10.

The existing backend `POST /api/contact` endpoint will be connected to the React form in Phase 13.

### Footer

The public footer includes:

- ER brand mark
- Developer name
- Full-Stack Web Developer title
- Dynamic copyright year
- Back to top navigation

The footer uses a three-part desktop layout and collapses into a centered vertical layout on mobile.

### Visual Design System

The public portfolio follows a dark-first visual direction using:

- Charcoal/navy backgrounds
- Dark elevated surfaces
- Warm white primary text
- Muted gray secondary text
- Amber/gold accent color
- Subtle borders
- Responsive typography
- Consistent spacing
- Reusable buttons
- Reusable border radii
- Shared transition timing

Primary design tokens are defined globally through CSS custom properties.

The interface intentionally avoids a neon or hacker-style aesthetic in favor of a professional, modern, slightly technical presentation.

### Responsive Design

The complete public portfolio shell was tested on desktop and mobile.

Responsive behavior includes:

- Mobile navigation menu
- Responsive Hero layout
- Single-column About layout
- Responsive Skills grid
- Responsive Projects grid
- Responsive Resume layout
- Responsive Contact form
- Responsive Footer
- Full-width mobile CTAs where appropriate
- Smooth anchor navigation
- Active-section navigation tracking

### Phase 10 Validation

The completed public shell was manually tested across desktop and mobile.

Verified behavior includes:

- Sticky desktop navigation
- Mobile hamburger navigation
- Hamburger-to-X transition
- Mobile menu closing after selection
- ER brand navigation
- All six navigation links
- Smooth scrolling
- Active navigation highlighting
- Hero CTA navigation
- About responsive layout
- Skills responsive layout
- Projects responsive layout
- Resume responsive layout
- Contact responsive layout
- Footer responsive layout
- Back to top navigation
- Full-page top-to-bottom scrolling
- No observed horizontal overflow
- No observed overlapping content
- No observed broken responsive spacing

Client validation completed successfully:

```bash
npm run lint
npm run build
```

Final Phase 10 production build completed successfully with Vite.

### Phase 10 Status

```text
Public page structure        ✅
Responsive navbar            ✅
Mobile navigation            ✅
Smooth scrolling             ✅
Active section tracking      ✅
Hero section                 ✅
About section                ✅
Skills shell                 ✅
Projects shell               ✅
Resume shell                 ✅
Contact shell                ✅
Footer                       ✅
Desktop responsive testing   ✅
Mobile responsive testing    ✅
ESLint                       ✅
Production build             ✅
```

Phase 10 establishes the complete public portfolio presentation layer.

Phase 11 will replace the temporary Skills and Projects frontend data with live data from the existing Express/PostgreSQL API.


**Phase 10 — React Foundation: Complete**


---

## Phase 11 — Skills & Projects Integration

Phase 11 replaced the temporary frontend data used by the Skills and Projects sections with live data from the existing Express/PostgreSQL API.

The public portfolio now retrieves technologies and published projects directly from PostgreSQL while preserving the responsive visual presentation established during Phase 10.

This phase also expanded the public Projects API response so each project can provide its associated technologies and prepared the project-card interface for database-managed cover images.

### Technologies Service

A dedicated frontend technology service was added:

```text
client/src/services/technologyService.js
```

The service communicates with:

```text
GET /api/technologies
```

and provides the Skills section with technology records stored in PostgreSQL.

The technology data flow is now:

```text
PostgreSQL
    ↓
Express Technologies API
    ↓
technologyService.js
    ↓
Skills.jsx
    ↓
Public Portfolio
```

### Skills API Integration

The Skills section was converted from temporary hardcoded frontend data to live API data.

`Skills.jsx` now:

- Fetches technologies when the component loads
- Stores technologies in React state
- Tracks loading state
- Tracks API errors
- Handles an empty technology collection
- Groups technologies by category
- Renders technology names directly from PostgreSQL

The existing category order is preserved:

#### Languages

- JavaScript
- Python

#### Frontend

- React
- HTML
- CSS

#### Backend

- Node.js
- Express
- Django
- Django REST Framework

#### Database

- PostgreSQL

#### Tools

- Git
- GitHub

All twelve technologies now originate from the database rather than a hardcoded React array.

The visual design established during Phase 10 was preserved, including:

- Five categorized skill cards
- Three-column primary desktop row
- Centered secondary desktop row
- Two-column tablet layout
- Single-column mobile layout
- Technology badges
- Existing responsive behavior

### Skills Loading, Error & Empty States

The Skills section now handles multiple API states.

While technology data is loading, the section displays a loading message.

If the API request fails, an error state is displayed.

If the API successfully responds with no technologies, an empty-state message is displayed.

Once technology data is available, the existing Skills grid is rendered.

### Development Network API Access

During mobile testing, the portfolio frontend was successfully accessible from the local network, but API requests initially failed because the client API URL used:

```text
http://localhost:3000/api
```

On a mobile device, `localhost` refers to the mobile device itself rather than the development computer.

The local client environment was updated to use the development machine's LAN address for API requests during device testing.

Direct mobile access to the public technologies API was verified before reconnecting the React application.

### Development CORS Configuration

After enabling network API access, the mobile portfolio successfully retrieved technologies while the desktop localhost origin was blocked by the existing CORS configuration.

The Express CORS configuration was updated to support both development origins:

```text
Desktop localhost origin
        ↓
      Express

Local network mobile origin
        ↓
      Express
```

The development server now supports simultaneous desktop and mobile testing without switching the allowed frontend origin back and forth.

Both devices successfully retrieve live technology data from the same Express API.

### Projects Service

A dedicated frontend project service was added:

```text
client/src/services/projectService.js
```

The service communicates with:

```text
GET /api/projects
```

and provides the Projects section with published project records stored in PostgreSQL.

The project data flow is now:

```text
PostgreSQL
    ↓
Express Projects API
    ↓
projectService.js
    ↓
Projects.jsx
    ↓
Public Portfolio
```

### Initial Published Portfolio Projects

Three initial portfolio projects were added to PostgreSQL through the protected Projects API.

The published project order is:

1. VinoVault 2.0
2. You Party – I Pour
3. JavaScript Snake

Each project includes database-managed information such as:

- Title
- Slug
- Short description
- Full description
- Project type
- Project status
- Featured state
- Published state
- Display order
- Creation timestamp
- Update timestamp

These records replace the temporary project objects previously stored directly inside `Projects.jsx`.

### VinoVault 2.0

VinoVault 2.0 was added as a published and featured full-stack application.

Its project technologies are connected through the `project_technologies` relationship.

Associated technologies include:

- JavaScript
- Python
- React
- Django
- Django REST Framework
- PostgreSQL
- Git
- GitHub

### You Party – I Pour

You Party – I Pour was added as a published and featured client web application.

Associated technologies include:

- JavaScript
- React
- Node.js
- Express
- PostgreSQL
- Git
- GitHub

### JavaScript Snake

JavaScript Snake was added as a published and featured frontend project.

Associated technologies include:

- JavaScript
- HTML
- CSS
- Git
- GitHub

### Public Projects API Enhancement

The existing public Projects endpoint previously returned project information and an optional cover image.

During Phase 11, the endpoint was expanded so each published project also returns its associated technologies.

The public project collection now follows this structure:

```text
Project
├── Core project information
├── Cover image
└── Technologies
    ├── Technology
    ├── Technology
    └── Technology
```

Technology records are retrieved through the existing relational structure:

```text
projects
    ↓
project_technologies
    ↓
technologies
```

This allows the React client to retrieve the project and the technology badges required for its card through a single public Projects API request.

### Project Technology Relationships

Technology relationships were assigned through the protected endpoint:

```text
PUT /api/admin/projects/:id/technologies
```

The public Projects API was then verified to return the correct technology array for each published project.

This keeps project technology information relational rather than duplicating technology names directly inside project records.

### Projects API Integration

The Projects section was converted from the Phase 10 placeholder array to live API data.

`Projects.jsx` now:

- Fetches published projects when the component loads
- Stores projects in React state
- Tracks loading state
- Tracks API errors
- Handles an empty project collection
- Renders project types from PostgreSQL
- Renders project titles from PostgreSQL
- Renders short descriptions from PostgreSQL
- Renders associated technology badges from PostgreSQL
- Supports project cover images
- Preserves the existing View Case Study control

The hardcoded Phase 10 project array is no longer used.

### Project Cover Image Support

The public Projects API already supports a `cover_image` field.

The Projects component now checks whether a project has a cover image.

The rendering flow is:

```text
Project has cover image?
        ↓
      Yes
        ↓
Render project image

Project has cover image?
        ↓
       No
        ↓
Render existing </> project visual
```

The three initial projects currently use the existing fallback project visual because portfolio cover images have not yet been assigned.

This allows cover images to be added later without redesigning the project-card component.

### Projects Loading, Error & Empty States

The Projects section now handles multiple API states.

While projects are loading, the section displays a loading message.

If the API request fails, an error state is displayed.

If the API successfully responds with no published projects, an empty-state message is displayed.

Once project data is available, the responsive Projects grid is rendered.

### Responsive Integration Testing

Both API-driven sections were manually tested on desktop and mobile.

Skills testing confirmed:

- All five technology categories render
- All twelve technologies render
- Technology data reloads correctly
- Desktop layout remains intact
- Mobile layout remains intact

Projects testing confirmed:

- All three published projects render
- Correct project ordering
- Correct project types
- Correct descriptions
- Correct technology relationships
- Existing fallback project visuals
- Desktop three-column layout
- Mobile single-column layout

The complete public portfolio was also tested from top to bottom after the integrations.

Verified sections include:

- Navbar
- Hero
- About
- Skills
- Projects
- Resume
- Contact
- Footer

No observed horizontal overflow, overlapping content, or broken responsive spacing was introduced by the API integrations.

The View Case Study controls remain intentionally inactive.

Project case-study modal functionality will be implemented during Phase 12.

### Phase 11 Validation

Backend validation completed successfully.

Verified behavior includes:

- Public technologies endpoint
- Public projects endpoint
- Published-project filtering
- Project display ordering
- Project technology relationships
- Public project technology serialization
- Project cover-image field
- Desktop API access
- Mobile API access
- Simultaneous desktop and mobile CORS support
- Project controller syntax validation

Client validation completed successfully:

```bash
npm run lint
npm run build
```

The final Phase 11 production build completed successfully with Vite.

The build transformed 50 modules and completed without errors.

### Phase 11 Status

```text
Technology service              ✅
Skills API integration          ✅
Skills category grouping        ✅
Skills loading state            ✅
Skills error state              ✅
Skills empty state              ✅
Project service                 ✅
Published project records       ✅
Project technology relations    ✅
Projects API enhancement        ✅
Projects API integration        ✅
Project cover-image support     ✅
Projects loading state          ✅
Projects error state            ✅
Projects empty state            ✅
Desktop API access              ✅
Mobile API access               ✅
Development CORS support        ✅
Desktop responsive testing      ✅
Mobile responsive testing       ✅
Full-page regression testing    ✅
Node syntax validation          ✅
ESLint                          ✅
Production build                ✅
```

Phase 11 completes the transition of the Skills and Projects sections from temporary frontend content to live PostgreSQL-backed portfolio data.

The public portfolio presentation is now connected to the application data layer while retaining the visual system and responsive behavior established during Phase 10.

Phase 12 will build the interactive Project Case Study Modal, allowing visitors to explore individual projects in greater detail without leaving the single-page portfolio.



---

## Phase 12 — Project Case Study Modal

Phase 12 transformed the Projects section from a collection of summary cards into an interactive portfolio case-study experience.

Visitors can now open a detailed project case study directly from the single-page portfolio without navigating away from the page or losing their current scroll position.

### Project Detail API Integration

The client project service was expanded with support for retrieving an individual published project by slug:

```text
GET /api/projects/:slug
```

The public project-detail response now includes:

- Core project information
- Full case-study content
- Project type
- Project status
- GitHub URL
- Live URL
- Associated technologies
- Ordered project images

The public response does not expose Cloudinary `public_id` values.

This allows the case-study modal to retrieve all information required to present an individual project through a single public API request.

### Project Case Study Modal

A reusable `ProjectCaseStudyModal` component was added to the public portfolio.

Selecting View Case Study on a project card now:

```text
Project Card
     ↓
View Case Study
     ↓
Fetch project by slug
     ↓
Open ProjectCaseStudyModal
     ↓
Render complete project case study
```

The modal displays available project information including:

- Cover image
- Project title
- Project type
- Project status
- Short description
- Overview
- Problem
- Solution
- Features
- Challenges
- Lessons learned
- Technology stack
- GitHub link
- Live-site link
- Project gallery

Optional content is rendered conditionally so projects without a cover image, live URL, or gallery do not display empty interface sections.

### Modal Interaction & Accessibility

The case-study modal was designed to preserve the single-page portfolio experience.

Implemented interaction behavior includes:

- Internal modal scrolling
- Background body scroll locking
- Escape-key closing
- Close-button support
- Backdrop-click closing
- Initial focus on the modal close button
- Keyboard focus trapping while the modal is open
- Focus restoration to the originating View Case Study button after closing

The modal can therefore be opened and closed without changing routes or losing the visitor's position in the Projects section.

### Project Metadata

Project type and development status are displayed as structured metadata inside the modal.

Examples include:

```text
Type
Full-Stack Application

Status
In Development
```

These values are retrieved from PostgreSQL rather than being hardcoded in the React component.

This allows future Admin CMS updates to project type or status to automatically appear on the public portfolio.

### Project Links

Case studies support conditional external project links.

Available actions include:

- View GitHub
- View Live Site

Links open in a new browser tab and use `noopener noreferrer`.

Buttons are only rendered when the corresponding URL exists.

This prevents unfinished projects from displaying inactive or placeholder actions.

### Project Cover Images

Phase 12 verified the complete project-cover pipeline:

```text
Image Upload
     ↓
Express / Multer
     ↓
Cloudinary
     ↓
PostgreSQL Metadata
     ↓
Public Projects API
     ↓
React Project Card
     ↓
Case Study Modal
```

Real cover images were assigned to:

- VinoVault 2.0
- Venom-Sprint

Cover images now replace the fallback project visual on their project cards and are also displayed prominently inside their case-study modals.

Projects without a cover image continue to use the existing fallback visual.

### Project Gallery

The case-study modal now supports ordered project screenshot galleries.

Gallery images:

- Exclude the project's cover image
- Respect database `display_order`
- Display in a responsive two-column desktop grid
- Collapse to a single-column layout on mobile
- Support descriptive alt text
- Support optional captions

The Project Gallery section is rendered only when non-cover project images exist.

This prevents empty gallery headings from appearing on projects without screenshots.

### VinoVault 2.0 Case Study

VinoVault 2.0 was populated with complete case-study content covering:

- The product problem
- Full-stack solution
- Major application features
- Authentication and relational-data challenges
- Technical lessons learned
- Technology stack
- GitHub repository

A branded VinoVault image was uploaded as the project cover.

Three application screenshots were added to the project gallery:

1. Authenticated Browse Wines experience with filtering and external wine discovery
2. My Cellar authenticated collection-management interface
3. Wine Details experience with tasting-journal functionality

The gallery was verified on both desktop and mobile layouts.

### You Party – I Pour Case Study

You Party – I Pour was populated with complete case-study content covering:

- Client booking requirements
- Full-stack application solution
- Public and administrative features
- Booking and scheduling workflows
- Authentication and third-party integration challenges
- Technical lessons learned
- Technology stack

Additional project imagery can be managed later through the Admin CMS.

### Venom-Sprint Case Study

The JavaScript Snake portfolio project was renamed publicly to:

```text
Venom-Sprint
```

Its existing project slug was preserved to avoid unnecessary URL and data changes.

The case study documents functionality verified from the actual application implementation, including:

- Canvas-based rendering
- Grid-based snake movement
- Keyboard controls
- Reverse-direction prevention
- Randomized food placement
- Snake growth
- Wall collision detection
- Self-collision detection
- Progressive speed increases
- Score tracking
- Persistent high scores with localStorage
- Restart controls
- Pause and resume
- Manual game ending
- Help modal

The case study intentionally avoids claiming functionality not present in the implementation.

The project's GitHub repository was connected to the case study, and the existing Venom-Sprint artwork was uploaded as its portfolio cover image.

### Cloudinary Image Workflow Validation

Phase 12 also exercised the image-management functionality built during Phase 7.

Verified operations include:

- Uploading a project cover
- Uploading non-cover gallery images
- Preserving a single project cover
- Deleting an existing Cloudinary image
- Removing its database metadata
- Uploading a corrected replacement image
- Retrieving ordered images through the public API
- Preventing Cloudinary `public_id` values from appearing in public responses

This provided an end-to-end validation of the image-management architecture before the Admin CMS is implemented.

### Responsive Case Study Design

The modal was tested on both desktop and mobile devices.

Desktop verification confirmed:

- Large contained modal presentation
- Internal scrolling
- Responsive cover images
- Two-column screenshot gallery
- Project metadata layout
- Technology badges
- External action buttons

Mobile verification confirmed:

- Responsive modal sizing
- Single-column screenshot gallery
- Readable case-study content
- Responsive cover images
- Accessible close controls
- Working external project links

No observed horizontal overflow or broken case-study layout was introduced.

### Phase 12 Validation

Client validation completed successfully:

```bash
npm run lint
npm run build
```

The final Phase 12 production build completed successfully with Vite.

The build transformed 51 modules and completed without errors.

Manual regression testing was completed for:

- VinoVault 2.0
- You Party – I Pour
- Venom-Sprint
- Modal opening
- Close button
- Escape-key closing
- Backdrop closing
- Body scroll locking
- Internal modal scrolling
- Keyboard focus trapping
- Focus restoration
- Project cover images
- Project galleries
- Technology rendering
- Conditional GitHub links
- Conditional live-site links
- Conditional gallery rendering
- Desktop responsive behavior
- Mobile responsive behavior

### Phase 12 Status

```text
Project detail service             ✅
Project detail API enhancement     ✅
Case-study modal                   ✅
Case-study API integration         ✅
Modal internal scrolling           ✅
Body scroll locking                ✅
Escape-key closing                 ✅
Backdrop closing                   ✅
Close-button behavior              ✅
Keyboard focus trap                ✅
Focus restoration                  ✅
Project metadata                   ✅
Technology stack                   ✅
Conditional GitHub links           ✅
Conditional live-site links        ✅
Project cover images               ✅
Project gallery                    ✅
Gallery captions                   ✅
Gallery alt text                   ✅
Cloudinary upload validation       ✅
Cloudinary delete validation       ✅
VinoVault case study               ✅
You Party – I Pour case study      ✅
Venom-Sprint case study            ✅
Desktop responsive testing         ✅
Mobile responsive testing          ✅
ESLint                             ✅
Production build                   ✅
```

Phase 12 completes the public portfolio's project case-study experience.

Visitors can now move from a concise project card into a detailed, API-driven case study without leaving the single-page portfolio, while project content, technologies, links, covers, and gallery images remain controlled by the PostgreSQL-backed application data layer.

Phase 13 builds the Resume and Contact experience.

---

## Phase 13 — Resume & Contact ✅

Phase 13 completes the public portfolio's Resume and Contact sections by integrating a developer-focused resume and connecting the public contact form to the existing Express and PostgreSQL backend.

### Developer Resume

A new developer-focused resume was created specifically for the portfolio.

The resume emphasizes:

- Full-stack web development
- JavaScript and Python
- React
- Node.js and Express
- Django and Django REST Framework
- PostgreSQL and relational database design
- REST API development
- JWT authentication
- CRUD application development
- Git and GitHub
- Responsive application development

The resume highlights three selected development projects:

1. VinoVault 2.0
2. You Party – I Pour
3. Venom-Sprint

The professional experience section preserves the transferable skills developed through 13+ years of pharmacy experience, including accuracy, organization, communication, responsibility, training, and working within complex real-world workflows.

The completed resume is a two-page PDF and is stored in the Vite public directory:

```text
client/public/Eli-Rodriguez-Resume.pdf
```

The public Resume section now provides two actions:

- View Resume
- Get In Touch

The View Resume action opens the PDF in a new browser tab.

Resume behavior was verified on both desktop and mobile devices.

### Contact Form Integration

The existing public Contact form was converted from a presentation-only form into a working API-driven form.

A dedicated client service was added:

```text
client/src/services/contactService.js
```

The service communicates with:

```text
POST /api/contact
```

The Contact component now manages controlled state for:

- Name
- Email
- Subject
- Message

The form also manages:

- Submission state
- Success feedback
- Error feedback
- Form clearing after successful submission
- Disabled submit behavior while sending

### Contact Validation

Client and server validation work together to protect the contact workflow.

Browser-level validation handles:

- Required name
- Required email
- Required message
- Basic email formatting

The Express API continues to enforce server-side validation for:

- Required name, email, and message
- Valid email formatting
- Name length
- Email length
- Subject length

API validation errors are returned to the React client and displayed directly in the Contact form.

The Subject field remains optional.

### Contact Database Validation

A successful contact submission was tested through the actual public React form.

The complete flow was verified:

```text
React Contact Form
        ↓
contactService.js
        ↓
POST /api/contact
        ↓
Express validation
        ↓
PostgreSQL
        ↓
Success response
        ↓
React success feedback
```

The submitted message was confirmed directly in the PostgreSQL `contact_messages` table.

The stored record correctly included:

- Name
- Email
- Subject
- Message
- Unread status
- Creation timestamp

New messages default to:

```text
is_read = false
```

This confirms the public Contact experience is connected end-to-end from the browser through the API and into persistent database storage.

### Contact Feedback UX

Success and error states were styled to match the existing dark portfolio design.

The Contact form now provides:

- A visible sending state
- Disabled submit behavior during submission
- Styled success feedback
- Styled error feedback
- Accessible `role="status"` success messaging
- Accessible `role="alert"` error messaging
- Form reset after successful submission
- Preservation of entered values after failed API submissions

The feedback interface was verified on both desktop and mobile devices.

### Phase 13 Validation

Client validation completed successfully:

```bash
npm run lint
npm run build
```

The final Phase 13 production build completed successfully with Vite 8.3.2.

The build transformed 52 modules and completed without errors.

Manual testing was completed for:

- Resume PDF loading
- View Resume action
- Get In Touch action
- Desktop resume behavior
- Mobile resume behavior
- Controlled Contact form fields
- Successful Contact submission
- Sending state
- Form reset after success
- Success feedback
- Server validation error feedback
- Browser required-field validation
- Browser email validation
- PostgreSQL message persistence
- Default unread message state
- Desktop Contact layout
- Mobile Contact layout

### Phase 13 Status

```text
Developer resume                    ✅
Two-page PDF                        ✅
Resume public asset                 ✅
View Resume action                  ✅
Get In Touch action                 ✅
Desktop resume testing              ✅
Mobile resume testing               ✅
Contact service                     ✅
Controlled form state               ✅
Contact API integration             ✅
Submission loading state            ✅
Disabled submission state           ✅
Success feedback                    ✅
Error feedback                      ✅
Browser required validation         ✅
Browser email validation            ✅
Server validation feedback          ✅
Successful database insertion       ✅
Unread message default              ✅
Desktop Contact testing             ✅
Mobile Contact testing              ✅
ESLint                              ✅
Production build                    ✅
```

Phase 13 completes the public portfolio's Resume and Contact experience.

Visitors can now review a dedicated developer resume and contact the developer directly through an API-driven form, while submitted messages are validated by the Express backend and persisted in PostgreSQL for management through the protected Admin CMS.

Phase 14 builds the Admin CMS Foundation.

---

## Phase 14 — Admin CMS Foundation ✅

Phase 14 establishes the protected React administration experience that will support portfolio content management throughout the remaining CMS phases.

The authentication backend and initial React routing infrastructure were created during earlier phases. Phase 14 builds on that foundation by completing the Admin CMS shell, dashboard, responsive navigation, login presentation, and authentication lifecycle validation.

### Admin Authentication Foundation

The Admin CMS uses the existing authentication endpoints:

```text
POST /api/auth/login
GET /api/auth/me
```

Successful authentication stores the administrator JWT in the browser and updates the shared React authentication context.

The authentication provider restores existing administrator sessions by retrieving the stored token and validating it through:

```text
GET /api/auth/me
```

Invalid or expired authentication removes the stored token and returns the application to an unauthenticated state.

### Protected Admin Routing

The Admin CMS is protected through the existing `ProtectedRoute` component.

Protected routes include:

```text
/admin
/admin/projects
/admin/projects/new
/admin/projects/:id/edit
/admin/technologies
/admin/messages
/admin/messages/:id
```

Unauthenticated attempts to access `/admin` or nested admin routes automatically redirect to:

```text
/admin/login
```

Protected routing was verified after logout on both desktop and mobile devices.

### Admin CMS Layout

The Admin CMS now uses a dedicated responsive application layout.

The desktop layout includes:

- Portfolio CMS branding
- Persistent sidebar navigation
- Dashboard navigation
- Projects navigation
- Technologies navigation
- Messages navigation
- Active navigation highlighting
- Signed-in administrator identity
- Log Out action
- View Portfolio action
- Dedicated admin content area

The CMS uses the same charcoal, navy, warm-white, and amber design system as the public portfolio while maintaining a distinct application-style interface.

### Admin Dashboard

The Admin Dashboard now provides a central landing page for portfolio management.

The dashboard includes navigation cards for:

- Projects
- Technologies
- Messages

Each card introduces the management area and links directly to its corresponding protected route.

The dashboard intentionally does not duplicate the management functionality scheduled for later phases.

Phase 15 will implement Project Management, while Phase 16 will implement Technologies, Images, and Messages management.

### Responsive Admin Experience

The Admin CMS was designed and tested for both desktop and mobile layouts.

On larger screens, the interface uses a persistent sidebar and dedicated main content area.

On smaller screens, the sidebar converts into a responsive top navigation area so the CMS remains usable without compressing the desktop layout.

Responsive testing confirmed:

- Desktop CMS layout
- Mobile CMS layout
- Responsive navigation
- Active navigation states
- Dashboard cards
- Administrator identity
- Logout controls
- View Portfolio access

### Admin Login Experience

The administrator login page was given a dedicated CMS design consistent with the rest of the portfolio.

The login interface includes:

- Portfolio CMS branding
- Username field
- Password field
- Required-field validation
- Username autocomplete support
- Current-password autocomplete support
- Submission loading state
- Disabled submission behavior while signing in
- Accessible authentication error feedback
- Return to Portfolio action

The login page was verified visually on both desktop and mobile devices.

### Authentication Lifecycle Validation

The complete administrator authentication lifecycle was manually tested.

The verified flow is:

```text
Admin Login
     ↓
POST /api/auth/login
     ↓
JWT stored in localStorage
     ↓
Authentication context updated
     ↓
Redirect to /admin
     ↓
Protected Admin CMS
     ↓
Browser refresh
     ↓
GET /api/auth/me
     ↓
Administrator session restored
```

Session restoration was verified after refreshing both:

```text
/admin
/admin/projects
```

The administrator remained authenticated and on the expected protected route.

Logout was also verified.

The logout flow removes the stored administrator token, clears the authentication context, and redirects to:

```text
/admin/login
```

Attempts to revisit protected routes after logout correctly redirect back to the login page.

### Phase 14 Validation

Client validation completed successfully:

```bash
npm run lint
npm run build
```

The final Phase 14 production build completed successfully with Vite 8.3.2.

The build transformed 52 modules and completed without errors.

Manual regression testing was completed for:

- Administrator login
- Login submission state
- Authentication error presentation
- Redirect to Admin Dashboard
- Administrator identity rendering
- Admin Dashboard
- Projects navigation
- Technologies navigation
- Messages navigation
- Active navigation states
- View Portfolio action
- Administrator logout
- Protected `/admin` route
- Protected nested admin routes
- Unauthenticated redirects
- Session restoration
- Refresh from `/admin`
- Refresh from `/admin/projects`
- Desktop Admin CMS layout
- Mobile Admin CMS layout
- Desktop Admin Login
- Mobile Admin Login

### Phase 14 Status

```text
Admin authentication integration      ✅
Admin login interface                 ✅
JWT authentication                    ✅
Authentication context                ✅
Session restoration                   ✅
Protected admin routes                ✅
Unauthenticated redirects             ✅
Admin CMS layout                      ✅
Desktop sidebar navigation            ✅
Mobile CMS navigation                 ✅
Active navigation states              ✅
Administrator identity                ✅
Admin Dashboard                       ✅
Projects navigation                   ✅
Technologies navigation               ✅
Messages navigation                   ✅
View Portfolio action                 ✅
Administrator logout                  ✅
Login loading state                   ✅
Authentication error feedback         ✅
Desktop responsive testing            ✅
Mobile responsive testing             ✅
ESLint                                ✅
Production build                      ✅
```

Phase 14 completes the protected Admin CMS foundation.

The portfolio now has a responsive administrative application shell with authentication, protected routing, session restoration, navigation, logout functionality, and a central dashboard ready for the portfolio-management workflows that follow.

Phase 15 will build the Project Management CMS.


---

## Phase 15 — Project Management CMS

Phase 15 transformed the Admin Projects area from placeholder pages into a complete project-management interface.

### Admin Project List

The protected `/admin/projects` page now loads all portfolio projects from the administrator API.

Each project card displays:

- Project title
- Project type
- Short description
- Published / unpublished state
- Featured state
- Project status
- Display order
- Project slug
- Edit action
- Delete action

Administrators can also navigate directly to the Add Project workflow.

### Create Project

The `/admin/projects/new` route now provides a complete project creation form.

Administrators can manage:

- Title
- Slug
- Short description
- Overview
- Problem
- Solution
- Features
- Challenges
- Lessons learned
- Project type
- Project status
- GitHub URL
- Live URL
- Display order
- Published state
- Featured state
- Technology assignments

Required project fields are enforced by both the client form and backend API.

### Edit Project

The `/admin/projects/:id/edit` route loads the existing project from the protected project-detail endpoint.

Existing project data is restored into the form, including:

- Case-study content
- Metadata
- Publishing state
- Featured state
- Display order
- Technology assignments

Saving changes updates the project through the protected administrator API and replaces its technology assignments with the currently selected technologies.

### Project Status

Project status uses controlled CMS options instead of unrestricted text entry:

- In Development
- Completed
- Maintained
- Archived

Status remains independent from the `published` and `featured` controls.

### Technology Assignment

Projects can be associated with technologies directly from the project form.

The project-detail API was expanded to return the technologies currently assigned to a project. This allows the edit form to automatically restore the correct technology selections.

Technology relationships are updated through:

`PUT /api/admin/projects/:id/technologies`

### Project Deletion

Administrators can delete projects from the project-management page.

Deletion requires browser confirmation before the request is sent.

The backend deletion workflow also removes associated Cloudinary project images when applicable before removing the project record.

### Responsive CMS

The project-management interface was tested on both desktop and mobile layouts.

The responsive interface includes:

- Stacked project cards on smaller screens
- Responsive project actions
- Responsive project form grids
- Responsive technology selection controls
- Mobile-friendly form actions

### CRUD Validation

A temporary Phase 15 project was used to verify the complete project lifecycle without modifying or deleting an existing portfolio project.

The following workflow passed:

`Create → Read → Edit → Reassign Technologies → Persist → Delete`

The temporary project was deleted after testing.

### Validation

Phase 15 passed:

- Project list testing
- Create project testing
- Edit project testing
- Project persistence testing
- Technology assignment testing
- Technology reassignment testing
- Delete confirmation testing
- Project deletion testing
- Desktop responsive testing
- Mobile responsive testing
- ESLint validation
- Vite production build validation

Phase 15 is complete.

Phase 16 will build the Technologies, Images & Messages CMS.