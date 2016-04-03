var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    commonjsWrap = require('gulp-wrap-commonjs'),
    concat = require('gulp-concat');

var paths = {
    es6Paths: ['src/js/**/*.es6'],
    jsPaths: 'src/js/builds/build.js',
};

gulp.task('babel:components', function() {
  return gulp.src(paths.es6Paths)
      .pipe(sourcemaps.init())
      .pipe(babel({modules: 'common', moduleIds: true, moduleRoot: ''}))
      .pipe(
          commonjsWrap({
            autoRequire: false,
            pathModifier: function (path) {
              path = path.replace(/.js$/, '')
                      .replace(/^.*\/components/, 'components')

              return path;
            }
          })
      )
      .pipe(concat('components.build.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.jsPaths));
});

gulp.task('js:compiler', function() {
  gulp.watch([paths.es6Paths], ['babel:components']);
});

gulp.task('default', ['js:compiler', 'babel:components']);
