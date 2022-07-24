import autoprefixer from "gulp-autoprefixer";
import cssnano from "cssnano";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import postcss from "gulp-postcss";
import purgecss from "gulp-purgecss";
import rename from "gulp-rename";

const sass = gulpSass(dartSass);

export const scss = () =>
  app.gulp
    // only build sourcemaps if running the dev environment
    .src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(sass())
    // purge unused CSS during production
    .pipe(app.plugins.if(app.isBuild, purgecss({ content: ["*.html"] })))
    .pipe(autoprefixer("last 2 versions"))
    // only minify if running build
    .pipe(app.plugins.if(app.isBuild, postcss([cssnano()])))
    // if we minify, chnage the filename to reflect that
    .pipe(app.plugins.if(app.isBuild, rename({ suffix: ".min" })))
    .pipe(app.gulp.dest(app.path.build.scss, { sourcemaps: "." }))
    .pipe(app.plugins.browserSync.stream());
