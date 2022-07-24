export const html = () =>
  app.gulp
    .src(app.path.watch.html)
    // during the build process, the CSS gets minified and the file name
    // changes.  we need to update the link references with the new filename.
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.plugins.replace("main.css", "main.min.css")
      )
    )
    // if we're in development, change the link reference back to main.
    .pipe(
      app.plugins.if(app.isDev, app.plugins.replace("main.min.css", "main.css"))
    )
    .pipe(app.gulp.dest(app.path.build.html))
    // TODO: Fix perpetual reload when updating HTML files
    .pipe(app.plugins.browserSync.stream());
