export const html = () =>
  app.gulp
    .src(app.path.watch.html)
    // if we're in development, change the link reference back from
    // '*.min.css' to '*.css' so we can more easily read the CSS output
    .pipe(app.plugins.if(app.isDev, app.plugins.replace(".min.css", ".css")))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
