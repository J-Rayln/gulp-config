import gulpif from 'gulp-if';
import browserSync from 'browser-sync';
import rename from 'gulp-rename';
import replace from 'gulp-replace';

export const plugins = {
  if: gulpif,
  browserSync: browserSync,
  rename: rename,
  replace: replace,
};
