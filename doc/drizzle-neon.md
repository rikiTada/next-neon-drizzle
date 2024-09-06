### Applying changes to the database

You can generate migrations using `drizzle-kit generate` command and then run them using the `drizzle-kit migrate` command.

Generate migrations:

```zsh
npx drizzle-kit generate
```

Run migrations:

```zsh
npx drizzle-kit migrate
# npx drizzle-kit push
```

### Basic file structure

```tree
📦 <project root>
 ├ 📂 src
 │  ├ 📜 db.ts
 │  └ 📜 schema.ts
 ├ 📂 migrations
 │  ├ 📂 meta
 │  │  ├ 📜 _journal.json
 │  │  └ 📜 0000_snapshot.json
 │  └ 📜 0000_dry_richard_fisk.sql
 ├ 📜 .env
 ├ 📜 drizzle.config.ts
 ├ 📜 package.json
 └ 📜 tsconfig.json
```
