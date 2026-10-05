CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  slug VARCHAR(150) UNIQUE NOT NULL,
  short_description TEXT NOT NULL,
  description TEXT,
  problem TEXT,
  solution TEXT,
  features TEXT,
  challenges TEXT,
  lessons_learned TEXT,
  project_type VARCHAR(50),
  status VARCHAR(50),
  github_url TEXT,
  live_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT FALSE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE technologies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  category VARCHAR(50),
  icon_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project_technologies (
  project_id INTEGER NOT NULL,
  technology_id INTEGER NOT NULL,

  PRIMARY KEY (project_id, technology_id),

  FOREIGN KEY (project_id)
    REFERENCES projects(id)
    ON DELETE CASCADE,

  FOREIGN KEY (technology_id)
    REFERENCES technologies(id)
    ON DELETE CASCADE
);


CREATE TABLE project_images (
  id SERIAL PRIMARY KEY,
  project_id INTEGER NOT NULL,
  image_url TEXT NOT NULL,
  public_id TEXT,
  alt_text VARCHAR(255),
  caption TEXT,
  is_cover BOOLEAN DEFAULT FALSE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (project_id)
    REFERENCES projects(id)
    ON DELETE CASCADE
);


CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(200),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

