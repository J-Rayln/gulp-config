import rimraf from 'rimraf';

export const clean = (cb) => {
  return rimraf(app.path.clean, cb);
};
