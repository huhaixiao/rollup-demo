# tsconfig

- `npx tsc --init`
- https://www.totaltypescript.com/tsconfig-cheat-sheet

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "lib": ["es2017", "dom"],
    "types": ["node"],
    "esModuleInterop": true,
    "moduleResolution": "node",
    "allowJs": true,
    "sourceMap": true,
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "noImplicitAny": true,
    "resolveJsonModule": true,
    "noUnusedLocals": true,
    "nodenext": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```
