import gulp from "gulp";

// config
import { paths } from "./gulp/config/paths.js";
import { plugins } from "./gulp/config/plugins.js";

// import tasks files
import { clean } from "./gulp/tasks/clean.js";
import { html } from "./gulp/tasks/html.js";
import { images } from "./gulp/tasks/images.js";
import { js } from "./gulp/tasks/js.js";
import { serve } from "./gulp/tasks/serve.js";
import { scss } from "./gulp/tasks/scss.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  gulp: gulp,
  path: paths,
  plugins: plugins,
};

// the watch task
const watchTask = () => {
  gulp.watch(paths.watch.html, html);
  gulp.watch(paths.watch.scss, scss);
  gulp.watch(paths.watch.js, js);
  gulp.watch(paths.watch.img, images);
};

// main build task sequence
const mainTasks = gulp.parallel(scss, js, html, images);

// environment task sequences
const dev = gulp.series(clean, mainTasks, gulp.parallel(watchTask, serve));
const build = gulp.series(clean, mainTasks);

// export tasks (corresponding to scripts in package.json)
export { dev };
export { build };
export { clean };

// the default Gulp task
gulp.task("default", dev);
