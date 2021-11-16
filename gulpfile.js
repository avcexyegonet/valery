const gulp = require('gulp');
const browserSync = require('browser-sync');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const terser = require('gulp-terser');
const webp = require('gulp-webp');
const newer = require('gulp-newer');
const babel = require('gulp-babel');
const hash = require('gulp-hash-filename');
const inject = require('gulp-inject-string');
const cleanDir = require('gulp-clean-dir');
const gulpif = require('gulp-if');
const sass = require('gulp-sass')(require('sass'));


const path = {
    build: {
        html: 'dist/',
        js: 'dist/js/',
        style: 'dist/css/',
        img: 'dist/images/',
        libs: 'dist/libs/',
        fonts: 'dist/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        style: 'src/scss/*.scss',
        img: 'src/images/**/*.*',
        imgWebp: 'src/images/media/',
        libs: 'src/libs/**/*.*',
        fonts: 'src/fonts/**/*.*'
    }
};

const hashTime = new Date().getTime();
const isProduction = process.argv[3] === '--production';

// HTML
const html = () => {
    return gulp.src(path.src.html)
        .pipe(fileinclude('@@'))
        .pipe(gulpif(isProduction, inject.replace('main.js', `main_${hashTime}.js`)))
        .pipe(gulpif(isProduction, inject.replace('style.css', `style_${hashTime}.css`)))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.stream());
}
exports.html = html;

// Style
const style = () => {
    return gulp.src(path.src.style)
        .pipe(cleanDir(path.build.style))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulpif(isProduction, hash({
            "format": `{name}_${hashTime}{ext}`
        })))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 2 version'] }))
        .pipe(gulp.dest(path.build.style))
        .pipe(browserSync.stream());
}
exports.style = style;

// Scripts
const scripts = () => {
    return gulp.src(path.src.js)
        .pipe(cleanDir(path.build.js))
        .pipe(gulpif(isProduction, hash({
            "format": `{name}_${hashTime}{ext}`
        })))
        .pipe(fileinclude('//'))
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(terser({
            toplevel: true
        }).on('error', function (e) { console.log(e.message) }))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream());
}
exports.scripts = scripts;

// Fonts
const fonts = () => {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(browserSync.stream());
}
exports.fonts = fonts;

// Libs
const libs = () => {
    return gulp.src(path.src.libs)
        .pipe(gulp.dest(path.build.libs))
        .pipe(browserSync.stream());
}
exports.libs = libs;

// Images
const images = () => {
    return gulp.src(path.src.img)
        .pipe(newer(path.build.img))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.stream());
}
exports.images = images;

// Convert to Webp
const imgWebp = () => {
    return gulp.src('src/images/media/**/*.*')
        .pipe(webp())
        .pipe(gulp.dest('dist/images/media/'))
}
exports.imgWebp = imgWebp;

// Images + Fonts + Libs
const media = gulp.parallel(images, fonts, libs);

// Media
exports.media = media;

// Watch
const watch = () => {
    browserSync.init({
        server: {
            baseDir: path.build.html
        }
    });

    gulp.watch('src/**/**/*.html', html)
    gulp.watch('src/js/**/*.js', scripts)
    gulp.watch('src/scss/**/*.scss', style)
    gulp.watch('src/images/**/*.*', images)
    gulp.watch('src/fonts/**/*.*', fonts)
}
exports.watch = watch;

// Build
const build = gulp.parallel(html, style, scripts, media);
exports.build = build;

// Default
exports.default = gulp.series(watch)
