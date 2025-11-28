#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Portfolio Application Startup${NC}"
echo -e "${BLUE}========================================${NC}"

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Check if virtual environment exists
if [ ! -d "$SCRIPT_DIR/backend_myportfolio/venv" ]; then
    echo -e "${RED}Error: Virtual environment not found!${NC}"
    echo -e "${YELLOW}Please run: cd backend_myportfolio && python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt${NC}"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "$SCRIPT_DIR/myportfolio/node_modules" ]; then
    echo -e "${RED}Error: node_modules not found!${NC}"
    echo -e "${YELLOW}Please run: cd myportfolio && npm install${NC}"
    exit 1
fi

# Start Backend
echo -e "\n${GREEN}[1/2] Starting Django Backend...${NC}"
cd "$SCRIPT_DIR/backend_myportfolio"
source venv/bin/activate
python3 manage.py runserver 2>&1 | sed 's/^/[BACKEND] /' &
BACKEND_PID=$!
echo -e "${GREEN}✓ Backend starting on http://localhost:8000 (PID: $BACKEND_PID)${NC}"

# Wait for backend to start
sleep 3

# Start Frontend
echo -e "\n${GREEN}[2/2] Starting React Frontend...${NC}"
cd "$SCRIPT_DIR/myportfolio"
npm run dev 2>&1 | sed 's/^/[FRONTEND] /' &
FRONTEND_PID=$!
echo -e "${GREEN}✓ Frontend starting on http://localhost:5173 (PID: $FRONTEND_PID)${NC}"

echo -e "\n${BLUE}========================================${NC}"
echo -e "${GREEN}✓ Both servers are running!${NC}"
echo -e "${BLUE}========================================${NC}"
echo -e "  Frontend:  ${YELLOW}http://localhost:5173${NC}"
echo -e "  Backend:   ${YELLOW}http://localhost:8000${NC}"
echo -e "  Admin:     ${YELLOW}http://localhost:8000/admin${NC}"
echo -e "${BLUE}========================================${NC}"
echo -e "\n${RED}Press Ctrl+C to stop both servers${NC}\n"

# Function to cleanup on exit
cleanup() {
    echo -e "\n${YELLOW}Shutting down servers...${NC}"
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo -e "${GREEN}✓ Servers stopped${NC}"
    exit 0
}

# Trap Ctrl+C
trap cleanup INT TERM

# Wait for processes
wait
