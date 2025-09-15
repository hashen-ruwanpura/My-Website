#!/bin/bash

# Start the frontend and backend simultaneously

# Start the backend
echo "Starting backend server..."
cd backend
source venv/bin/activate  # Activate the virtual environment
python3 app.py &
BACKEND_PID=$!
echo "Backend server started with PID: $BACKEND_PID"

# Start the frontend
echo "Starting frontend server..."
cd ../frontend
npm start &
FRONTEND_PID=$!
echo "Frontend server started with PID: $FRONTEND_PID"

# Function to handle script termination
function cleanup {
  echo "Stopping servers..."
  kill $BACKEND_PID
  kill $FRONTEND_PID
  exit
}

# Set up trap to call cleanup function when script is terminated
trap cleanup SIGINT SIGTERM

# Keep the script running
echo "Servers are running. Press Ctrl+C to stop both servers."
wait
