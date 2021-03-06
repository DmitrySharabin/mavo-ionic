const gulp = require("gulp");
const babel = require("gulp-babel");
const minify = require("gulp-babel-minify");
const injectVersion = require("gulp-inject-version");
const rename = require("gulp-rename");

const versionOptions = {
	replace: /%%VERSION%%/g
};

gulp.task("inject-version", function() {
	return gulp
		.src("src/mavo-ionic.js")
		.pipe(injectVersion(versionOptions))
		.pipe(gulp.dest("dist"));
});

gulp.task("transpile", function() {
	return gulp
		.src("src/mavo-ionic.js")
		.pipe(
			babel({
				presets: [
					[
						"@babel/env",
						{
							targets: {
								browsers: ["last 4 versions", "IE 11"]
							}
						}
					]
				],
				compact: false
			})
		)
		.pipe(injectVersion(versionOptions))
		.pipe(rename({ extname: ".es5.js" }))
		.pipe(gulp.dest("dist"));
});

gulp.task("minify", function() {
	return gulp
		.src("src/mavo-ionic.js")
		.pipe(minify())
		.pipe(rename({ extname: ".min.js" }))
		.pipe(gulp.dest("dist"));
});

gulp.task("minify-es5", function() {
	return gulp
		.src("src/mavo-ionic.js")
		.pipe(
			babel({
				presets: [
					[
						"@babel/env",
						{
							targets: {
								browsers: ["last 4 versions", "IE 11"]
							}
						}
					]
				],
				compact: false
			})
		)
		.pipe(minify())
		.pipe(rename({ extname: ".es5.min.js" }))
		.pipe(gulp.dest("dist"));
});

function css(dest = ".") {
	gulp.src("src/mavo-ionic.css").pipe(gulp.dest(dest));
}

gulp.task("copyCSS", function(cb) {
	css("dist");
	cb();
});

gulp.task("default", function() {
	css();
	return gulp
		.src("src/mavo-ionic.js")
		.pipe(
			babel({
				presets: [
					[
						"@babel/env",
						{
							targets: {
								browsers: ["last 4 versions", "IE 11"]
							}
						}
					]
				],
				compact: false
			})
		)
		.pipe(minify())
		.pipe(gulp.dest("."));
});

exports.build = gulp.parallel(
	"default",
	"inject-version",
	"transpile",
	"minify",
	"minify-es5",
	"copyCSS"
);
