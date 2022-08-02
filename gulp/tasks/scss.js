import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoPrefixer from 'gulp-autoprefixer';
import purgecss from 'gulp-purgecss';
import cssMinify from 'gulp-clean-css';

const sass = gulpSass(dartSass);

export const scss = () =>
  app.gulp
    // only build sourcemaps if in development
    .src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(sass())
    // purge unused CSS during production
    .pipe(
      app.plugins.if(app.isBuild, purgecss({ content: [app.path.src.html] }))
    )
    .pipe(autoPrefixer('last 2 versions'))
    // minify CSS during production
    .pipe(app.plugins.if(app.isBuild, cssMinify()))
    // if we minify, add the '.min' suffix to the filename
    .pipe(app.plugins.if(app.isBuild, app.plugins.rename({ suffix: '.min' })))
    .pipe(app.gulp.dest(app.path.build.scss, { sourcemaps: '.' }))
    .pipe(app.plugins.browserSync.stream());
