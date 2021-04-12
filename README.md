# How to's

## Steps to run app locally

```bash
npm i
docker-compose up -d
npm start
```

## Endpoints to hit

### Service using the interceptor

localhost:3000/users/interceptor

### Service using the filter

localhost:3000/users/filter

### Payload for testing error

```json
{
  "user_id": "123e4567",
  "first_name": "Mitch",
  "status": "ACTIVE"
}
```
