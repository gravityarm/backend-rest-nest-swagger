Note-Backend-REST-API-NestJS-Prisma


Installation

npm install 

# Setup docker

docker-compose up -d

# Apply database migrations: 

npx prisma migrate dev


# Seed data

npx prisma db seed

# Start the project 

npm run start:dev

# Swagger
Access the project  at http://localhost:3000/api