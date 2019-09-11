# Banner Gallery

> Project description

## Related Projects

  - https://github.com/llaminati/Banner-Gallery
  - https://github.com/llaminati/Menu
  - https://github.com/llaminati/Reservations
  - https://github.com/llaminati/Reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seeding database

```sh
npm run create
npm run seed
```

### Starting webpack and run server

```sh
npm run build
npm run start
```

### RESTful CRUD APIs

# Retrieve a Listing:
```sh
app.get('/api/images/:id')
```
# Update a Listing
```sh
app.post('/api/images/:id')
```
# Create a Listing
```sh
app.put('/api/images/:id')
```
# Delete a Listing
```sh
app.delete('/api/images/:id')
```