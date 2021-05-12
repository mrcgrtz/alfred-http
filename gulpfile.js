// Gulp and its plugins
import gulp from 'gulp';
import clean from 'gulp-clean';
import copy from 'gulp-copy';
import replace from 'gulp-string-replace';
import vinyl from 'gulp-vinyl-zip';

// Data
import statusCodes from './src/status-codes.js';

gulp.task('cleanup', () => gulp.src('./build', {read: false, allowEmpty: true})
	.pipe(clean())
);

gulp.task('copy', () => gulp.src('./src/**/*')
	.pipe(copy('./build', {prefix: 1}))
);

gulp.task('build', gulp.series('cleanup', 'copy', () => gulp.src('./build/info.plist')
	.pipe(replace('%status-codes%', () => JSON.stringify(statusCodes)))
	.pipe(gulp.dest('build'))
));

gulp.task('zip', () =>
	gulp.src('./build/**/*')
		.pipe(vinyl.zip('http-status.alfredworkflow'))
		.pipe(gulp.dest('dist'))
);

gulp.task('default', gulp.series('build', 'zip', 'cleanup'));
