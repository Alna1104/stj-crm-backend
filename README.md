# STJ CRM Backend

Node.js + Express backend for STJ's CRM Dashboard.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

3. Run the server:
```bash
npm run dev
```

## API Routes

- `GET /api/customers`
- `POST /api/customers`
- `GET /api/customers/:id`
- `PUT /api/customers/:id`
- `DELETE /api/customers/:id`