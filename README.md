# Pokedex

pokedex using pg (PostgreSQL) package with a nodeJS / Express / EJS app

## How to run

Install dependencies

```cmd
npm i
```

Create DB (with postgres superuser)

```cmd
createdb <dbname>
```

Seed DB

```cmd
psql -U <user> -d <dbname> -f data/create_pokemon.sql
```

Create `.env`

```cmd
PORT=3000
PGURL="postgresql://user:mdp@localhost:5432/db"
```

Start server (dev)

```cmd
npm run dev
```

Start server (prod)

```cmd
npm start
```

Re-compile scss

```cmd
npm run sass
```
