# Gulp, Sass, and BrowserSync Config

My initial config for most of my web projects. The `src` folder contains basic placeholder files that can be used to make sure the Gulp config is installed and working as expected.

## To Get Started

1. Clone the repo or click "Use this template" in the upper right corner.<br><br> ![Use this template screenshot](/app/src/img/example.png)<br><br>
2. Run `npm install`

### `npm start`

> - Cleans the `./app/dist` folder (if it exists) to remove any old files.
> - Compiles scss files into CSS; sourcemaps are placed in the same directory.
> - Autoprefixes CSS files for browser compatibility.
> - Concatinates and minifies JavaScript.
> - Copies images from the src folder.
> - Copies all html files from `./app/src` to `./app/dist` folders.
> - Places all output into the `./app/dist` folder according to the [structure below](#this-config-assumes).
> - Watches all html, image, scss, and JavaScript files for changes then rebuilds all files and refreshes the browser.
>
> _Note: This command **does not** minify your CSS or optimize your images. Run_ `npm run build` _to accomplish those tasks._

### `npm run dev`

> This comand runs all tasks in `nmp start` with the following changes:
>
> - Does NOT launch BrowserSync.

### `npm run build`

> This command runs all tasks in `npm start` with the following changes:
>
> - Compiled and autoprefixed CSS files are minified and the `.min` suffix is added to the file. Sourcemaps are not created.
> - HTML files that reference the `*.min.css` file are updated to reference the new `*.css` file.
> - Image files are compressed and placed in the `./app/dist/img/` folder.
> - Browser-Sync is NOT launched.

### `npm run clean`

> - Removes the `dist` folder.

## This Config Assumes...

You can adjust the `source`, `build`, and `watch` file locations by updating the `./gulp/config/paths.js` file. If you leave it the way it is, this config assumes the structure below. Files in the `./app/src` directory are provided as placeholders only. Any structure created by adding files or directores within `./app/src/img` will be retained.

```
structure below is created by running start or build tasks
-------------------------------------------------------------------------------
app/
|
|- dist/                    # This dir created by Gulp
|  |- assets/
|     |- css/               # Compiled CSS from SCSS files in src dir
|        |- main.min.css    # Created during build
|        |- main.css        # Created during dev
|        |- main.css.map    # Created during dev
|     |- img/               # Optimized images (file structure retained)
|     |- js/                # Concatinated & minified JS files
|        |- scripts.min.js
|  |- index.html
|
|- src/
|  |- img/
|  |- js/
|     |- app.js             # 1st sample JavaScript file
|     |- test.js            # 2nd sample JS file (to make sure concat works)
|  |- scss/
|     |- _partial.scss      # Sass file with sample styles
|     |- main.scss          # Main Sass file (forwards _partial.scss)
|  |- index.html            # 1st sample HTML file (BrowserSync serves this)
|  |- newfile.html          # 2nd sample HTML file
|
gulp/                       # holds all Gulp tasks and config
|
|- config/
|  |- paths.js              # Paths to all src, dest, and watch files
|  |- plugins.js            # Plugin map
|- tasks/
|  |- clean.js              # Deletes dist/ folder
|  |- html.js               # Copies & serves HTML files
|  |- images.js             # Optimizes and copies images to dist/assets/img
|  |- js.js                 # Compiles and copies JS files to dist/assets/js
|  |- scss.js               # Compiles Sass files
|  |- serve.js              # Creates and serves Browser-Sync sserver
|
gulpfile.js                 # Main Gulp file
```

## Changelog

### 3.1.0

- Refactor to separate the app files from everything else. All `src` and `dist` files are now contained within the `./app` direcotory.
- Discontinued use of `del` module. Replaced with `rimraf`.
- Added `gulp-newer` functionality for image processing. If optimization is set to process during dev, only newly added images will be optimized when task runs during watch.
- Changed `gulp-postcss` and `cssnano` for `gulp-clean-css`.
- Changed `gulp-uglify` for `gulp-terser`.
- Added sourcemaps for JavaScript during dev (`npm start` or `npm run dev`) only.
- Added `npm run dev` command to allow dev without running BrowserSync

### 3.0.1

- Bug fix [#2](https://github.com/J-Rayln/gulp-config/issues/2)
- Enhancement fix [#3](https://github.com/J-Rayln/gulp-config/issues/3)
  - Moved HTML files into `src` folder. HTML now compiles into `dist` folder and CSS link references update from `*.min.css` to `*.css`.

### 3.0.0

- This is a major version change from my other package that splits tasks into modules instead of one long `gulpfile.js`.
