import gulp from 'gulp';

// config
import { path } from './gulp/config/paths.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  isDev: !process.argv.includes('--build'),
  isBuild: process.argv.includes('--build'),
  gulp: gulp,
  path: path,
  plugins: plugins,
};

// task modules
import { clean } from './gulp/tasks/clean.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { html } from './gulp/tasks/html.js';
import { images } from './gulp/tasks/images.js';
import { serve } from './gulp/tasks/serve.js';

const watcher = () => {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, images);
};

// task sequences
const mainTask = gulp.parallel(scss, js, html, images);
const build = gulp.series(clean, mainTask);
const dev = gulp.series(clean, mainTask, gulp.parallel(watcher, serve));
const devNoServe = gulp.series(clean, mainTask, watcher);

export { build, clean, dev, devNoServe };

// default gulp task
gulp.task('default', dev);
