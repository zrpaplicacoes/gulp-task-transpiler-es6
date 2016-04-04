var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    commonjsWrap = require('gulp-wrap-commonjs'),
    concat = require('gulp-concat');

var paths = {
    es6Paths: ['src/js/**/*.es6'],
    jsPaths: 'src/js/builds',
};

gulp.task('babel:es6', function() {
  return gulp.src(paths.es6Paths)
      .pipe(babel({presets: ['es2015']}))
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
      .pipe(uglify())
      .pipe(concat('build.js'))
      .pipe(gulp.dest(paths.jsPaths));
});

gulp.task('js:compiler', function() {
  gulp.watch([paths.es6Paths], ['babel:es6']);
});

gulp.task('default', ['js:compiler', 'babel:es6']);
