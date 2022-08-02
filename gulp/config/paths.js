// This file contains pathing for the app

// define base directories.  do not include trailing slash
const baseSrcDir = 'app/src';
const baseBuildDir = 'app/dist';
// leave this blank if you want assets at the top level of your dist directory
const assetsDir = '/assets';

export const path = {
  src: {
    html: `${baseSrcDir}/**/*.html`,
    scss: `${baseSrcDir}/scss/**/*.scss`,
    js: `${baseSrcDir}/js/**/*.js`,
    img: `${baseSrcDir}/img/**/*.{jpg,jpeg,png,gif,wepb,ico}`,
  },
  build: {
    html: `${baseBuildDir}/`,
    scss: `${baseBuildDir}${assetsDir}/css/`,
    js: `${baseBuildDir}${assetsDir}/js/`,
    img: `${baseBuildDir}${assetsDir}/img/`,
  },
  watch: {
    html: `${baseSrcDir}/**/*.html`,
    scss: `${baseSrcDir}/scss/**/*.scss`,
    js: `${baseSrcDir}/js/**/*.js`,
    img: `${baseSrcDir}/img/**/*.{jpg,jpeg,png,gif,wepb,ico,svg}`,
  },
  clean: baseBuildDir,
};
