CREATE TABLE IF NOT EXISTS users(
    user_id UUID PRIMARY KEY NOT NULL,
    user_fname VARCHAR(100) NOT NULL,
    user_lname VARCHAR(100) NOT NULL,
    user_email VARCHAR(100) UNIQUE NOT NULL,
    gender VARCHAR(6) NOT NULL CHECK(
                            gender='MALE' OR
                            gender='male' OR
                            gender='FEMALE' OR
                            gender='female'
    )

);