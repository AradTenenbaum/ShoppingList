@echo off

REM Navigate to backend directory and building image
cd "backend"
echo Building backend image...
docker build -t shopping-list-backend .

REM Navigate to frontend directory and building image (It might take some time)
cd ".."
cd "frontend"
echo Building frontend image...
docker build -t shopping-list-frontend .

REM Start the application with docker compose
cd ".."
docker-compose up
