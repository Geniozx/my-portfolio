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

**Complete ✅**

### Phase 3 — Express Foundation

**Complete ✅**

### Phase 4 — Admin Authentication

**Complete ✅**

### Phase 5 — Technologies API

**Next**

Phase 5 will build the public and protected technology endpoints that will allow the portfolio to retrieve and manage its technology catalog.

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

Current API endpoints:

```text
GET  /api
GET  /api/health

POST /api/auth/login
GET  /api/auth/me
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
