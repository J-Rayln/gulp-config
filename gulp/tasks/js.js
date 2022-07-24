import concat from "gulp-concat";
import rename from "gulp-rename";
import uglify from "gulp-uglify";

export const js = () => {
  return app.gulp
    .src(app.path.src.js)
    .pipe(concat("scripts.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(app.gulp.dest(app.path.build.js));
};
