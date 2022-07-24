# Gulp Config

My Gulp config for most of my web projects. The `src` folder contains basic placeholder files that can be used to make sure the Gulp config is installed and working as expected.

## To Get Started

1. Clone the repo or click "Use this template" in the upper right corner.<br><br> ![Use this template screenshot](/src/img/example.png)<br><br>
2. Run `npm install`

### `npm start`

> - Cleans the `dist` folder (if it exists) to remove any old files.
> - Compiles scss files into CSS. Sourcemaps are placed in the same directory.
> - Autoprefixes CSS files for browser compatibility.
> - Concatinates and minifies JavaScript.
> - Copies images from the src folder.
> - Places all output into the `dist` folder.
> - Watches all html, image, scss, and JavaScript files for changes then rebuilds all files and refreshes the browser.
>
> _Note: This command **does not** minify your CSS or optimize your images. Run_ `npm run build` _to accomplish those tasks._

### `npm run build`

> This command runs all tasks in `npm start` with the following chagnes:
>
> - Compiled and autoprefixed CSS files are minified and the `.min` suffix is added to the file. Sourcemaps are not created.
> - HTML files that reference the `main.css` file are updated to reference the new `main.min.css` file.
> - Image files are compressed and placed in the `dist` folder.
> - Browser-Sync is NOT launched.

### gulp clean

> Removes the `dist` folder.

## This Config Assumes...

You can adjust the source, destination, and watch file locations by updating the `./gulp/config/paths.js` file. If you leave it the way it is, this config assumes the structure below. Files in the `src` directory are provided as placeholders only. Any structure created by adding files or directores within `img`, will be retained.

```
structure below is created by running start or build tasks
-----------------------------------------------------------------------------------
|- dist/
   |- css/
      |- main.css           # created during dev only
         main.min.css       # created during build only
      |- main.css.maap      # created during dev only
   |- img/                  # Optimized images (file structure retained)
   |- js/                   # Compiled and minified JavaScript files

-----------------------------------------------------------------------------------
structure below is the core config and sample files
-----------------------------------------------------------------------------------
|- gulp/                    # holds all Gulp tasks and config
   |- config/
      |- paths.js           # Paths to all src, dest, and watch files
      |- plugins.js         # Plugin map
   |- tasks/
      |- clean.js           # Deletes dist/ folder
      |- html.js            # Copies & serves HTML files
      |- images.js          # Optimizes and copies image files to dist/ directory
      |- js.js              # Compiles and copies JS files to dist/ directory
      |- scss.js            # Compiles Sass files
      |- serve.js           # Creates and serves Browser-Sync sserver
|
|- src/                     # All source files
   |- img/                    - subfolders in these
      |- example.png            directories are OK and will
      |- image1.png             be automatically copied
   |- js/
      |- more-scripts.js
      |- scripts.js
   |- scss/
      |- main.scss
      |- _partial.scss
|- gulpfile.js              # Main Gulp file that runs all tasks
```
