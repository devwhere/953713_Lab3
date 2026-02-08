CREATE TABLE events (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  category VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255),
  date DATE,
  time TIME,
  pets_allowed BOOLEAN,
  organizer VARCHAR(255)
);