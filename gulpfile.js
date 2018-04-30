const
  gulp = require('gulp'),
  webpack = require('webpack-stream'),
  clean = require('gulp-clean'),
  sass = require('gulp-sass'),
  cleanCss = require('gulp-clean-css'),

  src = './src',
  dest = './docs/test'
;

gulp.task('default', ['build:webpack', 'build:move', 'build:css', 'move:images', 'move:fonts']);

gulp.task('watch', ['build:webpack', 'build:move', 'build:css', 'move:images', 'move:fonts'], function () {
  gulp.watch(src + '/assets/css/**/*css', ['build:css']);

  gulp.watch(src + '/assets/img/**/*', ['move:images']);

  gulp.watch(src + '/assets/fonts/**/*', ['move:fonts']);

  let filesToMove = [
    src + '/index.html',
    src + '/manifest.json',
    src + '/serviceworker.js',
    src + '/apiomat/apiomat.js',
  ];
  gulp.watch(filesToMove, ['build:move']);

  gulp.watch(src + '/App.vue', ['build:webpack']);
  gulp.watch(src + '/components/**/*', ['build:webpack']);
  gulp.watch(src + '/utils/**/*', ['build:webpack']);

  process.on('SIGINT', function () {
    // setTimeout(function() {
    process.exit(1);
    // }, 500);
  });
});

gulp.task('build:webpack', ['clean:webpack'], function() {
  return gulp.src(src + '/main.js')
    .pipe(webpack({
      output: {
        filename: 'main.js',
      },
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
      }
    }))
    .pipe(gulp.dest(dest));
});

gulp.task('clean:webpack', function () {
  return gulp.src(dest + '/*main.js', {read: false})
    .pipe(clean());
});

gulp.task('build:move', ['clean:move'], function() {
  let filesToMove = [
    src + '/index.html',
    src + '/manifest.json',
    src + '/serviceworker.js',
    src + '/apiomat/apiomat.js',
  ];

  return gulp.src(filesToMove)
    .pipe(gulp.dest(dest));
});

gulp.task('clean:move', function () {
  let filesToRemove = [
    dest + '/index.html',
    dest + '/manifest.json',
    dest + '/serviceworker.js',
    dest + '/apiomat.js',
  ];

  return gulp.src(filesToRemove, {read: false})
    .pipe(clean());
});

gulp.task('move:images', ['clean:images'], function() {
  return gulp.src(src + '/assets/img/**/*')
    .pipe(gulp.dest(dest + '/assets/img'));
});

gulp.task('clean:images', function () {
  return gulp.src(dest + '/assets/img', {read: false})
    .pipe(clean());
});

gulp.task('move:fonts', ['clean:fonts'], function() {
  return gulp.src(src + '/assets/fonts/**/*')
    .pipe(gulp.dest(dest + '/assets/fonts'));
});

gulp.task('clean:fonts', function () {
  return gulp.src(dest + '/assets/fonts', {read: false})
    .pipe(clean());
});

gulp.task('build:css', ['clean:css'], function () {
  return gulp.src(src + '/assets/css/main.scss')
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest(dest + '/assets/css'));
});

gulp.task('clean:css', function () {
  return gulp.src(dest + '/assets/css', {read: false})
    .pipe(clean());
});