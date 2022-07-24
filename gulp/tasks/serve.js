export const serve = () =>
  app.plugins.browserSync.init({
    server: {
      baseDir: app.path.serve,
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
      },
    },
  });

export const reload = (cb) => {
  app.plugins.browserSync.reload();
  cb();
};
