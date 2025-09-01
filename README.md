# WildernessHub

WildernessHub is a full MEAN stack web shop for **Off-Grid & Bushcraft Equipment**.

## Setup

### Backend
```bash
cd backend
npm install
npm run seed    # insert sample products
npm run dev     # starts Express server on port 5000
```

### Frontend
```bash
cd frontend
npm install
ng serve        # starts Angular dev server on port 4200
```

Both servers must run concurrently. The Angular app proxies API requests to `http://localhost:5000`.
