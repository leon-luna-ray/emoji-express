CREATE DATABASE emoji_tracker_db;

CREATE TABLE emoji(
    emoji_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);