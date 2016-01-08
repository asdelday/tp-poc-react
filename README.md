tp-poc-react
=====================

Proof of concept.

### Table of Contents
1. [Installation](#installation)
2. [Server](#server)
3. [Developing](#start)
4. [Building](#building)
   * 4.1. [Normal build](#build)
   * 4.2. [Building with stats](#stats)
5. [Linting](#lint)
6. [Dependencies](#dependencies)

---

<div id="installation"></div>

### 1. Installation
Install all the dependencies for the project.

```
npm install
```

<div id="server"></div>

### 2. Server
Compiles the source scripts and store the generated bundles at build folder then run de server.

```
npm start
open http://localhost:8081
```

without compile the source scripts
```
npm run server
open http://localhost:8081
```

<div id="start"></div>

### 3. Developing
Creates a bundle and a develop server with the app and hot reload.

It will create a linter watcher in es6 files.

```
npm run dev
open http://localhost:8080
```


<div id="building"></div>

### 4. Building

<div id="build"></div>

#### 4.1 Normal build
The build process will generate the minified files for a production enviroment. 
These files will be saved into the build folder.

It will generate a *.js* file for the vendor libraries (installed as dependencies at the package.json) 
with **vendor.[hash].js** name.

The app *.js* file with **app.[hash].js** name.

And the styles with **styles.[hash].css**.

It will also generate the respective **map** file for each one.
```
npm run build
```

<div id="stats"></div>

#### 4.2 Building with stats
Building in this way, it will generate a **stats.json** file with webpack build details.

These files can be uploaded to [webpack analyse tool](http://webpack.github.io/analyse/) 
for a more detailed visual info.
```
npm run stats
```


<div id="lint"></div>

### 5. Linting

This boilerplate project includes React-friendly **ESLint** configuration.

```
npm run lint
```



<div id="dependencies"></div>

### 6. Dependencies

* [react](https://www.npmjs.com/package/react)
* [react-dom](https://www.npmjs.com/package/react-dom)

### TODO
* Implement Redux
