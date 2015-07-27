var gulp = require('gulp');
var ts = require('gulp-typescript');
var typescript = require('typescript');
var browserify = require('gulp-browserify');
var run = require('gulp-run');

// make a task which runs this script
//  node node_modules/typescript/bin/tsc.js app/src/* --jsx 'react' --module commonjs

gulp.task('default', function () {
  var tsResult = gulp.src('app/src/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'output.js'
      }));
  return tsResult.js.pipe(gulp.dest('app/built/local'));
});

gulp.task('build-ts', function () {
  run('node node_modules/typescript/bin/tsc.js app/src/* --jsx \'react\' --module commonjs')
    .exec();
});

gulp.task('browserify', function () {
  return gulp.src(['app/src/app.js'])
   .pipe(browserify())
   .pipe(gulp.dest('app/dist/'));
});