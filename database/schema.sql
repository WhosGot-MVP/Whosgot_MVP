CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(200)
);

CREATE TABLE requests (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50),
  location VARCHAR(100),
  tag VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
