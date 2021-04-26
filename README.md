# 2021-q2

TypeScript 3.8 Features for 2021 Team Goals

## [Type-Only Imports and Export](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export)


## [Stricter Assignability Checks to Unions with Index Signatures](https://devblogs.microsoft.com/typescript/announcing-typescript-3-8/#stricter-assignability-checks-to-unions-with-index-signatures)



Install dependencies

```
npm i -D typescript ts-node nodemon
```

- typescript is for typescript language itself and compiling tool
- ts-node is used to run typescript without compiling
- nodemon is used to run/restart node automatically when files changed


Initialize tsconfig.json

```
npx tsc --init
```

Added configuration
- setting `target` as `es6` helps to support es6 code
- setting `declaration` `true` generates corresponding '.d.ts' file
- setting `sourceMap` `true` generates corresponding '.map' file
- `outDir` redirects output structure to the directory
- `rootDir` specifies the root directory of input files
- setting `strict` `true` enables all strict type-checking options


- `npm run start` To run applicaton
- `npm run build` To build applicaton
- `npm run clean` To clean dist

