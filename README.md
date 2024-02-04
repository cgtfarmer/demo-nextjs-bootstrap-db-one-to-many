# Getting Started

### Installation

1. Clone this project
1. Run: `docker-compose run --rm app npm install`
1. Run: `docker-compose up -d` to bring up container(s)
1. Run: `docker-compose logs -f` to tail logs
1. Navigate to `http://localhost:3000/` in your browser

### Development

- Run: `docker-compose down; docker-compose up -d`
- Wait for stack to finish starting up

### Run Playwright Tests

Run: `docker-compose down; docker-compose up -d mysql; sleep 20; docker-compose run --rm app bash -c "npm install; npm run dev & sleep 5; npm run test-e2e-debug"`

## Run Playwright Tests (w/ Stack Reuse)

- Leave dev stack running
- Run in another terminal: `docker-compose exec app npm run test-e2e` (repeat as needed)
- Or: `docker-compose run --rm playwright npx playwright test --debug` (repeat as needed)
- Or: `docker-compose run --rm playwright npx playwright test file.test.js --debug` (repeat as needed)
- Or: `docker-compose run --rm playwright npx playwright test -g "create user" --debug` (repeat as needed)

### Frontend Endpoints

#### Home

/

#### States

/states
/states/:id

#### Admin States

/admin/states
/admin/states/new
/admin/states/:id
/admin/states/:id/edit

#### Admin Residents

/admin/residents
/admin/residents/new
/admin/residents/:id
/admin/residents/:id/edit


### Backend Endpoints

#### State CRUD

```
GET /api/states
POST /api/states (admin)

GET /api/states/:id
PUT /api/states/:id (admin)
DELETE /api/states/:id (admin)
```

#### Resident CRUD

```
GET /api/residents (admin)
GET /api/residents/:id (admin)
```

#### State Resident CRUD

```
GET /api/states/:id/residents
POST /api/states/:id/residents (admin)

GET /api/states/:id/residents/:id (admin)
PUT /api/states/:id/residents/:id (admin)
DELETE /api/states/:id/residents/:id (admin)
```

#### State Summary Retrieval

(Aggregated Resident data by State)

```
GET /api/states/summary
GET /api/states/:id/summary
```
