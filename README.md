# Taku.dev

This is a code repository of Takuya Iwashiro's developer blog.

It's composed from Strapi and Next.js.

## Architecture Diagram

![takudev-architecture-20230129](https://user-images.githubusercontent.com/54778335/215325220-b15c17ca-bb34-466b-853f-ef49312879ac.jpg)

## Structure

### Language

TypeScript

### CMS

Strapi

### Client

Next.js

### package manager

yarn v3

### monorepo

turborepo

### Test

- Jest
- Storybook
- reg-suit

### Linter, Formatter

- eslint
- stylelint
- styled-jsx-plugin-stylelint
- commitlint
- prettier

### CI/CD

Github Actions

## Setup local environment

### 1. Install asdf

[Getting Started - asdf](https://asdf-vm.com/guide/getting-started.html)

### 2. Install Node.js

```bash
asdf plugin add nodejs
asdf install
```

### 3. Install dependencies

```bash
yarn install
```

### 4. Setup environment variables

```bash
echo HOST=0.0.0.0\nPORT=1337\nAPP_KEYS=myApiKey\nAPI_TOKEN_SALT=myApiTokenSalt\nADMIN_JWT_SECRET=myAdminJwtSecret\nDATABASE_USERNAME=postgres\nDATABASE_PASSWORD=postgres >> packages/takudev-cms/.env
echo STAGE=development\nSTRAPI_HOST=http://127.0.0.1:1337\nNEXT_PUBLIC_BASE_URL=http://localhost:3000 >> packages/takudev-web/.env.local
```

### 5. Start PostgreSQL

```bash
cd packages/takudev-cms
docker-compose up -d
```

### 6. Start Strapi

```bash
cd packages/takudev-cms
yarn build
yarn develop
```

[Jump to Strapi admin page](http://localhost:1337/admin)

### 7. Start Next.js

```bash
cd packages/takudev-web
yarn dev
```

[Jump to blog's top page](http://localhost:3000)
