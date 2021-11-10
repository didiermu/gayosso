/* ======================================================================================================
 * Plugins utilizados
 * ======================================================================================================*/
const gulp = require("gulp");
const sass = require("gulp-sass");
const cssmin = require("gulp-cssmin");
const autoprefixer = require("gulp-autoprefixer");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const uglifyes = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const pug = require("gulp-pug");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("imagemin-webp");
const extReplace = require("gulp-ext-replace");
const watch = require("gulp-watch");
const purgecss = require("gulp-purgecss");

/* ======================================================================================================
 * Tarea PUG
 * ======================================================================================================*/

gulp.task("pug", () => {
  return (
    gulp
      .src(["./src/pug/*.pug", "!./src/pug/includes"])
      .pipe(
        pug({
          pretty: true,
        })
      )
      // .pipe(rewriteImagePath({
      //     path: "build/images",
      // }))
      .pipe(gulp.dest("./dist/"))
  );
});

/* ======================================================================================================
 * Tarea sobre los Estilos SCSS
 * ======================================================================================================*/

gulp.task("sass", () => {
  return gulp
    .src("./src/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      cssmin().on("error", function (err) {
        console.log(err);
      })
    )

    .pipe(
      purgecss({
        content: ["./src/**/*.pug", "./src/js/**/**.js"],
        css: ["./dist/css/styles.min.css"],
      })
    )

    .pipe(autoprefixer({ browsers: ["last 2 versions"], cascade: false }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./src/css/"))
    .pipe(notify({ title: "SCSS", message: "OK" }))
    .pipe(browserSync.stream());
});

/* ======================================================================================================
 * Tarea sobre css minify
 * ======================================================================================================*/

gulp.task("minifyCSS", () => {
  return gulp
    .src("./src/css/*.css")

    .pipe(cssmin())
    .pipe(concat("styles.min.css"))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browserSync.stream());
});

/* ======================================================================================================
 * Tarea sobre minify image
 * ======================================================================================================*/
gulp.task("img", () => {
  gulp
    .src("./src/img/**/**.*")
    // .pipe(imagemin())
    .pipe(gulp.dest("./dist/img/"));
});

/* ======================================================================================================
 * Tarea para crear imagenes webp
 * ======================================================================================================*/

gulp.task("exportWebP", () => {
  let src = "./src/img/**/*.{jpg,png,jpeg}";
  let dest = "./src/img/";
  let destDist = "./dist/img/";

  return gulp
    .src(src)
    .pipe(
      imagemin([
        webp({
          quality: 75,
        }),
      ])
    )
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest(dest))
    .pipe(gulp.dest(destDist));
});

/* ======================================================================================================
 * Tarea sobre los Scripts
 * ======================================================================================================*/
gulp.task("scripts", () => {
  return gulp
    .src(["./src/js/jquery-3.4.1.min.js", "./src/js/**/**.js"])

    .pipe(uglifyes())
    .pipe(concat("scripts.min.js"))
    .pipe(gulp.dest("./dist/js/"));
});

/* ======================================================================================================
 * Send Fonts and Images
 * ======================================================================================================*/
gulp.task("pastefiles", () => {
  gulp.src("./src/fonts/**/**.*").pipe(gulp.dest("./dist/fonts/"));

  gulp.src("./src/img/**/**.*").pipe(gulp.dest("./dist/img/"));
});

/* ======================================================================================================
 * Tarea por default
 * ======================================================================================================*/
gulp.task("watch", () => {
  gulp.watch("./src/scss/**/**.scss", gulp.parallel("sass"));
  gulp.watch("./src/css/**/**.css", gulp.parallel("minifyCSS"));
  gulp.watch("./src/js/**/**.js", gulp.parallel("scripts"));
  gulp.watch("./src/pug/**/*.pug", gulp.parallel("pug"));
  gulp.watch("./src/img/**/**.*", gulp.parallel("img"));
  gulp.watch("./src/fonts/*", gulp.parallel("pastefiles"));
});

/* ======================================================================================================
 * Browser Sync
 * ======================================================================================================*/
gulp.task("browser-sync", () => {
  browserSync.init({
    injectChanges: true,
    files: ["*.html", "./dist/**/*.{html,css,js}"],
    server: "./dist/",
  });

  gulp.watch("./src/pug/**/*.pug", gulp.parallel("pug"));
  gulp.watch("./src/scss/**/**.scss", gulp.parallel("sass"));
  gulp.watch("./src/css/**/**.css", gulp.parallel("minifyCSS"));
  gulp.watch("./src/js/**/**.js", gulp.parallel("scripts"));
  gulp.watch("./dist/");
  gulp.watch("./dist/").on("change", browserSync.reload);
});

/* ======================================================================================================
 * Default Task
 * ======================================================================================================*/

gulp.task(
  "default",
  gulp.parallel(
    "pug",
    "sass",
    "scripts",
    "minifyCSS",
    "img",
    "exportWebP",
    "pastefiles",
    "watch",
    "browser-sync"
  )
);
