# Off-Grid & Bushcraft Equipment Shop

This project is a simple MERN stack web shop.

## Setup

### Backend
```bash
cd backend
npm install
npm run seed    # optional, insert sample products
npm run dev     # starts Express server on port 5000
```

### Frontend
```bash
cd frontend
npm install
npm run dev     # starts Vite dev server on port 5173
```

Both servers must run concurrently for full functionality. The frontend proxies API requests to `http://localhost:5000`.
