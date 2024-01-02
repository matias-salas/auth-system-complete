# Authentication Sysyem

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Docker
- Docker Compose

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. **Clone the Repository**

Clone this repository to your local machine using:

git clone [https://github.com/DecentralizedChess/auth_system.git]


2. **Environment Variables**

Create a `.env` file in the project root directory and add the necessary environment variables:

```
SECRET_KEY=your_secret_key
DJANGO_ALLOWED_HOSTS=localhost
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_STORAGE_BUCKET_NAME=your_aws_storage_bucket_name
AWS_DEFAULT_ACL=your_aws_default_acl
DB_DATABASE=your_db_database
DB_PASSWORD=your_db_password
```

3. **Build and Run with Docker Compose**

Navigate to the project directory and start the services:

docker-compose up --build


This will build the `web` and `db` services and run them. The application should now be running at `http://localhost:8000`.

### Accessing the Database

To access the database:

1. The MariaDB database is exposed on port `3307`.
2. You can connect to it using the `DB_DATABASE` and `DB_PASSWORD` specified in your `.env` file.

### Additional Commands

- To stop the Docker containers:

docker-compose down


- To remove the volumes along with the containers:

docker-compose down -v
