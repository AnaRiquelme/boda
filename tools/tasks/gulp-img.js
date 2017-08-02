// -----------------------------------------------
// Task for manage image project files
'use strict';

var gulp = require("gulp");

var tasksConfig = require("./gulp-config");

/**
 * build image files
 */
gulp.task("build-img", function() {
    return build();
});

function build() {
    // send images to output folder
    gulp.src(tasksConfig.sourceImageFiles).pipe(gulp.dest(tasksConfig.outputImageFolder));
}