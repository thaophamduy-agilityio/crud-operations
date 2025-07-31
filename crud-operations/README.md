# React Practice Two

## Author: Thao Pham Duy

## Overview

- This document provides information about React Practice.
- This practice creates a website for manipulating books (show list, filter by category, sort by Alphabetical order, sort by year ):

## Development Plan

- [Document](https://docs.google.com/document/d/12YqMU9d0gayWfQcl6OPpoXjF0Hx3_KVYq9dksoNM7gQ/edit?usp=sharing)
- [Design Components](https://docs.google.com/spreadsheets/d/14XN2r37VVO1StGk7VUnOlS3cj_rZucKF8p3b9SCor18/edit?usp=sharing)
- [Board](https://gitlab.asoft-python.com/thao.phamduy/react-training/-/boards/981)

## Information

- Timeline

  - Estimate time: 20 days

- Technical

  - HTML5/CSS3
  - React js (v 19.1.0)
  - Storybook (v 9.0.15)
  - Typescript (v 5.8.3)
  - Apply [Json server](https://www.npmjs.com/package/json-server)

- Editor: Visual Studio Code

## Development environment

- Node: v20.15.0
- pnpm: 9.5
- react-error-boundary: v6.0.0
- react-icons: v5.5.0
- axios: v1.10.0
- json-server: v1.0.0-beta.3
- concurrently: v9.2.0
- sass: v1.89.2
- prettier: v3.6.2
- eslint: v9.30.0
- vite: v7.0.0
- vite-plugin-environment: ^1.1.3,
- vite-tsconfig-paths: ^5.1.0

## Target

- Get familiar with JSX syntax and be able to implement React components based on real UI design
- Know how a React application works and accomplish a single React page
- Understand simple flow in React: Using React hooks
- Set up and get to know with Storybook which will assist to manage components system in the development environment

## Getting started

- Step 1: Clone repository with SSH

```
git clone git@gitlab.asoft-python.com:thao.phamduy/react-training.git
```

- Step 2: Go to folder react-training

```
cd react-training
```

- Step 3: Checkout branch

```
git checkout feat/crud-operations
```

- Step 4: Go to folder crud-operations

```
cd crud-operations
```

- Step 5: Install packages

```
pnpm i
```

- Step 6: Create file .env with content `VITE_BASE_URL = http://localhost:3003`

- Step 7: Run Storybook

```
pnpm storybook
```

- Step 8: Run project

```
pnpm start
```

- Step 9: Open browser and access the link http://localhost:5173
