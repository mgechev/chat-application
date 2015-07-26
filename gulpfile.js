var gulp = require('gulp');
var ts = require('gulp-typescript');

var typescript = require('typescript');
console.log(typescript.version); // it says 1.5.3

gulp.task('default', function () {
  var tsResult = gulp.src('./app/src/**/test.ts')
    .pipe(ts({
        typescript: typescript,
        noImplicitAny: true,
        jsx: 'react',
        out: './output.js',
        module: 'commonjs'
      }));
  return tsResult.js.pipe(gulp.dest('./app/built/'));
});