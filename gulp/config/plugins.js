import browserSync from "browser-sync";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import newer from "gulp-newer";

export const plugins = {
  browserSync: browserSync,
  if: gulpif,
  newer: newer,
  replace: replace,
};
