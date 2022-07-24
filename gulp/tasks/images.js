import imagemin from "gulp-imagemin";

export const images = () =>
  app.gulp
    .src(app.path.src.img)
    // TODO #1 Only new images get processed
    // .pipe(app.plugins.newer(app.path.build.img))
    .pipe(app.plugins.if(app.isBuild, imagemin()))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.browserSync.stream());
