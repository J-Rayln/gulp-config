import terser from 'gulp-terser';
import concat from 'gulp-concat';

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(concat('scripts.min.js'))
    .pipe(
      terser({
        toplevel: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.js, { sourcemaps: '.' }))
    .pipe(app.plugins.browserSync.stream());
};
