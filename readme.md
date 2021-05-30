

## React Project Starter

Simple alternative starter kit for React. Includes babel webpack configs to support IE11.


### Build project:

```

npm run build

```

### Run project:

```

npm run start

```

#### or

```

npm run start:hot

```


#### What's included:


- Webpack bundling

- A webpack base, dev & production configuration (thanks to **webpack-merge**)

-  **webpack-dev-server** (serves a localhost with watch and live reload)

- Babel transpiling via **babel-loader**

-  **css-loader** to handle css syntax, and **style-loader** to inject css into html

-  **Routing** with  **react-router-dom**. **Switch** and **Route** set up in AppRoutes.js. The index.js file takes care of the rest with **Router** wrapping the main App component. **createBrowserHistory()** is passed in. The Nav component is set up with **NavLink** components and has a fallback 404.

- Hot Module Reloading with **react-hot-loader** (updates components (using webSockets) without reloading the app and keeps the state of the app intact throughout). Set up as separate script in package.json.

- Analyze the production bundle with **webpack-bundle-analyzer**

- Optimize bundle size by serving some libraries, like react and react-dom via CDN in production, using Webpack's externals option and an env variable conditional in the index.html to add in CDNs for the production version.

- Cross-browser support for newer JS features with **@babel/polyfill** (imported to index.js)

- Using **@babel/polyfill** in conjunction with the **@babel/preset-env** preset, specific targets are set in the base config file to reduce the size of the core-js library. Analyze with the webpack-bundle-analyzer and customize browsers for project requirements.

- Use the following command to check versions (not dead, more than 2% market share):



```

npx browserslist "last 2 versions, not dead, not < 2%, 'ie 11'"

```

- Support for new React 16.6 features like React.lazy() and React.Suspense() with **@babel/plugin-syntax-dynamic-import**. Load modules only when needed and improve performance. Webpack creates a separate bundle for any lazy loaded module. Example in App.js.