import gulp from 'gulp';
import tsc from 'gulp-typescript';
import typescript from 'typescript';
import browserify from 'gulp-browserify';
import rename from 'gulp-rename';

let tsProject = tsc.createProject('tsconfig.json', {
  typescript
});

gulp.task('ts', () => {
  return gulp.src('./app/src/**/*.ts*')
    .pipe(tsc(tsProject))
    .pipe(gulp.dest('./app/dist/'));
});

gulp.task('browserify', ['ts'], () => {
  return gulp.src('./app/dist/app.js')
    .pipe(browserify({
        debug: true
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('watch', () => {
  gulp.watch(['./app/src/**', './app/index.html'], ['browserify']);
});

gulp.task('default', ['browserify']);