export const serve = () =>
  app.plugins.browserSync.init({
    server: {
      baseDir: app.path.build.html,
      port: 3000,
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
      },
    },
  });
