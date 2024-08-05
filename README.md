# AEFEUP Website 🚀

## Tech Stack

- Nextjs 13
- React 18
- TypeScript
- Node 20 (use [NVM](https://github.com/nvm-sh/nvm) to manage node versions)

## Packages

- Payload CMS
- Framer Motion
- Lucide Icons


## ⚡ Installation

Here are the steps you need to follow to install the dependencies.

```bash
    pnpm install
```

Setup your environment variables with a database name and a password.

Now you just need to create the database with docker or use directly your local database. Thats up to you.

```bash
    ./start-database.sh
```

You can start the project on the local server

```bash
    pnpm run dev
 ```

It’ll start the template on [localhost:3000](http://localhost:3000).

## Project structure

- The `pages` directory contains all the pages of the project with app routing, as each file in this directory corresponds to a page.

- The `components` directory contains all the components used in the project.

- The `public` directory contains all the static files used in the project like images.

- The `collections` directory defines the schemas for the collections that will be managed in the Paylode dashboard.
