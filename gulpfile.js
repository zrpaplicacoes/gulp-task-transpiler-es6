var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    commonjsWrap = require('gulp-wrap-commonjs'),
    concat = require('gulp-concat'),
    jade = require('gulp-jade'),
    karma = require('karma');

var paths = {
    es6PathComponents: ['app/assets/javascripts/components/**/*.es6',
                        'lib/**/assets/javascripts/components/**/**.es6'],
    es6PathViews: 'app/assets/javascripts/views/**/*.es6',
    templatePath: ['app/assets/javascripts/components/**/*.jade',
                   'lib/**/**.jade'],
    builds: 'app/assets/javascripts/builds',
};


gulp.task('babel:views', function() {
  return gulp.src([paths.es6PathViews])
      .pipe(sourcemaps.init())
      .pipe(babel({modules: 'common', moduleIds: true, moduleRoot: ''}))
      .pipe(
          commonjsWrap({
            autoRequire: false,
            pathModifier: function (path) {
              path = path.replace(/.js$/, '')
                      .replace(/^.*\/views/, 'views')

              return path;
            }
          })
      )
      .pipe(concat('views.build.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.builds));
});

gulp.task('babel:components', function() {
  return gulp.src(paths.es6PathComponents)
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
      .pipe(gulp.dest(paths.builds));
});

gulp.task('jade:templates', function() {
  return gulp.src(paths.templatePath)
      .pipe(sourcemaps.init())
      .pipe(jade({
        client: true,
        pretty: true
      }))
      .pipe(
          commonjsWrap({
            autoRequire: false,
            pathModifier: function (path) {
              path = path.replace(/.js$/, '')
                      .replace(/^.*\/components/, 'templates')

              return path;
            },
            moduleExports: 'template()'
          })
      )
      .pipe(concat('templates.build.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.builds));
});

gulp.task('spec', function (done) {
  new karma.Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('js:compiler', function() {
  gulp.watch([paths.es6PathComponents], ['babel:components']);
  gulp.watch([paths.es6PathViews], ['babel:views']);
  gulp.watch([paths.templatePath], ['jade:templates']);
});

gulp.task('default', ['js:compiler', 'babel:components',
                      'babel:views', 'jade:templates']);
