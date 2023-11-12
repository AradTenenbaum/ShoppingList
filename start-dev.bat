@echo off

REM Navigate to backend directory and install dependencies
cd "backend"
echo Installing backend dependencies...
start cmd /k "npm install && echo Starting backend... && npm run dev"

REM Navigate to frontend directory and install dependencies
cd ".."
cd "frontend"
echo Installing frontend dependencies...
start cmd /k "npm install && echo Starting frontend... && npm start"
