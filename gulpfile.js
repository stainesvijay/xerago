const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const browsersync = require('browser-sync').create();

function scssTask(){
  return src('src/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist/css', { sourcemaps: '.' }));
}
function scssFontTask(){
  return src('src/scss/font-awesome.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist/css', { sourcemaps: '.' }));
}

function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

function watchTask(){
  watch('*.html', browsersyncReload);
  watch(['src/scss/**/*.scss'], series([scssTask, scssFontTask], browsersyncReload));
}

exports.default = series(
  scssTask,
  scssFontTask,
  browsersyncServe,
  watchTask
);