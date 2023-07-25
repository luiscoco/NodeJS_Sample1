# NodeJS_Sample1

## How to run the application
Run the command:

```
node index.js
```

## How to run the test
To run the test type the command:

```
npm run test
```

## How to build the application

To build the application type the command:

```
npm run build
```

## This is the build.yml file for the github actions
This is the source code for the continuous integration with github actions

```yml
name: Node.js CI

on:
  push:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'  # Replace with your desired Node.js version

    - name: Install dependencies
      run: npm install

    - name: Build
      run: npm run build

    - name: Run tests
      run: npm test
```
