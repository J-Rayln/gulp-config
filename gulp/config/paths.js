import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

// define paths for each funciton
export const paths = {
  src: {
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    html: "./*.html",
    img: "src/img/**/*.{jpg,jpeg,png,gif,webp,ico}",
    svg: "src/img/**/*.svg",
  },
  build: {
    scss: "dist/css/",
    js: "dist/js/",
    html: "dist/",
    img: "dist/img/",
  },
  watch: {
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    html: "src/**/*.html",
    img: "src/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}",
  },
  clean: "./dist",
  rootFolder: rootFolder,
};
