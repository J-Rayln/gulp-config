export const html = () =>
  app.gulp
    .src(app.path.src.html)
    // if isDev environment, then point to '*.css', else if in
    // isBuild environment, then point to '*.min.css'.
    .pipe(app.plugins.if(app.isDev, app.plugins.replace('.min.css', '.css')))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
