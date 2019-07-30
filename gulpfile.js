const gulp = require('gulp');
const {zip} = require('gulp-vinyl-zip');

gulp.task('default', () =>
	gulp.src('src/**/*')
		.pipe(zip('http-status.alfredworkflow'))
		.pipe(gulp.dest('dist'))
);
