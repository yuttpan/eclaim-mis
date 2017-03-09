var gulp = require('gulp');
 
// สร้าง task ที่มีชื่อว่า "siamhtml"

// เพิ่ม task "browser-sync" ให้ทำพร้อม default task
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('default', ['browser-sync'], function() {
 
    // เมื่อไฟล์ html หรือ css มีการเปลี่ยนแปลง ก็ให้รีเฟรช web browser
    gulp.watch(['**/*.html'], browserSync.reload);
    gulp.watch(['css/**/*.css'], browserSync.reload);
 
    // เมื่อไฟล์ scss มีการเปลี่ยนแปลง ก็ให้ทำ task "sass" 
   // gulp.watch("scss/**/*.scss", ['sass']);
});