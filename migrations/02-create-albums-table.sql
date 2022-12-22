  CREATE TABLE Albums (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  artistId INT REFERENCES Artists(id) NOT NULL
/*   CONSTRAINT fk_Artists_Albums FOREIGN KEY(artistId) REFERENCES Artists(id) */
  );