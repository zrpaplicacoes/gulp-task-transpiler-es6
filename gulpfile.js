var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    commonjsWrap = require('gulp-wrap-commonjs'),
    concat = require('gulp-concat');

var paths = {
    es6Paths: ['src/js/**/*.es6'],
    jsPaths: 'src/js/builds',
};

gulp.task('babel:es6', function() {
  return gulp.src(paths.es6Paths)
      .pipe(sourcemaps.init())
      .pipe(babel({modules: 'common', moduleIds: true, moduleRoot: ''}))
      .pipe(
          commonjsWrap({
            autoRequire: false,
            pathModifier: function (path) {
              path = path.replace(/.js$/, '')
                      .replace(/^.*\/es6/, 'components')

              return path;
            }
          })
      )
      .pipe(concat('build.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.jsPaths));
});

gulp.task('js:compiler', function() {
  gulp.watch([paths.es6Paths], ['babel:es6']);
});

gulp.task('default', ['js:compiler', 'babel:es6']);
