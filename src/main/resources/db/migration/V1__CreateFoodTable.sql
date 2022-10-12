CREATE TABLE IF NOT EXISTS meal(
 meal_id UUID PRIMARY KEY NOT NULL,
 meal_title VARCHAR(100) NOT NULL,
 meal_description VARCHAR(300) NOT NULL,
 meal_image VARCHAR(300) NOT NULL,
 meal_ingredients VARCHAR(300) NOT NULL,
 meal_cooking_time VARCHAR(100) NOT NULL
);