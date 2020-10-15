DROP TABLE sm_users;
CREATE TABLE sm_users (
    user_key INT PRIMARY KEY IDENTITY (1, 1),
    id INT,
    name VARCHAR (150),
    gmail VARCHAR (150),
    gender VARCHAR (8),
    status VARCHAR (10),
    created_at VARCHAR (100),
    updated_at VARCHAR (100)
);