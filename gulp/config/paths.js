import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

// base folders
const buildFolder = "./dist";
const srcFolder = "./src";

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
    html: "./",
    img: "dist/images/",
  },
  watch: {
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    html: "./*.html",
    img: "src/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}",
  },
  serve: "./",
  clean: "./dist",
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
