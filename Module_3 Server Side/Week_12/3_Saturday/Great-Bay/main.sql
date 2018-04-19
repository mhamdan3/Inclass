CREATE SCHEMA greatbay_DB;
USE greatbay_DB;

CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  itemname VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  startingbid INT DEFAULT 0,
  highestbid INT DEFAULT 0,
  PRIMARY KEY (id)
);





SELECT * FROM greatbay_DB.auctions;