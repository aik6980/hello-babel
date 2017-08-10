/*
Note:
 [29/12/2016] "diagnosticLogging" : true
	- launch.json, if we have problem with Breakpoints or Sourcemaps turn this on for more information (default is false)
 [29/12/2016] ".pipe(sourcemaps.write( ".", { sourceRoot : "../.."} ))"
	- "../../game", our sourcemap file is generated next to .js file, 
	however, we have to set the correct value for sourceRoot so VSCode can find the path of the original cource code (for example "game.ts")
	I'm not sure about other tools (IntelliJ) but this helps resolving the correct path for the current .vscode/launch.json
	(VSCode uses this file to attach/launch debugger)
*/

var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

// gulp.task("default", ['build_client', 'sass']);

// gulp.task("dev", ['default'], function () {
//     gulp.watch('src/js/client/**/*.*', ['build_client']);
//     gulp.watch('src/sass/**/*.*', ['sass']);
// });

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});


function babel_process( project_path, output_path, output_filename, srcmaps_sourceroot ) {
	
	var result 	= gulp.src(project_path)
				.pipe(sourcemaps.init())
				.pipe(babel())
				.pipe(concat(output_filename))
				.pipe(sourcemaps.write( ".", { sourceRoot : srcmaps_sourceroot } )) // supply sourceRoot so we can use sourcemaps in VSCode debugger
				.pipe(gulp.dest(output_path));
				
    return result;
}

gulp.task("build_client", ['client_babel', 'client_move']);
{
	var client_project_params = [ ["src/js/src/**/*.js", "src/js/src/**/*.jsx"], "public/js", "game.js", "../.."];

	gulp.task("client_babel", function() {
		return babel_process( client_project_params[0], client_project_params[1], client_project_params[2], client_project_params[3] ) 
	});
	
	gulp.task("client_move", function () {
		var result = gulp.src("src/html/**/*.html")
			.pipe(gulp.dest("public"));
		var result = gulp.src("src/js/libs/**/*.js")
			.pipe(gulp.dest("public/js/libs"));
		var result = gulp.src("src/js/shaders/**/*.*")
			.pipe(gulp.dest("public/js/shaders"));
	});
}

gulp.task("clean_client", function(){
	gulp.src('public/**', {read: false})
	.pipe(clean()); 
})