var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');

// browser-sync задача для запуска сервера
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// Sass задача запустится после изменения любого SCSS файла и BrowserSync
// обновит браузеры
gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

 gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch(["scss/*.scss", "*.html", "js/*.js"], ['sass', reload]);
 });