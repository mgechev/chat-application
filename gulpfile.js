var gulp = require('gulp');
var ts = require('gulp-typescript');
var typescript = require('typescript');

// make a task which runs this script
//  node node_modules/typescript/bin/tsc.js app/src/* --jsx 'react' --module commonjs


gulp.task('default', function () {
  var tsResult = gulp.src('./app/src/')
    .pipe(ts({
        typescript: typescript,
        noImplicitAny: true,
        jsx: 'react',
        out: 'output.js',
        module: 'commonjs'
      }));
  return tsResult.js.pipe(gulp.dest('./app/built/sadsa'));
});