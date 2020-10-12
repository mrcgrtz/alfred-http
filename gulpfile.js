const gulp = require('gulp');
const clean = require('gulp-clean');
const copy = require('gulp-copy');
const replace = require('gulp-string-replace');
const {zip} = require('gulp-vinyl-zip');

gulp.task('cleanup', () => gulp.src('./build', {read: false, allowEmpty: true})
	.pipe(clean())
);

gulp.task('copy', () => gulp.src('./src/**/*')
	.pipe(copy('./build', {prefix: 1}))
);

gulp.task('build', gulp.series('cleanup', 'copy', () => gulp.src('./build/info.plist')
	.pipe(replace('%status-codes%', () => {
		// eslint-disable-next-line import/no-unresolved
		const data = require('./build/status-codes.json');
		return JSON.stringify(data);
	}))
	.pipe(gulp.dest('build'))
));

gulp.task('zip', () =>
	gulp.src('./build/**/*')
		.pipe(zip('http-status.alfredworkflow'))
		.pipe(gulp.dest('dist'))
);

gulp.task('default', gulp.series('build', 'zip', 'cleanup'));
